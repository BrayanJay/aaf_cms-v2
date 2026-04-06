import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'; // Import for prop validation

const DownloadsCard = ({ documents }) => {

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {documents.map((doc) => (
        <a
          key={doc.idx}
          href={doc.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 lg:p-10 bg-[#f6fcff] rounded-tl-2xl rounded-br-2xl shadow-lg flex-col justify-center items-center gap-5 inline-flex hover:transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer"
          aria-label={doc.title}
        >
          <div className="justify-center items-center flex">
            <FontAwesomeIcon
              icon={['fas', 'file']}
              className={`mx-1.5 text-2xl md:text-4xl text-blue-700`}
            />
          </div>
          <div className="w-32 text-center text-blue-900/80 text-sm font-bold">
            {doc.title}
          </div>
          <div className="px-10 text-center text-black/40 text-base font-medium">
            {doc.description}
          </div>
        </a>
      ))}
    </div>
  );
};

DownloadsCard.propTypes = {
  documents: PropTypes.arrayOf(
    PropTypes.shape({
      idx: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string.isRequired, // Ensure URL is required
    })
  ).isRequired,
};

export default DownloadsCard;
