import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = process.env.BASE_URL || 'https://asiaassetfinance.com';

// Escape special characters for use in HTML attributes and text
const escapeHtml = (str) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const generateHtml = (article) => {
  const title       = escapeHtml(article.title);
  const description = escapeHtml(article.description);
  const imageUrl    = `${BASE_URL}/media/newsandevents/${article.image}`;
  const pageUrl     = `${BASE_URL}/news-and-events/article/${article.slug}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Asia Asset Finance</title>
  <meta name="description" content="${description}" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Asia Asset Finance PLC" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:url" content="${pageUrl}" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${imageUrl}" />

  <!-- Redirect real users to the React app -->
  <meta http-equiv="refresh" content="0;url=${pageUrl}" />
  <script>window.location.replace("${pageUrl}");</script>
</head>
<body>
  <p>${title}</p>
</body>
</html>`;
};

const metaJsonPath = join(__dirname, '..', 'public', 'articles-meta.json');
const { articles } = JSON.parse(readFileSync(metaJsonPath, 'utf8'));

const outDir = join(__dirname, '..', 'public', 'meta');
mkdirSync(outDir, { recursive: true });

articles.forEach((article) => {
  const html = generateHtml(article);
  writeFileSync(join(outDir, `${article.slug}.html`), html, 'utf8');
  console.log(`  ✅ meta/${article.slug}.html`);
});

console.log(`\n📄 Generated ${articles.length} OG meta files from articles-meta.json`);
console.log('💡 To add a new article: update public/articles-meta.json then re-run the build.\n');
