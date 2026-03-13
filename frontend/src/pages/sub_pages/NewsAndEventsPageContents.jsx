import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AddNews from '../../components/newsSection/AddNews.jsx';
import UpdateNews from '../../components/newsSection/UpdateNews.jsx';
import NewsPreview from '../../components/newsSection/NewsPreview.jsx';

const NewsAndEventsPageContents = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [previewingArticle, setPreviewingArticle] = useState(null);
  const [filters, setFilters] = useState({
    status: 'ALL',
    category: 'ALL'
  });

  const categories = [
    { value: 'ALL', label: 'All Categories' },
    { value: 'NEWS', label: 'News' },
    { value: 'EVENT', label: 'Event' },
    { value: 'ANNOUNCEMENT', label: 'Announcement' },
    { value: 'PRESS RELEASE', label: 'Press Release' },
    { value: 'BRANCH OPENNING', label: 'Branch Opening' },
    { value: 'ACHIEVEMENT', label: 'Achievement' }
  ];

  const statusOptions = [
    { value: 'ALL', label: 'All Status' },
    { value: 'DRAFT', label: 'Draft' },
    { value: 'PUBLISHED', label: 'Published' },
    { value: 'ARCHIVED', label: 'Archived' }
  ];

  // Fetch articles
  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      let url = `${import.meta.env.REACT_APP_API_URL}/news?limit=50`;

      // For admin interface, start with ALL status to show all articles
      const statusFilter = filters.status !== 'ALL' ? filters.status : 'ALL';
      url += `&status=${statusFilter}`;
      
      if (filters.category !== 'ALL') {
        url += `&category=${filters.category}`;
      }

      const response = await axios.get(url, { withCredentials: true });
      
      if (response.status === 200) {
        setArticles(response.data.articles);
      }
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError(err.response?.data?.message || 'Failed to fetch articles');
    } finally {
      setLoading(false);
    }
  }, [filters.status, filters.category]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleNewsAdded = (newArticle) => {
    setArticles(prev => [newArticle, ...prev]);
    setShowAddForm(false);
    fetchArticles(); // Refresh the list
  };

  const handleNewsUpdated = () => {
    setEditingArticle(null);
    fetchArticles(); // Refresh the list
  };

  const handleDelete = async (articleId, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      const response = await axios.delete(
        `${import.meta.env.REACT_APP_API_URL}/news/${articleId}`,
        { withCredentials: true }
      );

      if (response.status === 200) {
        setArticles(prev => prev.filter(article => article.id !== articleId));
      }
    } catch (err) {
      console.error('Error deleting article:', err);
      alert(err.response?.data?.message || 'Failed to delete article');
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
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
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${badgeClasses[status] || 'bg-gray-100 text-gray-800'}`}>
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
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${badgeClasses[category] || 'bg-gray-100 text-gray-800'}`}>
        {displayText}
      </span>
    );
  };

  if (showAddForm) {
    return (
      <AddNews
        onNewsAdded={handleNewsAdded}
        onCancel={() => setShowAddForm(false)}
      />
    );
  }

  if (editingArticle) {
    return (
      <UpdateNews
        articleId={editingArticle.id}
        onNewsUpdated={handleNewsUpdated}
        onCancel={() => setEditingArticle(null)}
      />
    );
  }

  if (previewingArticle) {
    return (
      <NewsPreview
        articleId={previewingArticle.id}
        onClose={() => setPreviewingArticle(null)}
      />
    );
  }

  return (
    <div className="p-6 pt-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">News & Events Management</h1>
          <p className="text-gray-600 mt-1">Manage articles, announcements and press releases</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          + Add Article
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {statusOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => setFilters({ status: 'ALL', category: 'ALL' })}
              className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="text-gray-500">Loading articles...</div>
        </div>
      ) : (
        <>
          {/* Articles List */}
          {articles.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <p className="text-gray-500 text-lg">No articles found</p>
              <p className="text-gray-400 mt-2">Create your first article to get started</p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Article
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Published
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {articles.map((article) => (
                      <tr key={article.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="max-w-xs">
                            <div className="text-sm font-medium text-gray-900 truncate">
                              {article.title}
                            </div>
                            {article.summary && (
                              <div className="text-sm text-gray-500 truncate mt-1">
                                {article.summary}
                              </div>
                            )}
                            {article.tags && article.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {article.tags.slice(0, 3).map((tag, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
                                {article.tags.length > 3 && (
                                  <span className="text-xs text-gray-400">
                                    +{article.tags.length - 3} more
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getCategoryBadge(article.category)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(article.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {article.author}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(article.published_at)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => setPreviewingArticle(article)}
                              className="text-green-600 hover:text-green-900"
                            >
                              Preview
                            </button>
                            <button
                              onClick={() => setEditingArticle(article)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(article.id, article.title)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Summary */}
          <div className="mt-4 text-sm text-gray-500 text-center">
            Showing {articles.length} articles
          </div>
        </>
      )}
    </div>
  );
};

export default NewsAndEventsPageContents;
