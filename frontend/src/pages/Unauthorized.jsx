import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../hooks/useAuth.js';

const Unauthorized = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <FontAwesomeIcon 
            icon={['fas', 'lock']} 
            className="mx-auto h-16 w-16 text-red-500 dark:text-red-400 mb-4 transition-colors duration-300"
          />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Access Denied</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
            Sorry, you don&apos;t have permission to access this page.
          </p>
          
          {user && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-6 transition-colors duration-300">
              <p className="text-sm text-blue-800 dark:text-blue-200 transition-colors duration-300">
                <strong>Current Role:</strong> {user.role}
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-300 mt-1 transition-colors duration-300">
                Contact your administrator if you need additional permissions.
              </p>
            </div>
          )}

          <div className="space-y-3">
            <Link
              to="/"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300"
            >
              Go to Dashboard
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
