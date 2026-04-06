import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth.js';
import axios from 'axios';
import { Settings, Image, Upload } from 'lucide-react';
import UploadCard from './UploadCard';

const PopupToggle = () => {
  const [popupStatus, setPopupStatus] = useState('disabled');
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [lastUpdatedBy, setLastUpdatedBy] = useState('');
  const [lastUpdatedAt, setLastUpdatedAt] = useState('');
  const { user, hasPermission } = useAuth();

  const canModifyPopup = hasPermission('content', 'update') || hasPermission('system', 'update');

  const fetchPopupStatus = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/data/popup/status`,
        { withCredentials: true }
      );

      if (response.data.success) {
        setPopupStatus(response.data.data.status);
        setLastUpdatedBy(response.data.data.updated_by);
        setLastUpdatedAt(response.data.data.updated_at);
      }
    } catch (error) {
      console.error('Error fetching popup status:', error);
      setPopupStatus('disabled');
    } finally {
      setLoading(false);
    }
  };

  const updatePopupStatus = async (newStatus) => {
    if (!canModifyPopup) {
      alert('You do not have permission to modify popup settings.');
      return;
    }

    try {
      setUpdating(true);
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/data/popup/status`,
        { status: newStatus },
        { withCredentials: true }
      );

      if (response.data.success) {
        setPopupStatus(newStatus);
        setLastUpdatedBy(user?.username || 'Unknown');
        setLastUpdatedAt(new Date().toISOString());

        const statusText = newStatus === 'enabled' ? 'enabled' : 'disabled';
        alert(`Popup has been ${statusText} successfully!`);
      }
    } catch (error) {
      console.error('Error updating popup status:', error);
      if (error.response?.status === 403) {
        alert('You do not have permission to modify popup settings.');
      } else {
        alert('Failed to update popup status. Please try again.');
      }
    } finally {
      setUpdating(false);
    }
  };

  const handleToggle = () => {
    if (updating || !canModifyPopup) return;
    const newStatus = popupStatus === 'enabled' ? 'disabled' : 'enabled';
    updatePopupStatus(newStatus);
  };

  useEffect(() => {
    fetchPopupStatus();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    try {
      return new Date(dateString).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Unknown';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Popup Toggle Section */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Settings className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Popup Management</h2>
              <p className="text-sm text-gray-600">Control popup display and upload popup content</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Popup Display</h3>
                  <p className="text-sm text-gray-600">Control the website popup display</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  popupStatus === 'enabled'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {popupStatus === 'enabled' ? 'Enabled' : 'Disabled'}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    popupStatus === 'enabled' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className="font-medium text-gray-900">
                    Popup is currently {popupStatus}
                  </span>
                </div>

                <button
                  onClick={handleToggle}
                  disabled={updating || !canModifyPopup}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    popupStatus === 'enabled' ? 'bg-blue-600' : 'bg-gray-300'
                  } ${!canModifyPopup ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${
                    updating ? 'opacity-50 cursor-wait' : ''
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    popupStatus === 'enabled' ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {!canModifyPopup && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4">
                  <p className="text-sm text-yellow-700">
                    You don&apos;t have permission to modify popup settings. Contact an administrator for assistance.
                  </p>
                </div>
              )}

              <div className="text-xs text-gray-500 space-y-1">
                <div>Last updated by: <span className="font-medium">{lastUpdatedBy || 'Unknown'}</span></div>
                <div>Last updated: <span className="font-medium">{formatDate(lastUpdatedAt)}</span></div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={fetchPopupStatus}
                  disabled={loading || updating}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 focus:outline-none focus:underline disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Refreshing...' : 'Refresh Status'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Popup Media Section */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Image className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Popup Media</h2>
              <p className="text-sm text-gray-600">Upload and manage popup banner image</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="max-w-2xl">
            <UploadCard
              label="Popup Banner Image"
              uploadUrl={`${import.meta.env.VITE_API_BASE_URL}/uploads/images`}
              acceptedTypes="image/png,image/webp"
              maxSizeMB={1}
              customFileName="popup.webp"
              customDirectory="media/uploads"
              onUploadSuccess={(data) => console.log("Uploaded!", data)}
            />
          </div>

          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Upload className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-900 mb-1">Popup Image Guidelines</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Recommended resolution: 800x600 pixels or 4:3 aspect ratio</li>
                  <li>• Supported formats: PNG or WebP</li>
                  <li>• Maximum file size: 1MB</li>
                  <li>• Image will be displayed as a modal popup on the homepage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupToggle;
