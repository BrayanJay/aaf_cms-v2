import PropTypes from 'prop-types';

const Description = ({ title, description }) => {
  return (
    <div className="w-auto max-h-auto px-10 lg:px-20 bg-white flex justify-center items-center" data-aos="fade-up">
      <div className="grow shrink basis-0 self-stretch px-5 border-l-4 lg:border-l-8 border-blue-700 flex-col justify-start items-start gap-2 inline-flex">
        <h2 className="text-blue-900 text-xl md:text-2xl lg:text-4xl font-black">{title}</h2>
        <div className="self-stretch text-black/60 text-xs md:text-sm lg:text-lg font-medium">{Array.isArray(description) ? (
            description.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))
          ) : (
            <p>{description}</p>
          )}</div>
      </div>
    </div>
  );
};

// Define prop types
Description.propTypes = {
  title: PropTypes.string.isRequired, // Title should be a required string
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired, // Description can be a string or an array of strings
};

export default Description;
