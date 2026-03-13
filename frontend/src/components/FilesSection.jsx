
import PropTypes from 'prop-types';

const FilesSection = ({ fileList }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="flex flex-col gap-10 w-full px-28">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">Files Section</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">This section is under construction.</p>
        <div className="flex justify-center items-center h-64 bg-gray-100 dark:bg-gray-700 border-dashed border-2 border-gray-300 dark:border-gray-600 rounded-lg transition-colors duration-300">
          <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">File upload functionality will be implemented here.</p>
        </div>
        {/* Future implementation will use fileList prop */}
        {fileList && fileList.length > 0 && (
          <div className="text-sm text-gray-400 dark:text-gray-500">
            {fileList.length} files ready for processing
          </div>
        )}
      </div>
    </div>
  )
}

FilesSection.propTypes = {
  fileList: PropTypes.array
}

export default FilesSection