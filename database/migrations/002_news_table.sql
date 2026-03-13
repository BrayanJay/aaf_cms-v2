-- =====================================================
-- News and Events Table Migration
-- Version: 1.0
-- Date: September 2025
-- Description: Creates news_articles table for AAF CMS
-- =====================================================

CREATE TABLE IF NOT EXISTS news_articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    content TEXT NOT NULL,
    summary VARCHAR(1000) NULL,
    author VARCHAR(255) NOT NULL,
    category ENUM('NEWS', 'EVENT', 'ANNOUNCEMENT', 'PRESS_RELEASE') NOT NULL DEFAULT 'NEWS',
    status ENUM('DRAFT', 'PUBLISHED', 'ARCHIVED') NOT NULL DEFAULT 'DRAFT',
    featured_image VARCHAR(500) NULL,
    tags JSON NULL,
    meta_title VARCHAR(255) NULL,
    meta_description VARCHAR(500) NULL,
    slug VARCHAR(500) NOT NULL UNIQUE,
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by INT NOT NULL,
    updated_by INT NULL,
    
    -- Indexes for better performance
    INDEX idx_news_status (status),
    INDEX idx_news_category (category),
    INDEX idx_news_published_at (published_at),
    INDEX idx_news_slug (slug),
    INDEX idx_news_created_by (created_by),
    
    -- Foreign key constraints
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample data
INSERT INTO news_articles (
    title, 
    content, 
    summary, 
    author, 
    category, 
    status, 
    slug, 
    published_at, 
    created_by
) VALUES 
(
    'Welcome to AAF News Portal',
    'We are excited to launch our new news and events portal. Stay tuned for the latest updates from Asia Asset Finance.',
    'Launch announcement for AAF news portal',
    'Admin User',
    'ANNOUNCEMENT',
    'PUBLISHED',
    'welcome-to-aaf-news-portal',
    NOW(),
    1
),
(
    'New Branch Opening in Colombo',
    'Asia Asset Finance is pleased to announce the opening of our new branch in Colombo. This expansion allows us to better serve our customers in the region.',
    'New branch opening announcement',
    'Admin User',
    'NEWS',
    'PUBLISHED',
    'new-branch-opening-colombo',
    NOW(),
    1
);
