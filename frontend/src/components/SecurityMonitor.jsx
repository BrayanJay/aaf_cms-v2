import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSessionSecurity } from '../hooks/useSessionSecurity.js';
import PropTypes from 'prop-types';

const SecurityMonitor = () => {
  const { 
    sessionWarning, 
    securityAlerts, 
    extendSession, 
    timeUntilExpiry 
  } = useSessionSecurity();

  const [dismissed, setDismissed] = useState(false);

  // Don't show if user dismissed the warning
  if (dismissed) return null;

  // Format time remaining
  const formatTimeRemaining = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Session Warning Modal */}
      {sessionWarning && (
        <div className="fixed inset-0 bg-black dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-75 flex items-center justify-center z-50 p-4 transition-colors duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <FontAwesomeIcon 
                  icon={['fas', 'clock']} 
                  className="text-yellow-500 dark:text-yellow-400 text-2xl" 
                />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300">
                  Session Expiring Soon
                </h3>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Your session will expire in{' '}
                <span className="font-semibold text-red-600 dark:text-red-400">
                  {formatTimeRemaining(timeUntilExpiry)}
                </span>
                . Would you like to extend your session?
              </p>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={extendSession}
                className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Extend Session
              </button>
              <button
                onClick={() => setDismissed(true)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md transition-colors duration-300"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Alerts */}
      <div className="fixed top-20 right-4 z-40 space-y-2">
        {securityAlerts.map(alert => (
          <SecurityAlert
            key={alert.id}
            alert={alert}
          />
        ))}
      </div>
    </>
  );
};

const SecurityAlert = ({ alert }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const getAlertStyles = (type) => {
    switch (type) {
      case 'error':
        return 'bg-red-100 dark:bg-red-900/30 border-red-500 dark:border-red-600 text-red-700 dark:text-red-300';
      case 'warning':
        return 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-500 dark:border-yellow-600 text-yellow-700 dark:text-yellow-300';
      case 'info':
        return 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 dark:border-blue-600 text-blue-700 dark:text-blue-300';
      default:
        return 'bg-gray-100 dark:bg-gray-700 border-gray-500 dark:border-gray-600 text-gray-700 dark:text-gray-300';
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'error':
        return 'exclamation-triangle';
      case 'warning':
        return 'exclamation-circle';
      case 'info':
        return 'info-circle';
      default:
        return 'bell';
    }
  };

  return (
    <div className={`
      ${getAlertStyles(alert.type)}
      border-l-4 p-4 rounded-md shadow-md max-w-sm
      transform transition-all duration-300 ease-in-out
    `}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <FontAwesomeIcon 
            icon={['fas', getIcon(alert.type)]} 
            className="mt-0.5" 
          />
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium">
            Security Alert
          </p>
          <p className="text-sm mt-1">
            {alert.message}
          </p>
          <p className="text-xs mt-1 opacity-75">
            {alert.timestamp.toLocaleTimeString()}
          </p>
        </div>
        <div className="ml-3">
          <button
            onClick={() => setVisible(false)}
            className="text-current opacity-50 hover:opacity-75 transition-opacity duration-300"
            aria-label="Dismiss alert"
          >
            <FontAwesomeIcon icon={['fas', 'times']} />
          </button>
        </div>
      </div>
    </div>
  );
};

SecurityAlert.propTypes = {
  alert: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    timestamp: PropTypes.instanceOf(Date).isRequired
  }).isRequired
};

export default SecurityMonitor;
