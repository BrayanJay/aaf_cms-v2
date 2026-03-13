import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth.js';

const UserManagement = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    role: 'viewer'
  });

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users`, {
        credentials: 'include'
      });
      
      if (response.ok) {
        const data = await response.json();
        setUsers(data.data);
      } else {
        setError('Failed to fetch users');
      }
    } catch {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setShowCreateForm(false);
        setNewUser({ username: '', password: '', role: 'viewer' });
        fetchUsers();
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch {
      setError('Failed to create user');
    }
  };

  const updateUserRole = async (userId, newRole) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${userId}/role`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ role: newRole }),
      });

      if (response.ok) {
        fetchUsers();
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch {
      setError('Failed to update user role');
    }
  };

  const deleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${userId}`, {
          method: 'DELETE',
          credentials: 'include',
        });

        if (response.ok) {
          fetchUsers();
        } else {
          const data = await response.json();
          setError(data.message);
        }
      } catch {
        setError('Failed to delete user');
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="p-6 mt-20">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 dark:border-blue-400 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 pt-20 md:pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">User Management</h1>
            <button
              onClick={() => setShowCreateForm(true)}
              className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
            >
              Create New User
            </button>
          </div>

          {error && (
            <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-500 text-red-700 dark:text-red-200 px-4 py-3 rounded mb-4 transition-colors duration-300">
              {error}
            </div>
          )}

          {/* Create User Form */}
          {showCreateForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 flex items-center justify-center z-50 transition-all duration-300">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full mx-4 transition-colors duration-300">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Create New User</h3>
                <form onSubmit={createUser}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-300">
                      Username
                    </label>
                    <input
                      type="text"
                      value={newUser.username}
                      onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-300">
                      Password
                    </label>
                    <input
                      type="password"
                      value={newUser.password}
                      onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-300">
                      Role
                    </label>
                    <select
                      value={newUser.role}
                      onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                    >
                      <option value="viewer">Viewer</option>
                      <option value="contributor">Contributor</option>
                      <option value="editor">Editor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
                    >
                      Create User
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Users Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <thead className="bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider transition-colors duration-300">
                    Username
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider transition-colors duration-300">
                    Role
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider transition-colors duration-300">
                    Created At
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider transition-colors duration-300">
                    Last Login
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider transition-colors duration-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700 transition-colors duration-300">
                {users.map((userData) => (
                  <tr key={userData.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">
                      {userData.username}
                      {userData.id === user.id && (
                        <span className="ml-2 text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded transition-colors duration-300">
                          You
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={userData.role}
                        onChange={(e) => updateUserRole(userData.id, e.target.value)}
                        disabled={userData.id === user.id}
                        className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                      >
                        <option value="viewer">Viewer</option>
                        <option value="contributor">Contributor</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                      {new Date(userData.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                      {userData.last_login ? new Date(userData.last_login).toLocaleDateString() : 'Never'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {userData.id !== user.id && (
                        <button
                          onClick={() => deleteUser(userData.id)}
                          className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 transition-colors duration-300"
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
