import PropTypes from 'prop-types';

const FinancialsCard = ({amount, title}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="h-[75px] md:h-[100px] w-[75px] md:w-[100px] bg-white rounded-tr-3xl rounded-bl-3xl shadow border-4 md:border-8 border-blue-700 justify-center items-center inline-flex text-black/50">
          <div className="self-stretch p-2.5 flex-col justify-center items-center lg:gap-1 inline-flex">
          <div className="text-center text-xs font-medium"></div>
          <div className="text-center text-lg font-bold">{amount}</div>
          <div className="text-center text-xs font-medium"></div>
          </div>
        </div>
        <h4 className='flex justify-center text-center text-sm font-medium py-2 text-blue-900/80 max-w-36'>{title}</h4>
    </div>
  )
}

// Prop validation for the FinancialsCard component
FinancialsCard.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
};

export default FinancialsCard
