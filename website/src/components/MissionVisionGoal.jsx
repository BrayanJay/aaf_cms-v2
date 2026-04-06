import { useState } from 'react';
import { useTranslation } from "react-i18next";

const MissionVisionGoal = () => {
  const { t } = useTranslation();
  const missionVisionGoal = t("missionVisionGoal", { returnObjects: true });

  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div
      className="bg-mvgImg h-[450px] lg:h-96 px-5 md:px-10 lg:px-40 w-full py-10 shadow justify-start items-center gap-10 lg:gap-40 inline-flex relative bg-cover bg-bottom"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative flex-col justify-start items-start flex gap-5 z-10">
        
        <div
          onClick={() => setActiveTab('vision')}
          className={`px-2 lg:px-5 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer transition-transform duration-500 ease-in-out transform ${activeTab === 'vision' ? 'border-l-4 border-amber-400 scale-125' : ''}`}
        >
          <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-black uppercase">{missionVisionGoal.vision.category}</h2>
        </div>
        <div
          onClick={() => setActiveTab('mission')}
          className={`px-2 lg:px-5 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer transition-transform duration-500 ease-in-out transform ${activeTab === 'mission' ? 'border-l-4 border-amber-400 scale-125' : ''}`}
        >
          <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-black uppercase">{missionVisionGoal.mission.category}</h2>
        </div>
        <div
          onClick={() => setActiveTab('goal')}
          className={`px-2 lg:px-5 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer transition-transform duration-500 ease-in-out transform ${activeTab === 'goal' ? 'border-l-4 border-amber-400 scale-125' : ''}`}
        >
          <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-black uppercase">{missionVisionGoal.goal.category}</h2>
        </div>
      </div>
      <div className="relative flex-col justify-center items-start gap-2.5 inline-flex z-10">
        <h2 className="text-white text-xl md:text-2xl lg:text-2xl font-bold">{missionVisionGoal[activeTab].title}</h2>
        <div className="self-stretch text-white text-xs md:text-sm lg:text-lg font-normal md:font-bold">{missionVisionGoal[activeTab].description}</div>
      </div>
    </div>
  );
};

export default MissionVisionGoal;
