# News and Articles System

## Overview
The News & Events page has been updated to display articles as cards instead of iframe embeds. Each article now has its own detailed page with full content and social sharing capabilities.

## Key Changes Made

### 1. NewsData.jsx Updates
- Replaced `newsIframes` array with `articlesData` array
- Each article now includes:
  - `id`: Unique identifier
  - `title`: Article title
  - `slug`: URL-friendly slug for routing
  - `summary`: Brief description for card display
  - `content`: Full HTML content for the detail page
  - `author`: Author name
  - `date`: Publication date (YYYY-MM-DD format)
  - `category`: Article category
  - `image`: Featured image path
  - `tags`: Array of tags (optional)
  - `socialLinks`: Social media sharing URLs (optional)

### 2. New ArticleDetails.jsx Component
- Dynamic article detail page component
- Accessible via `/news-and-events/article/{slug}`
- Features:
  - Full article content display
  - Social media sharing buttons (LinkedIn, Facebook, Twitter, WhatsApp)
  - Copy link functionality
  - Breadcrumb navigation
  - Tag display
  - Responsive design

### 3. NewsAndEvents.jsx Updates
- Removed iframe-based content display
- Added article card grid layout
- Added search and filter functionality
- Cards navigate to individual article detail pages
- Improved responsive design

### 4. New Route Added
- Route: `/news-and-events/article/:slug`
- Component: `ArticleDetails`
- Allows dynamic article access via slug

## How to Add New Articles

1. Open `src/contents/NewsData.jsx`
2. Add a new object to the `articlesData` array:

```javascript
{
  id: 4, // Use next available ID
  title: "Your Article Title",
  slug: "your-article-slug", // URL-friendly version
  summary: "Brief summary for the card display...",
  content: `
    <div class="article-content">
      <p>Your full article content in HTML format...</p>
      <h2>Section Headers</h2>
      <p>More content...</p>
      <ul>
        <li>List items</li>
        <li>More items</li>
      </ul>
    </div>
  `,
  author: "Author Name",
  date: "2024-09-01", // YYYY-MM-DD format
  category: "News Category",
  image: "/media/newsandevents/your-image.jpg",
  tags: ["Tag1", "Tag2"],
  socialLinks: {
    linkedin: "https://linkedin.com/company/yourcompany",
    facebook: "https://facebook.com/yourcompany",
    twitter: "https://twitter.com/yourcompany"
  }
}
```

## Social Media Sharing

Articles can now be shared on social media platforms. Instead of embedding social media posts, you can:

1. Add your article to the system
2. Share the article URL on your social media platforms
3. Users will see a professional article page with your content
4. Each article page includes social sharing buttons

## Image Management

- Add article images to `src/media/newsandevents/`
- Use descriptive filenames
- Recommended image size: 800x400px or similar 2:1 ratio
- Fallback image is automatically used if the specified image fails to load

## Features

- **Search**: Users can search articles by title, summary, or author
- **Filter**: Filter articles by category
- **Responsive Design**: Works on all screen sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **SEO Friendly**: Each article has its own URL for better search engine indexing
- **Social Sharing**: Built-in sharing functionality for all major platforms

## Technical Notes

- Articles use client-side routing for fast navigation
- Content is stored in JavaScript files for easy management
- HTML content is rendered safely using `dangerouslySetInnerHTML`
- CSS animations and transitions for smooth user experience
- Error handling for missing articles and broken images
