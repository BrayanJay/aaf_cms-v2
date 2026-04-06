import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

/**
 * StructuredData Component
 * Adds JSON-LD structured data for SEO
 * Helps search engines understand content better
 */
const StructuredData = ({ type, data }) => {
  let structuredData = {};

  switch (type) {
    case 'article':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.summary,
        image: data.images.map(img => `https://asiaassetfinance.com${img}`),
        datePublished: data.date,
        dateModified: data.date,
        author: {
          '@type': 'Organization',
          name: data.author || 'Asia Asset Finance PLC',
          url: 'https://asiaassetfinance.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Asia Asset Finance PLC',
          logo: {
            '@type': 'ImageObject',
            url: 'https://asiaassetfinance.com/media/logos/AAF_Logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://asiaassetfinance.com/news-and-events/article/${data.slug}`,
        },
        keywords: data.tags?.join(', '),
        articleSection: data.category,
      };
      break;

    case 'breadcrumb':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };
      break;

    case 'organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Asia Asset Finance PLC',
        url: 'https://asiaassetfinance.com',
        logo: 'https://asiaassetfinance.com/media/logos/AAF_Logo.png',
        sameAs: [
          'https://www.facebook.com/AsiaAssetFinancePLC/',
          'https://www.linkedin.com/company/asia-asset-finance/',
          'https://twitter.com/asiaassetfinance',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+94-11-1369',
          contactType: 'customer service',
        },
      };
      break;

    case 'website':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Asia Asset Finance',
        url: 'https://asiaassetfinance.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://asiaassetfinance.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      };
      break;

    default:
      return null;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

StructuredData.propTypes = {
  type: PropTypes.oneOf(['article', 'breadcrumb', 'organization', 'website']).isRequired,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default StructuredData;
