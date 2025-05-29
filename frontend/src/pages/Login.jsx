import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSumbit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/auth/login', values, {
        withCredentials: true
      })

      if (response.status === 200) {
        navigate('/')
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md m-10'>
        <h2 className='text-2xl font-bold text-center text-blue-500 mb-6'>Welcome Back!</h2>
        <form onSubmit={handleSumbit}>
          <div className="mb-4">
            <label htmlFor="username" className='block text-gray-600 mb-2 font-medium'>Username</label>
            <input type="text" placeholder='Enter Username' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              name="username" onChange={handleChanges} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className='block text-gray-600 mb-2 font-medium'>Password</label>
            <input type="password" placeholder='Enter Password' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              name="password" onChange={handleChanges} />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
