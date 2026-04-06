import { library } from '@fortawesome/fontawesome-svg-core';

// Solid icons — only what is actually used across the app
import {
  faPercent,
  faDownload,
  faCalculator,
  faLocationDot,   // covers 'location-dot' and 'map-marker-alt' alias
  faPhone,
  faUserGroup,
  faGlobe,
  faClock,
  faFile,
  faEnvelope,
  faChevronLeft,
  faChevronRight,
  faCaretDown,
  faCaretRight,
  faListCheck,
  faHandHoldingDollar,
  faShieldHalved,
  faBell,
  faArrowUp,
  faMinus,
  faPlus,
  faStar,
  faMagnifyingGlass, // covers 'search' alias
  faHouse,           // covers 'home' alias
  faUsers,
  faBriefcase,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

// Brand icons — only what is actually used
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  // Solid
  faPercent, faDownload, faCalculator, faLocationDot, faPhone,
  faUserGroup, faGlobe, faClock, faFile, faEnvelope,
  faChevronLeft, faChevronRight, faCaretDown, faCaretRight,
  faListCheck, faHandHoldingDollar, faShieldHalved, faBell,
  faArrowUp, faMinus, faPlus, faStar, faMagnifyingGlass, faHouse,
  faUsers, faBriefcase, faBuilding,
  // Brands
  faFacebook, faInstagram, faLinkedin, faTiktok,
);
