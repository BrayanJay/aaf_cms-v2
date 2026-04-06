import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

/**
 * Generate sitemap.xml for SEO
 * This script generates a sitemap with all static and dynamic routes
 * 
 * Note: Manually update articleSlugs when adding new articles
 * Or integrate with your CMS/database
 */

const baseUrl = 'https://www.asiaassetfinance.com';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Static pages with their priority and change frequency
const staticPages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/news-and-events', changefreq: 'weekly', priority: '0.9' },
  { url: '/investor-relations', changefreq: 'monthly', priority: '0.8' },
  { url: '/career-portal', changefreq: 'weekly', priority: '0.7' },
  { url: '/contact', changefreq: 'monthly', priority: '0.7' },
  { url: '/downloads', changefreq: 'monthly', priority: '0.6' },
  { url: '/promotions', changefreq: 'weekly', priority: '0.7' },
];

// Article data - manually maintained or fetched from your data source
// Update this array when adding new articles
const articles = [
  { slug: 'asia-asset-finance-2025-q1-growth', date: '2025-08-27' },
  { slug: 'asia-asset-finance-55th-and-northern-province-15th-anniversary', date: '2025-09-17' },
  { slug: 'creating-smiles-hope-asia-asset-finance-childrens-day-apeksha-cancer-hospital-2025', date: '2025-10-01' },
  { slug: 'asia-asset-finance-champions-women-empowerment-with-breast-cancer-awareness-for-tea-estate-workers-ginigathhena-2025', date: '2025-10-13' },
  { slug: 'asia-asset-finance-plc-clinches-four-awards-national-project-management-excellence-awards-2025', date: '2025-10-29' },
  { slug: 'asia-asset-finance-continues-shine-rapid-growth-business-pbt-exceeding-lkr-980mn-yoy-2025', date: '2025-11-11' },
  { slug: 'growth-with-purpose-conversation-roshan-gunasekara-executive-director-chief-operating-officer-2026', date: '2026-01-05' },
  { slug: 'asia-asset-finance-plc-delivers-strong-q3-performance-2025', date: '2026-02-11' },
];

// Generate article URLs from article data
const articlePages = articles.map(article => ({
  url: `/news-and-events/article/${article.slug}`,
  changefreq: 'monthly',
  priority: '0.8',
  lastmod: article.date,
}));

// Combine all pages
const allPages = [...staticPages, ...articlePages];

// Generate XML sitemap
const generateSitemap = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allPages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return xml;
};

// Write sitemap to public directory
const sitemap = generateSitemap();
const sitemapPath = join(__dirname, '..', 'public', 'sitemap.xml');
writeFileSync(sitemapPath, sitemap);

console.log('✅ Sitemap generated successfully!');
console.log(`📄 Total URLs: ${allPages.length}`);
console.log(`   - Static pages: ${staticPages.length}`);
console.log(`   - Article pages: ${articlePages.length}`);
console.log(`📍 Location: ./public/sitemap.xml`);
console.log('\n💡 Tip: Update the articles array in scripts/generate-sitemap.js when adding new blog posts!');

