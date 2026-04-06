import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Asia Asset Finance</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-bold text-blue-600 mb-4">404</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Icon */}
          <div className="mb-8">
            <FontAwesomeIcon 
              icon={['fas', 'search']} 
              className="text-4xl md:text-6xl text-gray-400"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-semibold py-1.5 px-4 md:py-3 md:px-8 rounded-lg transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              <FontAwesomeIcon icon={['fas', 'home']} className="mr-2" />
              Go Back Home
            </Link>
            
            <div className="flex justify-center space-x-4 mt-6">
              <Link
                to="/about"
                className="text-blue-600 hover:text-blue-800 text-sm md:text-base font-medium transition-colors duration-300"
              >
                About Us
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                to="/contacts"
                className="text-blue-600 hover:text-blue-800 text-sm md:text-base font-medium transition-colors duration-300"
              >
                Contact Us
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                to="/careers"
                className="text-blue-600 hover:text-blue-800 text-sm md:text-base font-medium transition-colors duration-300"
              >
                Careers
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default NotFound;
