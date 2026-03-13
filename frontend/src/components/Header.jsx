import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';
import { Clock, Shield, User } from 'lucide-react';
import aaf_logo from '../media/logo.webp';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Don't show header on login page
  if (location.pathname === '/login') {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg py-3 px-4 sm:px-6 lg:px-8 flex justify-between items-center z-30 border-b border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3 min-w-0">
        <div className="flex-shrink-0">
          <img 
            src={aaf_logo} 
            alt="AAF Logo"
            className="h-8 sm:h-10 w-auto drop-shadow-sm"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col">
            <h1 className="text-blue-900 dark:text-blue-100 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold truncate transition-colors duration-300">
              AAF Content Management
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-xs hidden sm:block truncate transition-colors duration-300">
              Corporate Website Administration
            </p>
          </div>
        </div>
      </div>

      {/* Right side container */}
      <div className="flex items-center space-x-3">
        {/* Theme Toggle - Always visible */}
        <ThemeToggle className="flex-shrink-0" />

        {/* User Info and Status - Only show when authenticated */}
        {isAuthenticated && (
          <>
            {/* Current Time - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/50 dark:border-blue-700/50 rounded-lg px-3 py-2 transition-colors duration-300">
              <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <div className="flex flex-col items-start text-xs">
                <span className="font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  {currentTime.toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300">
                  {currentTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
            </div>

            {/* User Status Badge */}
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200/50 dark:border-green-700/50 rounded-lg px-3 py-2 shadow-sm transition-colors duration-300">
              <div className="relative">
                <User className="w-4 h-4 text-green-700 dark:text-green-400 transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 dark:bg-green-400 rounded-full animate-pulse shadow-sm"></div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-xs font-semibold text-green-800 dark:text-green-200 transition-colors duration-300">
                  {user?.username || 'User'}
                </div>
                <div className="text-xs text-green-600 dark:text-green-400 capitalize hidden lg:block transition-colors duration-300">
                  {user?.role || 'N/A'}
                </div>
              </div>
            </div>

            {/* Security Indicator */}
            <div className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-lg px-3 py-2 shadow-sm transition-colors duration-300">
              <Shield className="w-4 h-4 text-gray-600 dark:text-gray-400 transition-colors duration-300" />
              <div className="flex flex-col items-start">
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">Secure</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">Session</span>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;