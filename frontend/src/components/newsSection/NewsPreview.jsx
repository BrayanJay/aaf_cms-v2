import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './editor.css';

const NewsPreview = ({ articleId, onClose }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/news`, {
          withCredentials: true,
          params: { status: 'ALL' }
        });

        const foundArticle = response.data.articles.find(a => a.id === parseInt(articleId));
        
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError('Article not found');
        }
      } catch (err) {
        console.error('Error fetching article:', err);
        setError(err.response?.data?.message || 'Failed to fetch article');
      } finally {
        setLoading(false);
      }
    };

    if (articleId) {
      fetchArticle();
    }
  }, [articleId]);

  const formatDate = (dateString) => {
    if (!dateString) return 'Not published';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status) => {
    const badgeClasses = {
      DRAFT: 'bg-gray-100 text-gray-800',
      PUBLISHED: 'bg-green-100 text-green-800',
      ARCHIVED: 'bg-red-100 text-red-800'
    };

    return (
      <span className={`px-3 py-1 text-sm font-medium rounded-full ${badgeClasses[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getCategoryBadge = (category) => {
    const badgeClasses = {
      NEWS: 'bg-blue-100 text-blue-800',
      EVENT: 'bg-purple-100 text-purple-800',
      ANNOUNCEMENT: 'bg-yellow-100 text-yellow-800',
      'PRESS RELEASE': 'bg-indigo-100 text-indigo-800',
      'BRANCH OPENNING': 'bg-green-100 text-green-800',
      ACHIEVEMENT: 'bg-orange-100 text-orange-800'
    };

    // Handle display text for categories
    const displayText = category === 'BRANCH OPENNING' ? 'BRANCH OPENING' : category;

    return (
      <span className={`px-3 py-1 text-sm font-medium rounded-full ${badgeClasses[category] || 'bg-gray-100 text-gray-800'}`}>
        {displayText}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center">Loading article...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <div className="text-center">
            <div className="text-red-600 mb-4">{error}</div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-full overflow-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Article Preview</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Article Content */}
        <div className="p-6">
          {article && (
            <article className="prose max-w-none">
              {/* Article Header */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {getCategoryBadge(article.category)}
                  {getStatusBadge(article.status)}
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>By {article.author}</span>
                  <span>•</span>
                  <span>{formatDate(article.published_at)}</span>
                  {article.created_at !== article.updated_at && (
                    <>
                      <span>•</span>
                      <span>Updated {formatDate(article.updated_at)}</span>
                    </>
                  )}
                </div>

                {article.summary && (
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2">Summary</h3>
                    <p className="text-gray-700">{article.summary}</p>
                  </div>
                )}

                {article.featured_image && (
                  <div className="mb-6">
                    <img
                      src={article.featured_image}
                      alt={article.title}
                      className="w-full h-64 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Article Content - Rendered as HTML */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Metadata */}
              {(article.meta_title || article.meta_description) && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">SEO Metadata</h3>
                  {article.meta_title && (
                    <div className="mb-2">
                      <span className="text-sm font-medium text-gray-600">Meta Title: </span>
                      <span className="text-sm text-gray-800">{article.meta_title}</span>
                    </div>
                  )}
                  {article.meta_description && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Meta Description: </span>
                      <span className="text-sm text-gray-800">{article.meta_description}</span>
                    </div>
                  )}
                </div>
              )}
            </article>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

NewsPreview.propTypes = {
  articleId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClose: PropTypes.func.isRequired
};

export default NewsPreview;
