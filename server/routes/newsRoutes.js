import express from 'express'
import { connectToDatabase } from '../lib/db.js'
import verifySessionToken from '../middleware/authToken.js'
import { dbLogger } from '../middleware/loggingMiddleware.js'
import 'dotenv/config'

const router = express.Router()

// Helper function to generate slug from title
const generateSlug = (title) => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens and spaces
        .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

// Helper function to validate news category
const VALID_CATEGORIES = ['NEWS', 'EVENT', 'ANNOUNCEMENT', 'PRESS RELEASE', 'BRANCH OPENNING', 'ACHIEVEMENT']
const VALID_STATUSES = ['DRAFT', 'PUBLISHED', 'ARCHIVED']

// GET all news with optional filtering and pagination
router.get('/all', async (req, res) => {
    let db;
    try {
        db = await connectToDatabase()
        
        const {
            page = 1,
            limit = 10,
            category,
            status,
            search,
            sortBy = 'created_at',
            sortOrder = 'DESC'
        } = req.query

        const offset = (page - 1) * limit
        
        let whereConditions = []
        let queryParams = []
        
        // Add filtering conditions
        if (category && VALID_CATEGORIES.includes(category.toUpperCase())) {
            whereConditions.push('category = ?')
            queryParams.push(category.toUpperCase())
        }
        
        if (status && VALID_STATUSES.includes(status.toUpperCase())) {
            whereConditions.push('status = ?')
            queryParams.push(status.toUpperCase())
        }
        
        if (search) {
            whereConditions.push('(title LIKE ? OR summary LIKE ? OR content LIKE ? OR author LIKE ?)')
            const searchTerm = `%${search}%`
            queryParams.push(searchTerm, searchTerm, searchTerm, searchTerm)
        }
        
        const whereClause = whereConditions.length > 0 ? `WHERE ${whereConditions.join(' AND ')}` : ''
        
        // Validate sort parameters
        const validSortFields = ['id', 'title', 'author', 'category', 'status', 'published_at', 'created_at', 'updated_at']
        const sortField = validSortFields.includes(sortBy) ? sortBy : 'created_at'
        const sortDirection = sortOrder.toUpperCase() === 'ASC' ? 'ASC' : 'DESC'
        
        // Get total count for pagination
        const countQuery = `
            SELECT COUNT(*) as total 
            FROM news n
            LEFT JOIN users u ON n.created_by = u.id
            ${whereClause}
        `
        const [countResult] = await db.query(countQuery, queryParams)
        const total = countResult[0].total
        
        // Get news data with user information
        const newsQuery = `
            SELECT 
                n.*,
                u.username as created_by_username,
                up.username as updated_by_username
            FROM news n
            LEFT JOIN users u ON n.created_by = u.id
            LEFT JOIN users up ON n.updated_by = up.id
            ${whereClause}
            ORDER BY ${sortField} ${sortDirection}
            LIMIT ? OFFSET ?
        `
        
        queryParams.push(parseInt(limit), parseInt(offset))
        const [news] = await db.query(newsQuery, queryParams)
        
        // Process tags (now stored as LONGTEXT)
        const processedNews = news.map(item => ({
            ...item,
            tags: item.tags || ''
        }))
        
        res.json({
            news: processedNews,
            pagination: {
                currentPage: parseInt(page),
                totalPages: Math.ceil(total / limit),
                totalItems: total,
                itemsPerPage: parseInt(limit)
            }
        })
        
    } catch (error) {
        console.error('Error fetching news:', error.message)
        res.status(500).json({ message: 'Internal Server Error' })
    } finally {
        if (db) await db.release()
    }
})

// GET published news only (public endpoint)
router.get('/published', async (req, res) => {
    let db;
    try {
        db = await connectToDatabase()
        
        const {
            page = 1,
            limit = 10,
            category,
            featured = false
        } = req.query

        const offset = (page - 1) * limit
        
        let whereConditions = ['status = "PUBLISHED"', 'published_at IS NOT NULL', 'published_at <= NOW()']
        let queryParams = []
        
        if (category && VALID_CATEGORIES.includes(category.toUpperCase())) {
            whereConditions.push('category = ?')
            queryParams.push(category.toUpperCase())
        }
        
        if (featured === 'true') {
            whereConditions.push('featured_image IS NOT NULL')
        }
        
        const whereClause = `WHERE ${whereConditions.join(' AND ')}`
        
        // Get total count
        const countQuery = `SELECT COUNT(*) as total FROM news ${whereClause}`
        const [countResult] = await db.query(countQuery, queryParams)
        const total = countResult[0].total
        
        // Get published news
        const newsQuery = `
            SELECT 
                id, title, slug, summary, author, category, 
                featured_image, tags, meta_title, meta_description,
                published_at, created_at
            FROM news
            ${whereClause}
            ORDER BY published_at DESC
            LIMIT ? OFFSET ?
        `
        
        queryParams.push(parseInt(limit), parseInt(offset))
        const [news] = await db.query(newsQuery, queryParams)
        
        // Process tags (now stored as LONGTEXT)
        const processedNews = news.map(item => ({
            ...item,
            tags: item.tags || ''
        }))
        
        res.json({
            news: processedNews,
            pagination: {
                currentPage: parseInt(page),
                totalPages: Math.ceil(total / limit),
                totalItems: total,
                itemsPerPage: parseInt(limit)
            }
        })
        
    } catch (error) {
        console.error('Error fetching published news:', error.message)
        res.status(500).json({ message: 'Internal Server Error' })
    } finally {
        if (db) await db.release()
    }
})

// GET single news by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params
    
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid news ID' })
    }
    
    let db;
    try {
        db = await connectToDatabase()
        
        const [news] = await db.query(`
            SELECT 
                n.*,
                u.username as created_by_username,
                up.username as updated_by_username
            FROM news n
            LEFT JOIN users u ON n.created_by = u.id
            LEFT JOIN users up ON n.updated_by = up.id
            WHERE n.id = ?
        `, [id])
        
        if (news.length === 0) {
            return res.status(404).json({ message: 'News not found' })
        }
        
        // Process tags (now stored as LONGTEXT)
        const newsItem = {
            ...news[0],
            tags: news[0].tags || ''
        }
        
        res.json(newsItem)
        
    } catch (error) {
        console.error('Error fetching news by ID:', error.message)
        res.status(500).json({ message: 'Internal Server Error' })
    } finally {
        if (db) await db.release()
    }
})

// GET single news by slug (public endpoint)
router.get('/slug/:slug', async (req, res) => {
    const { slug } = req.params
    
    if (!slug) {
        return res.status(400).json({ message: 'Slug is required' })
    }
    
    let db;
    try {
        db = await connectToDatabase()
        
        const [news] = await db.query(`
            SELECT 
                id, title, slug, summary, content, author, category,
                featured_image, tags, meta_title, meta_description,
                published_at, created_at, updated_at
            FROM news
            WHERE slug = ? AND status = 'PUBLISHED'
        `, [slug])
        
        if (news.length === 0) {
            return res.status(404).json({ message: 'News not found' })
        }
        
        // Process tags (now stored as LONGTEXT)
        const newsItem = {
            ...news[0],
            tags: news[0].tags || ''
        }
        
        res.json(newsItem)
        
    } catch (error) {
        console.error('Error fetching news by slug:', error.message)
        res.status(500).json({ message: 'Internal Server Error' })
    } finally {
        if (db) await db.release()
    }
})

// CREATE new news
router.post('/create', verifySessionToken, async (req, res) => {
    const {
        title,
        slug: customSlug,
        summary,
        content,
        author,
        category = 'NEWS',
        status = 'DRAFT',
        featured_image,
        tags,
        meta_title,
        meta_description,
        published_at
    } = req.body
    
    // Validation
    if (!title || !content || !author) {
        return res.status(400).json({ 
            message: 'Title, content, and author are required' 
        })
    }
    
    if (!VALID_CATEGORIES.includes(category.toUpperCase())) {
        return res.status(400).json({ 
            message: 'Invalid category',
            validCategories: VALID_CATEGORIES
        })
    }
    
    if (!VALID_STATUSES.includes(status.toUpperCase())) {
        return res.status(400).json({ 
            message: 'Invalid status',
            validStatuses: VALID_STATUSES
        })
    }
    
    let db;
    try {
        db = await connectToDatabase()
        
        // Generate or validate slug
        const slug = customSlug || generateSlug(title)
        
        // Check if slug already exists
        const [existingSlug] = await db.query('SELECT id FROM news WHERE slug = ?', [slug])
        if (existingSlug.length > 0) {
            return res.status(409).json({ message: 'Slug already exists' })
        }
        
        // Process tags (now stored as LONGTEXT)
        const tagsText = tags || null
        
        // Set published_at if status is PUBLISHED and no published_at provided
        let publishedAt = published_at
        if (status.toUpperCase() === 'PUBLISHED' && !published_at) {
            publishedAt = new Date().toISOString()
        }
        
        const [result] = await db.query(`
            INSERT INTO news (
                title, slug, summary, content, author, category, status,
                featured_image, tags, meta_title, meta_description,
                published_at, created_by
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            title, slug, summary, content, author, category.toUpperCase(),
            status.toUpperCase(), featured_image, tagsText, meta_title,
            meta_description, publishedAt, req.userId
        ])
        
        await dbLogger.success('INSERT', 'news', null, req.session.username, {
            action: 'news_creation',
            newsId: result.insertId,
            title: title,
            status: status.toUpperCase()
        })
        
        res.status(201).json({
            message: 'News created successfully',
            news: {
                id: result.insertId,
                title,
                slug,
                status: status.toUpperCase()
            }
        })
        
    } catch (error) {
        console.error('Error creating news:', error.message)
        res.status(500).json({ message: 'Internal Server Error' })
    } finally {
        if (db) await db.release()
    }
})

// UPDATE news
router.put('/update/:id', verifySessionToken, async (req, res) => {
    const { id } = req.params
    const {
        title,
        slug: customSlug,
        summary,
        content,
        author,
        category,
        status,
        featured_image,
        tags,
        meta_title,
        meta_description,
        published_at
    } = req.body
    
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid news ID' })
    }
    
    let db;
    try {
        db = await connectToDatabase()
        
        // Check if news exists
        const [existingNews] = await db.query('SELECT * FROM news WHERE id = ?', [id])
        if (existingNews.length === 0) {
            return res.status(404).json({ message: 'News not found' })
        }
        
        const currentNews = existingNews[0]
        
        // Validate category if provided
        if (category && !VALID_CATEGORIES.includes(category.toUpperCase())) {
            return res.status(400).json({ 
                message: 'Invalid category',
                validCategories: VALID_CATEGORIES
            })
        }
        
        // Validate status if provided
        if (status && !VALID_STATUSES.includes(status.toUpperCase())) {
            return res.status(400).json({ 
                message: 'Invalid status',
                validStatuses: VALID_STATUSES
            })
        }
        
        // Handle slug update
        let finalSlug = currentNews.slug
        if (title && title !== currentNews.title) {
            finalSlug = customSlug || generateSlug(title)
            
            // Check if new slug already exists (excluding current news)
            const [existingSlug] = await db.query('SELECT id FROM news WHERE slug = ? AND id != ?', [finalSlug, id])
            if (existingSlug.length > 0) {
                return res.status(409).json({ message: 'Slug already exists' })
            }
        }
        
        // Process tags (now stored as LONGTEXT)
        let tagsText = currentNews.tags
        if (tags !== undefined) {
            tagsText = tags || null
        }
        
        // Handle published_at when status changes to PUBLISHED
        let publishedAt = published_at !== undefined ? published_at : currentNews.published_at
        if (status && status.toUpperCase() === 'PUBLISHED' && !currentNews.published_at && !published_at) {
            publishedAt = new Date().toISOString()
        }
        
        // Build update query dynamically
        const updateFields = []
        const updateValues = []
        
        if (title !== undefined) {
            updateFields.push('title = ?')
            updateValues.push(title)
        }
        if (finalSlug !== currentNews.slug) {
            updateFields.push('slug = ?')
            updateValues.push(finalSlug)
        }
        if (summary !== undefined) {
            updateFields.push('summary = ?')
            updateValues.push(summary)
        }
        if (content !== undefined) {
            updateFields.push('content = ?')
            updateValues.push(content)
        }
        if (author !== undefined) {
            updateFields.push('author = ?')
            updateValues.push(author)
        }
        if (category !== undefined) {
            updateFields.push('category = ?')
            updateValues.push(category.toUpperCase())
        }
        if (status !== undefined) {
            updateFields.push('status = ?')
            updateValues.push(status.toUpperCase())
        }
        if (featured_image !== undefined) {
            updateFields.push('featured_image = ?')
            updateValues.push(featured_image)
        }
        if (tags !== undefined) {
            updateFields.push('tags = ?')
            updateValues.push(tagsText)
        }
        if (meta_title !== undefined) {
            updateFields.push('meta_title = ?')
            updateValues.push(meta_title)
        }
        if (meta_description !== undefined) {
            updateFields.push('meta_description = ?')
            updateValues.push(meta_description)
        }
        if (publishedAt !== currentNews.published_at) {
            updateFields.push('published_at = ?')
            updateValues.push(publishedAt)
        }
        
        // Always update updated_by
        updateFields.push('updated_by = ?')
        updateValues.push(req.userId)
        
        if (updateFields.length === 1) { // Only updated_by field
            return res.status(400).json({ message: 'No fields to update' })
        }
        
        updateValues.push(id) // for WHERE clause
        
        const updateQuery = `
            UPDATE news 
            SET ${updateFields.join(', ')}, updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `
        
        await db.query(updateQuery, updateValues)
        
        await dbLogger.success('UPDATE', 'news', id, req.session.username, {
            action: 'news_update',
            newsId: id,
            updatedFields: updateFields.filter(field => !field.includes('updated_by'))
        })
        
        res.json({
            message: 'News updated successfully',
            news: { id: parseInt(id) }
        })
        
    } catch (error) {
        console.error('Error updating news:', error.message)
        res.status(500).json({ message: 'Internal Server Error' })
    } finally {
        if (db) await db.release()
    }
})

// PUBLISH news (shortcut for updating status to PUBLISHED)
router.patch('/publish/:id', verifySessionToken, async (req, res) => {
    const { id } = req.params
    const { published_at } = req.body
    
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid news ID' })
    }
    
    let db;
    try {
        db = await connectToDatabase()
        
        // Check if news exists
        const [existingNews] = await db.query('SELECT id, status, published_at FROM news WHERE id = ?', [id])
        if (existingNews.length === 0) {
            return res.status(404).json({ message: 'News not found' })
        }
        
        const publishedAtValue = published_at || new Date().toISOString()
        
        await db.query(`
            UPDATE news 
            SET status = 'PUBLISHED', published_at = ?, updated_by = ?, updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `, [publishedAtValue, req.userId, id])
        
        await dbLogger.success('UPDATE', 'news', id, req.session.username, {
            action: 'news_publish',
            newsId: id
        })
        
        res.json({ message: 'News published successfully' })
        
    } catch (error) {
        console.error('Error publishing news:', error.message)
        res.status(500).json({ message: 'Internal Server Error' })
    } finally {
        if (db) await db.release()
    }
})

// ARCHIVE news
router.patch('/archive/:id', verifySessionToken, async (req, res) => {
    const { id } = req.params
    
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid news ID' })
    }
    
    let db;
    try {
        db = await connectToDatabase()
        
        // Check if news exists
        const [existingNews] = await db.query('SELECT id FROM news WHERE id = ?', [id])
        if (existingNews.length === 0) {
            return res.status(404).json({ message: 'News not found' })
        }
        
        await db.query(`
            UPDATE news 
            SET status = 'ARCHIVED', updated_by = ?, updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `, [req.userId, id])
        
        await dbLogger.success('UPDATE', 'news', id, req.session.username, {
            action: 'news_archive',
            newsId: id
        })
        
        res.json({ message: 'News archived successfully' })
        
    } catch (error) {
        console.error('Error archiving news:', error.message)
        res.status(500).json({ message: 'Internal Server Error' })
    } finally {
        if (db) await db.release()
    }
})

// DELETE news
router.delete('/delete/:id', verifySessionToken, async (req, res) => {
    const { id } = req.params
    
    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Invalid news ID' })
    }
    
    let db;
    try {
        db = await connectToDatabase()
        
        // Check if news exists and get details for logging
        const [existingNews] = await db.query('SELECT id, title FROM news WHERE id = ?', [id])
        if (existingNews.length === 0) {
            return res.status(404).json({ message: 'News not found' })
        }
        
        await db.query('DELETE FROM news WHERE id = ?', [id])
        
        await dbLogger.success('DELETE', 'news', id, req.session.username, {
            action: 'news_deletion',
            newsId: id,
            title: existingNews[0].title
        })
        
        res.json({ message: 'News deleted successfully' })
        
    } catch (error) {
        console.error('Error deleting news:', error.message)
        res.status(500).json({ message: 'Internal Server Error' })
    } finally {
        if (db) await db.release()
    }
})

// GET news categories with counts
router.get('/stats/categories', async (req, res) => {
    let db;
    try {
        db = await connectToDatabase()
        
        const [categories] = await db.query(`
            SELECT 
                category,
                COUNT(*) as total,
                SUM(CASE WHEN status = 'PUBLISHED' THEN 1 ELSE 0 END) as published,
                SUM(CASE WHEN status = 'DRAFT' THEN 1 ELSE 0 END) as draft,
                SUM(CASE WHEN status = 'ARCHIVED' THEN 1 ELSE 0 END) as archived
            FROM news
            GROUP BY category
            ORDER BY category
        `)
        
        res.json(categories)
        
    } catch (error) {
        console.error('Error fetching category stats:', error.message)
        res.status(500).json({ message: 'Internal Server Error' })
    } finally {
        if (db) await db.release()
    }
})

export default router
