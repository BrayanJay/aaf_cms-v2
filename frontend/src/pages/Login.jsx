import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import logo from '../media/logo.webp'

library.add(fas)

const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSumbit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const result = await login(values.username, values.password)
      
      if (result.success) {
        navigate('/')
      } else {
        setError(result.error || 'Login failed')
      }
    } catch {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-3">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-400/10 dark:to-indigo-400/10"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>
      
      {/* Main Login Card */}
      <div className='relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl w-full max-w-xl border border-white/30 dark:border-gray-700/50 transform transition-all duration-300'>
        {/* Decorative Elements */}
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 dark:from-blue-400/30 dark:to-indigo-500/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-indigo-400/20 to-blue-500/20 dark:from-indigo-400/30 dark:to-blue-500/30 rounded-full blur-xl"></div>
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className='flex flex-col justify-center items-center gap-4'>
            {/* Asia Asset Finance Logo */}
            <div className="relative">
              <img 
                src={logo} 
                alt="Asia Asset Finance" 
                className="h-20 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <div className="text-center">
              <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2'>
                Content Management System
              </h1>
              <p className='text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300'>Secure access to your digital workspace</p>
            </div>
          </div>
        </div>
        
        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 dark:border-red-500 rounded-lg animate-shake transition-colors duration-300">
            <div className="flex items-center">
              <FontAwesomeIcon icon={['fas', 'exclamation-triangle']} className="text-red-400 dark:text-red-300 mr-3" />
              <span className="text-red-700 dark:text-red-200 text-sm font-medium">{error}</span>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSumbit} className="space-y-6">
          {/* Username Field */}
          <div className="space-y-2">
            <label htmlFor="username" className='block text-gray-700 dark:text-gray-200 font-semibold text-sm transition-colors duration-300'>
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={['fas', 'user']} className="text-gray-400 dark:text-gray-500 transition-colors duration-300" />
              </div>
              <input 
                type="text" 
                id="username"
                placeholder='Enter your username' 
                className='w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-gray-50/50 dark:bg-gray-700/50 focus:bg-white dark:focus:bg-gray-700 hover:bg-white/80 dark:hover:bg-gray-700/80 shadow-sm focus:shadow-md text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500'
                name="username" 
                value={values.username}
                onChange={handleChanges}
                disabled={loading}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className='block text-gray-700 dark:text-gray-200 font-semibold text-sm transition-colors duration-300'>
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={['fas', 'lock']} className="text-gray-400 dark:text-gray-500 transition-colors duration-300" />
              </div>
              <input 
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder='Enter your password' 
                className='w-full pl-12 pr-12 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-gray-50/50 dark:bg-gray-700/50 focus:bg-white dark:focus:bg-gray-700 hover:bg-white/80 dark:hover:bg-gray-700/80 shadow-sm focus:shadow-md text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500'
                name="password" 
                value={values.password}
                onChange={handleChanges}
                disabled={loading}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
              >
                <FontAwesomeIcon 
                  icon={['fas', showPassword ? 'eye-slash' : 'eye']} 
                  className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300" 
                />
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={loading || !values.username || !values.password}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <FontAwesomeIcon icon={['fas', 'sign-in-alt']} />
                <span>Sign In</span>
              </div>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center space-y-2">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-auto transition-colors duration-300"></div>
          <p className="text-gray-500 dark:text-gray-400 text-xs font-medium transition-colors duration-300">
            Asia Asset Finance Limited
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs transition-colors duration-300">
            © 2025 • Secure Digital Platform
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
