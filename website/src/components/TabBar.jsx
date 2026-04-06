import { createRef, useEffect, useState, useRef } from "react";

// THIS COMPONENT IS CURRENTLY NOT IN USE
/**
 * @param {Object[]} tabsData - Array of tabs with their details.
 * @param {string} tabsData[].tabName - Unique name for each tab.
 * @param {string} tabsData[].tabTitle - Display title for each tab.
 * @param {string} activeTabName - The currently active tab name.
 * @param {Function} onTabClick - Callback when a tab is clicked.
 * @param {Object} tabContents - Mapping of tab names to their content.
 */
const TabBar = ({ tabsData, activeTabName, onTabClick, tabContents }) => {
  const tabGroupRef = useRef();
  const sliderRef = useRef();
  const [refs, setRefs] = useState([]);
  const [isAtLeftEnd, setIsAtLeftEnd] = useState(true);
  const [isAtRightEnd, setIsAtRightEnd] = useState(true);

  // Create refs for each tab
  useEffect(() => {
    setRefs(tabsData.map(() => createRef()));
  }, [tabsData]);

  // Update slider position when active tab changes
  useEffect(() => {
    const activeIndex = tabsData.findIndex(tab => tab.tabName === activeTabName);
    if (!sliderRef.current || !refs[activeIndex]?.current) return;

    const activeTab = refs[activeIndex].current;
    sliderRef.current.style.left = `${activeTab.offsetLeft}px`;
    sliderRef.current.style.width = `${activeTab.offsetWidth}px`;
  }, [activeTabName, refs, tabsData]);

  // Scroll the active tab into view
  useEffect(() => {
    const activeIndex = tabsData.findIndex(tab => tab.tabName === activeTabName);
    if (refs[activeIndex]?.current) {
      refs[activeIndex].current.scrollIntoView({ block: "nearest", inline: "center" });
    }

    // Update scroll indicators
    setIsAtLeftEnd(tabGroupRef.current?.scrollLeft === 0);
    setIsAtRightEnd(
      tabGroupRef.current?.scrollLeft + tabGroupRef.current?.clientWidth === tabGroupRef.current?.scrollWidth
    );
  }, [activeTabName, refs]);

  // Handle scrolling and update indicators
  const handleScroll = () => {
    setIsAtLeftEnd(tabGroupRef.current?.scrollLeft === 0);
    setIsAtRightEnd(
      tabGroupRef.current?.scrollLeft + tabGroupRef.current?.clientWidth === tabGroupRef.current?.scrollWidth
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Tab Bar */}
      <div
        ref={tabGroupRef}
        onScroll={handleScroll}
        className="relative flex w-full overflow-auto scroll-smooth rounded-sm font-medium text-blue-900/80 font-medium [&::-webkit-scrollbar]:hidden"
      >
        {tabsData.map((tab, i) => (
          <button
            ref={refs[i]}
            key={tab.tabName}
            onClick={() => onTabClick(tab.tabName)}
            className={`shrink-0 cursor-pointer border-x border-x-gray-200 px-3 py-2 transition-all hover:bg-gray-200 ${
              activeTabName === tab.tabName ? "text-blue-700 font-bold" : ""
            }`}
          >
            {tab.tabTitle}
          </button>
        ))}
        <div ref={sliderRef} className="absolute bottom-0 h-[2px] bg-blue-500 transition-[left,width]"></div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{tabContents[activeTabName]}</div>

      {/* Scroll Indicators */}
      {!isAtLeftEnd && (
        <span
          className="absolute left-0 top-0 bottom-0 flex w-16 items-center pl-[1px]"
          style={{
            background:
              "linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgb(245, 243, 240) 40%, rgb(245, 243, 240) 100%)",
          }}
        >
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-gray-200"
            onClick={() => (tabGroupRef.current.scrollLeft -= 100)}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
        </span>
      )}
      {!isAtRightEnd && (
        <span
          className="absolute right-0 top-0 bottom-0 flex w-16 items-center justify-end pr-[1px]"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgb(245, 243, 240) 40%, rgb(245, 243, 240) 100%)",
          }}
        >
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-gray-200"
            onClick={() => (tabGroupRef.current.scrollLeft += 100)}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </span>
      )}
    </div>
  );
};

export default TabBar;
