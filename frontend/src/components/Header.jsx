import aaf_logo from '../media/logo.webp'

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md py-4 px-8 flex justify-between items-center z-10">
        <div className='flex justify-center items-center'>
            <img src={aaf_logo} className='max-h-10'/>
        </div>
    <div className="text-blue-900 text-sm md:text-base lg:text-xl font-bold">Content Management System - AAF Corporate Website</div>
  </div>
  )
}

export default Header