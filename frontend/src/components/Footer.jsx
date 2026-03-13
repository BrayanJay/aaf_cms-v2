import { useLocation } from 'react-router-dom';
import { Shield, Code, Calendar } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  // Don't show footer on login page
  if (location.pathname === '/login') {
    return null;
  }

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800 border-t border-gray-200/50 dark:border-gray-700/50 mt-auto shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-1">
              <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                © {new Date().getFullYear()} Asia Asset Finance PLC
              </span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
              Content Management System • All Rights Reserved
            </span>
          </div>

          {/* Security and System Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 border border-green-200/50 dark:border-green-700/50 rounded-lg px-3 py-1 transition-colors duration-300">
              <Shield className="w-3 h-3 text-green-600 dark:text-green-400 transition-colors duration-300" />
              <span className="text-xs font-medium text-green-700 dark:text-green-300 transition-colors duration-300">SSL Secured</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-700/50 rounded-lg px-3 py-1 transition-colors duration-300">
              <Code className="w-3 h-3 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
              <span className="text-xs font-medium text-blue-700 dark:text-blue-300 transition-colors duration-300">CMS v2.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
