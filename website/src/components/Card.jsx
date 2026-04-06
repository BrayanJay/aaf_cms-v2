import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";

const Card = () => {
  const { t } = useTranslation();
  const landingPageCards = t("landingPageCards", { returnObjects: true });
    
  //Cards data to be display
    const cards = [
        {
            idx: "card1",
            ic: <FontAwesomeIcon icon={['fas', 'user-group']} className={`mx-1.5 text-2xl md:text-4xl text-blue-700`} />,
            title: landingPageCards.card1_title,
            description: landingPageCards.card1_description
        },
        {
            idx: "card2",
            ic: <FontAwesomeIcon icon={['fas', 'globe']} className={`mx-1.5 text-2xl md:text-4xl text-blue-700`} />,
            title: landingPageCards.card2_title,
            description: landingPageCards.card2_description
        },
        {
            idx: "card3",
            ic: <FontAwesomeIcon icon={['fas', 'clock']} className={`mx-1.5  text-2xl md:text-4xl text-blue-700`} />,
            title: landingPageCards.card3_title,
            description: landingPageCards.card3_description
        }
    ];

    return (
      <div id='main-container' className="flex flex-wrap gap-6 justify-center">
        {/* Dynamic create cards */}
        {cards.map((card) => (
          <div
            key={card.idx}
            className="w-48 sm:w-96 md:h-80 px-12 pt-5 pb-10 bg-[#f6fcff] rounded-tl-2xl rounded-br-2xl shadow-lg flex-col justify-center items-center gap-5 inline-flex hover:transition-all hover:ease-in-out hover:duration-500 hover:scale-105"
          >
            <div className="justify-center items-center flex">
              {card.ic}
            </div>
            <div className="w-48 sm:w-96 md:w-96 text-center px-2 text-blue-900/80 text-lg md:text-2xl font-bold" aria-label={card.title}>
              {card.title}
            </div>
            <div className="hidden md:block w-48 sm:w-96 md::w-96 px-10 text-center text-black/40 text-xs md:text-base font-medium" aria-label={card.description}>
              {card.description}
            </div>
          </div>
        ))}
      </div>
    );
};

export default Card;
