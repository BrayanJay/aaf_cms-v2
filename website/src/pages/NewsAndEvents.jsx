import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { articlesData } from '../contents/NewsData';
import '../styles/NewsAndEvents.css';
import { Helmet } from 'react-helmet';
import StructuredData from '../components/StructuredData';

const NewsAndEvents = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const newsData = t("newsAndEvents", { returnObjects: true });
  
  
  // State for filtering and search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter articles based on search and category
  const filteredArticles = articlesData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));


  // Navigate to article detail page
  const handleArticleClick = (article) => {
    navigate(`/news-and-events/article/${article.slug}`);
  };

  // Image slider component
  const ImageSlider = ({ images, alt }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (e, index) => {
      e.stopPropagation();
      setCurrentImageIndex(index);
    };

    return (
      <div className="relative overflow-hidden h-48">
        <img 
          src={images[currentImageIndex]} 
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Navigation arrows - only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToImage(e, index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100">
      <Helmet>
        <title>{newsData.pageTitle || 'News & Events'} - Asia Asset Finance</title>
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://asiaassetfinance.com/news-and-events" />
        
        {/* Meta Description */}
        <meta name="description" content={newsData.heroDescription || 'Stay updated with the latest news, events, and announcements from Asia Asset Finance.'} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asiaassetfinance.com/news-and-events" />
        <meta property="og:title" content={`${newsData.pageTitle || 'News & Events'} - Asia Asset Finance`} />
        <meta property="og:description" content={newsData.heroDescription || 'Stay updated with the latest news, events, and announcements from Asia Asset Finance.'} />
        <meta property="og:image" content="https://asiaassetfinance.com/media/logos/AAF_Logo.png" />
        <meta property="og:site_name" content="Asia Asset Finance" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://asiaassetfinance.com/news-and-events" />
        <meta name="twitter:title" content={`${newsData.pageTitle || 'News & Events'} - Asia Asset Finance`} />
        <meta name="twitter:description" content={newsData.heroDescription || 'Stay updated with the latest news, events, and announcements from Asia Asset Finance.'} />
        <meta name="twitter:image" content="https://asiaassetfinance.com/media/logos/AAF_Logo.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      {/* Structured Data - Organization & Website */}
      <StructuredData type="organization" data={{}} />
      <StructuredData type="website" data={{}} />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative px-4 md:px-16 lg:px-32 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              {newsData.pageTitle}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {newsData.heroDescription}
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
      </div>

      <div className="px-4 md:px-16 lg:px-32 py-12">

        {/* Articles Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{newsData.articlesTitle}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">{newsData.articlesDescription}</p>
          </div>
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {filteredArticles.map((article) => (
              
              <article 
                key={article.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform hover:-translate-y-1 group"
                onClick={() => handleArticleClick(article)}
              >
                {/* Article Image Slider */}
                <ImageSlider images={article.images} alt={article.title} />
                
                {/* Article Content */}
                <div className="p-6">
                  {/* Article Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.summary}</p>
                  </div>
                  
                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  {/* Read More Button */}
                  <div className="flex items-center justify-between">
                    <div className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors duration-300 flex items-center">
                      <span>Read More</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    
                    {/* Tags Preview */}
                    {article.tags && article.tags.length > 0 && (
                      <div className="flex">
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {article.tags[0]}
                        </span>
                        {article.tags.length > 1 && (
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full ml-1">
                            +{article.tags.length - 1}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Message when no articles found */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or check back later for new content.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default NewsAndEvents;
