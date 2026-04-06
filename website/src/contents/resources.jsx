//MAIN SOURCE OF TEXT CONTENTS - ALL THE CHANGES SHOULD BE DONE IN HERE

//Landing Page Banners
const banner1 = '/media/landingPage/bannerimg1.webp';
const banner2 = '/media/landingPage/bannerimg2.webp';
const banner3 = '/media/landingPage/bannerimg3.webp';
//import banner4 from '../media/uploads/notice_en.webp';
//import banner5 from '../media/landingPage/bannerimg5.png';
//import banner6 from '../media/landingPage/bannerimg6.webp';

//About Page Banners
const bannerAbout = '/media/aboutPage/bannerAbout.webp';

//Investor Relations Page Banners
const bannerIR = '/media/investorRelations/bannerIR.webp';

//Landing Page Products Overview Images
const FixedDeposits = '/media/landingPage/fd.webp';
const Forex = '/media/landingPage/forex.webp';
const GoldLoan = '/media/landingPage/gloan.webp';
const Mortgage = '/media/landingPage/mortgage.webp';
const Leasing = '/media/landingPage/leasing.webp';
const Luckewallet = '/media/landingPage/luckewallet.webp';

import { faUsers, faBriefcase, faBuilding, faClock } from '@fortawesome/free-solid-svg-icons'; // Import suitable icons

//BOD Profile Pictures
const mrPrasanth = '/media/aboutPage/bod/vap.webp';
const mrRajiv = '/media/aboutPage/bod/rja.webp';
const mrAlexandra = '/media/aboutPage/bod/gm.webp';
const mrBijimon = '/media/aboutPage/bod/kr.webp';
const mrJayasekara = '/media/aboutPage/bod/jpdr.webp';
const mrRoshan = '/media/aboutPage/bod/rds.webp';
const mrKumarasiri = '/media/aboutPage/bod/tcd.webp';

//COM Profile Pictures
//import mrThiru from '../media/aboutPage/com/tn.webp';
const mrJayantha = '/media/aboutPage/com/jw.webp';
const mrSameera = '/media/aboutPage/com/sw.webp';
const mrSajith = '/media/aboutPage/com/sa.webp';
const mrInditha = '/media/aboutPage/com/ij.webp';
const mrPraveen = '/media/aboutPage/com/pp.webp';
const msKokila = '/media/aboutPage/com/kp.webp';
const mrThushara = '/media/aboutPage/com/tw.webp';
const msWaruni = '/media/aboutPage/com/wp.webp';

//Products Selector Images
const FD = '/media/products/fdPgBanner.webp';

//branches photos
//import branchSample from '../media/branches/temp.webp';


// Translation resources
const resources = {
  en: {
    translation: {
      //Header Component
      header: {
        title: "Contact Us",
      },
      //Navbar component
      navbar: {
        home: "Home",
        about: "About",
        about_dropdown0: "Overview",
        about_dropdown1: "Vision, Mission & Goal",
        about_dropdown2: "Board of Directors",
        about_dropdown3: "Corporate Management",
        about_dropdown4: "Branch Network",
        products: "Products & Services",
        products_dropdown1: "Products Overview",
        products_dropdown2: "Gold Loan",
        products_dropdown3: "Fixed Deposits",
        products_dropdown4: "Leasing",
        products_dropdown5: "Mortgage",
        products_dropdown6: "Forex",
        products_dropdown7: "Luckewallet",
        investor_relations: "Investor Relations",
        investor_relations_dropdown1: "Corporate Profile",
        investor_relations_dropdown2: "Key Financials",
        careers: "Careers",
        downloads: "Downloads",
        news: "News",
        contacts: "Contact Us",
      },


      //Footer component
      footerListItems: [
        { title: "About", list: ["Overview", "Board of Directors", "Corporate Management", "Branch Network"], links: ["/about", "/about/#bod", "/about/#corporate-management", "/branchnetwork" ] },
        { title: "Products", list: ["Gold Loans", "Fixed Deposits", "Leasing", "Mortgage", "Forex ", "Luckewallet"], links: ["/gold-loan", "/fixed-deposit", "/leasing", "/mortgage", "/foreign-exchange", "/luckewallet"] },
        { title: "Investor Relations", list: ["Corporate Profile", "Key Financials", "Downloads"], links: ["/ir", "/ir/#financial-keys", "/downloads"] },
        { title: "Other Links", list: ["Careers", "Contact Us", "Promotions", "News", "Privacy Policy", "Customer Complaints Form"], links: ["/careers", "/contacts", "/promotions", "/news-and-events", "/downloads/privacy-policy", "contacts/complaints/#complaint-form"] },
      ],

      footerText: {
        subs_title1: "Bringing Financial Solutions Closer to You",
        subs_title2: "Subscribe & Get Latest Updates",
        subs_title3: "From Us",
        subs_message: "Subscribe to receive our offers and updates directly in your inbox.",
        subs_field: "Enter your email",
        subs_btn: "Submit",
        intro: "Asia Asset Finance PLC, incorporated on 23rd September 1970, is rated Fitch rating A+ Stable Outlook and is licensed by the Monetary Board of the Central Bank of Sri Lanka under the Finance Business Act No. 42 of 2011.",
        address: "Head Office: No. 76, Park Street, Colombo 02, Sri Lanka",
      },


      //Landing Page Components
      tempData: {
        debenture_btn: "Debenture Issues 2024",
      },

      carouselLandingPage: [
        
        {
          src: banner1,
          title: "Innovative Solutions for Your Financial Future",
          intro: "Empowering Your Financial Future",
          description:
            "At Asia Asset Finance, we believe in the power of innovation to drive financial success. Our commitment to providing tailored financial solutions has positioned us as a leader in the Sri Lankan finance industry. Whether you’re looking to invest, save, or finance your next big project, we’re here to support your journey with trust and transparency.",
        },
        {
          src: banner2,
          title: "Where Dreams Meet Financial Solutions",
          intro: "Innovative Finance, Inspiring Growth",
          description:
            "We are more than just a financial institution; we are your partners in progress. Our innovative approach to finance is designed to empower individuals and businesses across Sri Lanka. By combining cutting-edge technology with personalized service, we deliver financial solutions that are not only efficient but also effective in helping you achieve your goals.",
        },
        {
          src: banner3,
          title: "Leading the Way in Sri Lankan Finance",
          intro: "Your Trust, Your Commitment",
          description:
            "Trust and transparency are the cornerstones of our business. As a leader in Sri Lankan finance, we are committed to maintaining the highest standards of integrity in everything we do. From our first interaction to the final transaction, you can count on us to provide clear, honest advice and services that are tailored to your needs.",
        },

      ],
      landingPageCards: {
        card1_title: "Expert Team",
        card1_description: "Leverage the knowledge and experience of our financial experts dedicated to helping you succeed.",
        card2_title: "Wide Reach",
        card2_description: "Serving clients across Sri Lanka with a comprehensive range of financial products tailored to local needs.",
        card3_title: "Fast & Efficient Service",
        card3_description: "Experience quick and hassle-free services designed to save you time and streamline your financial journey.",
      },
      whyChooseUs: {
        title_left: "Why Choose",
        title_right: "Asia Asset Finance",
        description: "For over 50 years we at Asia Asset Finance PLC have invested our interests in countless individuals and business. Be it in the Gold Loans we provide for the most reasonable rates, Leasing, Mortgage Loans, Group Personal Loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies.",
        card1: "Tailored Financial Solutions for Every Stage of Life",
        card2: "Unparalleled Customer Service with a Personal Touch",
        card3: "Innovative Products Backed by Decades of Expertise",
    },
    luckewalletLandingPage: {
      title1: "Simplify Your Financial Journey with Our ",
      title2: "Luckewallet ",
      title3: "Mobile App",
      subtitle: "Experience seamless and secure financial services right from your smartphone.",
      learn_more: "Learn More",
      key_features1: "Key ",
      key_features2: "Features",
      feature1_title: "Easy Account Management",
      feature1_description: "View and manage all your accounts effortlessly in one place.",
      feature2_title: "Quick Loan Applications",
      feature2_description: "Apply for loans and track your application status seamlessly.",
      feature3_title: "Seamless Online Transactions",
      feature3_description: "Experience fast, secure, and hassle-free online financial services.",
      feature4_title: "Real-time Notifications",
      feature4_description: "Stay updated with instant alerts on account activities and offers.",
      download_now: "Download Now!",
  },
  productsOverviewTextLandingPage: {
    title: "Discover Our Financial Products",
    subtitle: "Comprehensive Solutions for Secure Financial Growth",
    description: "At Asia Asset Finance, we provide a diverse range of financial products tailored to meet your unique needs. Whether you're looking to grow your savings, secure a loan, or explore investment opportunities, our offerings are designed with your financial well-being in mind. Choose from our secure Fixed Deposits, flexible Gold Loans, and supportive Micro Mortgage Loans to find the right fit for you. With our innovative E-Saving accounts, competitive Foreign Exchange services, and convenient Leasing options, we ensure that every aspect of your financial journey is covered. Trust us to deliver reliable, personalized solutions that empower your financial success.",
  },
  productsOverviewLandingPage: [
    { title: "Fixed Deposits", image: FixedDeposits, description: "Secure your savings with fixed returns.", link: "/fixed-deposit" },
  { title: "Gold Loan", image: GoldLoan, description: "Grow your wealth with flexible savings.", link: "/gold-loan" },
  { title: "Mortgage", image: Mortgage, description: "Affordable loans for your every need.", link: "/mortgage" },
  { title: "Leasing", image: Leasing, description: "Convenient spending with low-interest rates.", link: "/leasing" },
  { title: "E - Savings", image: Luckewallet, description: "Comprehensive protection for peace of mind.", link: "/luckewallet" },
  { title: "Forex", image: Forex, description: "Maximize your returns with diverse options.", link: "/foreign-exchange" },
],
testimonialsText: {
  title: "What Our Clients Say",
  subtitle: "Real Stories of Success and Satisfaction",
},
testimonials: [
  {
    personName: "Niroshan Fernando",
    location: "From Thudalla",
    imageUrl: "/media/testimonials/niroshan_fernando.webp",
    quote: "I trust Asia Asset Finance for their A+ rating, 54-year legacy, and exceptional service!",
    rating: 5,
  },
  {
    personName: "S Yogaraja",
    location: "From Hekiththa",
    imageUrl: "/media/testimonials/s_yogaraja.webp",
    quote: "Asia Asset was the one who gave me strength.",
    rating: 5,
  },
  /*{
    personName: "L Nalini",
    location: "From Hekiththa",
    imageUrl: "/media/testimonials/l_nalini.webp",
    quote: "Asia Asset was the one who gave me strength.",
  },*/
  {
    personName: "Saumya Nilukshi",
    location: "From Awarakotuwa",
    imageUrl: "/media/testimonials/saumya_nilukshi.webp",
    quote: "Asia Asset Finance is our place, filled with humanity and care!",
    rating: 5,
  },
],

branchDetailsLandingPage: {
  title1: "Our",
  title2: "Branches",
  subtitle: "Bringing Financial Solutions Closer to You ",
  description1: "Visit one of our ",
  description2: "100+ branches ",
  description3: "today and experience the personalized service that ",
  description4: "Asia Asset Finance PLC ",
  description5: "is known for. We're here to support your financial journey, no matter where you are in Sri Lanka.",
  newbranches_title: "Our Newest Branches",
  newbranches_description: "We're excited to announce the opening of our newest branches, bringing our trusted financial services even closer to you. As part of our commitment to accessibility and community support, these branches are equipped to provide the full range of Asia Asset Finance products and services. Visit us at our latest locations and experience the same reliable and personalized service that you've come to expect from us.",
  newest_branch_name: "Deniyaya",
  newest_branch_address: "No 196, Main Street, Deniyaya",
  newest_branch_tp: "+94 11 7699000",
  newest_branch_email: "deniyaya@aaf.lk",
  our_branch_network_btn: "Our Branch Network",
},
inquiryForm: {
  title: "Get In Touch With Us Today",
  subtitle: "Bringing Financial Solutions Closer to You",
  label1: "Name",
  field1: "Enter your Name",
  error1: "Please provide your name",
  label2: "Mobile Number",
  field2: "Enter your Mobile Number",
  error2: "Please provide your mobile number",
  label3: "Email",
  field3: "Enter your Email",
  error3: "Please provide your email",
  error3_1: "Please provide a valid email address",
  label4: "Message",
  field4: "Enter your Message here",
  error4: "",
  label5: "Employee's Name",
  field5: "Enter employee name here",
  error5: "Please provide employee's name",
  label6: "Department",
  field6: "Enter department name here",
  error6: "Please provide department",
  label7: "Branch",
  field7: "Enter branch name here",
  error7: "Please provide branch",
  label8: "Adress",
  field8: "Enter your address here",
  error8: "Please provide your address",
  label9: "Nearest City",
  field9: "Enter your nearest city here",
  error9: "Please provide your nearest city",
  label10: "Amount (Optional)",
  field10: "Enter amount here",
  error10: "",
  label11: "Services",
  field11: "Select a service",
  error11: "Please select a service",
  label12: "Language",
  field12: "Select a language",
  error12: "Please select a language",
  button1: "Clear",
  button2: "Submit",
  close_btn: "Back",
  response_pass: "Your inquiry has been sent successfully!",
  response_fail: "Failed to send inquiry. Please try again.",
  inquiry: "Inquiry Form",
  cus_complaint: "Customer Complaints Form",
  titleLabel: "Select Title",
  titlePlaceholder: "Please select your title",
  titleOptions: [ "Mr", "Mrs", "Miss", "Ms", "Dr", "Prof", "Rev", "Other",],
  customer_details: "Customer Details",
  employee_details: "Employee Details",
},

  //About Page Components
  bannerAbout:{
    src: bannerAbout,
    title: "About us",
    intro: "Empowering Your Financial Future ",
    specialnote: "since 1970",
    description: "“ Empowering People and Transforming Lives ”",
  },
  cardsAbout: [
    { stat: "70,000+", text: "Customers", icon: faUsers },
    { stat: "54+", text: "Years of Excellence", icon: faClock },
    { stat: "1000+", text: "Employees", icon: faBriefcase },
    { stat: "100+", text: "Branches", icon: faBuilding },
  ],
  overviewAbout: {
    title: "Overview",
    description: "For over 50 years we at Asia Asset Finance PLC have invested our interests in countless individuals and business. Be it in the Gold Loans we provide for the most reasonable rates, Leasing, Mortgage Loans, Group Loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies. Asia Asset Finance PLC is a fully owned subsidiary of Muthoot Finance Ltd and a fully licensed, deposit-taking institution registered with the Central Bank of Sri Lanka. Society’s financial needs are ever growing and Asia Asset grew over the years, in a simple quest to cater to these needs. Our efforts have always been to aid our customers to achieve growth in the way they live and in the way they do business. The story of Asia Asset Finance PLC is one of “Empowering People and Transforming Lives”."
},
missionVisionGoal: {
  mission: {
category: "mission",
    title: "The solutions we provide for our customers' financial needs would be unconventional, innovative, and relevant for their needs to improve their quality of life whilst maintaining superior levels of customer service which would go well beyond their expectations.",
    description: ""
  },
  vision: {
category: "vision",
    title: "Empowering people & transforming lives.",
    description: ""
  },
  goal: {
category: "goal",
    title: "To become a premier finance company in Sri Lanka.",
    description: ""
  }
},
  bodProfilesAbout: [
    { imgSrc: mrAlexandra, name: 'G M Alexander', title: 'Non - Independent Non - Executive Director' },
    { imgSrc: mrBijimon, name: 'K R Bijimon', title: 'Non - Independent Non - Executive Director' },
    { imgSrc: mrJayasekara, name: 'J P D R Jayasekara', title: 'Independent Non - Executive Director' },
    { imgSrc: mrKumarasiri, name: 'T C D Kumarasiri', title: 'Independent Non - Executive Director' },
    { imgSrc: mrRoshan, name: 'R D S Gunasekara', title: 'Executive Director / Chief Operating Officer' },

  ],
 bodTextsAbout: {
    title1: "Board of ",
    title2: "Directors",
    subtitle: "Guiding Our Vision with Expertise and Integrity",
    intro: "Our Board of Directors comprises seasoned professionals with diverse backgrounds and extensive experience in the financial industry. Their leadership and strategic insights are instrumental in steering Asia Asset Finance towards sustainable growth and success.",
    chairman_name: "V. A. Prasanth",
    chairman_position: "Chairman",
    chairman_description: "V.A Prasanth is a commercial banker with over 37 years of all-round exposure in Retail & Corporate banking, Treasury Operations and Information Security. Formerly he worked with Indian Bank – acclaimed as one of the best...",
    ceo_name: "R. J. A. Gunawardena",
    ceo_position: "Executive Director / Chief Executive Officer",
    ceo_description: "Mr. Rajiv Gunawardena, the Chief Executive Officer / Director of Asia Asset Finance PLC was appointed to the Board in December 2009. A visionary leader, responsible for setting and implementing the organization’s vision...",
    see_more_btn: "Read More",
    view_profile_btn: "Read More",
  },
  comTextsAbout: {
    title1: "Corporate ",
    title2: "Management",
    subtitle: "Comprehensive Solutions for Secure Financial Growth",
    description: "At Asia Asset Finance, our corporate management team is composed of seasoned professionals who bring a wealth of experience and insight to the table. Their strategic leadership and commitment to excellence drive our company’s success, ensuring we remain at the forefront of Sri Lanka’s financial services industry.",
  },
  comProfilesAbout: [ 
    { imgSrc: mrRajiv, name: 'Rajiv Gunawardena', title: 'Executive Director / Chief Executive Officer' },
    { imgSrc: mrRoshan, name: 'Roshan Gunasekara', title: 'Executive Director / Chief Operating Officer' },
    { imgSrc: msKokila, name: 'Kokila Perera', title: 'Chief Finance Officer' },
    // { imgSrc: mrThiru, name: 'M. Thiruneelakandan', title: 'Senior General Manager' },
    { imgSrc: mrJayantha, name: 'Jayantha Weerappulige', title: 'General Manager - Products Operation' },
    { imgSrc: mrSajith, name: 'Sajith Atapattu', title: 'General Manager - Operation' },
    { imgSrc: mrInditha, name: 'Inditha Jayathilaka', title: 'General Manager - IT' },
    { imgSrc: mrPraveen, name: 'Praveen Peiris', title: 'General Manager - Treasury' },
    { imgSrc: mrSameera, name: 'Samira Weveladeniya', title: 'Deputy General Manager - Fixed Deposits' },
    { imgSrc: mrThushara, name: 'Thushara Wijewardena', title: 'Deputy General Manager - Credit' },
    { imgSrc: msWaruni, name: 'Waruni Perera', title: 'Deputy General Manager - Risk Management' },
    
  ],
  branchNetworktext: {
    title1: "Our",
    title2: "Branch Network",
    subtitle: "Bringing Financial Solutions Closer to You",
    description1: "Visit one of our ",
    description2: "100+ branches ",
    description3: "today and experience the personalized service that ",
    description4: "Asia Asset Finance PLC ",
    description5: "is known for. We're here to support your financial journey, no matter where you are in Sri Lanka.",
    label: "Search Your Nearest Branch:",
    field: "Search Branch...",
    all_tab: "All Regions",
    central_tab: "Central Region",
    eastern_tab: "Eastern Region",
    northern_tab: "Northern Region",
    sabaragamuwa_tab: "Sabaragamuwa Region",
    southern_tab: "Southern Region",
    uva_tab: "Uva Region",
    western_tab: "Western Region",
    northwestern_tab: "North-Western Region",
    viewOnMapBtn: "View On Map",
    callNowBtn: "Call Now"
  },
  branchesData: {
    head_office: {
      title: "Head Office",
      branches: [
        { name: "Head Office", location: "No.76, Park Street, Colombo 02.", contact: "0117699150-152", tp: "+94117699000", image: "/media/branches/headoffice.webp", lat: "6.915119", lng: "79.859896" },
      ]
    },
    western: {
      title: "Western Region",
      branches: [
        { name: "Negombo", location: "No.295, Main Street, Negombo.", contact: "0317699020-023", image: "/media/branches/negombo.webp", lat: "7.21274791602540", lng: "79.8410733794413" },
        { name: "Gampaha", location: "No.69, Colombo Road, Gampaha.", contact: "0337699010-015", image: "/media/branches/gampaha.webp", lat: "7.09190677434260", lng: "79.9952417365682" },
        { name: "Kalutara", location: "No.344, Maha Veediya, Kalutara South.", contact: "0347699010-016", image: "/media/branches/kaluthara.webp", lat: "6.57872884306934", lng: "79.9623528915085" },
        { name: "Moratuwa", location: "No.16, New De Soysa Road, Rawathawatta, Moratuwa.", contact: "0117681510-518", image: "/media/branches/moratuwa.webp", lat: "6.78770536070150", lng: "79.8860613498311" },
        { name: "Wellawatta", location: "No.344, Galle Road, Wellawatte.", contact: "0117681530-533", image: "/media/branches/wellawatte.webp", lat: "6.867254", lng: "79.86071" },
        { name: "Mathugama", location: "K & W Centre, No.5, Gamini Mawatha, Aluthgama Road, Mathugama.", contact: "0347699020-022", image: "/media/branches/mathugama.webp", lat: "6.52165873970042", lng: "80.1145063423287" },
        { name: "Kotahena", location: "No.31, Kotahena Street, Colombo 13.", contact: "0117699109-110", image: "/media/branches/kotahena.webp", lat: "6.94858156424990", lng: "79.8623878922922" },
        { name: "Panadura", location: "No.114, D S Senanayake Mawatha, Panadura.", contact: "0387699010-012", image: "/media/branches/panadura.webp", lat: "6.7141", lng: "79.907744" },
        { name: "Mattakkuliya", location: "No.3/810, Farm Road, Mattakkuliya.", contact: "0117699480-482", image: "/media/branches/mattakkuliya.webp", lat: "6.97804611388718", lng: "79.8762274337617" },
        { name: "Grandpass", location: "No.428, Madampitiya Road, Colombo 14.", contact: "0117681500-502", image: "/media/branches/grandpass.webp", lat: "6.95719420793741", lng: "79.8769183828602" },
        { name: "Elakanda", location: "No.327, Thimbirigasyaya, Handala, Wattala.", contact: "0117699446", image: "/media/branches/elakanda.webp", lat: "6.99478253017945", lng: "79.8756576325868" },
        { name: "Homagama", location: "No 78 A, High Level Road, Homagama.", contact: "0117699415-417", image: "/media/branches/homagama.webp", lat: "6.84152813241502", lng: "80.0038718288356" },
      ]
      
    },
    eastern: {
      title: "Eastern Region",
      branches: [
        { name: "Batticaloa", location: "No 187, Trincomali Road, Batticaloa.", contact: "0657699010-012", image: "/media/branches/batticaloa.webp", lat: "7.718111", lng: "81.6985" },
        { name: "Chenkalady", location: "New Market Road, Chenkalady.", contact: "0657699020-022", image: "/media/branches/chenkalady.webp", lat: "7.78358189774221", lng: "81.5931858680916" },
        { name: "Kalmunai", location: "No.69, Main Road, Kalmunai.", contact: "0677699020-022", image: "/media/branches/kalmunai.webp", lat: "7.41654230398386", lng: "81.8246567153597" },
        { name: "Sammanthurai", location: "No.120, Ampara Road, Karuvaddukal-02, Sammanthurai.", contact: "0677699025-027", image: "/media/branches/sammanthurai.webp", lat: "7.357484", lng: "81.795105" },
        { name: "Akkaraipattu", location: "No.155, Ampara Road, Akkaraipattu.", contact: "0677699010-012", image: "/media/branches/akkaraipattu.webp", lat: "7.21787575668551", lng: "81.8492521045523" },
        { name: "Valaichchenai", location: "Main Street, Mavadichenai, Valachchenai.", contact: "0657699040-042", image: "/media/branches/valaichchenai.webp", lat: "7.912117223429645", lng: "81.52707297668584" },
        { name: "Trincomalee", location: "No.285, Central Road, Trincomalee.", contact: "0267699020-022", image: "/media/branches/trincomalee.webp", lat: "8.57941500313335", lng: "81.2308190342658" },
        { name: "Kinniya", location: "No.88, Main Street , Sinna Kinniya, Kinniya 03.", contact: "0267699030-032", image: "/media/branches/kinniya.webp", lat: "8.502384474", lng: "81.1827385164287" },
        { name: "Kaluwanchikudy", location: "No.172, Main Street, Kalawanchikudy.", contact: "0657699030-035", image: "/media/branches/kalawanchikuddy.webp", lat: "7.517246", lng: "81.786933" },
        { name: "Pottuvil", location: "Main Street, Pottuvil.", contact: "0637699010-012", image: "/media/branches/pottuvil.webp", lat: "6.875271", lng: "81.830633" },
        { name: "Kanthale", location: "No.137, Main Street, Kantale.", contact: "0267699010-012", image: "/media/branches/kanthale.webp", lat: "8.351263", lng: "81.006993" },
        { name: "Thirukkovil", location: "Main Street, Thirikkovil.", contact: "0677699040-042", image: "/media/branches/thirukkovil.webp", lat: "7.1159148318762", lng: "81.8520663720749" },
        { name: "Nintavur", location: "No. 42/11, Main Street, Ninthavur 24.", contact: "0677699050-052", image: "/media/branches/ninthavur.webp", lat: "7.35547048615244", lng: "81.8458707513758" },
        { name: "Serunuwara", location: "No.44A, R.B.03, Serunuwara", contact: "0267699050-052", image: "/media/branches/serunuwara.webp", lat: "8.325101", lng: "81.300209" },
        { name: "Mutur", location: "Batticaloa Road, Aleem Nagar, Muthur.", contact: "0267699040-042", image: "/media/branches/muthur.webp", lat: "8.44276637829916", lng: "81.2630812704972" },
        { name: "Ampara", location: "No.451, D S Senanayaka Road, Ampara.", contact: "0637699020-023", image: "/media/branches/ampara.webp", lat: "7.2917359", lng: "81.6803183" },
        { name: "Kokkadicholai", location: "Main Road, Division No.10,Kokkadicholai.", contact: "0657699060-063", image: "/media/branches/kokkadicholai.webp", lat: "7.609681591789088", lng: "81.7121303580231" },
        { name: "Kiran", location: "Main Street, Kiran.", contact: "0657699050-053", image: "/media/branches/kiran.webp", lat: "7.865244496822327", lng: "81.53848100905222" },
        { name: "Pankulam", location: "Main street, trincomale road  morawewa, pankulam.", contact: "0117170757", image: "/media/branches/pankulam.webp", lat: "8.629169066638466", lng: "81.03232430445199" },
        { name: "Arayampathy", location: "Main Street, Arayampathy.", contact: "0117170758", image: "/media/branches/arayampathy.webp", lat: "7.664316664102133", lng: "81.7391842050213" },
        { name: "Karaitivu", location: "Main Road, Karaitivu 01.", contact: "0117170759", image: "/media/branches/karaitivu.webp", lat: "7.384270233691014", lng: "81.83753616227506" },
        { name: "Pulmoddai", location: "Ward no 4,main street, pulmoodai.", contact: "1369", image: "/media/branches/pulmoddai.webp", lat: "8.939817280704222", lng: "80.98680765952446" },
        { name: "Oddamavadi", location: "Main Street, Mavadichenai, Valaichenai.", contact: "0117170762", image: "/media/branches/oddamavadi.webp", lat: "7.912146446855825", lng: "81.52707431779137" },
      ]

    },
    southern: {
      title: "Southern Region",
      branches: [
        { name: "Galle", location: "No:170/172,kadaweediya, main street, Galle.", contact: "0917699000-006", image: "/media/branches/galle.webp", lat: "6.035643578305275", lng: "80.22053327164475" },
        { name: "Matara", location: "79, Anagarika Dharmapala Mawatha, Matara.", contact: "0417699010-012", image: "/media/branches/matara.webp", lat: "5.949379105734931", lng: "80.54374826944834" },
        { name: "Beruwala", location: "No. 199, Jayathu, Galle Road,Beruwala.", contact: "0347699030-034", image: "/media/branches/beruwala.webp", lat: "6.472090864359676", lng: "79.9847138819168" },
        { name: "Ambalantota", location: "No.55, Main Street, Ambalantota.", contact: "0477699000-003", image: "/media/branches/ambalantota.webp", lat: "6.122573584370459", lng: "81.02260975452502" },
        { name: "Elpitiya", location: "No.14, Ambalangoda road, Elpitiya.", contact: "0917699010-013", image: "/media/branches/elpitiya.webp", lat: "6.29022579625833", lng: "80.16204502253045" },
        { name: "Deniyaya", location: "No.196, Main Street, Deniyaya.", contact: "0417699020-023", image: "/media/branches/deniyaya.webp", lat: "6.3445203771652094", lng: "80.56016068020213" }
      ]
    },
    northern: {
      title: "Northern Region",
      branches: [
        { name: "Jaffna", location: "No.109, Kasthriyar Road, Jaffna.", contact: "0217699050-052", image: "/media/branches/jaffna.webp", lat: "9.668439", lng: "80.011014" },
        { name: "Chavakachcheri", location: "No.05, Kandy Road, Chavakachcheri.", contact: "0217699040-042", image: "/media/branches/chavakachcheri.webp", lat: "9.659811", lng: "80.160394" },
        { name: "Point Pedro", location: "No.374/B, Rajina Building complex, Main Street, Point Pedro.", contact: "0217699080-082", image: "/media/branches/pointpedro.webp", lat: "9.821597", lng: "80.236677" },
        { name: "Chunnakam", location: "No.15, Station Road, Chunnakam.", contact: "0217699005-007", image: "/media/branches/chunnakam.webp", lat: "9.74494172154708", lng: "80.0281830455549" },
        { name: "Nelliady", location: "No.82, Point Pedro Road, Nelliadi.", contact: "0217699070-072", image: "/media/branches/nelliady.webp", lat: "9.800680866182810", lng: "80.2034085379105" },
        { name: "Changani", location: "Mahan Thanga Plaza, Main Street, Changani.", contact: "0217699030-032", image: "/media/branches/changanai.webp", lat: "9.747417", lng: "79.972524" },
        { name: "Velanai", location: "Vagalavadi, Velani.", contact: "0217699020-022", image: "/media/branches/velanai.webp", lat: "9.63615", lng: "79.900869" },
        { name: "Achchuveli", location: "No.53, Avarangal Road, Achchuveli.", contact: "0217699010-012", image: "/media/branches/achchuveli.webp", lat: "9.77819", lng: "80.115729" },
        { name: "Manipay", location: "No.260, Manipay Road, Manipay.", contact: "0217699115-117", image: "/media/branches/manipay.webp", lat: "9.716558", lng: "79.996658" },
        { name: "Urumpirai", location: "Palaly Road, Urumpirai.", contact: "0217699090-092", image: "/media/branches/urumpirai.webp", lat: "9.71497883728503", lng: "80.0438207355821" },
        { name: "Kilinochchi", location: "Near Murugan Temple, A9 road, Killinochchi.", contact: "0217699060-064", image: "/media/branches/kilinochchi.webp", lat: "9.40012537643521", lng: "80.4084344188591" },
        { name: "Pudukuduirippu", location: "No.02, Paranthan Road, Puthukkudiyiruppu.", contact: "0217699085-087", image: "/media/branches/puthukudiyirippu.webp", lat: "9.31595127619480", lng: "80.6926724583882" },
        { name: "Mullaitivu", location: "Main Street, Mullaitivu.", contact: "0217699065-067", image: "/media/branches/mullaitivu.webp", lat: "9.26938280223006", lng: "80.8147716934679" },
        { name: "Vavuniya", location: "No.27, 2nd Cross Street, Vauniya.", contact: "0247699010-012", image: "/media/branches/vavuniya.webp", lat: "8.7523859", lng: "80.4970501" },
        { name: "Oddusuddan", location: "Mullaitivu, Main Street, Vidyapuram, Oddusuddan.", contact: "0217699075-077", image: "/media/branches/oddusuddan.webp", lat: "9.15584218827980", lng: "80.6522662099292" },
        { name: "Mannar", location: "No.05, First Cross Street, Petha, Mannar.", contact: "0237699010-012", image: "/media/branches/mannar.webp", lat: "8.97978731934710", lng: "79.9118612790098" },
        { name: "Cheddikulam", location: "Main Street , Cheddikulam.", contact: "0247699020-022", image: "/media/branches/cheddikulam.webp", lat: "8.65996749223797", lng: "80.3124537278841" },
        { name: "Mulankavil", location: "Mannar Road, Mulankavil.", contact: "0237699020-022", image: "/media/branches/mulankavil.webp", lat: "9.25438991577004", lng: "80.1419943983477" },
        { name: "Mallavi", location: "Thunnukai Road, Mallavi, Mullaitivu.", contact: "0217699095-098", image: "/media/branches/mallavi.webp", lat: "9.13529394427059", lng: "80.3121381846574" },
        { name: "Visuvamadu", location: "Chundikkulam Junction,Visuvamadu, Mullaitivu.", contact: "0247699030-033", image: "/media/branches/visuvamadu.webp", lat: "9.398447279520965", lng: "80.5381797667411" },
        { name: "Palai", location: "A 9 Road, Pallai Town, Pallai.", contact: "0217699111-114", image: "/media/branches/pallai.webp", lat: "9.608956493958125", lng: "80.33094899999998" },
        { name: "Thalaimannar", location: "Ward No.08, Pesalai, Thalaimannar Road, Mannar.", contact: "0237699040-043", image: "/media/branches/pesalai.webp", lat: "9.08482838218252", lng: "79.8275909981505" },
        { name: "Palaly", location: "No.526, Kankesanthurai Road, Thellippalai, Palali, Jaffna.", contact: "0217699105-108", image: "/media/branches/palaly.webp", lat: "9.785353650866927", lng: "80.0332677315456" },
        { name: "Murunkan", location: "Medawachchiya to Mannar Road, Murunkan, Mannar.", contact: "0237699030-033", image: "/media/branches/murunkan.webp", lat: "8.839195949252595", lng: "80.03688615004205" },
        { name: "Kalviyankadu", location: "1133, Pointpetro Road, Kalviyankadu, Jaffna.", contact: "1369", image: "/media/branches/kalviyankadu.webp", lat: "9.683052390135007", lng: "80.04115572446625" },
        { name: "Moolai", location: "340, Karainagar Road, Moolai, Chulipuram, Jaffna.", contact: "1369", image: "/media/branches/moolai.webp", lat: "9.749698599299634", lng: "79.93194292883584" },
      ]
    },
    central: {
      title: "Central Region",
      branches: [
        { name: "Digana", location: "J/2005 11/02. Rajawella Digana.", contact: "0817699030-037", image: "/media/branches/digana.webp", lat: "7.29628", lng: "80.733276" },
        { name: "Hatton", location: "No. 19, Main Street, Hatton.", contact: "0517699001-004", image: "/media/branches/hatton.webp", lat: "6.890217390251945", lng: "80.5982444405497" },
        { name: "Thalawakele", location: "No. 8/02, Nuwara Eliya Road, Thalawakele.", contact: "0527699035-037", image: "/media/branches/thalawakale.webp", lat: "6.93603423987978", lng: "80.6611086192476" },
        { name: "Nawalapitiya", location: "No.75, Ambagamuwa Road, Nawalapitiya.", contact: "0817699040-043", image: "/media/branches/nawalapitiya.webp", lat: "7.054935", lng: "80.530689" },
        { name: "Gampola", location: "No.63, Nuwara Eliya Road, Gampola.", contact: "0817699001-004", image: "/media/branches/gampola.webp", lat: "7.16260499123707", lng: "80.5711980001460" },
        { name: "Ragala", location: "No. 67, Main Street, Ragala, Halgranoya.", contact: "0527699030-034", image: "/media/branches/ragala.webp", lat: "7.01260826631179", lng: "80.8595450177179" },
        { name: "Matale", location: "No.242, Main Street, Matale.", contact: "0667699020-023", image: "/media/branches/matale.webp", lat: "7.47154", lng: "80.624389" },
        { name: "Pundaluoya", location: "No.250/B/7, Kadadora Pitiya Road, Pundaluoya.", contact: "0517699030-032", image: "/media/branches/pundaluoya.webp", lat: "7.01568432166580", lng: "80.6649462711641" },
        { name: "Maskeliya", location: "No.244, Main Street, Maskeliya.", contact: "0527699010-012", image: "/media/branches/maskeliya.webp", lat: "6.831457", lng: "80.571781" },
        { name: "Katugastota", location: "No.144, Kurunegala Road, Katugasthota.", contact: "0817699010-012", image: "/media/branches/katugastota.webp", lat: "7.32320148924444", lng: "80.6229334576716" },
        { name: "Naula", location: "No.26, Dambulla Road, Naula.", contact: "0667699010-012", image: "/media/branches/naula.webp", lat: "7.705474", lng: "80.652596" },
        { name: "Bogawantalawa", location: "No.90, Bridwel Bazar, Bogawanthalawa.", contact: "0527699020-022", image: "/media/branches/bogawantalawa.webp", lat: "6.79662063632186", lng: "80.6782139381486" },
        { name: "Pussellawa", location: "No.305, Nuwara Eliya Road, Pussellawa.", contact: "0817699020-022", image: "/media/branches/pussellawa.webp", lat: "7.11083080391683", lng: "80.6342358527280" },
        { name: "Wattegama", location: "No.55, Main Street, Wattegama", contact: "0817699025-027", image: "/media/branches/wattegama.webp", lat: "7.350414", lng: "80.689989" },
        { name: "Agarapatana", location: "No.34, Main Street, Agarapathana.", contact: "0517699010-012", image: "/media/branches/agarapathana.webp", lat: "6.863127", lng: "80.707834" },
        { name: "Hawa Eliya", location: "No.26, Udapussellawa Road, Hawaeliya.", contact: "0527699115-117", image: "/media/branches/hawaeliya.webp", lat: "6.97102741829262", lng: "80.7825167520040" },
        { name: "Kotagala", location: "No.179/1, Main Street, Kotagala.", contact: "0517699020-022", image: "/media/branches/kotagala.webp", lat: "6.925373823", lng: "80.6081208208255" },
        { name: "Hanguranketha", location: "No.16, Ragala Road, Rikillagaskada, Hanguranketha.", contact: "0817699050-052", image: "/media/branches/hanguranketha.webp", lat: "7.14579467543395", lng: "80.7839917244378" },
        { name: "Dayagama", location: "No. B/1, Dayagama Bazzar, Dayagama", contact: "0517699041", image: "/media/branches/dayagama.webp", lat: "6.855981523234289", lng: "80.74814456282456" },
        { name: "Hapugastalawa", location: "Halgolla No.01, Hapugasthalawa.", contact: "0547699000-003", image: "/media/branches/hapugastalawa.webp", lat: "7.055096748044914", lng: "80.5729400273714" }
      ]
    },
    northwestern: {
      title: "North-Western Region",
      branches: [
        { name: "Kurunegala", location: "No 81, Negombo Road, Kurunegala.", contact: "0377699001-007", image: "/media/branches/kurunegala.webp", lat: "7.486689243249437", lng: "80.35761032234345" },
        { name: "Wennappuwa", location: "224/3A, Colombo Road, Wennappuwa.", contact: "0317699010-012", image: "/media/branches/wennappuwa.webp", lat: "7.33815246626181", lng: "79.8430220792178" },
        { name: "Chilaw", location: "39, Colombo Road, Chilaw.", contact: "0327699015-017", image: "/media/branches/chilaw.webp", lat: "7.57463737919976", lng: "79.7967668090491" },
        { name: "Udappuwa", location: "No.75, Division No 2, Udappuwa.", contact: "0327699030-032", image: "/media/branches/udappuwa.webp", lat: "7.74801456346774", lng: "79.7901098724389" },
        { name: "Puttalam", location: "No.61, Kurunegala Road, Puttalam.", contact: "0327699010-013", image: "/media/branches/puttalam.webp", lat: "8.02713861322438", lng: "79.8371258866641" },
        { name: "Kalpitiya", location: "Main Street, Kalpitiya.", contact: "0327699020-022", image: "/media/branches/kalpitiya.webp", lat: "8.23406059521350", lng: "79.7629007070031" },
        { name: "Wariyapola", location: "Block 1 & 2, Chilaw Road, Wariyapola.", contact: "0377699010-013", image: "/media/branches/wariyapola.webp", lat: "7.61956186993873", lng: "80.2413604335368" },
        { name: "Dankotuwa", location: "No.07, Naththandiya Road, Dankotuwa.", contact: "0317699030-033", image: "/media/branches/dankotuwa.webp", lat: "7.29765178658540", lng: "79.8818356590114" }
      ]
    },
    uva: {
      title: "Uva Region",
        branches: [
              { name: "Monaragala", location: "No.141, 1st Lane, Wellawaya Road, Monaragala.", contact: "0557699020-022", image: "/media/branches/monaragala.webp", lat: "6.87200986129306", lng: "81.35137626671371" },
        { name: "Mahiyanganaya", location: "No.23, New Town, Mahiyanganaya.", contact: "0557699030-032", image: "/media/branches/mahiyanganaya.webp", lat: "7.337864", lng: "80.989453" },
        { name: "Badulla", location: "No.49, Cocowatta Road, Badulla.", contact: "0557699010-018", image: "/media/branches/badulla.webp", lat: "6.986059", lng: "81.058621" },
        { name: "Haputale", location: "No.27, Main Street, Haputale.", contact: "0577699010-012", image: "/media/branches/haputale.webp", lat: "6.765414", lng: "80.952566" },
        { name: "Welimada", location: "No.51, Nuwara Eliya Road, Welimada.", contact: "0577699015-017", image: "/media/branches/welimada.webp", lat: "6.901907", lng: "80.907925" },
        { name: "Bibila", location: "No.6, Opposite Hospital, Batticaloa Road, Bibile.", contact: "0557699050-052", image: "/media/branches/bibile.webp", lat: "7.163275", lng: "81.225672" },
        { name: "Boralanda", location: "Haputhale Road, Boralanda.", contact: "0577699020-023", image: "/media/branches/boralanda.webp", lat: "6.82825", lng: "80.8943889" },
        { name: "Girandurukotte", location: "No.04, New Town, Girandurukotte.", contact: "0277699000-003", image: "/media/branches/girandurukotte.webp", lat: "7.4716381", lng: "81.016923" },
        { name: "Lunugala", location: "No.156, Main Street, Lunugala.", contact: "0557699060-063", image: "/media/branches/lunugala.webp", lat: "7.0403865", lng: "81.2014486" },
        { name: "Passara", location: "No.289, Main Road, Passara.", contact: "0557699040-042", image: "/media/branches/passara.webp", lat: "6.935118", lng: "81.1559392" },
        { name: "Buttala", location: "109- Buttala - No.17, Wellawaya Road, Buttala.", contact: "0117170756", image: "/media/branches/buttala.webp", lat: "6.759466368556405", lng: "81.24563105051159" }
      ]
    },
    sabaragamuwa: {
      title: "Sabaragamuwa Region",
      branches: [
        { name: "Mawanella", location: "No.246, Kandy Road, Mawanella.", contact: "0357699010-012", image: "/media/branches/mawanella.webp", lat: "7.251167", lng: "80.449528" },
        { name: "Ruwanwella", location: "No.104, Main Street, Ruwanwella.", contact: "0367699001-003", image: "/media/branches/ruwanwella.webp", lat: "7.043524", lng: "80.254517" },
        { name: "Balangoda", location: "No.16, Reset House Approach Road, Balangoda.", contact: "0457699000-005", image: "/media/branches/balangoda.webp", lat: "6.65062511715612", lng: "80.6985981109200" },
        { name: "Rakwana", location: "No.29, Main street, Rakwana", contact: "0457699010-012", image: "/media/branches/rakwana.webp", lat: "6.474218", lng: "80.610933" },
        { name: "Eheliyagoda", location: "No.36, Main Street, Ehaliyagoda.", contact: "0367699010-012", image: "/media/branches/eheliyagoda.webp", lat: "6.850315", lng: "80.264785" },
        { name: "Deraniyagala", location: "No.78, Dehiowita Road, Deraniyagala.", contact: "0367699015-018", image: "/media/branches/deraniyagala.webp", lat: "6.9507732000699", lng: "80.3266479875920" },
        { name: "Kuruwita", location: "No.71/C/1, Colombo Road, Kuruwita.", contact: "0457699015-018", image: "/media/branches/kuruvita.webp", lat: "6.7789517998867", lng: "80.3633930154367" },
        { name: "Kahawatta", location: "No.131/A, Main Street, Kahawatta.", contact: "0457699020-023", image: "/media/branches/kahawatta.webp", lat: "6.577667436605311", lng: "80.57525585767128" }
      ]
    }
  },

    //Investor Relations Page Components
    bannerIR:{
      src: bannerIR,
      title: "Investor Relations",
      intro: "Building Wealth with Trust and Vision ",
      specialnote: "since 1970",
      description: "“ Partnering for Progress, Driving Sustainable Growth ”",
    },
    corporateProfileIR: {
      title1: "Corporate ",
      title2: "Profile",
      label1: "Name of Company",
      field1: "Asia Asset Finance PLC",
      label2: "Company Ratings",
      field2: "Fitch A+",
      label3: "Legal Form",
      //field3_1: "- Incorporated as a Private Limited Company on 23 September 1970. (under the Companies Ordinance No. 51 of 1938 (Cap 145))",
      //field3_2: "- Name changed under the Companies Ordinance No. 51 of 1938 (Cap 145) on 03 October 2006.",
      //field3_3: "- Re-registered under the Companies Act No. 07 of 2007 on 23 January 2008.",
      //field3_4: "- Converted to a Public Limited Company under the Companies Act No. 07 of 2007 on 20 March 2012.",
      //field3_5: "- Registration Number (under the Companies Act No. 17 of 1982): PB 139 PQ.",
      //field3_6: "- New Registration Number (under the Companies Act No. 7 of 2007): PB 139 PQ.",
      field3_1: "Incorporated as a Private Limited Liability Company under the Companies Ordinance No. 51 of 1938 (Cap 145) on 23 September 1970 and name changed under the Companies Ordinance, No. 51 of 1938 (Cap 145) on 03 October 2006 and re-registered under the Companies Act No.07 of 2007 on 23 January 2008 and converted to a public company under the Companies Act No.07 of 2007 on 20 March 2012 Registration Number (Under the Companies Act No.17 of 1982). New Registration Number (Under the Companies Act No.7 of 2007) PB 139 PQ",
      label4: "Company Registration Number",
      field4: "PB 139 PQ",
      label5: "Lawyers of the Company",
      field5: "Shiranthi Gunawardane Associates, \n No.22/1, Elliot Place,Colombo 08.",
      label6: "Board of Directors",
      field6_1: "Chairman - V A Prasanth",
      field6_2: "CEO - R J A Gunawardena",
      field6_3: "G M Alexander",
      field6_4: "K R Bijimon",
      field6_7: "J P D R Jayasekara",
      field6_8: "R D S Gunasekera",
      field6_9: "T C D Kumarasiri",
      // field6_10: "M Thiruneelakandan",
      label7: "Secretary of the Company",
      field7: `Ms. Ruwani Angammana, No.76, Park Street, Colombo 02.`,
      field7_1: `Email: companysecretary@asiaassetfinance.lk`,
      label8: "Auditors of the Company",
      field8: "KPMG, 32A, Sir Mohomad Macan Marikar Mawatha, Colombo 03.",
      label9: "Banking Partners",
      agmButtonText: "AGM Registration Form",
    },
    keyFinancialsIR: {
      title1: "Key ",
      title2: "Financials",
      card1_title: "Total Income",
      card1_amount: "XX,XXX",
      card2_title: "Profit After Tax",
      card2_amount: "XX,XXX",
      card3_title: "Total Assets",
      card3_amount: "XX,XXX",
      card4_title: "Return On Equity",
      card4_amount: "XX,XXX",
      card5_title: "Earning Per Share",
      card5_amount: "XX,XXX",
      share_price_title: "Latest Share Price",
      share_price_reg: "XXXXXXXXXX",
      share_price_name: "Asia Asset Finance PLC",
      share_price_amount: "LKR XX.XX",
      share_price_percentage: "XX,XXXX",
      share_price_type: "LKR ",
      description_line1: "For over 50 years we of Asia Asset Finance PLC have invested our interests in countless individuals and business. Be it in the Gold loans we provide for the most reasonable rates, leasing, mortgage loans, Group Personal loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies.",
      description_line2: "Asia Asset Finance PLC is a fully owned subsidiary of Muthoot Finance Ltd and a fully licensed, deposit-taking institution registered with the Central Bank of Sri Lanka.",
      description_line3: "Society’s financial needs are ever growing and Asia Asset grew over the years, in a simple quest to cater to these needs. Our efforts have always been to aid our customers to achieve growth in the way they live and in the way they do business.",
      description_line4: "The story of Asia Asset Finance PLC is one of “ Empowering People and Transforming Lives ”.",
    },
    documentsIR: {
      title: "Downloads",
      tab1_title: "Annual Reports",
      tab1_content: "No Reports has been uploaded yet!",
      tab2_title: "Credit Ratings",
      tab2_content: "No Reports has been uploaded yet!",
      tab3_title: "Quarterly Financials",
      tab3_content: "No Reports has been uploaded yet!",
      tab4_title: "Monthly Financials",
      tab4_content: "No Reports has been uploaded yet!",
    },

    //Downloads Page Components
    downloadsData: [
      {idx: "card1",
      title: "Annual Report 2023 - 2024",
      description: "",
      link: ""
      },
      {idx: "card1",
        title: "Annual Report 2023 - 2024",
        description: "",
        link: ""
      },
      {idx: "card1",
        title: "Annual Report 2023 - 2024",
        description: "",
        link: ""
      },
      {idx: "card1",
        title: "Annual Report 2023 - 2024",
        description: "",
        link: ""
      },
      {idx: "card1",
        title: "Annual Report 2023 - 2024",
        description: "",
        link: ""
      },  
    ],
    downloadsTexts: {
      title: "Downloads",
      section1: "Annual Reports",
      intro1: "Click on a document to view it.",
      section2: "Interim Financials",
      intro2: "Click on a document to view it.",
      section3: "Customer Information",
      intro3: "Click on a document to view it.",
      section4: "Other Documents",
      intro4: "Click on a document to view it.",
      section5: "Debenture Issue 2024",
      intro5: "Click on a document to view it.",
    },

    privacyPolicy: {
      title: "Privacy Policy",
      description: [
        "Asia Asset Finance PLC built all as free. This SERVICE is provided by Asia Asset Finance PLC at no cost and is intended for use as is.",
        "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.",
        "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
        "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions are accessible.",
    ],
    information_collection: "Information Collection and Use",
    ic_description: [
      "For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.",
      "The app does use third party services that may collect information used to identify you.",
    ],
    ic_description_2 : "We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.",
    cookies: "Cookies",
    cookies_text: "This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.",
    service_providers: "Service Providers",
    service_providers_text_1: "We may employ third-party companies and individuals due to the following reasons:",
    service_providers_points: [
      "To facilitate our Service",
      "To provide the Service on our behalf",
      "To perform Service-related services",
      "To assist us in analyzing how our Service is used",
    ],
    service_providers_text_2: "We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.",
    security: "Security",
    security_text: "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.",
    links_to_other_sites: "Links to Other Sites",
    links_to_other_sites_text: "This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
    children_privacy: "Children’s Privacy",
    children_privacy_text: "These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.",
    changes_to_this_privacy: "Changes to This Privacy Policy",
    changes_to_this_privacy_text_1: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.",
    changes_to_this_privacy_text_2: "This policy is effective as of 2021-08-01",
    contact_us: "Contact Us",
    contact_us_text: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@asiassetfinance.lk.",
  },

    //Promotions Page
    promotionsPage: {
      title: "Promotions",
      subtitle: "No Current Promotions",
      description: "Please visit this page later for updates.",
    },

    //Products & Services Page Components
    bannerProducts: {
      title: "Products & Services",
      intro: "Simplifying Financial Solutions",
      specialnote: "since 1970",
      description: "“ Partnering for Growth and Prosperity ”",
    },

    productsSelector: { 
      'Fixed Deposit': {
        images: [FD, FD],
        name: "Fixed Deposits",
        features: [
          { title: "High Interest Rate", description: "Earn a higher interest rate than regular savings accounts." },
          { title: "Flexible Terms", description: "Choose from a variety of terms that best suit your needs." },
        ],
      },
      'Gold Loan': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "Gold Loan",
        features: [
          { title: "Fast Approval", description: "Get quick access to funds using your gold as collateral." },
          { title: "Low Interest", description: "Competitive interest rates for gold-backed loans." },
        ],
      },
      'Mortgage': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "Mortgage",
        features: [
          { title: "Affordable Rates", description: "Low-interest rates for small-scale mortgages." },
          { title: "Flexible Repayment", description: "Customizable repayment plans based on income." },
        ],
      },
      'Leasing': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "Leasing",
        features: [
          { title: "Convenient Leasing Options", description: "Lease vehicles, equipment, and more at flexible terms." },
          { title: "Fast Processing", description: "Quick and easy leasing application process." },
        ],
      },
      'Forex': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "Forex",
        features: [
          { title: "Competitive Rates", description: "Exchange currency at favorable rates." },
          { title: "Multiple Currencies", description: "Access a wide range of international currencies." },
        ],
      },
    },

    luckewalletProductsPage: {
      description1: "For over 50 years we of Asia Asset Finance PLC have invested our interests in countless individuals and business’. Be it in the Gold loans we provide for the most reasonable rates, leasing, mortgage loans, Group Personal loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies.",
      description2: "Asia Asset Finance PLC is a fully owned subsidiary of Muthoot Finance Ltd and a fully licensed, deposit-taking institution registered with the Central Bank of Sri Lanka.",
      kFeature1: "Key ",
      kFeature2: "Features",
      f1title: "Easy Account Management",
      f1Text: "View and manage all your accounts effortlessly in one place.",
      f2title: "Quick Loan Applications",
      f2Text: "Apply for loans and track your application status seamlessly.",
      f3title: "Seamless Online Transactions",
      f3Text: "Experience fast, secure, and hassle-free online financial services.",
      f4title: "Real-time Notifications",
      f4Text: "Stay updated with instant alerts on account activities and offers.",
    },


    //------------------------------------------------------ Sub Pages --------------------------------------------------------------//

    //Careers Page Components
    careersBanner: {
      title: "Careers",
      description:"Shape Your Future with Us!",
    },

    titleCareers: {
      title1: "We are ",
      title2: "Hiring",
      description1: "Here’s what we do at Asia Asset Finance! We help individuals live the lives they want to live, we empower businesses to build their enterprises, we are active instruments in narrowing the financial divide.",
      description2: "We are constantly on the lookout for passionate professionals with a desire to build economies and break societal boundaries. So if you think you have what it takes, apply for the available positions below."
    },

    //------------------------------------------------------ Products Pages --------------------------------------------------------------//

    //Gold Loan Page Components
    goldLoanPage: {
      title: "Gold Loan",
      description: "Responsibility is something that comes to all of us. You can be a father, contemplating your daughter’s wedding and the expenses that come with. A mother striving to give her son the best possible education. A spouse in dire need of money for your better half’s sudden surgery. Fear not, ladies and gentlemen. Our Gold Loan Service has got you and your finances covered. Simply walk to any Asia Asset Branch and speak to one of our caring professionals and we’ll take it from there. Here are the guarantees. Instant money. Flexible interest rates, according to your situation. And at the end of it all, your gold has seen a safer space! We are, after all- a fully owned subsidiary of Muthoot Finance, legendary multinational Financial Service Provider with the LARGEST gold loan portfolio around the globe. With Asia Asset Finance PLC’s Gold Loan services, it takes no more than a few minutes for your gold to generate cash. All you need is the gold.",
      kfd: "/media/attachments/customerProtectionFramework/en_key_fact_document_gl.pdf",
      btn_1: "Key Fact Document",
      btn_2: "Charges & Tariff Sheet",
      btn_3: "Customer Information Documents",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      charges_tariff: "/media/uploads/charges_and_tariff/en_gl_cat.png",
    },

    //FD Page Components
    fdPage: {
      title: "Fixed Deposits",
      description: "It is never a bad time to start saving and it is never a bad idea to start saving with us. With a history spanning over 50 years, Asia Asset Finance PLC has become a time-tested investment partner as a finance company registered with the Central Bank of Sri Lanka. We ensure the security of your wealth, whilst offering deposit rates which are designed to ensure consistently competitive returns. Sri Lanka has faced multiple economic crises and in spite of that Asia Asset has always delivered. Our services include door-to-door service with a friendly and personalized team of professionals to cater to your individual requirements.",
      kfd: "/media/attachments/customerProtectionFramework/en_key_fact_document_fd.pdf",
      btn_1: "Key Fact Document",
      btn_2: "FD Rates",
      btn_3: "Customer Information Documents",
      btn_4: "Collection Bank Accounts",
      collectionAccounts: "/media/uploads/fd_collection_accounts.webp",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      fdRates: "/media/uploads/en_fd_rates.webp",
    },

    //Leasing Page Components
    leasingPage: {
      title: "Leasing",
      description: "Don’t let anyone tell you that you should not drive your dream vehicle NOW! Any vehicle you could have possibly wanted to drive or ride is just one visit to your nearest Asia Asset Branch away. Own it. Drive it. And all the time in the world to pay for it. In this deal, you WIN! When you apply for a lease from us our trained professionals will provide you with; The finest interest rates in the market, Doorstep Service, Minimum Documentation, Zero Hassle, Flexible Repayment Terms & etc. So, lease with ease with us and drive your dream!",
      kfd: "/media/attachments/customerProtectionFramework/en_key_fact_document_l.pdf",
      btn_1: "Key Fact Document",
      btn_2: "Charges & Tariff Sheet",
      btn_3: "Customer Information Documents",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      charges_tariff: "/media/uploads/charges_and_tariff/en_l_cat.png",
    },

    //Mortgage Page Components
    mortgagePage: {
      title: "Mortgage",
      description: "Money can solve all your financial problems. We at Asia Asset invest all our efforts to up your financial lifestyle. This is the fastest way for you to raise funds. Mortgage your asset with us, generate money and in time reclaim your asset. So, stop worrying. Go. Grow. All those problems that are obstacles to you, we have already solved. We promise you an excellent, effective and efficient service. We promise you the fairest rates you can receive because we see you. Afterall, it is our mission to empower people and to transform lives!",
      kfd: "/media/attachments/customerProtectionFramework/en_key_fact_document_m.pdf",
      btn_1: "Key Fact Document",
      btn_2: "Charges & Tariff Sheet",
      btn_3: "Customer Information Documents",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      charges_tariff: "/media/uploads/charges_and_tariff/en_m_cat.png",
    },

    //Forex Page Components
    forexPage: {
      title: "Forex",
      description: "At Asia Asset Finance you can get your Foreign Exchange Transactions done in a flash! Just walk over to one of our counters with your cash and let the trading happen. So, here is how Forex works. In the simplest form of describing it, it is the act of selling one currency to buy another. These are always quoted in pairs- that is, how much one unit of base(bought) currency is in terms of quote (sold) currency. With our professional advice, and constant on our toes approach, watch your wealth multiply.",
      btn_1: "Customer Information Documents",
      btn_2: "Foreign Currency Exchange Rates",
      btn_3: "Key Fact Document",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      charges_tariff: "",
      our_partners: "Our Partners",
      forexRate: "/media/uploads/forex_rate_en.webp",
      kfd: "/media/attachments/customerProtectionFramework/en_key_fact_document_f.pdf",
    },

    //Luckewallet Page Components
    luckewalletPage: {
      title: "Luckewallet",
      subtitle: "Access Your Wealth From Anywhere",
      description: ["Luckewallet has firmly established itself as the leading payment platform in Sri Lanka, renowned for its high transaction volume and customer base. Luckewallet offers a wide range of financial services, including digital savings accounts, digital fixed deposits, and Gold Loan interest payments. Additionally, users can pay utility bills and accept credit card payments without needing to visit a physical branch. The platform is designed to seamlessly connect customers and merchants, providing a secure and integrated experience.",
        "An extension of our e-savings account offering is its highly competitive interest rate, which stands out in the market. The e-savings account provides users with the ability to earn interest in their savings while enjoying the flexibility and convenience of managing their funds digitally. Customers can open and manage their digital savings accounts directly through the app, with the added benefit of earning interest that is typically higher than traditional savings accounts. This feature allows users to grow their savings effortlessly, with the ease of accessing their funds and tracking their account activity at any time.",
        "More than just a payment platform, Luckewallet is envisioned as a comprehensive ecosystem, with the company acting as a merchant-acquiring partner. Recognized internationally for its advanced software architecture, the app is continually improved to ensure a smooth and efficient user experience. Key features include easy customer onboarding, self-registration, and a variety of services such as mobile recharges and direct transactions with other bank accounts. With the e-savings account and its competitive interest rate, Luckewallet is offering more than just digital transactions — it’s helping users build their financial future.",
      ],
      kfd: "/media/attachments/customerProtectionFramework/en_key_fact_document_s.pdf",
      btn_1: "Key Fact Document",
      btn_2: "Customer Information Documents",
      btn_3: "",
      hotline: "Hotline",
      note: "Note: These are values indicative and may change time to time*",
      charges_tariff: "",
      
    },
    //Contacts Page Components
    contactsPage: {
      title1: "Contact ",
      title2: "Us",
      subtitle: "Contact us today, and we'll provide the support you need!",
      card1title: "Location",
      card1Body: "No 76, Park St, Colombo 02",
      card2title: "Customer Care",
      card2Body: "011 71 70 712",
      card3title: "Telephone",
      card3Body: "011 76 99 000",
      card4title: "Email",
      card4Body: "info@asiaassetfinance.lk",
      card5title: "Complaints",
      card5Body: "077 79 99 922",
      card6title: "Hotline",
      card6Body: "1369",
      card7title: "Opening Hours",
      card7Body: ["MONDAY TO FRIDAY – 8.30 AM to 5.00 PM", "SATURDAY – 8.30 AM to 1.00 PM", "We are closed on all the mercantile holidays."]
    },

    profileDetails: [
      {
        id: "1",
        name: "V A Prasanth",
        src: mrPrasanth,
        designation: "Chairman",
        description : ["Mr. V. A. Prasanth, is a commercial banker with over 37 years of all-round exposure in Retail and Corporate banking, Treasury Operations, and Information Security. Formerly he worked with the Indian Bank as General Manager and Chief Information Officer. During this time, he was in-charge of Information Technology and Digital Banking.",
          "He served as the Chief Financial Officer at Indian Bank. In earlier assignments he headed two prominent zones of the Bank as Zonal Manger. He has over two decades of experience in Financial Markets – as the Head of Forex Dealing Room at Mumbai during 1994- 1998, the Head of Singapore Treasury during 2001-2005, as the Head of Treasury Back Office during 2009-2011, and as the Administrator of Wealth Management Services for Indian Bank (WMS) between 2009 and 2011. ",
          "He also collaborated with the “Institute for Development and Research in Banking Technology “ (IDRBT) Hyderabad, as Senior Domain Expert till March 2024.",
          "Presently Mr. V. A. Prasanth is associated with “ Indian Institute of Banking & Finance” (IIBF), Mumbai as Subject Matter Expert ( SME). He was appointed as the Chairman of Asia Asset Finance PLC in June 2020.",
        ]
      },
      {
        id: "2",
        name: "G M Alexander",
        src: mrAlexandra,
        designation: "Non - Independent Non - Executive Director",
        description : ["Mr. Alexander holds a Master’s in Business Administration from the University of North Carolina – Kenan & Flagler Business School and earned his Bachelors’ Degree in Mechanical Engineering from the University of Kerala - TKM College of Engineering. He is currently functions as the Deputy Managing Director of Muthoot Finance and oversees operations across the states of Karnataka, Goa and Telangana in India. He has the additional responsibility of heading the global operations of The Muthoot Group in the U.S.A and serves on the board of three other group companies (Asia Asia Assets Finance PLC, Muthoot Insurance Brokers and Belstar Finance & Investments).",
          "Muthoot Finance Limited is a Gold Loan NBFC (Non-Banking Finance Company) and is the flagship company of The Muthoot Group. It was listed in 2011 and is traded in BSE & NSE and currently is the largest gold loan company in India. Apart from Muthoot Finance Limited, The Muthoot group has 16 other divisions, such as hospitality, health care, equity & commodity trading, insurance broking etc. A family owned business, the group is established over four generations Mr. Alexander represents the fourth generation of the family. Prior to joining his family business, he was attached to ING & Kotak Mahindra Bank in India. ",
          "He served as the chair for the Confederation of Indian Industries – Young Indians Bangalore Chapter in 2015. He was one among 10 Indians chosen to represent India for AIYD (Australia India Youth Dialogue) at Sydney and Melbourne in 2013 & 2022.He was the finance chair for the Entrepreneur’s Organization Bangalore from 2016-2018. He is presently serving on the Board of advisors at University of North Carolina’s – Kenan-Flagler Business School and on the board of XIME Business school Bangalore.",
        ]
      },
      {
        id: "3",
        name: "K R Bijimon",
        src: mrBijimon,
        designation: "Non - Independent Non - Executive Director",
        description : ["Bijimon is a Fellow Member of the Institute of Chartered Accountants of India, New Delhi, Associate of Indian Institute of Banking and Finance Mumbai and Fellow Member of Certified Management Accountants, Institute of Sri Lanka. He holds LLB degree from MG University and MBA from Cochin University,",
          "He has over 28years of experience in the field of financial services and is employed in the Muthoot Finance Limited since inception. As Executive Director & COO of the Company he oversees credit, internal audit, marketing, Information technology, recovery and legal and vigilance departments of the Company.",
          "He is the Chief Operating Officer for global operations of Muthoot Group (USA, UAE, UK, Nepal & Sri Lanka). He has been the driving force in Muthoot Group expanding its operations to USA, UK, Nepal and Sri Lanka.",
          "Mr. K.R. Bijimon is Director in Muthoot Group Companies viz. Muthoot Home Fin (India) Ltd., Muthoot Securities Ltd., Muthoot Commodities Ltd., Muthoot Forex Ltd., Muthoot Finserv USA INC. Asia Asset Finance PLC Sri Lanka and Belstar Microfinance Ltd.",
          "He is also a member of the Board of Governors of Muthoot Institute of Technology and Science (MITS).",
        ]
      },
      {
        id: "4",
        name: "J P D R Jayasekara",
        src: mrJayasekara,
        designation: "Independent Non - Executive Director",
        description : ["Mr. Jayasekara Jayasekara Pathirannehalage Danasiri Rupakumara Jayasekara holds a BA (Special) Degree in Economics with a second-class upper division. He possesses over 33 years of progressive experience in taxation, ICT and banking and finance. He assumed office as an Assessor to the Department of Inland Revenue in 1984 and thereafter held the positions of Senior Assessor in 1994, Deputy Commissioner in 2005, Commissioner and to Senior Commissioner and Deputy Commissioner General (ICT Administration and Tax Operation Support) in 2015.",
          "He was a pioneer member, positioned as Senior Additional Project Director of Revenue Administration Management Information System (RAMIS), a system which is now in operation in the department. At the time of retirement, he performed duties as Deputy Commissioner General (Information Technology) of the Department of Inland Revenue",
          "During his tenure in office, Mr. Jayasekera participated in several overseas taxation programs including Workshop on Tax Modeling in Austria in 2001, a training program on Advancing Management Potential (Senior Course) held in United Kingdom in 2003, a specialized training program on Audit Management in India in 2007, and a program on Post due diligence relating to the customs expansion modernization held in Angola in 2012.",
          "He has also received valued exposure in double taxation treaty negotiations Sri Lanka signed with Seychelles and Saudi Arabia. He had participated in strategic level forums as a delegate to conferences such as ‘OECD Global Forum on VAT’ held in France in 2012 and the ‘Fourth IMF – Japan High Level Tax Conference for Asian Countries’ in Tokyo, Japan in 2013, Ministerial workshop on Blue Economy and Maritime Silk Road in China.",
          "He was a team member of the team that worked on Negotiation of the proposed Trade agreement with China in 2014. He was one of the Members of the Saluation committee in preparation of Due Diligence Reports in respect of RAMIS project, visiting Singapore and Angola for this reason.",
          "Mr. Jayasekera holds a membership of APFA (Association of Public Finance Accountants of Sri Lanka) and is an active member of China Sri Lanka Society. An active philanthropist he is a member of several societies and association that are actively involved in community service.",
        ]
      },
      {
        id: "5",
        name: "T C D Kumarasiri",
        src: mrKumarasiri,
        designation: "Independent Non - Executive Director",
        description : ["Mr. Chaaminda Kumarasiri is a Senior Chartered Accountant, Management Consultant, Keynote Speaker, Business Advisor and a Corporate Trainer with a proven track record, holding senior leadership positions in leading local entities and multinationals.",
                      "He is the Founder/President of Asia Pacific Institute of Money and Entrepreneurship Development, the Founder/CEO of the Human Capital Partner, the Chairman/Principal Consultant of H C P Consulting (Pvt.) Ltd. He serves as an Independent Non-Executive Director at Sanasa Development Bank PLC and an advisor/consultant to a few leading Organizations both in the Private Sector and Public Sector. He also serves on the International Panel on Accounting Education (IPAE), as the only representative from the entire South Asia. He has served on the Governing Council of CA Sri Lanka for two consecutive terms and currently serves as the Vice Chairman of ACCA Sri Lanka Member Network Panel.",
                      "Mr. Kumarasiri possesses an array of professional and academic qualifications with numerous awards and medallions. He is a Fellow member of The Institute of Chartered Accountants of Sri Lanka, The Association of Chartered Certified Accountants – UK, The Association of Accounting Technician of Sri Lanka and The Institute of Certified Management Accountants of Sri Lanka. He has obtained a B.Sc. Accountancy (Special) degree with a First Class honors from the University of Sri Jayewardenepura and holds an MBA in Finance from the University of Colombo. As a leading Corporate Trainer he has profoundly inspired countless individuals both in Sri Lanka and overseas. As a pivotal figure in the Entrepreneurial Ecosystem, Chaaminda is frequently featured across various public forums, national TV/Radio channels, and prominent YouTube channels. He is sought after as a guest speaker and a panelist at business forums and entrepreneurship-related events.",
                      "He has been bestowed with ACCA National Advocate of the Year Award - 2022 for his exceptional commitment and dedication to promote the accountancy profession and its values."
        ]
      },
      {
        id: "6",
        name: "R D S Gunasekara",
        src: mrRoshan,
        designation: "Executive Director / Chief Operating Officer",
        description : ["Mr. Roshan De Silva Gunasekera serves as the Executive Director and Chief Operating Officer, bringing a wealth of experience and expertise to his role. He was appointed to the Board of Directors as an Executive Director in 2023, having initially joined the company in April 2010. Over the years, he has demonstrated exceptional leadership and a deep understanding of both Asia Asset Finance PLC and the larger financial services industry",
          "Mr. Gunasekera’s career in the finance sector spans an impressive 30 years, beginning in 1994 when he took on the role of Credit Officer at Commercial Leasing Company Limited, which has since merged with LOLC Finance PLC. His extensive post-qualifying experience has been pivotal in shaping his strategic vision and operational acumen, making Significant contributions to the company’s growth and stability.",
          "Educationally, Mr. Gunasekera is well-equipped with a robust academic background. He holds a Bachelor of Science degree in Business Administration (Special) from the University of Sri Jayewardenepura and an MBA from the University of Colombo. Additionally, he has completed part qualifications from the Chartered Institute of Management Accountants (CIMA) in the UK, further enhancing his financial expertise.",
          "Beyond his professional and academic achievements, Mr. Gunasekera is a respected member of the Association for Overseas Technical Senior Management Scholarship (AOTS) in Japan. His commitment to education is also evident through his role as a visiting lecturer in Financial Services Marketing at the University of Colombo, where he shares his knowledge and experience with aspiring finance professionals. He is a sought-after resource person at various knowledge-sharing forums, contributing to the broader financial services community.",
          "Currently, Mr. Gunasekera is pursuing a Doctor of Business Administration (DBA) at the University of Colombo, reflecting his dedication to continuous learning and professional development. His ongoing academic pursuits underscore his commitment to staying at the forefront of industry trends and best practices.",
          "Roshan De Silva Gunasekera’s blend of practical experience, academic prowess, and dedication to knowledge dissemination makes him a pivotal figure in the financial services sector. His leadership at Asia Asset Finance PLC continues to drive innovation and excellence, ensuring the company’s ongoing success in a competitive industry landscape.",
        ]
      },
      {
        id: "7",
        name: "R J A Gunawardena",
        src: mrRajiv,
        designation: "Executive Director / Chief Executive Officer",
        description : ["Mr. Rajiv Gunawardena is the Chief Executive Officer / Director of Asia Asset Finance PLC.",
          "He was appointed to the Board in December 2009 and is responsible for setting and implementing the organisation’s vision and strategy and delivering value through the Company’s overall operations and performance",
          "He holds a Bachelor of Science in Business and Information Systems from the United Kingdom and has completed his Masters of Professional Accounting at Monash University Australia.",
          "Prior to joining Asia Asset Finance, he has worked in the capacity of Senior Investment Analyst at Asia Capital PLC. He was a lecturer in Accounting at the Australian College of Business and Technology.",
        ]
      },
      //need to translate below
      {
        id: "8",
        name: "R D S Gunasekara",
        src: mrRoshan,
        designation: "Executive Director / Chief Operating Officer",
        description : ["Mr. Roshan De Silva Gunasekera serves as the Executive Director and Chief Operating Officer, bringing a wealth of experience and expertise to his role. He was appointed to the Board of Directors as an Executive Director in 2023, having initially joined the company in April 2010. Over the years, he has demonstrated exceptional leadership and a deep understanding of both Asia Asset Finance PLC and the larger financial services industry",
          "Mr. Gunasekera’s career in the finance sector spans an impressive 30 years, beginning in 1994 when he took on the role of Credit Officer at Commercial Leasing Company Limited, which has since merged with LOLC Finance PLC. His extensive post-qualifying experience has been pivotal in shaping his strategic vision and operational acumen, making Significant contributions to the company’s growth and stability.",
          "Educationally, Mr. Gunasekera is well-equipped with a robust academic background. He holds a Bachelor of Science degree in Business Administration (Special) from the University of Sri Jayewardenepura and an MBA from the University of Colombo. Additionally, he has completed part qualifications from the Chartered Institute of Management Accountants (CIMA) in the UK, further enhancing his financial expertise.",
          "Beyond his professional and academic achievements, Mr. Gunasekera is a respected member of the Association for Overseas Technical Senior Management Scholarship (AOTS) in Japan. His commitment to education is also evident through his role as a visiting lecturer in Financial Services Marketing at the University of Colombo, where he shares his knowledge and experience with aspiring finance professionals. He is a sought-after resource person at various knowledge-sharing forums, contributing to the broader financial services community.",
          "Currently, Mr. Gunasekera is pursuing a Doctor of Business Administration (DBA) at the University of Colombo, reflecting his dedication to continuous learning and professional development. His ongoing academic pursuits underscore his commitment to staying at the forefront of industry trends and best practices.",
          "Roshan De Silva Gunasekera’s blend of practical experience, academic prowess, and dedication to knowledge dissemination makes him a pivotal figure in the financial services sector. His leadership at Asia Asset Finance PLC continues to drive innovation and excellence, ensuring the company’s ongoing success in a competitive industry landscape.",
        ]
      },
      {
        id: "9",
        name: "Kokila Perera",
        src: msKokila,
        designation: "Chief Financial Officer",
        description : [
          "She is responsible for providing strategic financial leadership to the organisation, overseeing financial planning, treasury management, regulatory compliance, risk management, and financial reporting, while supporting the Board and senior management in driving sustainable growth and shareholder value.",
          "She is a Fellow Member of the Institute of Chartered Accountants of Sri Lanka (FCA) and holds a Master’s degree in Business Administration (MBA) from the University of Wales Trinity and Saint David in the United Kingdom. She brings over 25 years of experience in finance, accounting, and corporate finance within the financial services sector.",
          "Prior to her current role, she has held senior finance positions across finance companies and corporates, where she played a key role in strengthening financial controls, improving profitability, managing regulatory and audit requirements, and leading finance transformation initiatives. Her expertise includes budgeting and forecasting, asset–liability management, taxation, and stakeholder engagement with regulators, auditors, and financial institutions."
        ]
      },
      {
        id: "10",
        name: "Jayantha Weerappulige",
        src: mrJayantha,
        designation: "General Manager - Products Operation",
        description : ["Mr. Jayantha Weerappulige joined Asia Asset Finance PLC in 2008. Currently he serves as the GM - Operation, initially he served in the capacity of Senior Manager Lending for 3 years before hew was promoted as AGM grade and in 2022 he was promoted to DGM position. Mr. Jayantha Weerappulige holds a B. Com (Special) degree in Business Administration and MBA from the University of Colombo. He counts over 23 years of working experience in Marketing, Credit, Operations, Accounts of which 20 years were spent in the Finance sector and he also has the experience in the banking sector in his previous employment with Peoples Merchant Bank during the period from 2003 to 2008. He holds more than 15 years of experience in the top management of Asia Asset Finance PLC.",
          "He is responsible for overlooking the entire branch network as well as overall operations of the branches which comprises of Marketing, Credit, Administrations & Recoveries. He is further responsible for product & business development, strategic planning & implementation.",
        ]
      },
      {
        id: "11",
        name: "Sajith Atapattu",
        src: mrSajith,
        designation: "General Manager - Operation",
        description : ["Mr. Sajith Atapattu joined Asia Asset Finance PLC in 2010 and currently holds the position of General Manager - Operation. Throughout this extensive period of 14 years, Mr. Atapattu has taken various roles and assumed increasing responsibilities, from Credit and Recovery to Operations, Administration and Risk, where he has amassed a wealth of experience in key areas of the organization. He has gained a comprehensive understanding of the interplay between different departments and the importance of aligning their efforts to achieve overarching organizational goals. Mr. Sajith Atapattu began his career at London Mutual Credit Union (UK), an organization dedicated to promoting financial inclusion. During his tenure at LMCU, he has gained valuable insights into the intricacies of the financial sector and developed a deep understanding of the importance of providing accessible financial services to all individuals. He holds a bachelor’s degree from the University of Keele - UK.",

        ]
      },
      {
        id: "12",
        name: "Inditha Jayathilaka",
        src: mrInditha,
        designation: "General Manager - Information Technology",
        description : ["Mr. Inditha Jayathilaka is the mastermind solution provider for all IT related tasks at Asia Asset Finance PLC. He has more than 12 years of experience in banking and finance solution development and implementation. He received his BSc in MIS from the University College of Dublin. Over the course of his career, he gained experience from various sectors, ultimately specialising in the financial sector by providing mission-critical software and infrastructure solutions. At present, he oversees the Information Technology department by providing IT related infrastructure, software and security service.",

        ]
      },
      {
        id: "13",
        name: "Praveen Peiris",
        src: mrPraveen,
        designation: "General Manager - Treasury",
        description : ["Mr. Praveen Peiris joined Asia Asset Finance PLC in 2014 and has over 20 years of Financial and Treasury experience. He started his career at a Global Audit Firm in 2004 and joined the Non-Banking Financial Sector in 2008. Prior to joining Asia Asset Finance PLC, he worked as Manager – Treasury in a listed finance company. He has expertise in Treasury Management including Strategic Risk Management, Asset – Liability Management and Cash Management. He is Competent in Operational Management and has the capacity to handle financing of high-value projects. Mr. Peiris holds an MBA from the University of Wales, U.K and is a Finalist at the Chartered Institute of Management Accountants, U.K ",

        ]
      },
      {
        id: "14",
        name: "Samira Weveldeniya",
        src: mrSameera,
        designation: "Deputy General Manager - Fixed Deposits",
        description : ["Mr. Samira Weveldeniya joined AAF in June 2006 as the Negombo Branch Manager and was appointed to the post of Regional Manager - Fixed Deposit in 2009 followed by a subsequent appointment as the Senior Manager - Fixed Deposits in 2011. He was promoted as Assistant General Manager - Marketing in 2014. He has over 22 years of experience in Deposit Marketing in the Finance Sector and is currently working in the capacity of DGM-Fixed Deposits and contributes to the fund mobilization and branch development of the company. Prior to joining AAF, Mr. Weveldeniya worked at the Ceylinco Development Bank where he was awarded many times for his achievements in marketing. Mr. Weveldeniya holds an MBA from the Buckinghamshire New University in the UK and was conferred the Postgraduate professional status of Certified Professional Marketer- Asia (CPM - Asia) by The Asia Marketing Federation (AMF). He is also an Associate Member of The Certified Management Accountants – Australia (AMA-Australia). Apart from that he is also a certified member of Sri Lanka Institute of Marketing (SLIM).",

        ]
      },
      {
        id: "15",
        name: "Thushara Wijewardena",
        src: mrThushara,
        designation: "Deputy General Manager - Credit",
        description : ["Mr. Thushara Wiewardena Deputy General Manager – Head of Credit, joined AAF PLC in October 2025. Mr. Wijewardena is a professional banker with more than 33 years of experience in Banking and Finance sector including General Management and Credit Management. He has been working as a Corporate Management member for 15 years in leading Finance Companies in Sri Lanka heading the Credit Operation, Credit Administration and Recoveries. He is an Associate of Institute of Bankers of Sri Lanka (AIB) and holds Masters of Business Studies from University of Colombo and Masters of Business Administration in Banking and Finance from Kingston University in UK. Mr. Wijewardena is a trainer and a lecturer at AIA for the programs conducted by the Credit Management Institute of Sri Lanka (SLICM) and Institute of Bankers of Sri Lanka (IBSL). He plays a leading role by providing training to young professionals in Banking and Finance sector in Credit Management for a decade.",

        ]
      },
      {
        id: "16",
        name: "Waruni Perera",
        src: msWaruni,
        designation: "Deputy General Manager - Risk Management",
        description : [
          "Ms. Waruni Perera was appointed Deputy General Manager – Risk Management at Asia Asset Finance PLC in 2026. She possesses over 14 years of extensive experience in Sri Lanka’s Licensed Finance Company sector, having led the risk function at a leading financial institution and subsequently served with a global credit rating agency, where she specialized in Non-Bank Financial Institution (NBFI) credit ratings.",
          "She is an Associate Member of the Chartered Institute of Management Accountants, UK (ACMA). Ms. Perera holds a Master’s degree in Financial Economics from the University of Colombo and a Bachelor of Science degree in Accounting from the University of Sri Jayewardenepura."
        ]
      },
  ],

      //News & Events Page Components
      newsAndEvents: {
        pageTitle: "News & Events",
        articlesTitle: "News",
        eventsTitle: "Gallery",
        heroDescription: "Stay updated with our latest news, achievements, and memorable events",
        articlesDescription: "Latest updates and announcements from Asia Asset Finance",
        noNewsTitle: "No news updates available",
        noNewsMessage: "Check back later for the latest updates",
        events: [
          // {
          //   title: "Annual General Meeting 2025",
          //   date: "2025-09-10",
          //   description: "Join us for our Annual General Meeting at the main auditorium. All shareholders are welcome to attend.",
          //   images: ["/media/events/agm1.jpg", "/media/events/agm2.jpg", "/media/events/agm3.jpg"],
          //   location: "Head Office Auditorium",
          //   time: "10:00 AM"
          // },
        ]
      },
    },
  },
  si: {
    translation: {
      //Header Component
      header: {
        title: "අප අමතන්න",
      },

      //Navbar component
      navbar: {
        home: "මුල් පිටුව",
        about: "අප ගැන",
        about_dropdown0: "හැඳින්වීම",
        about_dropdown1: " දැක්ම, මෙහෙවර සහ ඉලක්කය",
        about_dropdown2: "අධ්‍යක්ෂ මණ්ඩලය",
        about_dropdown3: "සමාගමේ කළමනාකරණය",
        about_dropdown4: "ශාඛා ජාලය",
        products: "සේවා",
        products_dropdown1: "නිෂ්පාදන සාරාංශය",
        products_dropdown2: "රන් ණය",
        products_dropdown3: "ස්ථාවර තැන්පතු",
        products_dropdown4: "ලිසිං",
        products_dropdown5: "උකස්",
        products_dropdown6: "විදේශ විනිමය හුවමාරුව",
        products_dropdown7: "Luckewallet",
        investor_relations: "ආයෝජක සබඳතා",
        investor_relations_dropdown1: "ආයතනික පැතිකඩ",
        investor_relations_dropdown2: "ප්‍රධාන මුල්‍ය තොරතුරු",
        careers: "රැකියා",
        downloads: "බාගතකිරීම්",
        news: "ප්‍රවෘත්ති",
        contacts: "අප අමතන්න",
      },

      //Footer Component
      footerListItems: [
        { title: "අපි ගැන", list: ["හැඳින්වීම", "නිලධාරී මණ්ඩලය", "කාර්‍යාල කළමනාකරණය", "ශාඛා ජාලය"], links: ["/about", "/about/#bod", "/about/#corporate-management", "/branchnetwork"] },
        { title: "සේවා", list: ["රන් ණය", "ස්ථිර තැන්පතු", "ලීසිං", "උකස්", "විදේශ විනිමය හුවමාරුව", "Luckewallet"], links: ["/gold-loan", "/fixed-deposit", "/leasing", "/mortgage", "/foreign-exchange", "/luckewallet"] },
        { title: "ආයෝජක සම්බන්ධතා", list: ["ආයතනික පැතිකඩ", "ප්‍රධාන මුල්‍ය තොරතුරු", "බාගත කිරීම්",], links: ["/ir", "/ir/#financial-keys", "/downloads",] },
        { title: "වෙනත් සබැඳි", list: ["රැකියා", "අප අමතන්න", "ප්‍රවර්ධන", "ප්‍රවෘත්ති", "රහස්යතා ප්රතිපත්තිය", "පාරිභෝගික පැමිණිලි පෝරමය"], links: ["/careers", "/contacts", "/promotions", "/news-and-events", "/downloads/privacy-policy", "contacts/complaints/#complaint-form"] },
      ],
      
      
      footerText: {
        subs_title1: "ඔබට ආරක්ෂිත මූල්‍ය විසඳුම් ඔබ අසලට",
        subs_title2: "අපගේ නවතම යාවත්කාලීන කිරීම් ලබාගැනීම සඳහා ලියාපදිංචි වන්න",
        subs_title3: "අපෙන්",
        subs_message: "අපගේ ප්‍රතිලාභ සහ යාවත්කාලීන කිරීම් ඔබගේ ඊමේල් හිමි inbox එකට ලබා ගැනීමට ලියාපදිංචි වන්න.",
        subs_field: "ඔබගේ ඊමේල් පත‍්‍රය ඇතුල් කරන්න",
        subs_btn: "ඉදිරිපත් කරන්න",
        intro: "Asia Asset Finance PLC, 1970 සැප්තැම්බර් 23 වන දින සමාගම පිහිටුවා ඇති අතර Fitch rating A+ ස්ථායී අවධි ශ්‍රේණිය ලබා ඇත සහ ශ්‍රී ලංකා මහ බැංකුවේ 2011 අංක 42 දරන මුල්‍ය ව්‍යාපාර පනත යටතේ මූල්‍ය කමිටු බලපත්‍රය ලැබ ඇත.",
        address: "ප්‍රධාන කාර්යාලය: අංක 76, උද්‍යාන වීදිය, කොළඹ 02, ශ්‍රී ලංකා",
      },
      

      //Landing Page Components
      tempData: {
        debenture_btn: "Debenture Issues 2024",
      },

      carouselLandingPage: [
        
        {
          src: banner1,
          title: "ඔබේ මූල්‍ය අනාගතය සඳහා නව්‍ය විසඳුම්",
          intro: "ඔබේ මූල්‍ය අනාගතය සවිබල ගැන්වීම",
          description:
            "අපි ඒෂියා ඇසට් ෆිනෑන්ස් හි මූල්‍ය සාර්ථකත්වය සඳහා නවෝත්පාදනය තුලින් සිදුවන බලපෑම පිලිබද විශ්වාස කරන්නෙමු. ගැලපෙන මුල්‍ය විසඳුම් ලබාදීම වෙනුවෙන් අපගේ ඇති කැපවීම ශ්‍රී ලංකාවේ මුල්‍ය ක්ෂේත්‍රය තුල ප්‍රමුඛයා ලෙස අපව ස්ථානගත කර ඇත. ඔබ ආයෝජනය කිරීමට, ඉතිරි කිරීමට හෝ ඔබේ මීළඟ විශාල ව්‍යාපෘතිය මූල්‍යකරණය කිරීමට බලාපොරොත්තු වන්නේද ? , එසේනම් අපි විශ්වාසයෙන් සහ විනිවිදභාවයෙන් යුතුව ඔබේ ගමනට සහාය වීමට බලා සිටින්නෙමු.",
        },
        {
          src: banner2,
          title: "සිහින සැබෑ වෙන මුල්‍ය විසඳුම් හමුවන තැන",
          intro: "මුල්‍ය නවෝත්පාදනය සහා ප්‍රබෝධමත් වර්ධනය ",
          description:
            "අපි හුදෙක් මූල්‍ය ආයතනයක් නොවන්නෙමු; අපි ඔබේ ප්‍රගතියේ හවුල්කරුවන් වෙමු. මූල්‍ය සඳහා වන අපගේ නව්‍ය ප්‍රවේශය ශ්‍රී ලංකාව පුරා සිටින පුද්ගලයන් සහ ව්‍යාපාර සවිබල ගැන්වීම සඳහා නිර්මාණය කර ඇත. පුද්ගලාරෝපිත සේවාවක් සමඟ අති නවීන තාක්‍ෂණය ඒකාබද්ධ කිරීමෙන්, අපි කාර්යක්ෂම පමණක් නොව, ඔබේ ඉලක්ක සපුරා ගැනීමට උපකාරී වන ඵලදායී මූල්‍ය විසඳුම් ලබා දෙන්නෙමු.",
        },
        {
          src: banner3,
          title: "ශ්‍රී ලංකා මූල්‍ය ක්ෂේත්‍රයේ ප්‍රමුඛයා",
          intro: "ඔබේ විශ්වාසය, අපගේ කැපවීම",
          description:
            "විශ්වාසය සහ විනිවිදභාවය අපගේ ව්‍යාපාරයේ මූලික පදනමයි. ශ්‍රී ලාංකේය මූල්‍ය ක්ෂේත්‍රයේ ප්‍රමුඛයෙකු ලෙස, අප කරන සෑම දෙයකදීම අඛණ්ඩතාවයේ ඉහළම ප්‍රමිතීන් පවත්වා ගැනීමට අපි කැපවී සිටිමු. අපගේ පළමු හමුවීමේ සිට අවසාන ගනුදෙනුව දක්වා, ඔබට ඔබගේ අවශ්‍යතාවලට ගැලපෙන පැහැදිලි, අවංක උපදෙස් සහ සේවාවන් සැපයීම වෙනුවෙන් අප කෙරෙහි විශ්වාසය තැබිය හැකිය.",
        },
      ],
      landingPageCards: {
        card1_title: "විශේෂඥ කණ්ඩායම",
        card1_description: "ඔබේ සාර්ථකත්වය සදහා උදව් කිරීමට  දැනුමෙන් සහ පළපුරුද්දෙන් යුත් අපගේ මූල්‍ය විශේෂඥයින් කැපවීමෙන් සහය වනු ඇත.",
        card2_title: "පුළුල් පරාසය",
        card2_description: "ශ්‍රී ලංකාව පුරා සිටින ගනුදෙනුකරුවන්ගේ අවශ්‍යතාවලට ගැලපෙන මූල්‍ය සේවා රාශියක් අප සතු වේ.",
        card3_title: "කඩිනම් සහ කාර්යක්ෂම සේවාව",
        card3_description: "ඔබේ කාලය ඉතිරි කර ගැනීමට සහ ඔබේ මූල්‍ය ගමන විධිමත් කිරීමට සැලසුම් කර ඇති ඉක්මන් සහ කරදරයකින් තොර සේවාවන් අදම අත්විඳින්න.",
      },
      whyChooseUs: {
        title_left: "ඒෂියා ඇසට් ෆිනෑන්ස් ",
        title_right: "තෝරාගත යුත්තේ ඇයි? ",
        description: "අපි ඒෂියා ඇසට් ආයතනය වශයෙන් අවුරුදු 50කට වැඩි කාලයක් පුරා අපගේ ආයෝජන මඟින් විවිධ පුද්ගලයන් සහ ව්‍යාපාර සදහා සහයෝගය ලබාදී ඇත. වඩාත් සාධාරණ රන් ණය, ලීසිං, උකස් ණය, සමූහ පුද්ගලික ණය, පුද්ගලික ණය, ව්‍යාපාර ණය, ආයතනික ණය, ක්ෂුද්‍ර ණය හෝ ඔබේ පොදු තැන්පතු භාර ගැනීම තුලින් තිරසාර ආර්ථිකයක් බිහිකිරීමට සමාජයට උදව් කර තිබීම ගැන අපි ආඩම්බර වෙමු.",
        card1: "ජීවිතයේ සෑම අවස්ථාවකටම  ගැලපෙන මුල්‍ය විසඳුම්",
        card2: "පුද්ගලික හදුනාගැනීමක්  සහිත අසමසම පාරිභෝගික සේවාවක් ",
        card3: "දශක ගණනාවක ප්‍රවීණ පිටුබලයක් සහිත නව්‍ය සේවා ",
    },   
    luckewalletLandingPage: {
      title1: "අපගේ ",
      title2: "Luckewallet ",
      title3: "ජංගම යෙදුම සමඟ ඔබේ මූල්‍ය ගමන පහසු කරගන්න",
      subtitle: "ඔබේ ස්මාට්ෆෝන් එකෙන්ම සිදු කළ හැකි නිරායාස සහ ආරක්ෂිත මූල්‍ය සේවාවන් අත්විඳින්න.",
      learn_more: "තව දැනගන්න",
      key_features1: "ප්‍රධාන ",
      key_features2: "විශේෂාංග",
      feature1_title: "පහසු ගිණුම් කළමනාකරණය",
      feature1_description: "ඔබගේ සියලුම ගිණුම් එකම තැනකින් බැලීමට සහ කළමනාකරණය කරන්න.",
      feature2_title: "ඉක්මන් ණය අයදුම්පත්",
      feature2_description: "ණය සඳහා පහසුවෙන් අයදුම් කිරීමට සහ ඔබගේ අයදුම්පත් තත්ත්වය බාධාවකින් තොරව  බලාගන්න",
      feature3_title: "මාරුකිරීම් සඳහා ඉක්මන් හා පවත්නා සේවාවන්",
      feature3_description: "ක්ෂණික, ආරක්ෂිත, සහ පහසු මාර්ගගත මූල්‍ය සේවාවන් අත්විඳින්න.",
      feature4_title: "තත්‍ය කාලීන දැනුම්දීම්",
      feature4_description: "ගිණුම් ක්‍රියාකාරකම් සහ දීමනා පිළිබඳ ක්ෂණික පණිවිඩ සමඟ යාවත්කාලීන වෙන්න.",
      download_now: "දැන්ම බාගතකරන්න!",
    },
  productsOverviewTextLandingPage: {  
    title: "අපගේ මූල්‍ය නිෂ්පාදන සොයාගන්න",  
    subtitle: "ආරක්ෂිත මූල්‍ය වර්ධනය සඳහා සම්පුර්ණ විසඳුම්",  
    description: "ඒෂියා ඇසට් ෆිනෑන්ස් හිදී, ඔබේ අත්‍යවශ්‍යතා සපුරාලීම සඳහා සකස් කළ විවිධ මූල්‍ය නිෂ්පාදන අපි සපයන්නෙමු. ඔබ ඔබගේ අරමුදල් වර්ධනය කිරීමට, ණයක් ලබා ගැනීමට, හෝ ආයෝජන අවස්ථා පිලිබද දැනගැනීමට කැමතිද එසේනම් ඔබේ මූල්‍ය සුභසාධනය වෙනුවෙන් සකසා ඇති අපගේ නිෂ්පාදන ඔබට ප්‍රයෝජනවත් වනු ඇත. ආරක්ෂිත ස්ථාවර තැන්පතු, නම්‍යශීලී රන් ණය, සහ කුඩා පොලී ණය අතරින් ඔබට ගැලපෙන විසදුමක් තෝරාගන්න. අපගේ නව්‍ය විද්‍යුත් ඉතුරුම් ගිණුම්, තරඟකාරී විදේශ විනිමය සේවා, සහ පහසු ලීසිං විකල්ප සමඟ, ඔබේ මූල්‍ය ගමනේ සෑම පැතිකඩක්ම ආවරණය කරයි. ඔබගේ මූල්‍ය සාර්ථකත්වය සවිබල ගන්වන විශ්වාසනීය, පුද්ගලාරෝපිත විසඳුම් ලබා දීම වෙනුවෙන් ඔබට අප කෙරෙහි විශ්වාසය තැබිය හැක.",  
},  
  
  productsOverviewLandingPage: [
    { title: "ස්ථාවර තැන්පතු", image: FixedDeposits, description: "ස්ථාවර ප්‍රතිලාභ සමඟ ඔබේ ඉතුරුම් සුරක්ෂිත කරගන්න." },
    { title: "රන් ණය", image: GoldLoan, description: "නම්‍යශීලී ඉතුරුම් සමඟ ඔබේ වත්කම් වර්ධනය කරගන්න." },
    { title: "ක්ෂුද්‍ර ණය", image: Mortgage, description: "ඔබේ සෑම අවශ්‍යතාවක් සඳහාම අඩු පොලී අනුපාතවලින් ණය ලබාගන්න." },
    { title: "ලීසිං", image: Leasing, description: "අඩු පොලී අනුපාත සමඟ පහසු වියදම්." },
    { title: "විද්‍යුත් ඉතුරුම් ගිණුම", image: Luckewallet, description: "පුළුල් ආරක්ෂාවක් සහිත විද්‍යුත් ගිණුම්." },
    { title: "විදේශ විනිමය හුවමාරුව", image: Forex, description: "විවිධ විකල්ප සමඟින් ඔබේ ප්‍රතිලාභ උපරිම කරගන්න." },
],
testimonialsText: {
  title: "අපගේ ගනුදෙනුකරුවන් පවසන දේ",
  subtitle: "සාර්ථකත්වය සහ තෘප්තිය පිළිබඳ සැබෑ තොරතුරු",
},
testimonials: [
  {
    personName: "නිරෝශන් ප්‍රනාන්දු",
    location: "තුඩුල්ල සිට",
    imageUrl: "/media/testimonials/niroshan_fernando.webp",
    quote: "මම එෂියා ඇසට් ෆිනෑන්ස් ව්ශ්වාසයෙන් තොරාගන්නේ මූල්‍ය ස්ථාවරත්වයේ සහ 54 වසරක අභිමානවත් සේවය නිසයි !",
    rating: 5,
  },
  {
    personName: "එස් යෝගරාජා",
    location: "හෙකිත්ත සිට",
    imageUrl: "/media/testimonials/s_yogaraja.webp",
    quote: "මට දිරිය දුන්නේ ඒෂියා ඇසට් තමයි.",
    rating: 5,
  },
  /*{
    personName: "එල් නාලිනි",
    location: "හෙකිත්ත සිට",
    imageUrl: "/media/testimonials/l_nalini.webp",
    quote: "Aමට දිරිය දුන්නේ ඒෂියා ඇසට් තමයි.",
  },*/
  {
    personName: "සෞම්‍යා නිලුක්ෂි",
    location: "අවරකොටුව සිට",
    imageUrl: "/media/testimonials/saumya_nilukshi.webp",
    quote: "ඒෂියා ඇසෙට් ෆිනෑන්ස් කියන්නේ මනුස්සකම පිරුණු අපේ තැනක්!",
    rating: 5,
  },
],
branchDetailsLandingPage: {
  title1: "අපගේ",
  title2: "ශාඛා",
  subtitle: "මුල්‍ය විසදුම් දැන් පහසුවෙන්ම ඔබ වෙත",
  description1: "අදම අපගේ ",
  description2: "ශාඛා 100+ ",
  description3: "අතුරින් එකකට ගොස් අපගේ පුද්ගලාරෝපිත සේවාව අදම අත්විඳින්න. ශ්‍රී ලංකාවේ කොතැන සිටියත් ඔබගේ මූල්‍ය ගමනට සහයක්.",
  //description4: "ඇසියා ඇසට් ෆිනෑන්ස් පීඑල්සී ",
  //description5: "ඉහළින්ම ප්‍රසිද්ධයි. ශ්‍රී ලංකාවේ ඔබ සිටින තැනට බැගින්, ඔබගේ මූල්‍ය ගමනට අපි සහය වනවා.",
  newbranches_title: "අපගේ නවතම ශාඛා",
  newbranches_description: "අපගේ විශ්වාසනීය මූල්‍ය සේවාවන් ඔබට වඩාත් සමීප කරමින් අපගේ නවතම ශාඛා විවෘත කිරීම පිළිබඳව අපි ඉතා සතුටට පත් වෙමු. මෙම ශාඛා මගින් අපගේ  සේවාවන් දිවයින පුරා සිටින ඔබට ලබාදේ. අපගේ නවතම ශාඛා වෙත පැමිණ ඔබ අපෙන් බලාපොරොත්තු වන විශ්වාසනීය සහ පුද්ගලාරෝපිත සේවාවම අදම අත්විඳින්න.",
  newest_branch_name: "දෙනියාය",
  newest_branch_address: "අංක 196, මධ්‍යම පාර, දෙනියාය",
  newest_branch_tp: "+94 11 7699000",
  newest_branch_email: "deniyaya@aaf.lk",
  our_branch_network_btn: "අපගේ ශාඛා ජාලය",
},
inquiryForm: {
  title: "අප සමඟ අදම සම්බන්ධ වන්න",
  subtitle: "මූල්‍ය විසඳුම් ඔබට තවත් සමීප කරමින්",
  label1: "නම",
  field1: "ඔබේ නම ඇතුළත් කරන්න",
  error1: "කරුණාකර ඔබේ නම ලබා දෙන්න",
  error1_1: "කරුණාකර සත්‍යයින්ගෙන් යුත් විද්‍යුත් තැපැල් ලිපිනයක් ලබා දෙන්න",
  label2: "ජංගම දුරකතන අංකය",
  field2: "ඔබේ ජංගම දුරකතන අංකය ඇතුළත් කරන්න",
  error2: "කරුණාකර ඔබේ ජංගම අංකය ලබා දෙන්න",
  label3: "විද්‍යුත් තැපෑල (අනිවාර්ය නොවේ)",
  field3: "ඔබේ විද්‍යුත් තැපැල් ලිපිනය ඇතුළත් කරන්න",
  error3: "කරුණාකර ඔබේ විද්‍යුත් තැපෑල ලබා දෙන්න",
  label4: "පණිවිඩය (අනිවාර්ය නොවේ)",
  field4: "ඔබේ පණිවිඩය මෙහි ඇතුළත් කරන්න",
  error4: "",
  label5: "සේවකයාගේ නම",
  field5: "කරුණාකර සේවකයාගේ නම මෙහි ඇතුලත් කරන්න",
  error5: "",
  label6: "දෙපාර්තමේන්තුව",
  field6: "කරුණාකර දෙපාර්තමේන්තු නම මෙහි ඇතුලත් කරන්න",
  error6: "",
  label7: "ශාඛාව",
  field7: "කරුණාකර මෙහි ශාඛාවේ නම ඇතුලත් කරන්න",
  error7: "",
  label8: "ලිපිනය",
  field8: "කරුණාකර ඔබගේ ලිපිනය ඇතුලත් කරන්න",
  error8: "",
  label9: "ළඟම නගරය",
  field9: "කරුණාකර ඔබට ළඟම නගරය ඇතුලත් කරන්න",
  error9: "",
  label10: "මුදල (අනිවාර්ය නොවේ)",
  field10: "කරුණාකර මුදල ඇතුළත් කරන්න",
  error10: "",
  label11: "සේවාව තෝරන්න",
  field11: "කරුණාකර සේවාවක් තෝරන්න",
  error11: "කරුණාකර සේවාවක් තෝරන්න",
  label12: "භාෂාව තෝරන්න",
  field12: "කරුණාකර භාෂාවක් තෝරන්න",
  error12: "කරුණාකර භාෂාවක් තෝරන්න",
  button1: "යලි සකසන්න",
  button2: "යොමු කරන්න",
  close_btn: "ආපසු",
  response_pass: "ඔබගේ විමසුම සාර්ථකව යවා ඇත!",
  response_fail: "විමසුම යැවීම අසාර්ථකයි! කරුණාකර නැවත උත්සහ කරන්න.",
  inquiry: "විමසීම් ",
  cus_complaint: "පාරිභෝගික පැමිණිලි පෝරමය",
  titleLabel: "ආමන්ත්‍රණය",
  titlePlaceholder: "කරුණාකර ආමන්ත්‍රණයක් තෝරන්න",
  titleOptions: ["මහතා", "මහත්මිය", "මෙනෙවිය", "ආචාර්ය", "මහාචාර්ය", "පූජ්‍ය", "වෙනත්", ],
  customer_details: "පාරිභෝගික තොරතුරු",
  employee_details: "සේවක තොරතුරු",
},

//About Page Components
bannerAbout: {
  src: bannerAbout,
  title: "අප ගැන",
  intro: "1970 සිට ",
  specialnote: "ඔබේ මූල්‍ය අනාගතය සවිබල ගැන්වීම",
  description: "“ මිනිසුන් සවිබල ගැන්වීම සහ ජීවිත පරිවර්තනය කිරීම ”",
},
cardsAbout: [
  { stat: "70,000+", text: "පාරිභෝගිකයන්", icon: faUsers },
  { stat: "54+", text: "වසර ගණනාවක අත්දැකීම්", icon: faClock },
  { stat: "1000+", text: "සේවකයින්", icon: faBriefcase },
  { stat: "100+", text: "ශාඛා", icon: faBuilding },
],
overviewAbout: {
  title: "හැඳින්වීම",
  description: "වසර 50 කටත් වැඩි කාලයක් ඒෂියා ඇසට් ෆිනෑන්ස් පීඑල්සී හි අපි අපේ අවශ්‍යතා ගණන් කළ නොහැකි තරම් පුද්ගලයින් සහ ව්‍යාපාර සඳහා ආයෝඡනය කර ඇත්තෙමු. අපි වඩාත් සාධාරණ මිල ගණන් යටතේ ලීසිං, උකස් ණය, කණ්ඩායම් ණය, පුද්ගලික ණය, ව්‍යාපාරික ණය, ආයතනික ණය, ක්ෂුද්‍ර ණය හෝ ඔබේ පොදු තැන්පතු ලබාගැනීම තුලින් අපි ප්‍රජාවන් තිරසාර ආර්ථිකයන් ලෙස පෝෂණය කිරීම ගැන ආඩම්බර වන්නෙමු. ඒෂියා ඇසට් ෆිනෑන්ස් පීඑල්සී යනු මුතූට් ෆිනෑන්ස් ලිමිටඩ් හි පූර්ණ අනුබද්ධිත ආයතනයක් වන අතර ශ්‍රී ලංකා මහ බැංකුවේ ලියාපදිංචි පූර්ණ බලපත්‍රලාභී, තැන්පතු ගැනීමේ ආයතනයකි. මෙම අවශ්‍යතා සපුරාලීම සඳහා වූ සරල ගවේෂණයේදී සමාජයේ මූල්‍ය අවශ්‍යතා දිනෙන් දින වර්ධනය වන අතර වත්කම් වසර ගණනාවක් තිස්සේ වර්ධනය වී ඇති බව අප විසින් වටහා ගන්නා ලදී. අපගේ උත්සාහයන් සැම විටම පැවතුණේ ගනුදෙනුකරුවන්ට ඔවුන් ජීවත් වන ආකාරය සහ ඔවුන් ව්‍යාපාර කරන ආකාරය වර්‍ධනය කරගැනීමට උපකාර කිරීම තුලයි. ඒෂියා ඇසට් ෆිනෑන්ස් පීඑල්සී හි කතාව “මිනිසුන් සවිබල ගැන්වීම සහ ජීවිත වෙනස් කිරීම” පිළිබඳ කතාවකි.",
},
missionVisionGoal: {
  mission: {
    category: "මෙහෙයුම",
    title: "අපගේ පාරිභෝගිකයින්ගේ මූල්‍ය අවශ්‍යතා සඳහා අපි ලබාදෙන විසඳුම් සාම්ප්‍රදායික නොවන, අලුත් කරන ලද සහ ඔවුන්ගේ අවශ්‍යතා සඳහාම වන අතර, අපගේ පාරිභෝගික සේවාව ප්‍රමිතීන් ඉක්මවා ගොස් ඔවුන්ගේ අපේක්ෂාවන් ඉක්මවීමට කැප වී ඇත.",
    description: "",
  },
  vision: {
    category: "දැක්ම",
    title: "මිනිසුන් සවිබල ගැන්වීම සහ ජීවිත පරිවර්තනය කිරීම",
    description: "",
  },
  goal: {
    category: "ඉලක්කය",
    title: "ශ්‍රී ලංකාවේ ප්‍රමුඛතම මූල්‍ය සමාගමක් වීම",
    description: "",
  }
},
bodProfilesAbout: [
  { imgSrc: mrAlexandra, name: 'ජී එම් අලෙක්සැන්ඩර් මහතා', title: 'ස්වාධීන නොවන විධායක නොවන අධ්‍යක්ෂ' },
  { imgSrc: mrBijimon, name: 'කේ ආර් බිජිමොන් මහතා', title: 'ස්වාධීන නොවන විධායක නොවන අධ්‍යක්ෂ' },
  { imgSrc: mrJayasekara, name: 'ජේ පී ඩී ආර් ජයසේකර මහතා', title: 'ස්වාධීන විධායක නොවන අධ්‍යක්ෂ' },
  { imgSrc: mrKumarasiri, name: 'ටී සී ඩී කුමාරසිරි මහතා', title: 'ස්වාධීන විධායක නොවන අධ්‍යක්ෂ' },
  { imgSrc: mrRoshan, name: 'ආර් ඩී එස් ගුණසේකර මහතා', title: 'විධායක අධ්‍යක්ෂ / ප්‍රධාන මෙහෙයුම් නිලධාරී' },

],
bodTextsAbout: {
  title1: "සමාගමේ අධ්‍යක්ෂ මණ්ඩලය",
  title2: "",
  subtitle: "අපගේ දැක්ම ප්‍රවීණතාවයෙන් සහ අඛණ්ඩතාවයෙන් මෙහෙයවීම ",
  intro: "අපගේ අධ්‍යක්ෂ මණ්ඩලය මූල්‍ය කර්මාන්තය පිළිබඳ විවිධ පසුබිම් අත්දැකීම් සහිත වෘත්තීය දැනුමක් ඇති පිරිසකගෙන් සමන්විත වේ. ඔවුන්ගේ මග පෙන්වීම සහ යෝජනා ඒෂියා ඇසෙට් ෆිනෑන්ස් හි වර්ධනය හා සාර්ථකත්වය සඳහා අවශ්‍ය වේ.",
  chairman_name: "වී ඒ ප්‍රශාන්ත් මහතා",
  chairman_position: "සභාපති",
  chairman_description: "වි ඒ ප්‍රශාන්ත මහතා මූල්‍ය බැංකු ක්ෂේත්‍රයේ 37 වසරක පළපුරුද්දක් ඇති පාරිභෝගික බැංකු සේවා හා කෝපරේට් බැංකු සේවා, භාණ්ඩාගාර මෙහෙයුම් ක්‍රියාකාරීත්වය සහ තොරතුරු ආරක්ෂාව පිළිබඳව විවිධ අත්දැකීම්...",
  ceo_name: "ආර් ජේ ඒ ගුණවර්ධන මහතා",
  ceo_position: "අධ්‍යක්ෂ / ප්‍රධාන විධායක නිලධාරි",
  ceo_description: "මහාචාර්ය රජීව් ගුණවර්ධන, Asia Asset Finance PLC හි ප්‍රධාන විධායක නිලධාරි / අධ්‍යක්ෂ, 2009 දෙසැම්බර් මාසයේ අධ්‍යක්ෂ මණ්ඩලයට පත් විය. සංවිධානයේ දර්ශනය සකස් කිරීම හා ක්‍රියාත්මක කිරීම සඳහා ඔහු වගකියයි...",
  see_more_btn: "වැඩිදුර විස්තර",
  view_profile_btn: "වැඩිදුර විස්තර",
},
comTextsAbout: {  
  title1: "සමාගම්",  
  title2: "කළමනාකරණය",  
  subtitle: "ආරක්ෂිත මූල්‍ය වර්ධනය සඳහා සම්පුර්ණ විසඳුම්",  
  description: "ඒෂියා ඇසට් ෆිනෑන්ස් හි, අපගේ ආයතනික කළමනාකරණ කණ්ඩායම සමන්විත වන්නේ අත්දැකීම් සම්භාරයක් සහ තීක්ෂ්ණ බුද්ධියක්  සහිත පළපුරුදු වෘත්තිකයන්ගෙන් ය. ඔවුන්ගේ උපායමාර්ගික නායකත්වය සහ විශිෂ්ටත්වය සඳහා වූ කැපවීම අපගේ සමාගමේ සාර්ථකත්වයට හේතු වන අතර, අපි ශ්‍රී ලංකාවේ මූල්‍ය සේවා කර්මාන්තයේ ඉදිරියෙන්ම සිටින බව සහතික කරමු."  
},  

comProfilesAbout: [ 
  { imgSrc: mrRajiv, name: 'රජීව් ගුණවර්ධන', title: 'විධායක අධ්‍යක්ෂ / ප්‍රධාන විධායක නිලධාරී' },
  { imgSrc: mrRoshan, name: 'රොෂාන් ගුණසේකර', title: 'විධායක අධ්‍යක්ෂ / ප්‍රධාන මෙහෙයුම් නිලධාරි' },
  { imgSrc: msKokila, name: 'කෝකිලා පෙරේරා', title: 'ප්‍රධාන මුල්‍ය නිලධාරී' },
  { imgSrc: mrJayantha, name: 'ජයන්ත වීරප්පුලිගෙ', title: 'සමාන්‍යාධිකාරී - සේවා මෙහෙයුම්' },
  { imgSrc: mrSajith, name: 'සජිත් අතපත්තු', title: 'සමාන්‍යාධිකාරී - මෙහෙයුම්' },
  { imgSrc: mrInditha, name: 'ඉන්දිත ජයතිලක', title: 'සමාන්‍යාධිකාරී - තොරතුරු තාක්ෂණ' },
  { imgSrc: mrPraveen, name: 'ප්‍රවීන් පීරිස්', title: 'සමාන්‍යාධිකාරී - භාණ්ඩාගාරය' },
  { imgSrc: mrSameera, name: 'සමිර වේවැල්දෙණිය', title: 'නියෝජ්‍ය සමාන්‍යාධිකාරී - ස්ථාවර තැන්පතු' },
  { imgSrc: mrThushara, name: 'තුෂාර විජේවර්ධන', title: 'නියෝජ්‍ය සමාන්‍යාධිකාරී - ණය' },
  { imgSrc: msWaruni, name: 'වරුණි පෙරේරා', title: 'නියෝජ්‍ය සමාන්‍යාධිකාරී - අවදානම් කළමනාකරණය' },
],

branchNetworktext: {
  title1: "අපගේ ",
  title2: "ශාඛා ජාලය",
  subtitle: "මූල්‍ය විසඳුම් ඔබ වෙත සමීප කරමින් ",
  description1: "අදම අපගේ ",
  description2: "ශාඛා 100+ ",
  description3: "අතුරින් එකකට ගොස් ",
  description4: "ඒෂියා ඇසට් ෆිනෑන්ස් ",
  description5: "හි පුද්ගලාරෝපිත සේවාව අත්විඳින්න. ඔබ ශ්‍රී ලංකාවේ කොතැනක සිටියත් ඔබගේ මූල්‍ය ගමනට සහය වීමට අපි මෙහි සිටිමු.",
  label: "ඔබගේ ආසන්නතම ශාඛාව සොයන්න:",
  field: "ශාඛාව සොයන්න...",
  all_tab: " සියලුම කලාප",
  central_tab: "මධ්‍යම කලාපය ",
  eastern_tab: "නැගෙනහිර කලාපය",
  northern_tab: "උතුරු කලාපය",
  sabaragamuwa_tab: "සබරගමුව කලාපය",
  southern_tab: "දක්ෂිණ කලාපය",
  uva_tab: "ඌව කලාපය",
  western_tab: "බස්නාහිර කලාපය",
  northwestern_tab: "වයඹ කලාපය",
  viewOnMapBtn: "සිතියම මත බලන්න",
  callNowBtn: "අමතන්න"
},
branchesData: {
  head_office: {
    title: "ප්‍රධාන කාර්යාලය",
    branches: [
      { name: "ප්‍රධාන කාර්යාලය", location: "අංක 76, උද්‍යාන වීදිය, කොළඹ 02.", contact: "0117699150-152", image: "/media/branches/headoffice.webp", lat: "6.915119", lng: "79.859896" },

    ]
  },
  western: {
    title: "බස්නාහිර කලාපය",
    branches: [
      { name: "මීගමුව", location: "අංක 295, ප්‍රධාන වීදිය, මීගමුව.", contact: "0317699020-023", image: "/media/branches/negombo.webp", lat: "7.21274791602540", lng: "79.8410733794413" },
      { name: "ගම්පහ", location: "අංක 69, කොළඹ පාර, ගම්පහ.", contact: "0337699010-015", image: "/media/branches/gampaha.webp", lat: "7.09190677434260", lng: "79.9952417365682" },
      { name: "කළුතර", location: "අංක 344, මහ වීදිය, කළුතර දකුණ.", contact: "0347699010-016", image: "/media/branches/kaluthara.webp", lat: "6.57872884306934", lng: "79.9623528915085" },
      { name: "මොරටුව", location: "අංක 16, නව ද සොයිසා පාර, රාවතාවත්ත, මොරටුව.", contact: "0117681510-518", image: "/media/branches/moratuwa.webp", lat: "6.78770536070150", lng: "79.8860613498311" },
      { name: "වැල්ලවත්ත", location: "අංක 344, ගාලු පාර, වැල්ලවත්ත.", contact: "0117681530-533", image: "/media/branches/wellawatte.webp", lat: "6.867254", lng: "79.86071" },
      { name: "මතුගම", location: "K & W මධ්‍යස්ථානය, අංක 5, ගාමිණී මාවත, අලුත්ගම පාර, මතුගම.", contact: "0347699020-022", image: "/media/branches/mathugama.webp", lat: "6.52165873970042", lng: "80.1145063423287" },
      { name: "කොටහේන", location: "අංක 31, කොටහේන වීදිය, කොළඹ 13.", contact: "0117699109-110", image: "/media/branches/kotahena.webp", lat: "6.94858156424990", lng: "79.8623878922922" },
      { name: "පානදුර", location: "අංක 114, ඩී එස් සේනානායක මාවත, පානදුර.", contact: "0387699010-012", image: "/media/branches/panadura.webp", lat: "6.7141", lng: "79.907744" },
      { name: "මට්ටක්කුලිය", location: "අංක 3/810, ෆාම් පාර, මට්ටක්කුලිය.", contact: "0117699480-482", image: "/media/branches/mattakkuliya.webp", lat: "6.97804611388718", lng: "79.8762274337617" },
      { name: "ග්‍රෑන්ඩ් පාස් ", location: "අංක 428, මාදම්පිටිය පාර, කොළඹ 14.", contact: "0117681500-502", image: "/media/branches/grandpass.webp", lat: "6.95719420793741", lng: "79.8769183828602" },
      { name: "ඇලකන්ද", location: "අංක 327, තිඹිරිගස්යාය, හැඳල, වත්තල.", contact: "0117699446", image: "/media/branches/elakanda.webp", lat: "6.99478253017945", lng: "79.8756576325868" },
      { name: "හෝමාගම", location: "අංක 78 ඒ, හයිලෙවල් පාර, හෝමාගම.", contact: "0117699415-417", image: "/media/branches/homagama.webp", lat: "6.84152813241502", lng: "80.0038718288356" },

    ]
  },
  eastern: {
    title: "නැගෙනහිර කලාපය",
    branches: [
      { name: "මඩකලපුව", location: "අංක 187, ත්‍රිකුණාමලය පාර, මඩකලපුව.", contact: "0657699010-012", image: "/media/branches/batticaloa.webp", lat: "7.718111", lng: "81.6985" },
      { name: "චෙන්කලඩි", location: "නව මාර්කට් පාර, චෙන්කලඩි.", contact: "0657699020-022", image: "/media/branches/chenkalady.webp", lat: "7.78358189774221", lng: "81.5931858680916" },
      { name: "කල්මුණේ", location: "අංක 69, ප්‍රධාන පාර, කල්මුණේ.", contact: "0677699020-022", image: "/media/branches/kalmunai.webp", lat: "7.41654230398386", lng: "81.8246567153597" },
      { name: "සම්මන්තුරේ", location: "අංක 120, අම්පාර පාර, කරුවාඩ්ඩුකල්-02, සම්මන්තුරේ.", contact: "0677699025-027", image: "/media/branches/sammanthurai.webp", lat: "7.357484", lng: "81.795105" },
      { name: "අක්කරපත්තුව", location: "අංක 155, අම්පාර පාර, අක්කරපත්තුව.", contact: "0677699010-012", image: "/media/branches/akkaraipattu.webp", lat: "7.21787575668551", lng: "81.8492521045523" },
      { name: "වාලච්චේන", location: "ප්‍රධාන වීදිය,මාවඩිචේනයි, වාලච්චේන.", contact: "0657699040-042", image: "/media/branches/valaichchenai.webp", lat: "7.912117223429645", lng: "81.52707297668584" },
      { name: "ත්‍රිකුණාමලය", location: "අංක 285, මධ්‍යම පාර, ත්‍රිකුණාමලය.", contact: "0267699020-022", image: "/media/branches/trincomalee.webp", lat: "8.57941500313335", lng: "81.2308190342658" },
      { name: "කින්නියා", location: "අංක 88, ප්‍රධාන වීදිය, සින්න කින්නියා, කින්නියා 03.", contact: "0267699030-032", image: "/media/branches/kinniya.webp", lat: "8.502384474", lng: "81.1827385164287" },
      { name: "කලවංචිකුඩි", location: "අංක 172, ප්‍රධාන වීදිය, කලවංචිකුඩි.", contact: "0657699030-035", image: "/media/branches/kalawanchikuddy.webp", lat: "7.517246", lng: "81.786933"  },
      { name: "පොතුවිල්", location: "ප්‍රධාන වීදිය, පොතුවිල්.", contact: "0637699010-012", image: "/media/branches/pottuvil.webp", lat: "6.875271", lng: "81.830633" },
      { name: "කන්තලේ", location: "අංක 137, ප්‍රධාන වීදිය, කන්තලේ.", contact: "0267699010-012", image: "/media/branches/kanthale.webp", lat: "8.351263", lng: "81.006993"  },
      { name: "තිරුක්කෝවිල්", location: "ප්‍රධාන වීදිය, තිරුක්කෝවිල්.", contact: "0677699040-042", image: "/media/branches/thirukkovil.webp", lat: "7.1159148318762", lng: "81.8520663720749" },
      { name: "නින්දවූර්", location: "අංක 42/11, ප්‍රධාන වීදිය, නින්දවූර්.", contact: "0677699050-052", image: "/media/branches/ninthavur.webp", lat: "7.35547048615244", lng: "81.8458707513758" },
      { name: "සේරුනුවර", location: "අංක 44, A.R.B.03, සේරුනුවර.", contact: "0267699050-052", image:  "/media/branches/serunuwara.webp", lat: "8.325101", lng: "81.300209" },
      { name: "මුතූර්", location: "මඩකලපු පාර, අලිම් නගර්, මුතූර්.", contact: "0267699040-042", image:  "/media/branches/muthur.webp", lat: "8.44276637829916", lng: "81.2630812704972" },
      { name: "අම්පාර", location: "අංක 451, D.S සේනානායක පාර, අම්පාර.", contact: "0637699020-023", image: "/media/branches/ampara.webp", lat: "7.2917359", lng: "81.6803183"  },
      { name: "කොක්කඩිචෝලයි", location: "ප්‍රධාන වීදිය, අංක 10, කොක්කඩිචෝලයි.", contact: "0657699060-063", image: "/media/branches/kokkadicholai.webp", lat: "7.609681591789088", lng: "81.7121303580231" },
      { name: "කිරාන්", location: "ප්‍රධාන වීදිය, කිරාන්.", contact: "0657699050-053", image: "/media/branches/kiran.webp", lat: "7.865244496822327", lng: "81.53848100905222" },
      { name: "පන්කුලම", location: "ප්‍රධාන වීදිය, ත්‍රිකුණාමලය පාර, පන්කුලම.", contact: "0117170757", image: "/media/branches/pankulam.webp", lat: "8.629169066638466", lng: "81.03232430445199" },
      { name: "ආරයම්පති", location: "ප්‍රධාන වීදිය, ආරයම්පති.", contact: "0117170758", image: "/media/branches/arayampathy.webp", lat: "7.664316664102133", lng: "81.7391842050213" },
      { name: "කාරයිතිවු", location: "ප්‍රධාන වීදිය, කාරයිතිවු 01.", contact: "0117170759", image: "/media/branches/karaitivu.webp", lat: "7.384270233691014", lng: "81.83753616227506" },
      { name: "පුල්මුඩේ", location: "අංක 4, ප්‍රධාන වීදිය, පුල්මුඩෙයි.", contact: "1369", image: "/media/branches/pulmoddai.webp", lat: "8.939817280704222", lng: "80.98680765952446" },
      { name: "ඔට්ටමාවඩි", location: "ප්‍රධාන වීදිය, මාවඩිචේන, වාලච්චේන.", contact: "0117170762", image: "/media/branches/oddamavadi.webp", lat: "7.912146446855825", lng: "81.52707431779137" },

    ]
  },
  southern: {
    title: "දකුණු කලාපය",
    branches: [
      { name: "ගාල්ල", location: "අංක 170/172, කඩවීදිය, ප්‍රධාන වීදිය, ගාල්ල.", contact: "0917699000-006", image: "/media/branches/galle.webp", lat: "6.035643578305275", lng: "80.22053327164475" },
      { name: "මාතර", location: "79, අනගාරික ධර්මපාල මාවත, මාතර.", contact: "0417699010-012", image: "/media/branches/matara.webp", lat: "5.949379105734931", lng: "80.54374826944834" },
      { name: "බේරුවල", location: "අංක 199, ජයතු, ගාලු පාර, බේරුවල.", contact: "0347699030-034", image: "/media/branches/beruwala.webp", lat: "6.472090864359676", lng: "79.9847138819168" },
      { name: "අම්බලන්තොට", location: "අංක 55, ප්‍රධාන වීදිය, අම්බලන්තොට.", contact: "0477699000-003", image: "/media/branches/ambalantota.webp", lat: "6.122573584370459", lng: "81.02260975452502" },
      { name: "ඇල්පිටිය", location: "අංක 14, අම්බලන්ගොඩ පාර, ඇල්පිටිය.", contact: "0917699010-013", image: "/media/branches/elpitiya.webp", lat: "6.29022579625833", lng: "80.16204502253045" },
      { name: "දෙනියාය", location: "අංක 196, ප්‍රධාන වීදිය, දෙනියාය.", contact: "0417699020-023", image: "/media/branches/deniyaya.webp", lat: "6.3445203771652094", lng: "80.56016068020213" }
    ]
  },
  northern: {
    title: "උතුරු කලාපය",
    branches: [
      { name: "යාපනය", location: "අංක 109, කස්ත්‍රියාර් පාර, යාපනය.", contact: "0217699050-052", image: "/media/branches/jaffna.webp", lat: "9.668439", lng: "80.011014" },
      { name: "චාවකච්චේරිය", location: "අංක 05, නුවර පාර, චාවකච්චේරි.", contact: "0217699040-042", image: "/media/branches/chavakachcheri.webp", lat: "9.659811", lng: "80.160394" },
      { name: "පේදුරුතුඩුව", location: "අංක 374/B, රැජින ගොඩනැගිලි සංකීර්ණය, පේදුරුතුඩුව.", contact: "0217699080-082", image: "/media/branches/pointpedro.webp", lat: "9.821597", lng: "80.236677" },
      { name: "චුන්නාකම්", location: "අංක 15, ස්ටේෂන් පාර, චුන්නාකම්.", contact: "0217699005-007", image: "/media/branches/chunnakam.webp", lat: "9.74494172154708", lng: "80.0281830455549" },
      { name: "නෙල්ලියඩි ", location: "අංක 82, පේදුරුතුඩුව පාර, නෙල්ලියඩි .", contact: "0217699070-072", image: "/media/branches/nelliady.webp", lat: "9.800680866182810", lng: "80.2034085379105" },
      { name: "චංගනී", location: "මහන් තංග ප්ලාසා, ප්‍රධාන වීදිය, චංගනී.", contact: "0217699030-032", image: "/media/branches/changanai.webp", lat: "9.747417", lng: "79.972524" },
      { name: "වේලනයි", location: "වාගලවාඩි, වේලනයි.", contact: "0217699020-022", image: "/media/branches/velanai.webp", lat: "9.63615", lng: "79.900869" },
      { name: "අච්චුවේලි", location: "අංක 53, අවරංගල් පාර, අච්චුවේලි.", contact: "0217699010-012", image: "/media/branches/achchuveli.webp", lat: "9.77819", lng: "80.115729" },
      { name: "මනිපායි", location: "අංක 260, මනිපායි පාර, මනිපායි.", contact: "0217699115-117", image: "/media/branches/manipay.webp", lat: "9.716558", lng: "79.996658"  },
      { name: "උරුම්පිරායි", location: "පලාලි පාර, උරුම්පිරායි.", contact: "0217699090-092", image: "/media/branches/urumpirai.webp", lat: "9.71497883728503", lng: "80.0438207355821" },
      { name: "කිලිනොච්චිය", location: "මුරුගන් පන්සල අසල, A9 මාර්ගය, කිලිනොච්චිය.", contact: "0217699060-064", image: "/media/branches/kilinochchi.webp", lat: "9.40012537643521", lng: "80.4084344188591" },
      { name: "පුදුකුඩිඉරිප්පු", location: "අංක 02, පරන්තන් පාර, පුදුකුඩිඉරිප්පු.", contact: "0217699085-087", image: "/media/branches/puthukudiyirippu.webp", lat: "9.31595127619480", lng: "80.6926724583882" },
      { name: "මුලතිව්", location: "ප්‍රධාන වීදිය, මුලතිව්.", contact: "0217699065-067", image: "/media/branches/mullaitivu.webp", lat: "9.26938280223006", lng: "80.8147716934679" },
      { name: "වවුනියාව", location: "අංක, 27, දෙවන හරස් වීදිය, වවුනියාව.", contact: "0247699010-012", image:  "/media/branches/vavuniya.webp", lat: "8.7523859", lng: "80.4970501" },
      { name: "ඔඩ්ඩුසුඩාන්", location: "මුලතිව්, ප්‍රධාන වීදිය, විද්‍යාපුරම්, ඔඩ්ඩුසුඩාන්.", contact: "0217699075-077", image: "/media/branches/oddusuddan.webp", lat: "9.15584218827980", lng: "80.6522662099292" },
      { name: "මන්නාරම", location: "අංක 05, පළමු හරස් වීදිය, පිටකොටුව, මන්නාරම.", contact: "0237699010-012", image: "/media/branches/mannar.webp", lat: "8.97978731934710", lng: "79.9118612790098" },
      { name: "චෙඩ්ඩිකුලම්", location: "ප්‍රධාන වීදිය, චෙඩ්ඩිකුලම්.", contact: "0247699020-022", image: "/media/branches/cheddikulam.webp", lat: "8.65996749223797", lng: "80.3124537278841" },
      { name: "මුලංකාවිල්", location: "මන්නාරම පාර, මුලන්කාවිල්.", contact: "0237699020-022", image: "/media/branches/mulankavil.webp", lat: "9.25438991577004", lng: "80.1419943983477" },
      { name: "මල්ලාවි", location: "තුන්නුකායි පාර, මල්ලාවි, මුලටිව්.", contact: "0217699095-098", image: "/media/branches/mallavi.webp", lat: "9.13529394427059", lng: "80.3121381846574" },
      { name: "විශ්වමඩු", location: "චුන්ඩිකුලම් හංදිය, විශ්වමඩුව, මුලතිව්", contact: "0247699030-033", image: "/media/branches/visuvamadu.webp", lat: "9.398447279520965", lng: "80.5381797667411" },
      { name: "පල්ලෙයි", location: "A9 පාර, පල්ලෙයි නගරය, පල්ලෙයි.", contact: "0217699111-114", image: "/media/branches/pallai.webp", lat: "9.608956493958125", lng: "80.33094899999998" },
      { name: "තලෙයිමන්නාරම", location: "වෝර්ඩ් අංක 8, පේසාලය - තලෙයිමන්නාරම පාර, මන්නාරම.", contact: "0237699040-043", image: "/media/branches/pesalai.webp", lat: "9.085049036054754", lng: "79.82747541349308" },
      { name: "පලාලි", location: "අංක 526, කන්කසන්තුරේ පාර, තෙල්ලිප්පල, පලාලි.", contact: "0217699105-108", image: "/media/branches/palaly.webp", lat: "9.785353650866927", lng: "80.0332677315456" },
      { name: "මුරුන්කන්", location: "මැදවච්චිය - මන්නාරම පාර, මුරුන්කන්, මන්නාරම.", contact: "0237699030-033", image: "/media/branches/murunkan.webp", lat: "8.839195949252595", lng: "80.03688615004205" },
      { name: "කල්වියන්කඩු", location: "1133, පේදුරු තුඩුව පාර, කල්වියන්කඩු, යාපනය.", contact: "1369", image: "/media/branches/kalviyankadu.webp", lat: "9.683052390135007", lng: "80.04115572446625" },
      { name: "මූලය", location: "340, කාරෛනගර් පාර, මූලය, චුලිපුරම්, යාපනය.", contact: "1369", image: "/media/branches/moolai.webp", lat: "9.749698599299634", lng: "79.93194292883584" },
    ]
  },
  central: {
    title: "මධ්‍යම කලාපය",
    branches: [
      { name: "දිගන", location: "J/2005 11/02. රජවැල්ල දිගන.", contact: "0817699030-037", image: "/media/branches/digana.webp", lat: "7.29628", lng: "80.733276" },
      { name: "හැටන්", location: "අංක 19, ප්‍රධාන වීදිය, හැටන්.", contact: "0517699001-004", image: "/media/branches/hatton.webp", lat: "6.890217390251945", lng: "80.5982444405497" },
      { name: "තලවකැලේ", location: "අංක 8/02, ප්‍රධාන වීදිය, තලවාකැලේ.", contact: "0527699035-037", image: "/media/branches/thalawakale.webp", lat: "6.93603423987978", lng: "80.6611086192476" },
      { name: "නාවලපිටිය", location: "අංක 75, අඹගමුව පාර, නාවලපිටිය.", contact: "0817699040-043", image: "/media/branches/nawalapitiya.webp", lat: "7.054935", lng: "80.530689" },
      { name: "ගම්පොල", location: "අංක 63, නුවරඑළිය පාර, ගම්පොල.", contact: "0817699001-004", image: "/media/branches/gampola.webp", lat: "7.16260499123707", lng: "80.5711980001460" },
      { name: "රාගල", location: "අංක 67, ප්‍රධාන වීදිය, රාගල.", contact: "0527699030-034", image: "/media/branches/ragala.webp", lat: "7.01260826631179", lng: "80.8595450177179" },
      { name: "මාතලේ", location: "අංක 242, ප්‍රධාන වීදිය, මාතලේ.", contact: "0667699020-023", image: "/media/branches/matale.webp", lat: "7.47154", lng: "80.624389" },
      { name: "පුණ්ඩළුඔය", location: "අංක 250/B/7, කඩදොර පිටිය පාර, පුණ්ඩළුඔය.", contact: "0517699030-032", image: "/media/branches/pundaluoya.webp", lat: "7.01568432166580", lng: "80.6649462711641" },
      { name: "මස්කෙළිය", location: "අංක 244, ප්‍රධාන වීදිය, මස්කෙළිය.", contact: "0527699010-012", image: "/media/branches/maskeliya.webp", lat: "6.831457", lng: "80.571781" },
      { name: "කටුගස්තොට", location: "අංක 144, කුරුණෑගල පාර, කටුගස්තොට.", contact: "0817699010-012", image:  "/media/branches/katugastota.webp", lat: "7.32320148924444", lng: "80.6229334576716" },
      { name: "නාඋල", location: "අංක 26, දඹුල්ල පාර, නාඋල.", contact: "0667699010-012", image: "/media/branches/naula.webp", lat: "7.705474", lng: "80.652596" },
      { name: "බොගවන්තලාව", location: "අංක 90, බ්‍රිඩ්වෙල් බසාර්, බොගවන්තලාව.", contact: "0527699020-022", image:  "/media/branches/bogawantalawa.webp", lat: "6.79662063632186", lng: "80.6782139381486" },
      { name: "පුස්සැල්ලාව", location: "අංක 305, නුවරඑළිය පාර, පුස්සැල්ලාව.", contact: "0817699020-022", image: "/media/branches/pussellawa.webp", lat: "7.11083080391683", lng: "80.6342358527280" },
      { name: "වත්තේගම", location: "අංක 55, ප්‍රධාන වීදිය, වත්තේගම.", contact: "0817699025-027", image: "/media/branches/wattegama.webp", lat: "7.350414", lng: "80.689989" },
      { name: "අගරපතන", location: "අංක 34, ප්‍රධාන වීදිය, අගරපතන.", contact: "0517699010-012", image: "/media/branches/agarapathana.webp", lat: "6.863127", lng: "80.707834" },
      { name: "හාවා එළිය", location: "අංක 26, උඩපුස්සැල්ලාව පාර, හාවා එළිය.", contact: "0527699115-117", image: "/media/branches/hawaeliya.webp", lat: "6.97102741829262", lng: "80.7825167520040" },
      { name: "කොටගල", location: "අංක 179/1, ප්‍රධාන වීදිය, කොටගල.", contact: "0517699020-022", image: "/media/branches/kotagala.webp", lat: "6.925373823", lng: "80.6081208208255" },
      { name: "හඟුරන්කෙත", location: "අංක 16, රාගල පාර, රිකිල්ලගස්කඩ, හඟුරන්කෙත.", contact: "0817699050-052", image: "/media/branches/hanguranketha.webp", lat: "7.14579467543395", lng: "80.7839917244378"  },
      { name: "ඩයගම", location: "අංක.B/1. ඩයගම බසාර්, ඩයගම.", contact: "0517699040", image: "/media/branches/dayagama.webp", lat: "6.855981523234289", lng: "80.74814456282456" },
      { name: "හපුගස්තලාව", location: "හල්ගොල්ල, අංක 01, හපුගස්තලාව, නාවලපිටිය.", contact: "0547699000-003", image: "/media/branches/hapugastalawa.webp", lat: "7.055096748044914", lng: "80.5729400273714" }
    ]
  },
  northwestern: {
    title: "වයඹ කලාපය",
    branches: [
      { name: "කුරුණෑගල", location: "අංක 81, මීගමුව පාර, කුරුණෑගල.", contact: "0377699001-007", image: "/media/branches/kurunegala.webp", lat: "7.486689243249437", lng: "80.35761032234345" },
      { name: "වෙන්නප්පුව", location: "224/3A, කොළඹ පාර, වෙන්නප්පුව.", contact: "0317699010-012", image: "/media/branches/wennappuwa.webp", lat: "7.33815246626181", lng: "79.8430220792178" },
      { name: "හලාවත ", location: "39, කොළඹ පාර, හලාවත.", contact: "0327699015-017", image: "/media/branches/chilaw.webp", lat: "7.57463737919976", lng: "79.7967668090491" },
      { name: "උඩප්පුව", location: "අංක 75, කොට්ඨාශ අංක 2, උඩප්පුව.", contact: "0327699030-032", image: "/media/branches/udappuwa.webp", lat: "7.74801456346774", lng: "79.7901098724389" },
      { name: "පුත්තලම", location: "අංක 61, කුරුණෑගල පාර, පුත්තලම.", contact: "0327699010-013", image: "/media/branches/puttalam.webp", lat: "8.02713861322438", lng: "79.8371258866641" },
      { name: "කල්පිටිය", location: "ප්‍රධාන පාර,කල්පිටිය.", contact: "0327699020-022", image: "/media/branches/kalpitiya.webp", lat: "8.23406059521350", lng: "79.7629007070031" },
      { name: "වාරියපොල", location: "බ්ලොක් 1 සහ 2, හලාවත පාර, වාරියපොල.", contact: "0377699010-013", image: "/media/branches/wariyapola.webp", lat: "7.61956186993873", lng: "80.2413604335368" },
      { name: "දංකොටුව", location: "අංක 07, නාත්තන්ඩිය පාර, දංකොටුව.", contact: "0317699030-033", image: "/media/branches/dankotuwa.webp", lat: "7.29765178658540", lng: "79.8818356590114" },

    ]
  },
  uva: {
    title: "ඌව කලාපය",
    branches: [
      { name: "මොනරාගල", location: "අංක 141,1 වැනි පටුමග, වැල්ලවාය පාර, මොනරාගල.", contact: "0557699020-022", image: "/media/branches/monaragala.webp", lat: "6.87200986129306", lng: "81.35137626671371" },
      { name: "මහියංගනය", location: "අංක 23, නව නගරය, මහියංගනය.", contact: "0557699030-032", image: "/media/branches/mahiyanganaya.webp", lat: "7.337864", lng: "80.989453"  },
      { name: "බදුල්ල", location: "අංක 49, කොකෝවත්ත පාර, බදුල්ල.", contact: "0557699010-018", image: "/media/branches/badulla.webp", lat: "6.986059", lng: "81.058621" },
      { name: "හපුතලේ", location: "අංක 27, ප්‍රධාන වීදිය, හපුතලේ.", contact: "0577699010-012", image: "/media/branches/haputale.webp", lat: "6.765414", lng: "80.952566" },
      { name: "වැලිමඩ", location: "අංක 51, නුවරඑළිය පාර, වැලිමඩ.", contact: "0577699015-017", image: "/media/branches/welimada.webp", lat: "6.901907", lng: "80.907925" },
      { name: "බිබිල", location: "අංක 6, රෝහල ඉදිරිපිට, මඩකලපුව පාර, බිබිල.", contact: "0557699050-052", image: "/media/branches/bibile.webp", lat: "7.163275", lng: "81.225672"  },
      { name: "බොරලන්ද", location: "හපුතලේ පාර, බොරලන්ද.", contact: "0577699020-023", image: "/media/branches/boralanda.webp", lat: "6.82825", lng: "80.8943889" },
      { name: "ගිරාඳුරුකෝට්ටේ", location: "අංක 4, නව නගරය, ගිරාදුරුකෝට්ටේ.", contact: "0277699000-003", image: "/media/branches/girandurukotte.webp", lat: "7.4716381", lng: "81.016923" },
      { name: "ලුණුගල", location: "අංක 156, ප්‍රධාන වීදිය, ලුණුගල.", contact: "0557699060-063", image: "/media/branches/lunugala.webp", lat: "7.0403865", lng: "81.2014486" },
      { name: "පස්සර", location: "අංක 289, ප්‍රධාන පාර, පස්සර.", contact: "0557699040-042", image: "/media/branches/passara.webp", lat: "6.935118", lng: "81.1559392" },
      { name: "බුත්තල", location: "No.17, වෙල්ලවාය පාර, බුත්තල.", contact: "0117170756", image: "/media/branches/buttala.webp", lat: "6.759466368556405", lng: "81.24563105051159" }
    ]
  },
  sabaragamuwa: {
    title: "සබරගමුව කලාපය",
    branches: [
      { name: "මාවනැල්ල", location: "අංක 246, නුවර පාර, මාවනැල්ල.", contact: "0357699010-012", image: "/media/branches/mawanella.webp", lat: "7.251167", lng: "80.449528" },
      { name: "රුවන්වැල්ල", location: "අංක 104. ප්‍රධාන වීදිය, රුවන්වැල්ල.", contact: "0367699001-003", image: "/media/branches/ruwanwella.webp", lat: "7.043524", lng: "80.254517" },
      { name: "බලංගොඩ", location: "අංක 16, රීසෙට් හවුස් ප්‍රවේශ පාර, බලංගොඩ.", contact: "0457699000-005", image: "/media/branches/balangoda.webp", lat: "6.65062511715612", lng: "80.6985981109200" },
      { name: "රක්වාන", location: "අංක 29, ප්‍රධාන වීදිය, රක්වාන.", contact: "0457699010-012", image: "/media/branches/rakwana.webp", lat: "6.474218", lng: "80.610933" },
      { name: "ඇහැලියගොඩ", location: "අංක 36, ප්‍රධාන වීදිය, ඇහැලියගොඩ.", contact: "0367699010-012", image:  "/media/branches/eheliyagoda.webp", lat: "6.850315", lng: "80.264785" },
      { name: "දැරණියගල", location: "අංක 78, දෙහිඕවිට පාර, තෙරණියකල.", contact: "0367699015-018", image: "/media/branches/deraniyagala.webp", lat: "6.9507732000699", lng: "80.3266479875920" },
      { name: "කුරුවිට", location: "අංක 71/C/1, කොළඹ පාර, කුරුවිට.", contact: "0457699015-018", image:  "/media/branches/kuruvita.webp", lat: "6.7789517998867", lng: "80.3633930154367" },
      { name: "කහවත්ත", location: "අංක 131/A, ප්‍රධාන වීදිය, කහවත්ත.", contact: "0457699020-023", image: "/media/branches/kahawatta.webp", lat: "6.577667436605311", lng: "80.57525585767128" }
    ]
  }	
},

  //Investor Relations Page Components
  bannerIR: {
    src: bannerIR,
    title: "අප ගැන",
    intro: "විශ්වාසයෙන් සහ දැක්මෙන් ධනය ගොඩනැඟීම",
    specialnote: "1970 සිට",
    description: "“ ප්‍රගතිය සඳහා හවුල් වීම, තිරසාර සංවර්ධන සංවර්ධනයක් ඇති කිරීම ”"
  },
  corporateProfileIR: {
    title1: "ආයතනික ",
    title2: "පැතිකඩ",
    label1: "සමාගමේ නම",
    field1: "ඒෂියා ඇසට් ෆිනෑන්ස් පිඑල්සි ",
    label2: "සමාගම් ශ්‍රේණිගත කිරීම",
    field2: "Fitch A+",
    label3: "නෛතික ස්වරූපය",
    /*  field3_1: "- 1970 සැප්තැම්බර් 23 දින පුද්ගලික සීමිත සමාගමක් ලෙස සංස්ථාගත කරන ලදී. (1938 අංක 51 දරන සමාගම් ආඥාපනත යටතේ (Cap 145))",
      field3_2: "- 2006 ඔක්තෝබර් 03 දින 1938 අංක 51 දරන සමාගම් ආඥාපනත (Cap 145) යටතේ නම වෙනස් කරන ලදී.",
      field3_3: "- 2008 ජනවාරි 23 දින 2007 අංක 07 දරන සමාගම් පනත යටතේ නැවත ලියාපදිංචි කිරීම.",
      field3_4: "- 2012 මාර්තු 20 දින 2007 අංක 07 දරන සමාගම් පනත යටතේ පොදු සීමිත සමාගමක් බවට පරිවර්තනය කරන ලදී.",
      field3_5: "- ලියාපදිංචි අංකය (1982 අංක 17 දරන සමාගම් පනත යටතේ): PB 139 PQ.",
      field3_6: "- නව ලියාපදිංචි අංකය (2007 අංක 7 දරන සමාගම් පනත යටතේ): PB 139 PQ.", */
      field3_1: "පුද්ගලික සීමාසහිත වගකීම් සමාගමක් ලෙස 1938 අංක 51 දරන සමාගම් ආඥා පනත යටතේ (කැප් 145) 1970 සැප්තැම්බර් 23 දිනදී සහ සමාගම් ආඥාපනත යටතේ අංක 1938 අංක 51 දරණ (2006 ඔක්තෝබර් 03) දින වෙනස් කරන ලදි. 2008 ජනවාරි 23 දිනැති 2007 අංක 07 දරණ සමාගම් පනත යටතේ නැවත ලියාපදිංචි වී 2012 මාර්තු 20 දින ලියාපදිංචි අංකය (1982 අංක 17 දරණ සමාගම් පනත යටතේ) 2007 අංක .07 දරණ සමාගම් පනත යටතේ පොදු සමාගමක් බවට පත් කරන ලදි. නව ලියාපදිංචි අංකය (2007 අංක 7 දරණ සමාගම් පනත යටතේ) පීබී 139 PQ",
    label4: "සමාගම් ලියාපදිංචි අංකය",
    field4: "PB 139 PQ",
    label5: "සමාගමේ නීතිඥයින්",
    field5: "ශිරන්ති ගුණවර්ධන ඇසෝසියේට්ස්, \n අංක 22/1, එලියට් පෙදෙස, කොළඹ 08.",
    label6: "අධ්‍යක්ෂ මණ්ඩලය",
    field6_1: "සභාපති - වී ඒ ප්‍රසාන්ත්",
    field6_2: "ප්‍රධාන විධායක නිලධාරී - ආර් ජේ ඒ ගුණවර්ධන",
    field6_3: "ජී එම් ඇලෙක්සැන්ඩර්",
    field6_4: "කේ ආර් බිජිමොන්",
    field6_7: "ජේ පී ඩී ආර් ජයසේකර",
    field6_8: "ආර් ඩී එස් ගුණසේකර",
    field6_9: "ටි සි ඩි කුමාරසිරි",
    field6_10: "එම්. තිරුනීලකන්දන්",
    label7: "සමාගමේ ලේකම්",
    field7: "රුවනි අංගම්මන මහත්මිය, අංක 76, උද්‍යාන වීදිය, කොළඹ 02.",
    field7_1: "ඊමේල්: companysecretary@asiaassetfinance.lk",
    label8: "සමාගමේ විගණකවරු",
    field8: "KPMG, 32A, සර් මොහොමඩ් මකන් මරික්කාර් මාවත, කොළඹ 03.",
    label9: "බැංකු සහකරුවන්",
    agmButtonText: "ලියාපදිංචි වීමේ පෝරමය",
  },  
  keyFinancialsIR: {
    title1: "ප්‍රධාන මුල්‍ය ",
    title2: "තොරතුරු",
    card1_title: "මුළු ආදායම",
    card1_amount: "XX,XXX",
    card2_title: "බදු ගෙවීමෙන් පසු ලාභය",
    card2_amount: "XX,XXX",
    card3_title: "මුළු වත්කම්",
    card3_amount: "XX,XXX",
    card4_title: "ආයෝජන මත ප්‍රතිලාභ",
    card4_amount: "XX,XXX",
    card5_title: "කොටසක ඉපැයීම්",
    card5_amount: "XX,XXX",
    share_price_title: "තාවත්කාලීන කොටසක මිල",
    share_price_reg: "XXXXXXXXXX",
    share_price_name: "Asia Asset Finance PLC",
    share_price_amount: "රුපියල් XX.XX",
    share_price_percentage: "XX,XXXX",
    share_price_type: "රුපියල්",
    description_line1: "අපි ඒෂියා ඇසට් ආයතනය වශයෙන් අවුරුදු 50කට වැඩි කාලයක් පුරා අපගේ ආයෝජන මඟින් විවිධ පුද්ගලයන් සහ ව්‍යාපාර සදහා සහයෝගය ලබාදී ඇත",
    description_line2: "Asset Finance PLC යනු Muthoot Finance Ltd හි පූර්ණ අනුබද්ධිත ආයතනයක් වන අතර ශ්‍රී ලංකා මහ බැංකුවේ ලියාපදිංචි පූර්ණ බලපත්‍රලාභී, තැන්පතු ලබා ගැනීමේ ආයතනයකි.",
    description_line3: "සමාජයේ මුල්‍ය අවශ්‍යතා වර්ධනය වෙමින් පවතින අතර වසර ගණනාවක් පුර ඒෂියා ඇසට් වර්ධනය වූයේ මෙම අවශ්‍යතා සපුරලිමෙන්ය. අපගේ උත්සාහය සෑම විටම අපගේ ගනුදෙනුකරුවන්ට ඔවුන් ජීවත් වන ආකාරය සහ ඔවුන් ව්‍යාපාර කරන ආකාරය තුළ වර්ධනයක් ලබා ගැනීමට උපකාර කිරීමයි.",
    description_line4: "Asia Asset Finance PLC හි ප්‍රධාන අරමුණ “ මිනිසුන් සවිබල ගැන්වීම සහ ජීවිත පරිවර්තනය කිරීමයි ”.",
  },
  documentsIR: {
    title: "බාගතකිරීම්",
    tab1_title: "වාර්ෂික වාර්තා",
    tab1_content: "වර්තමානව වන වාර්තා කිසිවක් අරඹා නැත!",
    tab2_title: "උච්චත්වය ඇගැයීම්",
    tab2_content: "වර්තමානව වන වාර්තා කිසිවක් අරඹා නැත!",
    tab3_title: "දැයි කාලීන මූල්‍ය වාර්තා",
    tab3_content: "වර්තමානව වන වාර්තා කිසිවක් අරඹා නැත!",
    tab4_title: "මාසික මූල්‍ය වාර්තා",
    tab4_content: "වර්තමානව වන වාර්තා කිසිවක් අරඹා නැත!"
    },
  
    //Downloads Page Component
    downloadsTexts: {
      title: "බාගත කිරීම්",
      section1: "වාර්ෂික වාර්තා",
      intro1: "ලේඛනයක් බැලීමට ඒ මත ක්ලික් කරන්න.",
      section2: "මූල්‍ය වාර්තා",
      intro2: "ලේඛනයක් බැලීමට ඒ මත ක්ලික් කරන්න.",
      section3: "පාරිභෝගික තොරතුරු",
      intro3: "ලේඛනයක් බැලීමට ඒ මත ක්ලික් කරන්න.",
      section4: "වෙනත් අත්‍යාවශ්‍ය ප්‍රතිපත්ති",
      intro4: "ලේඛනයක් බැලීමට ඒ මත ක්ලික් කරන්න.",
      section5: "Debenture Issue 2024",
      intro5: "ලේඛනයක් බැලීමට ඒ මත ක්ලික් කරන්න.",
    },

    /* privacyPolicy: {
      title: "රහස්යතා ප්රතිපත්තිය",
      description: [
        "",
        "",
        "",
        "",
    ],
    information_collection: "තොරතුරු රැස් කිරීම සහ භාවිතය",
    ic_description: [
      "වඩා හොඳ අත්දැකීමක් සඳහා, අපගේ සේවාව භාවිතා කරන අතරතුර, අපට පුද්ගලිකව හඳුනාගත හැකි ඇතැම් තොරතුරු සැපයීමට අප ඔබට අවශ්‍ය විය හැක. අප ඉල්ලා සිටින තොරතුරු අප විසින් රඳවා ගනු ලබන අතර මෙම රහස්‍යතා ප්‍රතිපත්තියේ විස්තර කර ඇති පරිදි භාවිතා කරනු ඇත.",
      "යෙදුම ඔබව හඳුනා ගැනීමට භාවිතා කරන තොරතුරු රැස් කළ හැකි තෙවන පාර්ශවීය සේවාවන් භාවිතා කරයි.",
    ],
    ic_description_2 : "ඔබ අපගේ සේවාව භාවිතා කරන සෑම විටම, යෙදුමේ දෝෂයක් ඇති වූ විට, අපි ලොග් ඩේටා නමින් ඔබේ දුරකථනයේ දත්ත සහ තොරතුරු (තෙවන පාර්ශවීය නිෂ්පාදන හරහා) රැස් කරන බව ඔබට දැනුම් දීමට අපට අවශ්‍යය. මෙම ලොග් දත්ත වලට ඔබගේ උපාංග අන්තර්ජාල ප්‍රොටෝකෝලය ('IP') ලිපිනය, උපාංගයේ නම, මෙහෙයුම් පද්ධති අනුවාදය, අපගේ සේවාව භාවිතා කරන විට යෙදුමේ වින්‍යාසය, ඔබ සේවාව භාවිතා කරන වේලාව සහ දිනය සහ වෙනත් සංඛ්‍යාලේඛන වැනි තොරතුරු ඇතුළත් විය හැක.",
    cookies: "කුකීස්",
    cookies_text: "මෙම සේවාව මෙම 'කුකීස්' පැහැදිලිව භාවිතා නොකරයි. කෙසේ වෙතත්, යෙදුම තොරතුරු රැස් කිරීමට සහ ඔවුන්ගේ සේවාවන් වැඩිදියුණු කිරීමට 'කුකීස්' භාවිතා කරන තෙවන පාර්ශවීය කේතය සහ පුස්තකාල භාවිතා කළ හැක. ඔබට මෙම කුකීස් පිළිගැනීමට හෝ ප්‍රතික්ෂේප කිරීමට සහ කුකියක් ඔබගේ උපාංගයට යවන්නේ කවදාදැයි දැන ගැනීමට විකල්පයක් ඇත. ඔබ අපගේ කුකීස් ප්‍රතික්ෂේප කිරීමට තෝරා ගන්නේ නම්, ඔබට මෙම සේවාවේ සමහර කොටස් භාවිතා කිරීමට නොහැකි වනු ඇත.",
    service_providers: "සේවා සපයන්නන්",
    service_providers_text_1: "පහත සඳහන් හේතූන් නිසා අපි තුන්වන පාර්ශ්ව සමාගම් සහ පුද්ගලයන් සේවයේ යෙදවිය හැක:",
    service_providers_points: [
      "අපගේ සේවාව පහසු කිරීම සඳහා",
      "අප වෙනුවෙන් සේවාව සැපයීමට",
      "සේවා සම්බන්ධ සේවාවන් ඉටු කිරීමට",
      "අපගේ සේවාව භාවිතා කරන ආකාරය විශ්ලේෂණය කිරීමට අපට සහාය වීමට",
    ],
    service_providers_text_2: "මෙම තෙවන පාර්ශවයන්ට ඔබගේ පුද්ගලික තොරතුරු වෙත ප්‍රවේශය ඇති බව මෙම සේවාව භාවිතා කරන්නන්ට දැනුම් දීමට අපට අවශ්‍යය. හේතුව ඔවුන්ට පැවරී ඇති කාර්යයන් අප වෙනුවෙන් ඉටු කිරීමයි. කෙසේ වෙතත්, තොරතුරු හෙළි නොකිරීමට හෝ වෙනත් අරමුණක් සඳහා භාවිතා නොකිරීමට ඔවුන් බැඳී සිටී.",
    security: "ආරක්ෂක",
    security_text: "ඔබගේ පුද්ගලික තොරතුරු අපට ලබා දීමේ ඔබගේ විශ්වාසය අපි අගය කරමු, එබැවින් අපි එය ආරක්ෂා කිරීමට වාණිජමය වශයෙන් පිළිගත හැකි ක්‍රම භාවිතා කිරීමට උත්සාහ කරමු. නමුත් අන්තර්ජාලය හරහා සම්ප්‍රේෂණය කිරීමේ කිසිදු ක්‍රමයක් හෝ ඉලෙක්ට්‍රොනික ගබඩා කිරීමේ ක්‍රමයක් 100% ආරක්ෂිත සහ විශ්වාසදායක නොවන බව මතක තබා ගන්න, අපට එහි නිරපේක්ෂ ආරක්ෂාව සහතික කළ නොහැක.",
    links_to_other_sites: "වෙනත් අඩවි වෙත සබැඳි",
    links_to_other_sites_text: "මෙම සේවාවෙහි වෙනත් අඩවි වෙත සබැඳි අඩංගු විය හැක. ඔබ තෙවන පාර්ශවීය සබැඳියක් ක්ලික් කළහොත්, ඔබව එම වෙබ් අඩවියට යොමු කරනු ඇත. මෙම බාහිර අඩවි අප විසින් ක්‍රියාත්මක නොවන බව සලකන්න. එබැවින්, මෙම වෙබ් අඩවි වල රහස්‍යතා ප්‍රතිපත්තිය සමාලෝචනය කරන ලෙස අපි ඔබට තරයේ අවවාද කරමු. අපට කිසිදු තෙවන පාර්ශවීය වෙබ් අඩවියක හෝ සේවාවන්හි අන්තර්ගතය, රහස්‍යතා ප්‍රතිපත්ති, හෝ භාවිතයන් සම්බන්ධයෙන් කිසිදු පාලනයක් නොමැති අතර වගකීමක් භාර නොගනිමු.",
    children_privacy: "ළමා පෞද්ගලිකත්වය",
    children_privacy_text: "මෙම සේවාවන් වයස අවුරුදු 13 ට අඩු කිසිවෙකු ආමන්ත්‍රණය නොකරයි. අපි වයස අවුරුදු 13 ට අඩු ළමුන්ගෙන් පුද්ගලිකව හඳුනාගත හැකි තොරතුරු දැනුවත්ව රැස් නොකරමු. වයස අවුරුදු 13 ට අඩු දරුවෙකු අපට පුද්ගලික තොරතුරු ලබා දී ඇති බව අප සොයා ගත් අවස්ථාවක, අපි මෙය අපගේ සේවාදායකයෙන් වහාම මකා දමමු. ඔබ දෙමාපියෙකු හෝ භාරකරුවෙකු නම් සහ ඔබේ දරුවා අපට පුද්ගලික තොරතුරු සපයා ඇති බව ඔබ දන්නේ නම්, කරුණාකර අප හා සම්බන්ධ වන්න එවිට අපට අවශ්‍ය ක්‍රියාමාර්ග ගැනීමට හැකි වනු ඇත.",
    changes_to_this_privacy: "මෙම රහස්‍යතා ප්‍රතිපත්තියට වෙනස්කම්",
    changes_to_this_privacy_text_1: "අපි අපගේ රහස්‍යතා ප්‍රතිපත්තිය කලින් කලට යාවත්කාලීන කළ හැක. මේ අනුව, කිසියම් වෙනසක් සඳහා මෙම පිටුව වරින් වර සමාලෝචනය කිරීමට ඔබට උපදෙස් දෙනු ලැබේ. මෙම පිටුවේ නව රහස්‍යතා ප්‍රතිපත්තිය පළ කිරීමෙන් අපි ඔබට කිසියම් වෙනස්කමක් දන්වන්නෙමු.",
    changes_to_this_privacy_text_2: "මෙම ප්‍රතිපත්තිය 2021-08-01 සිට ක්‍රියාත්මක වේ",
    contact_us: "අපව අමතන්න",
    contact_us_text: "අපගේ රහස්‍යතා ප්‍රතිපත්තිය පිළිබඳව ඔබට කිසියම් ප්‍රශ්නයක් හෝ යෝජනා තිබේ නම්, info@asiassetfinance.lk. හි අප හා සම්බන්ධ වීමට පසුබට නොවන්න.",
  }, */

    privacyPolicy: {
      title: "Privacy Policy",
      description: [
        "Asia Asset Finance PLC built all as free. This SERVICE is provided by Asia Asset Finance PLC at no cost and is intended for use as is.",
        "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.",
        "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
        "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions are accessible.",
    ],
    information_collection: "Information Collection and Use",
    ic_description: [
      "For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.",
      "The app does use third party services that may collect information used to identify you.",
    ],
    ic_description_2 : "We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.",
    cookies: "Cookies",
    cookies_text: "This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.",
    service_providers: "Service Providers",
    service_providers_text_1: "We may employ third-party companies and individuals due to the following reasons:",
    service_providers_points: [
      "To facilitate our Service",
      "To provide the Service on our behalf",
      "To perform Service-related services",
      "To assist us in analyzing how our Service is used",
    ],
    service_providers_text_2: "We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.",
    security: "Security",
    security_text: "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.",
    links_to_other_sites: "Links to Other Sites",
    links_to_other_sites_text: "This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
    children_privacy: "Children’s Privacy",
    children_privacy_text: "These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.",
    changes_to_this_privacy: "Changes to This Privacy Policy",
    changes_to_this_privacy_text_1: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.",
    changes_to_this_privacy_text_2: "This policy is effective as of 2021-08-01",
    contact_us: "Contact Us",
    contact_us_text: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@asiassetfinance.lk.",
  },

    //Promotions Page
    promotionsPage: {
      title: "ප්‍රවර්ධන",
      subtitle: "දැනට කිසිදු ප්‍රවර්ධනයක් නොමැත",
      description: "කරුණාකර පසුව මෙම පිටුවට පිවිසෙන්න.",
    },

    //Products & Services Page Components
    bannerProducts: {
      title: "නිෂ්පාදන සහ සේවාවන්",
      intro: "මූල්‍ය විසඳුම් සරල කිරීම",
      specialnote: "1970 සිට",
      description: "“ වර්ධනය හා සාරවත්කම සඳහා හවුල් වීම ”",
    },

    productsSelector: { 
      'Fixed Deposit': {
        images: [FD, FD],
        name: "ස්ථාවර තැන්පතු",
        features: [
          { title: "ඉහළ පොලී අනුපාතය", description: "සාමාන්‍ය ඉතිරිකිරීම් ගිණුම්වලට වඩා වැඩි පොලී අනුපාතයක් ලබාගන්න." },
          { title: "කාර්යක්ෂම කාලසීමා", description: "ඔබේ අවශ්‍යතාවයට ලබැඳි කාලසීමාවක් තෝරාගන්න." },
        ],
      },
      'Gold Loan': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "රන් ණය",
        features: [
          { title: "ක්ෂණික අනුමත කිරීම", description: "ඔබේ රන් අත්තිකාරමක් ලෙස භාවිතා කරමින් වේගයෙන් මුදල් ලබාගන්න." },
          { title: "අඩු පොලී අනුපාත", description: "රන්-පසුබැසුණු ණය සඳහා අගනා පොලී අනුපාත ලබාගන්න." },
        ],
      },
      'Mortgage': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "මුලික ණය",
        features: [
          { title: "කාර්යක්ෂම පොලී අනුපාත", description: "කුඩා මට්ටමේ මුලික ණය සඳහා අඩු පොලී අනුපාත ලබාගන්න." },
          { title: "තැන්පත් සැලසුම්", description: "ආදායම මත පදනම්ව වෙනස් කළ හැකි මුලික ණය ගෙවීම් සැලසුම්." },
        ],
      },
      'Leasing': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "ලිසිං",
        features: [
          { title: "සෞඛ්‍ය ලිසිං විකල්ප", description: "වාහන, උපකරණ හා සෞඛ්‍ය ව්‍යවස්ථා සඳහා සුදුසු මට්ටමේ ලිසිං ලබාගන්න." },
          { title: "වේගවත් සැකසුම", description: "ලිසිං අයදුම් කිරීමේ ක්‍රියාවලිය වේගවත් සහ පහසුයි." },
        ],
      },
      'Forex': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "මුදල් හුවමාරු",
        features: [
          { title: "අගනා අනුපාත", description: "වඩාත් අගනා අනුපාත වලින් විදේශ මුදල් හුවමාරු කරන්න." },
          { title: "බහු මුදල් විකල්ප", description: "විවිධ ජාත්‍යන්තර මුදල් ප්‍රවේශ ලැබෙන්න." },
        ],
      },
    },

    luckewalletProductsPage: {
      description1: "අපේ ආයෝජන 50 වසරකට අධික කාලයක් පුරා ගණනාවක් පිරිනමන පුද්ගලයන් හා ව්‍යාපාර සඳහා අපි අපේ රුචි ආයෝජනය කර ඇත. ඉතා සාධාරණ අනුපාත වලින් ලබාදෙන රන් ණය, ලීසිං, මූල්‍ය ණය, කණ්ඩායම් පුද්ගලික ණය, පුද්ගලික ණය, ව්‍යාපාරික ණය, සංස්ථා ණය, කුඩා ණය හෝ ඔබේ මහජන තැන්පතු අපි පිළිගැනීම වැනි සේවාවන් මඟින් අපි රැකවරණයේ ආර්ථික ව්‍යවස්ථා වර්ධනයට ආධාර කළෙමු.",
      description2: "Asia Asset Finance PLC, Muthoot Finance Ltd ආයතනයේ සම්පූර්ණ අනුබද්ධයක් වන අතර ශ්‍රී ලංකා මධ්‍යම බැංකුව විසින් ලියාපදිංචි කරන ලද සම්පූර්ණ බලපත්‍රය ලත් තැන්පතු ලබා ගන්නා ආයතනයකි.",
      kFeature1: "මූලික ",
      kFeature2: "විශේෂාංග",
      f1title: "සැහැල්ලු ගිණුම් කළමනාකරණය",
      f1Text: "ඔබේ සියලු ගිණුම් එක ස්ථානයකින් සරලව නිරීක්ෂණය සහ කළමනාකරණය කරන්න.",
      f2title: "ඉක්මන් ණය අයදුම්",
      f2Text: "ණය සඳහා අයදුම් කරන්න සහ ඔබේ අයදුම් තත්ත්වය සන්සුන්ව මිනුම් කරන්න.",
      f3title: "මාරුකිරීම් සඳහා ඉක්මන් හා පවත්නා සේවාවන්",
      f3Text: "ක්ෂණික, ආරක්ෂිත, සහ පහසු මාර්ගගත මූල්‍ය සේවාවන් අත්විඳින්න.",
      f4title: "සජීවී දැනුම්දීම්",
      f4Text: "ගිණුම් ක්‍රියාකාරකම් සහ දීමනා පිළිබඳ වහාම දැනුවත් වන්න.",
    },
    
    
    

    //------------------------------------------------------ Sub Pages --------------------------------------------------------------//

    //Careers Page Components
    careersBanner: {
      title: "රැකියා",
      description: "අප සමඟ ඔබේ අනාගතය මවන්න!",
    },
    
    titleCareers: {
      title1: "නව ",
      title2: "බඳවාගැනීම්",
      description1: "ඒෂියා ඇසට් ෆිනෑන්ස් හි අපි කරන කාර්යයන් මෙයයි. අපි පුද්ගලයින්ට ඔවුන් අපේක්ෂා කරන ජීවන තත්ත්වය සාර්ථකව ලගා කර ගැනීමට සහය දක්වන්නෙමු. ව්‍යාපාරවලට ඔවුන්ගේ ව්‍යාපාර ගොඩනගා ගැනීමට අපි ඔවුන්ව බල ගන්වන්නෙමු. අපි මූල්‍ය විෂමතාව අඩු කිරීමට ක්‍රියාකාරී ලෙස කටයුතු කරන්නෙමු.",
      description2: "අපි  ආර්ථිකයන් ගොඩනැගීමට සහ සමාජ සීමාවන් බිඳ දැමීමට ආශාවක් ඇති අධිෂ්ඨානශීලී වෘත්තිකයන් නිරන්තරයෙන් සොයන්නෙමු. එබැවින් ඔබ තුළ අපට අවශ්‍ය දේ ඇති බව ඔබ සිතනවානම්, පහත සඳහන් තනතුරු සඳහා අයදුම් කරන්න!",
    },


    //------------------------------------------------------ Products Pages --------------------------------------------------------------//

    //Gold Loan Page Components
    goldLoanPage: {
      title: "රන් ණය",
      description: "අපි ලොව පුරා විශාලතම රන් ණය සේවා සපයන බහුජාතික මූල්‍ය සේවා සපයන්නෙකු වන මුතූට් ෆිනෑන්ස් හි පූර්ණ අනුබද්ධිත ආයතනයක් වෙමු. අපගේ රන් ණය සේවා සමඟින්, ඔබේ රත්‍රන් සඳහා මුදල් කරගැනීමට මිනිත්තු කිහිපයකට වඩා ගත නොවේ. ඔබට අවශ්‍ය වන්නේ රත්‍රන් පමණි.",
      kfd: "/media/attachments/customerProtectionFramework/si_key_fact_document_gl.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "ගාස්තු සහ තීරුබදු පත්‍රය",
      btn_3: "පාරිභෝගික තොරතුරු ලේඛන",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: "/media/uploads/charges_and_tariff/si_gl_cat.png",
    },
    
    //FD Page Components
    fdPage: {
      title: "ස්ථාවර තැන්පතු",
      description: "ඉතිරි කිරීම ආරම්භ කිරීමට කිසිවිටෙක නරක කාලයක් නොවන අතර අප සමඟ ඉතිරි කිරීම ආරම්භ කිරීම කිසිදු අයුරකින් නරක අදහසක් නොවේ. වසර 50කට අධික ඉතිහාසයක් ඇති Asia Asset Finance PLC වන අප ශ්‍රී ලංකා මහ බැංකුවේ ලියාපදිංචි මූල්‍ය සමාගමක් ලෙස ආයෝජන හවුල්කරුවෙකු බවට පත්ව ඇත. තරඟකාරී ස්ථාවර ප්‍රතිලාභ සහතික කිරීම සඳහා නිර්මාණය කර ඇති තැන්පතු අනුපාත ඔබ වෙත පිරිනමමින් අපි ඔබේ වත්කම් හි ආරක්ෂාව සහතික කරමු. ශ්‍රී ලංකාව විවිධ ආර්ථික අර්බුද වලට මුහුණ දී ඇති අතර, එසේ තිබියදීත් ඒෂියා  ඇසට් ආයතනය සෑම විටම ඔබට සිය සේවාව ලබා දී ඇත.",
      kfd: "/media/attachments/customerProtectionFramework/si_key_fact_document_fd.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "පොලී අනුපාත",
      btn_3: "පාරිභෝගික තොරතුරු ලේඛන",
      btn_4: "Collection Bank Accounts",
      collectionAccounts: "/media/uploads/fd_collection_accounts.webp",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      fdRates: "/media/uploads/si_fd_rates.webp",
      charges_tariff: "",
    },
    
    //Leasing Page Components
    leasingPage: {
      title: "ලීසිං ණය",
      description: "ඔබ ඔබේ සිහින වාහනය ධාවනය නොකළ යුතු බව කිසිවෙකුට පැවසීමට ඉඩ නොදෙන්න! ඔබට පැදවීමට අවශ්‍ය ඕනෑම වාහනයක් මිලදී ගැනීමට අවශ්‍ය සහය ඔබේ ළඟම ඇති ඒෂියා ඇසට් ශාඛාවක් වෙත ගොස් ලබාගැනීමට දැන් ඔබට අවස්ථාව ඇත. ඔබ අපගෙන් මේ සඳහා අයදුම් කරන විට අපගේ පුහුණු වෘත්තිකයන් ඔබට වෙළඳපොලේ ඇති හොඳම පොලී අනුපාත, අවම ලේඛන, කරදරයකින් තොර, නම්‍යශීලී ආපසු ගෙවීමේ නියමයන් ඇතුලු සේවා රැසක් ඔබගේ නිවසටම පැමිණ ලබාදේ. එබැවින්, අපත් සමඟ පහසුවෙන් ඔබේ සිහින වාහනය ලබාගන්න!",
      kfd: "/media/attachments/customerProtectionFramework/si_key_fact_document_l.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "ගාස්තු සහ තීරුබදු පත්‍රය",
      btn_3: "පාරිභෝගික තොරතුරු ලේඛන",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: "/media/uploads/charges_and_tariff/si_l_cat.png",
    },
    
    //Mortgage Page Components
    mortgagePage: {
      title: "උකස් ණය",
      description: "ඒෂියා ඇසට් හි අපි ඔබගේ මූල්‍ය ජීවන රටාව ඉහළ නැංවීම සඳහා අප උත්සහා කරන්නෙමු. ඔබට ගැටළු වන සියල්ල අපි දැනටමත් විසඳා ඇත. අපි ඔබට විශිෂ්ට, ඵලදායී සහ කාර්යක්ෂම සේවාවක් ලබාදීමට පොරොන්දු වන්නෙමු. අපි ඔබට දිය හැකි සාධාරණම ගාස්තු ලබාදීමට පොරොන්දු වන්නෙමු. සියල්ලට පසු, මිනිසුන් සවිබල ගැන්වීම සහ ජීවිත පරිවර්තනය කිරීම අපගේ මෙහෙවරයි! ",
      kfd: "/media/attachments/customerProtectionFramework/si_key_fact_document_m.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "ගාස්තු සහ තීරුබදු පත්‍රය",
      btn_3: "පාරිභෝගික තොරතුරු ලේඛන",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: "/media/uploads/charges_and_tariff/si_m_cat.png",
    },
    
    //Forex Page Components
    forexPage: {
      title: "විදේශ විනිමය",
      description: "Asia Asset Finance හි ඔබට ඔබගේ විදේශ විනිමය ගනුදෙනු ක්ෂණිකව සිදු කර ගත හැක. ඔබගේ මුදල් සමඟ අපගේ කවුන්ටරයන්ගෙන් එකකට ගොස් හුවමාරුව  සිදුවන අයුරු බලාසිටින්න.  Forex  විස්තර කිරීමේ සරලම ආකාරය ලෙස, එක්  මුදල් වර්ගයක් මිලදී ගැනීම සඳහා තවත් මුදල් ඒකකයක් විකිණීම විස්තර කලහැකිය. මෙය සෑම විටම යුගල වශයෙන් උපුටා දක්වා ඇත- එනම්, පාදක (මිලදී ගත්) මුදල් ඒකකයක් උද්ධෘත (විකුණුම්) මුදල් අනුව කොපමණ වේද ලෙසයි. අපගේ වෘත්තීය උපදෙස් සමඟින් ඔබේ ධනය වැඩි වන අයුරු බලාගැනීමට ඔබට අවස්ථාව ලැබේ. ",
      btn_1: "පාරිභෝගික තොරතුරු ලේඛන",
      btn_2: "විදේශ මුදල් හුවමාරු අනුපාත",
      btn_3: "ප්‍රධාන තොරතුරු ලේඛනය",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: "",
      our_partners: "අපගේ හවුල්කරුවන්",
      forexRate: "/media/uploads/forex_rate_si.webp",
      kfd: "/media/attachments/customerProtectionFramework/si_key_fact_document_f.pdf",

    },

    //Luckewallet Page Components
    luckewalletPage: {
      title: "Luckewallet",
      subtitle: "ඕනෑම තැනක සිට ඔබේ වත්කම් වෙත ප්‍රවේශ වන්න",
      description: ["Luckewallet ශ්‍රී ලංකාවේ ප්‍රමුඛතම ගෙවීම් වේදිකාව ලෙස ස්ථිරව තහවුරු වී ඇති අතර, එහි ඉහළ ගනුදෙනු ප්‍රමානය සහ පාරිභෝගික පදනම සඳහා ද ප්‍රචලිත වේ. ලකීවොලට් ඩිජිටල් ඉතුරුම් ගිණුම්, ඩිජිටල් ස්ථාවර තැන්පතු සහ රන් ණය පොලී ගෙවීම් ඇතුළු පුළුල් පරාසයක මූල්‍ය සේවා සපයයි. අමතරව, පරිශීලකයින්ට භෞතික ශාඛාවකට නොපැමිණ පාරිභෝගික සේවා බිල්පත් සහ ක්‍රෙඩිට් කාඩ් ගෙවීම් ද මේ තුලින් සිදුකල හැක. එමෙන්ම මෙය සැලසුම් කර ඇත්තේ පාරිභෝගිකයින් සහ වෙළෙන්දන් බාධාවකින් තොරව සම්බන්ධ කිරීමට, මෙන්ම ආරක්ෂිත සහ ඒකාබද්ධ අත්දැකීමක් ලබා දීම සඳහා ය.",
        "ඉතා තරඟකාරී පොලී අනුපාතය අපගේ ඩිජිටල් ඉතුරුම් ගිණුම් සේවාව සඳහා ඇති විශේෂාංගයක් වන අතර එය වෙළඳපොල තුල කැපී පෙනේ. විද්‍යුත් ඉතුරුම් ගිණුම මඟින් පරිශීලකයින්ට ඔවුන්ගේ අරමුදල් ඩිජිටල් ලෙස කළමනාකරණය කිරීමේ නම්‍යශීලීභාවය සහ පහසුවෙන් ඔවුන්ගේ ඉතුරුම් සඳහා පොලී උපයා ගැනීමේ හැකියාව ලබා දේ. සාමාන්‍යයෙන් සාම්ප්‍රදායික ඉතුරුම් ගිණුම්වලට වඩා වැඩි පොලී ඉපැයීමේ අමතර ප්‍රතිලාභයක් සමඟින් පාරිභෝගිකයින්ට ඔවුන්ගේ ඩිජිටල් ඉතුරුම් ගිණුම්,  යෙදුම හරහා සෘජුවම විවෘත කර කළමනාකරණය කළ හැකිය. මෙම විශේෂාංගය පරිශීලකයින්ට ඔවුන්ගේ අරමුදල් වෙත ප්‍රවේශ වීමේ පහසුව  මෙන්ම ඕනෑම වේලාවක ඔවුන්ගේ ගිණුම් ක්‍රියාකාරකම් නිරීක්ෂණය කිරීමේ පහසුව සමඟින් ඉතුරුම් පහසුවෙන් වර්ධනය කර ගැනීමට ඉඩ සලසයි.",
        "Luckewallet සාමාන්‍ය ගෙවීම් වේදිකාවක් ලෙසට සීමා නොවී, සම්පූර්ණ පද්ධතියක් ලෙස ස්ථාපිත වෙමින්, විශ්වාසදායී වෙළඳ-ලබාගැනීමේ හවුල්කරු ලෙස සේවය කරයි. ඉහළ මට්ටමේ මෘදුකාංග ව්‍යුහ සම්පාදනය සඳහා ජාත්‍යන්තර වශයෙන් ප්‍රසිද්ධ මෙම යෙදුම, මෘදු සහ කාර්යක්ෂම පාරිභෝගික අත්දැකීමක් ලබා දීමට නිරන්තරයෙන් වැඩිදියුණු කරයි. මූලික විශේෂාංග සඳහා පහසුවෙන් පාරිභෝගිකයින් එක් කිරීම, ස්වයං ලියාපදිංචි කිරීම, මෙන්ම ජංගම ඇමතුම් රිචාජ් සහ අනෙකුත් බැංකු ගිණුම් සමඟ සෘජු ගනුදෙනු වැනි විවිධ සේවාවන් ඇතුළත් වේ. ඩිජිටල් ඉතුරුම් ගිණුම සහ එහි තරඟකාරී පොලී අනුපාතය සමඟ, Luckewallet ඩිජිටල් ගනුදෙනු පමණක් නොව, පරිශීලකයින්ට ඔවුන්ගේ මූල්‍ය අනාගතය ගොඩනැගීමට උපකාරී වේ.",
                  ],
      kfd: "/media/attachments/customerProtectionFramework/si_key_fact_document_s.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "පාරිභෝගික තොරතුරු ලේඛන",
      btn_3: "",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: "",
      
    },
    
    //Contacts Page Components
    contactsPage: {
      title1: "සම්බන්ධ ",
      title2: "වන්න",
      subtitle: " ඔබට අවශ්‍ය සහාය ලබා දීමට අපි සූදානම්. අදම අප හා සම්බන්ධ වන්න!",
      card1title: "ලිපිනය",
      card1Body: "අංක 76, උද්‍යාන වීදිය, කොළඹ 02",
      card2title: "පාරිභෝගික සේවා",
      card2Body: "011 71 70 712",
      card3title: "දුරකථන අංකය",
      card3Body: "011 76 99 000",
      card4title: "ඊමේල්",
      card4Body: "info@asiaassetfinance.lk",
      card5title: "පැමිණිලි",
      card5Body: "077 79 99 922",
      card6title: "ක්ෂණික ඇමතුම්",
      card6Body: "1369",
      card7title: "විවෘතව ඇති වේලාවන්",
      card7Body: ["සඳුදා සිට සිකුරාදා දක්වා – පෙව 8.30 to පව 5.00", "සෙනසුරාදා – පෙව 8.30 to පව 1.00", "අපි සියලුම වාණිජ නිවාඩු දිනයන්හි වසා ඇත."]
    }, 
    
    //Personal Profile page
    profileDetails: [
      {
        id: "1",
        name: "වී ඒ ප්‍රශාන්ත්",
        src: mrPrasanth,
        designation: "සභාපති",
        description : ["වි ඒ ප්‍රශාන්ත මහතා මූල්‍ය බැංකු ක්ෂේත්‍රයේ 37 වසරක පළපුරුද්දක් ඇති පාරිභෝගික බැංකු සේවා හා කෝපරේට් බැංකු සේවා, භාණ්ඩාගාර මෙහෙයුම් ක්‍රියාකාරීත්වය සහ තොරතුරු ආරක්ෂාව පිළිබඳව විවිධ අත්දැකීම් ලබා ගත් මූල්‍ය බැංකු සේවා විශේෂඥයෙකි. එවක් ඔහු ඉන්දියානු බැංකුවේ – ඉන්දියාවේ ප්‍රසිද්ධම රාජ්‍ය කටයුතු බැංකුවක් ලෙස සම්මානය ලැබූ – සාමාන්‍යාධිකාරී සහ  තොරතුරු තාක්‍ෂණ ප්‍රධානි වශයෙන් ලෙස සේවය කළේය. මෙම කාලය තුල, ඔහු තොරතුරු තාක්‍ෂණ හා ඩිජිටල් බැංකු සේවා වල ප්‍රධානියා වශයෙන් ද කටයුතු කලේය. වි ඒ ප්‍රශාන්ත මහතා ඉන්දියානු බැංකුවේ ප්‍රධාන මූල්‍ය නිලධාරී ලෙස ද වරක පත් විය. එමෙන්ම, ඔහු බැංකුවේ ප්‍රමුඛ කලාප දෙකක කලාප කළමනාකරු ලෙස ද කටයුතු කරන ලදී. ඔහුට මූල්‍ය වෙළඳපොළවල දශක දෙකකට වැඩි පළපුරුද්දක් ඇති අතර – 1994-1998 කාලය තුළ මුම්බායි හි විදේශ විනිමය ගනුදෙනු කිරීම් අංශයේ ප්‍රධානියා ලෙසද, 2001-2005 කාලය තුල සිංගප්පූරු මූල්‍ය අංශයේ ප්‍රධානියා වශයෙන් ද , 2009-2011 කාලය තුල මූල්‍ය අංශයේ මෙහෙයුම් කාර්යාල ප්‍රධානි වශයෙන් ද, 2009-2011 කාලයේ ඉන්දියන් බැංකුවේ මූල්‍ය කළමණාකරණ සේවා (WMS) පරිපාලකයෙකු වශයෙන් ද සේවය කලේය. වි ඒ ප්‍රශාන්ත මහතා දැනට හයිද්‍රාබාද් හි පිහිටි බැංකු තාක්‍ෂණ පර්යේෂණ සහ සංවර්ධන ආයතනයේ (IDRBT) ජ්‍යේෂ්ඨ ක්ෂේත්‍ර විශේෂඥයෙකු ලෙස සේවය කරයි. 2020 ජූනි මාසයේ දී ඔහු ඒෂියා ඇසට් ෆිනෑන්ස් හි සභාපති ලෙස පත් විය.",

        ]
      },
      {
        id: "2",
        name: "ජෝර්ජ් මුත්තූට් ඇලෙක්සැන්ඩර්",
        src: mrAlexandra,
        designation: "විධායක නොවන අධ්‍යක්ෂ",
        description : ["ඇලෙක්සැන්ඩර් මහතා උතුරු කැරොලිනා විශ්ව විද්‍යාලයේ - කෙනන් සහ ෆ්ලැග්ලර් ව්‍යාපාරික පාසලෙන් ව්‍යාපාර පරිපාලනය පිළිබඳ ශාස්ත්‍රපති උපාධියක් ලබා ඇති අතර කේරළ විශ්ව විද්‍යාලය - TKM ඉංජිනේරු විද්‍යාලයෙන් යාන්ත්‍රික ඉංජිනේරු විද්‍යාව පිළිබඳ ඔහුගේ උපාධිය ලබා ඇත. ඔහු දැනට මුතූට් ෆිනෑන්ස් හි නියෝජ්‍ය කළමනාකාර අධ්‍යක්ෂ ලෙස කටයුතු කරන අතර ඉන්දියාවේ කර්නාටක, ගෝවා සහ තෙලන්ගානා ප්‍රාන්තවල මෙහෙයුම් අධීක්ෂණය කරයි. එක්සත් ජනපදයේ මුතූට් සමූහ ව්‍යාපාරයේ ගෝලීය මෙහෙයුම් ප්‍රධානියා වීමේ අමතර වගකීම ඔහුට ඇති අතර තවත් කණ්ඩායම් සමාගම් තුනක (Asia Asia Assets Finance PLC, Muthoot Insurance Brokers සහ Belstar Finance & Investments) අධ්‍යක්ෂ මණ්ඩලයේ සේවය කරයි. Muthoot Finance Limited යනු රන් ණය NBFC (බැංකු නොවන මූල්‍ය සමාගම) වන අතර එය මුතූට් සමූහයේ ප්‍රමුඛ සමාගම වේ. එය 2011 දී ලැයිස්තුගත කර ඇති අතර BSE සහ NSE හි වෙළඳාම් කරන අතර දැනට ඉන්දියාවේ විශාලතම රන් ණය සමාගම වේ. Muthoot Finance Limited හැරුණු විට, Muthoot සමූහයට ආගන්තුක සත්කාර, සෞඛ්‍ය සේවා, කොටස් සහ භාණ්ඩ වෙළඳාම, රක්ෂණ තැරැව්කරණය වැනි තවත් අංශ 16 ක් ඇත. පවුල්  ව්‍යාපාරයක් වන අතර, සමූහය පරම්පරා හතරක් පුරා ස්ථාපිත කර ඇත, ඇලෙක්සැන්ඩර් මහතා නියෝජනය කරන්නේ පවුලේ සිව්වන පරම්පරාවයි. ඔහුගේ පවුලේ ව්‍යාපාරයට සම්බන්ධ වීමට පෙර ඔහු ඉන්දියාවේ ING & Kotak Mahindra බැංකුවට අනුයුක්තව සිටියේය. ඔහු ඉන්දියානු සම්මේලනයේ සභාපතිවරයා ලෙස කටයුතු කළේය කර්මාන්ත – තරුණ ඉන්දියානුවන් බැංගලෝර් පරිච්ඡේදය 2015. ඔහු AIYD සඳහා ඉන්දියාව නියෝජනය කිරීමට තෝරාගත් ඉන්දියානුවන් 10 දෙනාගෙන් කෙනෙකි (ඕස්ට්‍රේලියා ඉන්දියා තරුණ සංවාදය) සිඩ්නි සහ මෙල්බර්න් හිදී 2013 සහ 2022. ඔහු ව්‍යවසායකයන්ගේ මුල්‍ය සභාපති විය. 2016-2018 සිට බැංගලෝර් සංවිධානය. ඔහු දැනට උතුරු Carolina’s – Kenan-Flagler Business School  විශ්ව විද්‍යාලයේ  සහ  බැංගලෝර් XIME ව්‍යාපාරික පාසලේ උපදේශක මණ්ඩලයේ සේවය කරයි .",

        ]
      },
      {
        id: "3",
        name: "කුට්ටිකට්ටු රාජප්පන් බිජිමෝන්",
        src: mrBijimon,
        designation: "විධායක නොවන අධ්‍යක්ෂ",
        description : ["බිජිමොන් මහතා ඉන්දියාවේ වරලත් ගණකාධිකාරීවරුන්ගේ ආයතනය, නවදිල්ලියේ, ඉන්දියානු බැංකු සහ මූල්‍ය ආයතනයේ සහකාර සාමාජිකයෙකු වන මුම්බායි සහ ශ්‍රී ලංකා ආයතනයේ සහතික කළ කළමනාකරණ ගණකාධිකාරීවරුන්ගේ සෙසු සාමාජිකයෙකි. ඔහු MG විශ්ව විද්‍යාලයෙන් LLB උපාධියක් සහ Cochin විශ්ව විද්‍යාලයෙන් MBA උපාධියක් ලබා ඇත, ඔහු මූල්‍ය සේවා ක්ෂේත්‍රයේ වසර 28 කට වැඩි පළපුරුද්දක් ඇති අතර ආරම්භයේ සිටම Muthoot Finance Limited හි සේවය කරයි. සමාගමේ විධායක අධ්‍යක්ෂ සහ COO ලෙස ඔහු සමාගමේ ණය, අභ්‍යන්තර විගණනය, අලෙවිකරණය, තොරතුරු තාක්ෂණය, ප්‍රතිසාධනය සහ නීතිමය සහ සුපරීක්ෂාකාරී දෙපාර්තමේන්තු අධීක්ෂණය කරයි. ඔහු Muthoot සමූහයේ (USA, UAE, UK, Nepal & Sri Lanka) ගෝලීය මෙහෙයුම් සඳහා ප්‍රධාන මෙහෙයුම් නිලධාරියා වේ. ඔහු Muthoot  සමූහ ව්‍යාපාරයේ ගාමක බලවේගය වී ඇති අතර එහි මෙහෙයුම් ඇමරිකා එක්සත් ජනපදය, එක්සත් රාජධානිය, නේපාලය සහ ශ්‍රී ලංකාව දක්වා ව්‍යාප්ත කර ඇත. කේ.ආර්. Bijimon Muthoot සමූහ සමාගම්වල අධ්‍යක්ෂවරයා වේ එනම්. Muthoot Home Fin (India) Ltd., Muthoot Securities Ltd., Muthoot Commodities Ltd., Muthoot Forex Ltd., Muthoot Finserv USA INC. Asia Asset Finance PLC Sri Lanka සහ Belstar Microfinance Ltd. ඔහු Muthoot තාක්ෂණ හා විද්‍යා ආයතනය (MITS)හි පාලක මණ්ඩලයේ ද සාමාජිකයෙකි.",

        ]
      },
      {
        id: "4",
        name: "ජේ පී ඩී ආර් ජයසේකර",
        src: mrJayasekara,
        designation: "ස්වාධීන විධායක නොවන අධ්‍යක්ෂ",
        description : ["ජයසේකර පතිරන්නැහැලගේ දනසිරි රූපකුමාර ජයසේකර මහතා ආර්ථික විද්‍යාව පිළිබඳ දෙවන පන්තියේ ඉහළ සාමාර්ථයක් සහිත විශේෂ උපාධියක් (BA Special) ඇති අයෙකි. ඔහුට බදු, තොරතුරු තාක්ෂණය , බැංකු සහ මූල්‍ය ක්ෂේත්‍රයන්හි වසර 33 ක අඛණ්ඩ පළපුරුද්දක් ඇත. 1984 වසරේ අභ්‍යන්තර ආදායම් දෙපාර්තමේන්තුවේ තක්සේරුකරුවෙකු ලෙස කාර්යභාරය ඇරඹූ ඔහු 1994 වසරේ ජ්‍යෙෂ්ඨ තක්සේරු තනතුරට උසස් කරන ලදී. 2005 වසරේදී නියෝජ්‍ය කොමසාරිස් තනතුරට උසස් කරන ලද ඔහු, පසුව කොමසාරිස් සහ ජ්‍යෙෂ්ඨ කොමසාරිස් තනතුරු ද දැරීය.",
          "2015 ජූලි මාසයෙන් පසු, ආදායම් පරිපාලන කළමණාකරණ තොරතුරු පද්ධතිය (RAMIS) නම් තොරතුරු තාක්ෂණ ව්‍යාපෘතියේ ජ්‍යෙෂ්ඨ අතිරේක ව්‍යාපෘති අධ්‍යක්ෂවරයා ලෙස කාර්යභාරය ඉටු කළේය. මෙම ව්‍යාපෘතියේ අරමුණ නම් අභ්‍යන්තර ආදායම් දෙපාර්තමේන්තුවේ සියළු IRD  බදු ක්‍රියාදාමයන් ස්වයංක්‍රීය කිරීමය. විශ්‍රාම යන විට ඔහු තොරතුරු තාක්ෂණ නියෝජ්‍ය කොමසාරිස් ජනරාල් ලෙස කටයුතු කළේය.",
          "ජයසේකර මහතා IRD හි සේවා කාලය තුල විවිධ පුහුණු වැඩසටහන් සහ ජාත්‍යන්තර සම්මන්තරණවලට සහභාගීවීමෙන් විදෙස් පළපුරුද්ද ලබා ගෙන ඇත. ඔහුට බදු ක්ෂේත්‍රයේ විවිධ කරුණු පිළිබඳ ඔස්ට්‍රියාව, ඉන්දියාව සහ එක්සත් රාජධානියේ පුහුණු වැඩසටහන් හදාරන්නට අවස්ථාව හිමිවිය. එමෙන්ම, සීශෙල්ස් සහ සවුදි අරාබියාවේ ප්‍රායෝගික වැඩසටහන් හරහා ද්විත්ව බදුකරණය ගිවිසුම් පිළිබඳ වටිනා අත්දැකීම් ලබා ගෙන ඇත.",
          "ඔහු ප්‍රංශයේ පැවති ‘OECD Global Forum on VAT’ සහ ජපානයේ ටෝකියෝ නගරයේ පැවති ‘Fourth IMF – Japan High Level Tax Conference for Asian Countries’ යන සම්මන්ත්‍රණ සදහා නියෝජිතයකු ලෙස ද සහභාගී විය. තවද, චීනයේ පැවති Blue Economy සහ Maritime Silk Road පිළිබඳ අමාත්‍යාංශීය කටයුතු මණ්ඩලයේ වැඩමුළුවකට සහභාගී වී ඇත. RAMIS ව්‍යාපෘතියේ ‘Due Diligence Reports’ සකස් කිරීමට අදාළ සිංගප්පූරුව සහ ඇන්ගෝලා යන රටවල් වෙත ගමන් කල ඇගයීම් කමිටුවේ සාමාජිකයෙකු ලෙස ද ඔහු කටයුතු කළේය.",
          "ජයසේකර මහතා APFA (ශ්‍රී ලංකා පොදු මූල්‍ය ගිණුම්කරුන්ගේ සංගමය) හි සාමාජිකයකු වන අතර, චීන-ශ්‍රී ලංකා සංගමයේ සක්‍රීය සාමාජිකයෙකු ලෙසද කටයුතු කරයි. එමෙන්ම, ඔහු සමාජ සහ සංගම් කිහිපයක තනතුරු සහ සාමාජිකත්වය දරණ  ක්‍රියාකාරී සමාජ සේවකයෙකි.",

        ]
      },
      {
        id: "5",
        name: "ටී.සී.ඩී.කුමාරසිරි",
        src: mrKumarasiri,
        designation: "ස්වාධීන විධායක නොවන අධ්‍යක්ෂ",
        description : ["කුමාරසිරි මහතා ජ්‍යෙෂ්ඨ වරලත් ගණකාධිකාරීවරයෙකු, කළමනාකරණ උපදේශකයෙකු, ප්‍රධාන දේශකයෙකු, ව්‍යාපාර උපදේශකයෙකු සහ ආයතනික පුහුණුකරුවෙකු ද වන අතර ප්‍රමුඛ පෙළේ දේශීය ආයතනවල සහ බහුජාතික සමාගම්වල ජ්‍යෙෂ්ඨ නායක තනතුරු දරා ඇත. ",
          "ඔහු ආසියා පැසිෆික් මුදල් සහ ව්‍යවසායකත්ව සංවර්ධන ආයතනයේ නිර්මාතෘ/සභාපති, මානව ප්‍රාග්ධන සහකාර ආයතනයෙහි නිර්මාතෘ/ප්‍රධාන විධායක නිලධාරී, සහ H C P Consulting (Pvt.) Ltd හි සභාපති/ප්‍රධාන උපදේශක වේ. ඔහු සණස සංවර්ධන බැංකුවේ ස්වාධීන විධායක නොවන අධ්‍යක්ෂවරයෙකු ලෙස සහ පෞද්ගලික/ රාජ්‍ය අංශයන්හි ප්‍රමුඛ පෙළේ ආයතන කිහිපයක උපදේශකයෙකු ලෙස සේවය කරයි. ඔහු සමස්ත දකුණු ආසියාවේ එකම නියෝජිතයා ලෙස ගිණුම්කරණ අධ්‍යාපනය පිළිබඳ ජාත්‍යන්තර මණ්ඩලයේ (IPAE) ද සේවය කරයි. ඔහු අඛණ්ඩව වාර දෙකක දී CA ශ්‍රී ලංකා හි පාලක මණ්ඩලයේ සේවය කර ඇති අතර දැනට ACCA ශ්‍රී ලංකා සාමාජික ජාලයේ උප සභාපති ලෙස කටයුතු කරයි.",
          "කුමාරසිරි මහතාට සම්මාන රැසක් මෙන්ම වෘත්තීය සහ අධ්‍යයන සුදුසුකම් රාශියක් ද ඇත. ඔහු ශ්‍රී ලංකා වරලත් ගණකාධිකාරීවරුන්ගේ ආයතනයේ ද, එක්සත් රාජධානියේ වරලත් ගණකාධිකාරීවරුන්ගේ සංගමයේ ද, ශ්‍රී ලංකා ගිණුම්කරණ කාර්මිකයන්ගේ සංගමයේ ද සහ ශ්‍රී ලංකා සහතික කළ කළමනාකරණ ගණකාධිකාරීවරුන්ගේ ආයතනයේ ද  සාමාජිකයෙකි. ඔහු ශ්‍රී ජයවර්ධනපුර විශ්වවිද්‍යාලයෙන් පළමු පන්තියේ ගෞරව සහිතව B.Sc ගණකාධිකාරී (විශේෂ) උපාධියක් ලබා ඇති අතර කොළඹ විශ්වවිද්‍යාලයෙන් මූල්‍ය පිළිබඳ ශාස්ත්‍රපති උපාධියක් ද ලබා ඇත. ප්‍රමුඛ පෙළේ ආයතනික පුහුණුකරුවෙකු ලෙස ඔහු ශ්‍රී ලංකාවේ සහ එතෙර සිටින විශාල පුද්ගලයින් ප්‍රමාණයක් දිරිගන්වා ඇත. ව්‍යවසායකයින් අතර ප්‍රමුඛ චරිතයක් ලෙස, විවිධ පොදු සංසද, ජාතික රූපවාහිනී/ගුවන්විදුලි නාලිකා සහ ප්‍රමුඛ YouTube නාලිකා හරහා ඔහු  නිරන්තරයෙන් වැඩසටහන් වලට සහභාගී වී ඇත. ගණකාධිකාරී වෘත්තිය සහ එහි වටිනාකම් ප්‍රවර්ධනය කිරීම සඳහා ඔහුගේ සුවිශේෂී කැපවීම වෙනුවෙන් ඔහුට 2022 වසරේ ACCA ජාතික උපදේශක සම්මානය ද පිරිනමා ඇත."
        ]
      },
      {
        id: "6",
        name: "රොෂාන් ද සිල්වා ගුණසේකර",
        src: mrRoshan,
        designation: "විධායක අධ්යක්ෂක / ප්‍රධාන මෙහෙයුම් නිලධාරි",
        description : ["රොෂාන් ද සිල්වා ගුණසේකර මහතා විධායක අධ්‍යක්ෂ සහ ප්‍රධාන මෙහෙයුම් නිලධාරී ලෙස කටයුතු කරමින් අත්දැකීම් සම්භාරයක් සහ විශේෂඥ දැනුමක් තම  භූමිකාවට ගෙන එයි. ඔහු 2023 වසරේ විධායක අධ්‍යක්ෂවරයෙකු ලෙස අධ්‍යක්ෂ මණ්ඩලයට පත් කරන ලද අතර, මුලින් 2010 අප්‍රේල් මාසයේදී සමාගමට සම්බන්ධ විය. වසර ගණනාවක් පුරා, ඔහු Asia Asset Finance PLC මෙන්ම විශාල මූල්‍ය සේවා කර්මාන්තය යන දෙකෙහිම සුවිශේෂී නායකත්වයක් සහ ගැඹුරු අවබෝධයක් ඇති බව පෙන්නුම් කර ඇත.LOLC Finance PLC සමඟ ඒකාබද්ධ වූ කොමර්ෂල් ලීසිං කම්පැනි ලිමිටඩ් හි ක්‍රෙඩිට් ඔෆිසර් තනතුර භාරගැනීමත් සමග 1994 දී ආරම්භ වූ ගුණසේකර මහතාගේ මුල්‍ය අංශ වෘත්තීය ජීවිතය වසර 30ක් පුරාවට දිව යයි. සමාගමේ වර්ධනයට සහ ස්ථාවරත්වයට සැලකිය යුතු දායකත්වයක් ලබා දෙමින් ඔහුගේ උපායමාර්ගික දැක්ම සහ මෙහෙයුම් තීක්ෂ්ණ බුද්ධිය හැඩගැස්වීමේදී ඔහුගේ පුළුල් පශ්චාත්-සුදුසුකම් පළපුරුද්ද වැදගත් වේ. ඔහු ශ්‍රී ජයවර්ධනපුර විශ්වවිද්‍යාලයෙන් ව්‍යාපාර පරිපාලනය (විශේෂ) පිළිබඳ විද්‍යාවේදී උපාධියක් සහ කොළඹ විශ්වවිද්‍යාලයෙන් MBA උපාධියක් ලබා ඇත. මීට අමතරව, ඔහු එක්සත් රාජධානියේ කළමනාකරණ ගණකාධිකාරීවරුන්ගේ වරලත් ආයතනයෙන් (CIMA) අර්ධ සුදුසුකම් සම්පූර්ණ කර ඇති අතර, ඔහුගේ මූල්‍ය ප්‍රවීණත්වය තවදුරටත් වැඩි දියුණු කර ඇත. ඔහු වෘත්තීය සහ අධ්‍යාපනික ජයග්‍රහණවලින් ඔබ්බට යමින් ගුණසේකර මහතා ජපානයේ විදේශීය තාක්ෂණික ජ්‍යෙෂ්ඨ කළමනාකරණ ශිෂ්‍යත්ව සංගමයේ ද (AOTS) ගෞරවනීය සාමාජිකයෙකු ලෙස ක්‍රියාකරයි. කොළඹ විශ්වවිද්‍යාලයේ මූල්‍ය සේවා අලෙවිකරණය පිළිබඳ බාහිර කථිකාචාර්යවරයකු ලෙස කටයුතු කිරීම තුළින් අධ්‍යාපනය සඳහා වූ ඔහුගේ කැපවීම ද පැහැදිලි වන අතර එහිදී ඔහු තම දැනුම සහ අත්දැකීම් එය අපේක්ෂා කරන මුල්‍ය වෘත්තිකයන් සමඟ බෙදාගැනීමට ද කටයුතු කලේය. ඔහු පුළුල් මූල්‍ය සේවා ප්‍රජාවට දායක වෙමින් විවිධ දැනුම බෙදාගැනීමේ සංසදවල සම්පත් දායකයෙකු ද ලෙස සිටී. දැනට, ගුණසේකර මහතා කොළඹ විශ්වවිද්‍යාලයේ ව්‍යාපාර පරිපාලනය පිළිබඳ ආචාර්ය උපාධියක් (DBA) හදාරමින් සිටින අතර, එමගින් ඔහුගේ අඛණ්ඩ ඉගෙනීම සහ වෘත්තීය සංවර්ධනය සඳහා වූ කැපවීම පිළිබිඹු කරයි. ගුණසේකර මහතාගේ ප්‍රායෝගික අත්දැකීම් සම්මිශ්‍රණය, ශාස්ත්‍රීය දක්‍ෂතාවය සහ දැනුම ව්‍යාප්ත කිරීම සඳහා වූ කැපවීම ඔහු මූල්‍ය සේවා අංශයේ කැපී පෙනෙන චරිතයක් බවට පත් කරයි. ඔහුගේ නායකත්වය තරඟකාරී ක්ෂේත්‍රයක් තුල සමගමේ අඛණ්ඩ සාර්ථකත්වය සහතික කරමින් නව්‍යකරණය සහ විශිෂ්ටත්වය කරා අඛණ්ඩව මෙහෙයවනු ලබයි.",

        ]
      },
      {
        id: "7",
        name: "රජීව් ජේම්ස් අබේවික්‍රම ගුණවර්ධන",
        src: mrRajiv,
        designation: "විධායක අධ්‍යක්ෂ/ප්‍රධාන විධායක නිලධාරී",
        description : [" රජීව් ගුණවර්ධන මහතා. Asia Asset Finance PLC හි ප්‍රධාන විධායක නිලධාරී / අධ්‍යක්ෂවරයා වේ. ඔහු 2009 දෙසැම්බර් මාසයේදී අධ්‍යක්ෂ මණ්ඩලයට පත් කරන ලද අතර  මොහු සංවිධානයේ දැක්ම, උපාය මාර්ග සැකසීම සහ ක්‍රියාත්මක කිරීම මෙන්ම සංවිධානයේ මෙහෙයුම් පාලනය කිරීම සඳහා වගකිව යුතු දූරදර්ශී නායකයෙකු ලෙස කටයුතු කරයි. ඔහු එක්සත් රාජධානියේ ව්‍යාපාර සහ තොරතුරු පද්ධති පිළිබඳ විද්‍යාවේදී උපාධියක් ලබා ඇති අතර ඕස්ට්‍රේලියාවේ මොනෑෂ් විශ්ව විද්‍යාලයේ වෘත්තීය ගිණුම්කරණය පිළිබඳ ශාස්ත්‍රපති උපාධිය සම්පූර්ණ කර ඇත. Asia Asset Finance හා සම්බන්ධ වීමට පෙර ඔහු Asia Capital PLC හි ජ්‍යෙෂ්ඨ ආයෝජන විශ්ලේෂක තනතුරේ සේවය කර ඇත. ඔහු Australian College of Business and Technology හි ගිණුම්කරණය පිළිබඳ කථිකාචාර්යවරයෙකි.",

        ]
      },
      {
        id: "8",
        name: "රොෂාන් ද සිල්වා ගුණසේකර",
        src: mrRoshan,
        designation: "විධායක අධ්යක්ෂක / ප්‍රධාන මෙහෙයුම් නිලධාරි",
        description : ["රොෂාන් ද සිල්වා ගුණසේකර මහතා විධායක අධ්‍යක්ෂ සහ ප්‍රධාන මෙහෙයුම් නිලධාරී ලෙස කටයුතු කරමින් අත්දැකීම් සම්භාරයක් සහ විශේෂඥ දැනුමක් තම  භූමිකාවට ගෙන එයි. ඔහු 2023 වසරේ විධායක අධ්‍යක්ෂවරයෙකු ලෙස අධ්‍යක්ෂ මණ්ඩලයට පත් කරන ලද අතර, මුලින් 2010 අප්‍රේල් මාසයේදී සමාගමට සම්බන්ධ විය. වසර ගණනාවක් පුරා, ඔහු Asia Asset Finance PLC මෙන්ම විශාල මූල්‍ය සේවා කර්මාන්තය යන දෙකෙහිම සුවිශේෂී නායකත්වයක් සහ ගැඹුරු අවබෝධයක් ඇති බව පෙන්නුම් කර ඇත.LOLC Finance PLC සමඟ ඒකාබද්ධ වූ කොමර්ෂල් ලීසිං කම්පැනි ලිමිටඩ් හි ක්‍රෙඩිට් ඔෆිසර් තනතුර භාරගැනීමත් සමග 1994 දී ආරම්භ වූ ගුණසේකර මහතාගේ මුල්‍ය අංශ වෘත්තීය ජීවිතය වසර 30ක් පුරාවට දිව යයි. සමාගමේ වර්ධනයට සහ ස්ථාවරත්වයට සැලකිය යුතු දායකත්වයක් ලබා දෙමින් ඔහුගේ උපායමාර්ගික දැක්ම සහ මෙහෙයුම් තීක්ෂ්ණ බුද්ධිය හැඩගැස්වීමේදී ඔහුගේ පුළුල් පශ්චාත්-සුදුසුකම් පළපුරුද්ද වැදගත් වේ. ඔහු ශ්‍රී ජයවර්ධනපුර විශ්වවිද්‍යාලයෙන් ව්‍යාපාර පරිපාලනය (විශේෂ) පිළිබඳ විද්‍යාවේදී උපාධියක් සහ කොළඹ විශ්වවිද්‍යාලයෙන් MBA උපාධියක් ලබා ඇත. මීට අමතරව, ඔහු එක්සත් රාජධානියේ කළමනාකරණ ගණකාධිකාරීවරුන්ගේ වරලත් ආයතනයෙන් (CIMA) අර්ධ සුදුසුකම් සම්පූර්ණ කර ඇති අතර, ඔහුගේ මූල්‍ය ප්‍රවීණත්වය තවදුරටත් වැඩි දියුණු කර ඇත. ඔහු වෘත්තීය සහ අධ්‍යාපනික ජයග්‍රහණවලින් ඔබ්බට යමින් ගුණසේකර මහතා ජපානයේ විදේශීය තාක්ෂණික ජ්‍යෙෂ්ඨ කළමනාකරණ ශිෂ්‍යත්ව සංගමයේ ද (AOTS) ගෞරවනීය සාමාජිකයෙකු ලෙස ක්‍රියාකරයි. කොළඹ විශ්වවිද්‍යාලයේ මූල්‍ය සේවා අලෙවිකරණය පිළිබඳ බාහිර කථිකාචාර්යවරයකු ලෙස කටයුතු කිරීම තුළින් අධ්‍යාපනය සඳහා වූ ඔහුගේ කැපවීම ද පැහැදිලි වන අතර එහිදී ඔහු තම දැනුම සහ අත්දැකීම් එය අපේක්ෂා කරන මුල්‍ය වෘත්තිකයන් සමඟ බෙදාගැනීමට ද කටයුතු කලේය. ඔහු පුළුල් මූල්‍ය සේවා ප්‍රජාවට දායක වෙමින් විවිධ දැනුම බෙදාගැනීමේ සංසදවල සම්පත් දායකයෙකු ද ලෙස සිටී. දැනට, ගුණසේකර මහතා කොළඹ විශ්වවිද්‍යාලයේ ව්‍යාපාර පරිපාලනය පිළිබඳ ආචාර්ය උපාධියක් (DBA) හදාරමින් සිටින අතර, එමගින් ඔහුගේ අඛණ්ඩ ඉගෙනීම සහ වෘත්තීය සංවර්ධනය සඳහා වූ කැපවීම පිළිබිඹු කරයි. ගුණසේකර මහතාගේ ප්‍රායෝගික අත්දැකීම් සම්මිශ්‍රණය, ශාස්ත්‍රීය දක්‍ෂතාවය සහ දැනුම ව්‍යාප්ත කිරීම සඳහා වූ කැපවීම ඔහු මූල්‍ය සේවා අංශයේ කැපී පෙනෙන චරිතයක් බවට පත් කරයි. ඔහුගේ නායකත්වය තරඟකාරී ක්ෂේත්‍රයක් තුල සමගමේ අඛණ්ඩ සාර්ථකත්වය සහතික කරමින් නව්‍යකරණය සහ විශිෂ්ටත්වය කරා අඛණ්ඩව මෙහෙයවනු ලබයි.",

        ]
      },
      {
        id: "9",
        name: "කෝකිලා පෙරේරා",
        src: msKokila,
        designation: "ප්‍රධාන මූල්‍ය නිලධාරිනි",
        description : [
          "සංවිධානයට උපායමාර්ගික මූල්‍ය නායකත්වය සැපයීම, මූල්‍ය සැලසුම්කරණය, භාණ්ඩාගාර කළමනාකරණය, නියාමන අනුකූලතාව, අවදානම් කළමනාකරණය සහ මූල්‍ය වාර්තාකරණය අධීක්ෂණය කිරීම, තිරසාර වර්ධනයක් සහ කොටස් හිමි වටිනාකමක් ලබා ගැනීම සඳහා අධ්‍යක්ෂ මණ්ඩලයට සහ ජ්‍යෙෂ්ඨ කළමනාකාරිත්වයට සහාය වීම ඇයගේ වගකීම් අතර වේ.",
          "ඇය ශ්‍රී ලංකා වරලත් ගණකාධිකාරී ආයතනයේ (FCA) අධි සාමාජිකාවක් වන අතර එක්සත් රාජධානියේ වේල්ස් ට්‍රිනිටි සහ ශාන්ත ඩේවිඩ් විශ්ව විද්‍යාලයෙන් ව්‍යාපාර පරිපාලනය පිළිබඳ ශාස්ත්‍රපති උපාධියක් (MBA) ලබා ඇත. මූල්‍ය සේවා අංශය තුළ මූල්‍ය, ගිණුම්කරණය සහ ආයතනික මූල්‍ය ක්ෂේත්‍රයේ වසර 25 කට වැඩි පළපුරුද්දක් ඇය සතු වෙයි.",
          "ඇය මූල්‍ය සමාගම් සහ තවත් ආයතනවල ජ්‍යෙෂ්ඨ මූල්‍ය තනතුරු දරා ඇති අතර, එහිදී ඇය මූල්‍ය පාලනයන් ශක්තිමත් කිරීම, ලාභදායිතාවය වැඩිදියුණු කිරීම, නියාමන සහ විගණන අවශ්‍යතා කළමනාකරණය කිරීම සහ මූල්‍ය පරිවර්තන මුලපිරීම් මෙහෙයවීම සඳහා ප්‍රධාන කාර්යභාරයක් ඉටු කරඇත. අයවැයකරණය සහ පුරෝකථනය, වත්කම්-වගකීම් කළමනාකරණය, බදුකරණය මෙන්ම නියාමකයින්, විගණකවරුන් සහ මූල්‍ය ආයතන සමඟ කටයුතු කරතිබීම ඇයගේ විශේෂඥතා අතර වේ."
        ]
      },
      {
        id: "10",
        name: "ජයන්ත වීරප්පුලිගෙ",
        src: mrJayantha,
        designation: "සමාන්‍යාධිකාරී - සේවා මෙහෙයුම්",
        description : ["ජයන්ත වීරප්පුලිගේ මහතා 2008 වසරේ Asia Asset Finance PLC හා සම්බන්ධ විය. දැනට, වීරපුල්ලිගේ මහතා ඒෂියා ඇසට් ෆිනෑන්ස් හි සාමාන්‍යාධිකාරී - මෙහෙයුම් ලෙස සේවය කරයි., මුලදී ඔහු AGM ශ්‍රේණිය ලෙස උසස් වීමට පෙර වසර 3ක් ජ්‍යෙෂ්ඨ කළමනාකාර ණය දීමේ තනතුරේ සේවය කළ අතර 2022 දී ඔහු DGM තනතුරට උසස් කරන ලදී. . ජයන්ත වීරප්පුලිගේ මහතා කොළඹ විශ්වවිද්‍යාලයෙන් ව්‍යාපාර පරිපාලනය පිළිබඳ B. Com (විශේෂ) උපාධියක් සහ MBA උපාධියක් ලබා ඇත. මූල්‍ය අංශයේ වසර 20ක් ගත කළ අලෙවිකරණය, ණය, මෙහෙයුම්, ගිණුම් පිළිබඳ වසර 23කට වැඩි සේවා පළපුරුද්දක් ඇති ඔහු 2003 සිට පීපල්ස් මර්චන්ට් බැංකුවේ මීට පෙර කළ රැකියාවේදී බැංකු ක්ෂේත්‍රයේ පළපුරුද්ද ද ඇත. 2008. ඔහු Asia Asset Finance PLC හි ඉහළ කළමනාකාරිත්වයේ වසර 15 කට වැඩි පළපුරුද්දක් දරයි. අලෙවිකරණය, ණය, පරිපාලනය සහ ප්‍රතිසාධන වලින් සමන්විත ශාඛාවල ක්‍රියාකාරිත්වය මෙන්ම සමස්ත ශාඛා ජාලයම මෙහෙයවීම සඳහා ඔහු වගකිව යුතුය.  නිෂ්පාදන සහ ව්‍යාපාර සංවර්ධනය, උපායමාර්ගික සැලසුම් සහ ක්‍රියාත්මක කිරීම සඳහා ඔහු තවදුරටත් වගකිව යුතුය.",

        ]
      },
      {
        id: "11",
        name: "සජිත් අතපත්තු",
        src: mrSajith,
        designation: "සමාන්‍යාධිකාරී - මෙහෙයුම්",
        description : ["සජිත් අතපත්තු මහතා 2010 වසරේ Asia Asset Finance PLC හා සම්බන්ධ වූ අතර දැනට සමාන්‍යාධිකාරී - මෙහෙයුම් තනතුර දරයි. මෙම වසර 14ක විස්තීර්ණ කාලසීමාව පුරාවට අතපත්තු මහතා විවිධ කාර්ය භාරයන් ඉටු කර ඇති අතර ණය සහ ප්‍රතිසාධනයේ සිට මෙහෙයුම්, පරිපාලනය සහ අවදානම් දක්වා විවිධ වගකීම් භාරගෙන ඇති අතර එහිදී ඔහු සංවිධානයේ ප්‍රධාන ක්ෂේත්‍රවල අත්දැකීම් සම්භාරයක් රැස් කර ඇත. විවිධ දෙපාර්තමේන්තු අතර අන්තර් ක්‍රියාකාරිත්වය සහ පුළුල් ආයතනික අරමුණු සාක්ෂාත් කර ගැනීම සඳහා ඔවුන්ගේ උත්සාහයන් පෙළගැස්වීමේ වැදගත්කම පිළිබඳව ඔහු පුළුල් අවබෝධයක් ලබා ඇත. සජිත් අතපත්තු මහතා මූල්‍ය ඇතුළත් කිරීම් ප්‍රවර්ධනය කිරීම සඳහා කැප වූ සංවිධානයක් වන London Mutual Credit Union (UK) හි සිය වෘත්තීය ජීවිතය ආරම්භ කළේය. LMCU හි ඔහුගේ සේවා කාලය තුළ, ඔහු මූල්‍ය අංශයේ සංකීර්ණතා පිළිබඳව මෙන්ම සියලු පුද්ගලයන්ට ප්‍රවේශ විය හැකි මූල්‍ය සේවා සැපයීමේ වැදගත්කම පිළිබඳව ද ගැඹුරු අවබෝධයක් ලබාගෙන ඇත. ඔහු එක්සත් රාජධානියේ Keele විශ්ව විද්‍යාලයෙන් සිය උපාධිය ලබාගෙන ඇත.",

        ]
      },
      {
        id: "12",
        name: "ඉන්දිත ජයතිලක",
        src: mrInditha,
        designation: "සාමාන්‍යාධිකාරී - තොරතුරු තාක්ෂණ",
        description : ["ඉන්දිත ජයතිලක මහතා ඒෂියා ඇසට් ෆිනෑන්ස් ආයතනයෙහි සියලුම තොරතුරු තාක්ෂණ ආශ්‍රිත කාර්යයන් සඳහා විසඳුම් සපයනු ලබන අතර ඔහුට බැංකු සහ මූල්‍ය විසඳුම් සංවර්ධනය සහ ක්‍රියාත්මක කිරීම සම්බන්ධයෙන් වසර 12 කට වැඩි පළපුරුද්දක් ඇත. ඔහු සිය කළමනාකරණ තොරතුරු පද්ධති පිළිබඳ ශාස්ත්‍රවේදී උපාධිය  ඩබ්ලන් විශ්ව විද්‍යාලයෙන් ලබාගන්නා ලදී.",
          "ඔහුගේ වෘත්තීය කාලය තුළ, ඔහු විවිධ අංශවලින් ඔහුගේ අත්දැකීම් ලබා ගත් අතර, මූල්‍ය ක්ශේත්‍රය තුල අත්‍යාවශ්‍ය මෘදුකාංග ඇතුලු අනෙකුත් තොරතුරු තාක්ශණික විසඳුම් ලබාදෙන විශේෂඥ පුද්ගලයෙක් බවට පත්විය. දැනට, ඔහු තොරතුරු තාක්ෂණය හා සම්බන්ධ මෘදුකාංග , ආරක්ෂක සේවා ඇතුලු සියලුම ක්‍රියාවලීන් සිදු කරමින් තොරතුරු තාක්ෂණ දෙපාර්තමේන්තුව අධීක්ෂණය කරනු ලබයි.",
        ]
      },
      {
        id: "13",
        name: "ප්‍රවීන් පීරිස්",
        src: mrPraveen,
        designation: "සාමාන්‍යාධිකාරී - භාණ්ඩාගාර",
        description : ["ප්‍රවීන් පීරිස් මහතා 2014 වසරේදී Asia Asset Finance PLC හා සම්බන්ධ වූ අතර වසර 20කට අධික මූල්‍ය හා භාණ්ඩාගාර අත්දැකීම් ඇත. ඔහු 2004 දී ගෝලීය විගණන සමාගමකින් සිය වෘත්තීය ජීවිතය ආරම්භ කළ අතර 2008 දී බැංකු නොවන මූල්‍ය අංශයට සම්බන්ධ විය. Asia Asset Finance PLC හා සම්බන්ධ වීමට පෙර ඔහු ලැයිස්තුගත මූල්‍ය සමාගමක භාණ්ඩාගාර කළමනාකරු ලෙස සේවය කළේය. ඔහුට උපාය මාර්ගික අවදානම් කළමනාකරණය, වත්කම් වගකීම් කළමනාකරණය සහ මුදල් කළමනාකරණය ඇතුළු භාණ්ඩාගාර කළමනාකරණය පිළිබඳ විශේෂඥ දැනුමක් ඇත. ඔහු මෙහෙයුම් කළමනාකරණය පිළිබඳ නිපුණයෙකු වන අතර ඉහළ වටිනාකමක් ඇති ව්‍යාපෘති සඳහා මූල්‍යකරණය හැසිරවීමේ හැකියාව ඇත. පීරිස් මහතා එක්සත් රාජධානියේ වේල්ස් විශ්ව විද්‍යාලයෙන් MBA උපාධියක් ලබා ඇති අතර U.K හි කළමනාකරණ ගණකාධිකාරීවරුන්ගේ වරලත් ආයතනයේ අවසන් තරඟකරුවෙකි.",

        ]
      },
      {
        id: "14",
        name: "සමිර වේවැල්දෙණිය",
        src: mrSameera,
        designation: "නියෝජ්‍ය සාමාන්‍යාධිකාරී - ස්ථාවර තැන්පතු",
        description : ["සමිර වේවැල්දෙණිය මහතා 2006 ජුනි මාසයේදී මීගමුව ශාඛා කළමනාකාරවරයා ලෙස AAF වෙත සම්බන්ධ වූ අතර 2009 දී ප්‍රාදේශීය කළමනාකරු - ස්ථාවර තැන්පතු තනතුරට පත් කරන ලද අතර පසුව 2011 දී ස්ථාවර තැන්පතු ජ්‍යෙෂ්ඨ කළමනාකරු ලෙස පත්වීමක් ලැබීය. ඔහු සහකාර සාමාන්‍යාධිකාරී ලෙස උසස් කරන ලදී. - 2014 දී අලෙවිකරණය. ඔහුට වසර 22 කට වැඩි පළපුරුද්දක් ඇත මූල්‍ය අංශයේ තැන්පතු අලෙවිකරණය සහ දැනට DGM-ස්ථිර තැන්පතුවල ධාරිතාවයෙන් කටයුතු කරන අතර සමාගමේ අරමුදල් බලමුලු ගැන්වීමට සහ ශාඛා සංවර්ධනයට දායක වේ. AAF හා සම්බන්ධ වීමට පෙර වේවැල්දෙණිය මහතා සෙලින්කෝ සංවර්ධන බැංකුවේ සේවය කළ අතර එහිදී අලෙවිකරණයේ ඔහුගේ ජයග්‍රහණ වෙනුවෙන් ඔහුට සම්මාන රැසක් හිමි විය. වේවැල්දෙණිය මහතා එක්සත් රාජධානියේ බකිංහැම්ෂයර් නව විශ්වවිද්‍යාලයෙන් MBA උපාධියක් ලබා ඇති අතර ඒෂියා අලෙවිකරණ සම්මේලනය (AMF) විසින් සහතික කළ වෘත්තීය අලෙවිකරු-ආසියාවේ (CPM - Asia) පශ්චාත් උපාධි වෘත්තීය තත්ත්වය ඔහුට පිරිනමන ලදී. ඔහු ඔස්ට්‍රේලියාවේ (AMA-Australia) සහතික කළ කළමනාකරණ ගණකාධිකාරීවරුන්ගේ සහකාර සාමාජිකයෙකි. ඊට අමතරව ඔහු ශ්‍රී ලංකා අලෙවිකරණ ආයතනයේ (SLIM) සහතිකලත් සාමාජිකයෙකි.",

        ]
      },
      {
        id: "15",
        name: "තුෂාර විජේවර්ධන",
        src: mrThushara,
        designation: "නියෝජ්‍ය සාමාන්‍යාධිකාරී - ණය",
        description : ["ශ්‍රී. තුෂාර විජේවර්ධන මහතා 2025 ඔක්තෝබර් මාසයේදී Asia Asset Finance PLC ආයතනයට එක්විය. සාමාන්‍ය කළමනාකරණය සහ ණය කළමනාකරණය ඇතුළුව බැංකු හා මූල්‍ය ක්ෂේත්‍රයේ වසර 33කට අධික අත්දැකීම් සහිත වෘත්තීය බැංකුකරුවෙකි. ශ්‍රී ලංකාවේ ප්‍රමුඛ මූල්‍ය සමාගම්වල වසර 15කට වැඩි කාලයක් ආයතනික කළමනාකරණ සාමාජිකයෙකු ලෙස කටයුතු කර ඇති අතර, එම කාලය තුළ ණය මෙහෙයුම්, ණය පරිපාලනය සහ ණය අයකරගැනීම් කටයුතු නායකත්වය දරමින් මෙහෙයවා ඇත. ඔහු ශ්‍රී ලංකා බැංකුකරුවන්ගේ ආයතනය (IBSL) විසින් පිරිනමනු ලබන Associate of Institute of Bankers (AIB) සුදුසුකම හිමි කරගෙන, කොළඹ විශ්වවිද්‍යාලයෙන් Master of Business Studies උපාධියද, එක්සත් රාජධානියේ Kingston University වෙතින් Banking and Finance ක්ෂේත්‍රයේ Master of Business Administration (MBA) උපාධියද ලබා ඇත. විජේවර්ධන මහතා Credit Management Institute of Sri Lanka (SLICM) සහ Institute of Bankers of Sri Lanka (IBSL) විසින් සංවිධානය කරන වැඩසටහන් සඳහා AIA ආයතනයේ පුහුණුකරුවෙකු සහ දේශකයෙකු ලෙස කටයුතු කරයි. පසුගිය දශකයක් පුරා බැංකු හා මූල්‍ය ක්ෂේත්‍රයේ තරුණ වෘත්තීයවේදීන්ට ණය කළමනාකරණය පිළිබඳ පුහුණුව ලබා දීමෙන් ඔහු ක්ෂේත්‍රයේ සංවර්ධනයට වැදගත් නායකත්වයක් ලබා දී ඇත."

        ]
      },
      {
        id: "16",
        name: "වරුණි පෙරේරා",
        src: msWaruni,
        designation: "නියෝජ්‍ය සාමාන්‍යාධිකාරී - අවදානම් කළමනාකරණය",
        description : [
          "වරුණි පෙරේරා මහත්මිය 2026 දී Asia Asset Finance PLC හි අවදානම් කළමනාකරණය පිළිබඳ නියෝජ්‍ය සාමාන්‍යාධිකාරීවරිය ලෙස පත් කරන ලදී. ඇය ශ්‍රී ලංකාවේ බලපත්‍රලාභී මූල්‍ය සමාගම් අංශයේ වසර 14 කට වැඩි පළපුරුද්දක් ඇති අතර, ප්‍රමුඛ පෙළේ මූල්‍ය ආයතනයක අවදානම් කාර්යයට නායකත්වය දී පසුව ගෝලීය ණය ශ්‍රේණිගත කිරීමේ ආයතනයක සේවය කර ඇති අතර එහිදී ඇය බැංකු නොවන මූල්‍ය ආයතන (NBFI) ණය ශ්‍රේණිගත කිරීම් පිළිබඳ විශේෂඥතාවක් ලබා ඇත.",
          "ඇය එක්සත් රාජධානියේ වරලත් කළමනාකරණ ගණකාධිකාරී ආයතනයේ (ACMA) සහකාර සාමාජිකාවක් වේ. පෙරේරා මහත්මිය කොළඹ විශ්ව විද්‍යාලයෙන් මූල්‍ය ආර්ථික විද්‍යාව පිළිබඳ ශාස්ත්‍රපති උපාධියක් සහ ශ්‍රී ජයවර්ධනපුර විශ්ව විද්‍යාලයෙන් ගිණුම්කරණය පිළිබඳ විද්‍යාවේදී උපාධියක් ලබා ඇත."
        ]
      },
    ],

      //News & Events Page Components
      newsAndEvents: {
        pageTitle: "ප්‍රවෘත්ති සහ සිදුවීම්",
        articlesTitle: "නවීන ප්‍රවෘත්ති",
        eventsTitle: "ගැලරිය",
        heroDescription: "අපගේ නවතම ප්‍රවෘත්ති, ජයග්‍රහණ සහ අමරණීය සිදුවීම් සමඟ යාවත්කාලීන වන්න",
        articlesDescription: "ඒෂියා ඇසට් ෆිනැන්ස් වෙතින් නවතම යාවත්කාලීන කිරීම් සහ නිවේදන",
        noNewsTitle: "ප්‍රවෘත්ති යාවත්කාලීන කිරීම් නොමැත",
        noNewsMessage: "නවතම යාවත්කාලීන කිරීම් සඳහා පසුව නැවත පරීක්ෂා කරන්න",
        events: [
          // {
          //   title: "2025 වාර්ෂික සභාව",
          //   date: "2025-09-10",
          //   description: "ප්‍රධාන සභාගාරයේ අපගේ වාර්ෂික සභාවට සහභාගී වන්න. සියලුම කොටස් හිමියන්ට සහභාගී වීමට ආරාධනා කරනු ලැබේ.",
          //   images: ["/media/events/agm1.jpg", "/media/events/agm2.jpg", "/media/events/agm3.jpg"],
          //   location: "ප්‍රධාන කාර්යාල සභාගාරය",
          //   time: "පෙරවරු 10:00"
          // },
        ]
      },
    
    },
  },
  ta: {
    translation: {
      //Header Component
      header: {
        title: "தொடர்பு கொள்ள",
      },
      //Navbar component
      navbar: {
        home: "முகப்பு",
        about: "எங்களைப் பற்றி",
        about_dropdown0: "கண்ணோட்டம்",
        about_dropdown1: "நோக்கம், பார்வை மற்றும் இலக்கு",
        about_dropdown2: "பணிப்பாளர்கள் குழுமம்",
        about_dropdown3: "நிறுவன மேலாண்மை",
        about_dropdown4: "கிளை வலையமைப்பு",
        products: "சேவைகள்",
        products_dropdown1: "கண்ணோட்டம்",
        products_dropdown2: "தங்கக்கடன்",
        products_dropdown3: "நிலையான வைப்புக்கள்",
        products_dropdown4: "குத்தகை",
        products_dropdown5: "அடைமானம்",
        products_dropdown6: "வெளிநாட்டு நாணய மாற்று",
        products_dropdown7: "Luckewallet",
        investor_relations: "முதலீட்டாளர் தொடர்புகள்",
        investor_relations_dropdown1: "நிறுவன விவரம்",
        investor_relations_dropdown2: "நிதித்தரவுகள்",
        careers: "தொழில்வாய்ப்புக்கள்",
        downloads: "பதிவிறக்கங்கள்",
        news: "செய்தி",
        contacts: "தொடர்பு கொள்ள",
      },

      //Footer Component
      footerListItems: [
        { title: "எங்களைப் பற்றி", list: ["கண்ணோட்டம்", "பணிப்பாளர்கள் குழுமம்", "நிறுவன மேலாண்மை", "கிளை வலையமைப்புக்கள்"], links: ["/about", "/about/#bod", "/about/#corporate-management", "/branchnetwork"] },
        { title: "சேவைகள்", list: ["தங்கக்கடன்", "நிலையான வைப்புக்கள்", "குத்தகை", "அடைமானம்", "வெளிநாட்டு நாணய மாற்று", "Luckewallet"], links: ["/gold-loan", "/fixed-deposit", "/leasing", "/mortgage", "/foreign-exchange", "/luckewallet"] },
        { title: "முதலீட்டாளர் தொடர்புகள்", list: ["நிறுவன விவரம்", "நிதித்தரவுகள்", "பதிவிறக்கங்கள்"], links: ["/ir", "/ir/#financial-keys", "/downloads"] },
        { title: "ஏனைய இணைப்புகள்", list: ["தொழில்வாய்ப்புக்கள்", "தொடர்பு கொள்ள", "சலுகைள்", "செய்தி", "தனியுரிமைக் கொள்கை", "வாடிக்கையாளர் புகார் படிவம்"], links: ["/careers", "/contacts", "/promotions", "/news-and-events", "/downloads/privacy-policy", "contacts/complaints/#complaint-form"] },
      ],


      footerText: {
        subs_title1: "உங்கள் அருகிலுள்ள நிதி தீர்வுகளை கொண்டுவருதல்",
        subs_title2: "புதிய புதுப்பிப்புகளுக்காக பதிவு செய்யவும்",
        subs_title3: "எங்களிடமிருந்து",
        subs_message: "எங்கள் ஆஃபர்களையும் புதுப்பிப்புகளையும் உங்கள் இனைத்து பெட்டியில் பெற பதிவு செய்யவும்.",
        subs_field: "உங்கள் மின்னஞ்சல் எண் உள்ளிடவும்",
        subs_btn: "சமர்ப்பிக்கவும்",
        intro: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ, 1970 செப்டம்பர் 23 ஆம் தேதி நிறுவப்பட்டது, Fitch rating A+ நிலையான முன்னோக்கி மதிப்பீடு மற்றும் இலங்கை மத்திய வங்கியின் நிதி வாரியத்தால் நிதி வணிக சட்டம் இல. 42 - 2011 இல் உரிமம் பெற்றுள்ளது.",
        address: "தலைமையகம்: எண் 76, பார்க் தெரு, கொழும்பு 02, இலங்கை",
      },
      
      
      //Landing Page Components
      tempData: {
        debenture_btn: "Debenture Issues 2024",
      },

      carouselLandingPage: [
        
        {
          src: banner1,
          title: "உங்கள் நிதி எதிர்காலத்திற்கு புதிய தீர்வுகள்",
          intro: "உங்கள் நிதி எதிர்காலத்தை சக்திவாய்ந்ததாக ஆக்குதல்",
          description: "ஏசியா எசட் பைனான்ஸ் நிறுவனத்தில், நிதி வெற்றியைத் தூண்டும் புதுமையின் சக்தியை நாங்கள் நம்புகிறோம். பொருத்தமான நிதித் தீர்வுகளை வழங்குவதில் எங்களின் அர்ப்பணிப்பு இலங்கையின் நிதித்துறையில் முன்னணியில் எங்களை நிலைநிறுத்தியுள்ளது. உங்களின் அடுத்த பெரிய திட்டத்தில் முதலீடு செய்ய, சேமிக்க அல்லது நிதியுதவி செய்ய நீங்கள் விரும்பினாலும், நம்பிக்கையுடனும் வெளிப்படைத்தன்மையுடனும் உங்கள் பயணத்தை ஆதரிக்க நாங்கள் இங்கு இருக்கிறோம்.",
        },
        {
          src: banner2,
          title: "கனவுகளுக்கான நிதி தீர்வுகள் சந்திக்கும் இடம்",
          intro: "புதுப்பிக்கப்பட்ட நிதி முன்னுதாரண வளர்ச்சி ",
          description:
            "நாங்கள் ஒரு நிதி நிறுவனம் அல்ல, நாங்கள் உங்கள் பங்காளிகள். நிதிக்கான எங்களின் புதுமையான அணுகுமுறையானது இலங்கை முழுவதிலும் உள்ள தனிநபர்கள் மற்றும் வணிகங்களை மேம்படுத்துவதற்காக வடிவமைக்கப்பட்டுள்ளது. தனிப்பயனாக்கப்பட்ட சேவையுடன் அதிநவீன தொழில்நுட்பத்தை இணைப்பதன் மூலம், உங்கள் இலக்குகளை அடைய உங்களுக்கு உதவுவதில் திறமையானவை மட்டுமல்ல, பயனுள்ள நிதித் தீர்வுகளையும் நாங்கள் வழங்குகிறோம்.",
        },
        {
          src: banner3,
          title: "இலங்கை நிதித்துறையில் முன்னோடியாக முன்னேறி செல்கிறோம் ",
          intro: "உங்கள் நம்பிக்கை எமது பொறுப்பு ",
          description:
            "நம்பிக்கையும் வெளிப்படைத்தன்மையும் எங்கள் வணிகத்தின் மூலக்கற்கள். இலங்கையின் நிதித்துறையில் ஒரு தலைவன் என்ற வகையில், நாம் செய்யும் எல்லாவற்றிலும் ஒருமைப்பாட்டின் மிக உயர்ந்த தரத்தைப் பேணுவதற்கு நாங்கள் உறுதிபூண்டுள்ளோம். எங்களின் முதல் தொடர்பு முதல் இறுதி பரிவர்த்தனை வரை, உங்கள் தேவைகளுக்கு ஏற்ப தெளிவான, நேர்மையான ஆலோசனை மற்றும் சேவைகளை வழங்குவதற்கு நீங்கள் எங்களை நம்பலாம்.",
        },
      ],
      landingPageCards: {
        card1_title: "நிபுணர் அணி",
        card1_description: "எங்கள் நிதி நிபுணர்களின் அறிவையும் அனுபவத்தையும் உங்கள்  வெற்றி பாதையில் பயணிக்க பயன்படுத்துங்கள்.",
        card2_title: "பரந்த அணுகல்",
        card2_description: "இலங்கை முழுவதும் உள்ள வாடிக்கையாளர்களின் தேவைகளுக்கு  ஏற்றவாறு வடிவமைக்கப்பட்ட விரிவான நிதி தயாரிப்புகளை வழங்குதல்",
        card3_title: "வேகமான செயல்திறன்மிக்க சேவை ",
        card3_description: "உங்கள் நேரத்தை மிச்சப்படுத்தவும் மற்றும் உங்கள் நிதி பயணத்தை எளிதாக்கவும் வடிவமைக்கப்பட்ட விரைவான மற்றும் தடங்கல் அற்ற சேவைகளை அனுபவிக்கவும்.",
      },
      whyChooseUs: {
        title_left: "ஏசியா எசட் பைனான்ஸ் ",
        title_right: "ஏன் தேர்வு செய்ய வேண்டும்",
        description: "50 ஆண்டுகளுக்கு மேல், ஏசியா எசட் பைனான்ஸ் பீ எல் சீ நிறுவனமாக நாம், எங்கள் ஆர்வத்தை எண்ணற்ற நபர்களுக்கும் வணிகங்களுக்கும் முதலீடு செய்துள்ளோம். அதில், நாம் வழங்கும் மிகவும் சாதாரண விகிதத்தில் தங்கக்கடன், குத்தகை, அடமான கடன்கள், குழு கடன்கள், தனிப்பட்ட கடன்கள், வணிக கடன்கள், நிறுவன கடன்கள், சிறிய கடன்கள் அல்லது உங்கள் பொதுவான வைப்புக்களை ஏற்றுக்கொள்வதில், இந்த சமுதாயங்களை நிலையான பொருளாதாரமாக வளர்த்துவைத்துள்ளோம் என நாங்கள் பெருமையில் அடைகிறோம்.",
        card1: "வாழ்க்கையின் ஒவ்வொரு கட்டத்திற்கும் என வடிவமைக்கப்பட்ட நிதித் தீர்வுகள்",
        card2: "உங்களுக்காக வடிவமைக்கப்பட்ட இணையற்ற வாடிக்கையாளர் சேவை",
        card3: "தசாப்தகாலமாக நிறைந்த நிபுணத்துவத்தால் உருவாக்கப்பட்ட புதுமையான தயாரிப்புகள்",
    },  
    luckewalletLandingPage: {
      title1: "உங்கள் நிதி பயணத்தை எளிமையாக்குங்கள் ",
      title2: "Luckewallet ",
      title3: "மொபைல் ஆப்ஸுடன்",
      subtitle: "தடையற்ற அனுபவம் பாதுகாப்பான நிதி சேவைகள்உங்கள் தொலைபேசியிலிருந்து ",
      learn_more: "மேலும் அறிய",
      key_features1: "முக்கிய ",
      key_features2: "அம்சங்கள்",
      feature1_title: "எளிய கணக்கு நிர்வாகம்", //1st point
      feature1_description: "உங்கள் கணக்குகள் அனைத்தையும் ஒரே இடத்தில் எளிதாகப் பார்க்கலாம் மற்றும் நிர்வகிக்கலாம்.",
      feature2_title: "விரைவான கடன் விண்ணப்பங்கள்", //2nd point
      feature2_description: "கடன் பெற  விண்ணப்பிக்கவும்,உங்கள் விண்ணப்ப செயற்பாடுகளை கண்காணிக்கவும்.",
      feature3_title: "பாதுகாப்பான பண பரிமாற்றங்கள்", //3rd point
      feature3_description: "மேம்படுத்தப்பட்ட பாதுகாப்பு நெறிமுறைகளுடன் பாதுகாப்பான மற்றும் விரைவான பணப் பரிவர்த்தனைகளை மேற்கொள்ளுங்கள்.",
      feature4_title: "உடனுக்குடன் அறிவிப்புகள்", //4th point
      feature4_description: "கணக்கு நடவடிக்கைகள் மற்றும் சலுகைகள் பற்றிய உடனடி தகவல்களை அறிந்துகொள்ளுங்கள்.",
      download_now: "இப்போதே பதிவிறக்கவும்!",
    }, 
  productsOverviewTextLandingPage: {  
    title: "எங்கள் நிதி தயாரிப்புகளை கண்டறியவும்",  
    subtitle: "பாதுகாப்பான நிதி வளர்ச்சிக்கு விரிவான தீர்வுகள்",  
    description: "ஏசியா எசட் பைனான்ஸ், உங்களின் தனிப்பட்ட தேவைகளைப் பூர்த்தி செய்யும் வகையில் பல்வேறு வகையான நிதித் தயாரிப்புகளை நாங்கள் வழங்குகிறோம். நீங்கள் உங்கள் சேமிப்பை அதிகரிக்க விரும்பினாலும், கடனைப் பெற விரும்பினாலும் அல்லது முதலீட்டு வாய்ப்புகளை ஆராய விரும்பினாலும், உங்கள் நிதி நலனைக் கருத்தில் கொண்டு எங்கள் சலுகைகள் வடிவமைக்கப்பட்டுள்ளன. உங்களுக்கான சரியாக பொருந்தும் சேவையை கண்டறிய எங்களின் பாதுகாப்பான நிலையான வைப்புத்தொகை,  தங்கக் கடன்கள் மற்றும் ஆதரவான மைக்ரோ அடமானக் கடன்களில் இருந்து தேர்வு செய்யவும். எங்களின் புதுமையான மின்-சேமிப்பு கணக்குகள், போட்டித்தன்மை வாய்ந்த அந்நியச் செலாவணி சேவைகள் மற்றும் வசதியான குத்தகை விருப்பங்கள் மூலம், உங்கள் நிதிப் பயணத்தின் ஒவ்வொரு அம்சமும் உள்ளடக்கப்பட்டிருப்பதை உறுதிசெய்கிறோம். உங்கள் நிதி வெற்றியை மேம்படுத்தும் நம்பகமான, தனிப்பயனாக்கப்பட்ட தீர்வுகளை வழங்க எங்களை நம்புங்கள்.",  
},  

  productsOverviewLandingPage: [
    { title: "நிலையான வைப்பு", image: FixedDeposits, description: "நிலையான வருவாயுடன் உங்கள் சேமிப்புகளைப் பாதுகாக்கவும்." },
    { title: "தங்கக்கடன்", image: GoldLoan, description: "நெகிழ்வான சேமிப்புடன் உங்கள் செல்வத்தை வளர்த்துக் கொள்ளுங்கள்." },
    { title: "அடைமானம்", image: Mortgage, description: "உங்கள் ஒவ்வொரு தேவைக்கும் மலிவு கடன்." },
    { title: "குத்தகை", image: Leasing, description: "குறைந்த வட்டி விகிதங்களுடன் வசதியான செலவினம்." },
    { title: "E - சேமிப்பு", image: Luckewallet, description: "மன அமைதிக்கான விரிவான பாதுகாப்பு." },
    { title: "வெளிநாட்டு நாணய மாற்று", image: Forex, description: "பல்வேறு விருப்பங்களுடன் உங்கள் வருமானத்தை அதிகரிக்கவும்." },
],
testimonialsText: {  
  title: "எமது வாடிக்கையாளர்கள் எம்மை பற்றி தெரிவித்த கருத்துக்கள்",  
  subtitle: "வெற்றிக்கும் நமது திருப்திகரமான சேவைக்கும் உள்ள கதைகள்",  
},  

testimonials: [
  {
    personName: "நிரோஷன் பெர்னாண்டோ",
    location: "துடல்லையில் இருந்து ",
    imageUrl: "/media/testimonials/niroshan_fernando.webp",
    quote: "A+ மதிப்பீடு, 54 ஆண்டு பாரம்பரியம் மற்றும் விதிவிலக்கான சேவைக்காக நான் ஏசியா எசட்தான் நம்புகிறேன்.",
    rating: 5,
  },
  {
    personName: "S யோகராஜா",
    location: "ஹெகித்தையில் இருந்து ",
    imageUrl: "/media/testimonials/s_yogaraja.webp",
    quote: "ஏசியா எசட்தான் எனக்கு கை கொடுத்தது.",
    rating: 5,
  },
  /*{
    personName: "L நளினி",
    location: "ஹெகித்தையில் இருந்து ",
    imageUrl: "/media/testimonials/l_nalini.webp",
    quote: "ஏசியா எசட்தான் எனக்கு கை கொடுத்தது.",
  },*/
  {
    personName: "சௌமியா நிலுக்ஷி",
    location: "அவரகொட்டுவையில்  இருந்து",
    imageUrl: "/media/testimonials/saumya_nilukshi.webp",
    quote: "ஏசியா எசட் பினான்ஸ் மனிதநேயம் நிறைந்த எங்கள் இடம்!",
    rating: 5,
  },
],
branchDetailsLandingPage: {
  title1: "எமது ",
  title2: "கிளைகள்",
  subtitle: "நிதி தீர்வுகளை உங்களுக்கு மேலும் அருகாமையில் கொண்டுவருகிறோம்",
  description1: "இன்றே ",
  description2: "எங்களின் 100+ கிளைகளில் ",
  description3: "ஒன்றுக்கு சென்று மற்றும் ",
  description4: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ ",
  description5: "முன்னெடுக்கப்படும் தனித்துவமான  சேவையை பெற்றிடுங்கள் . நீங்கள் இலங்கையில் எங்கிருந்தாலும் உங்கள் நிதிப் தேவைகளை பூர்த்தி செய்ய அதற்க்கு ஆதரவளிக்க நாங்கள்  இருக்கிறோம்.",
  newbranches_title: "எங்கள் புதிய கிளைகள்",
  newbranches_description: "நாங்கள் எங்கள் புதிய கிளைகளைத் தொடங்கியதை அறிவிக்க பெருமகிழ்ச்சி அடைகிறோம், எங்கள் நம்பகமான நிதி சேவைகளை உங்களிடம் மேலும் அருகாமையில் கொண்டுவருகிறோம். அணுகல் மற்றும் சமூக ஆதரவு ஆகியவற்றிற்கான எங்கள் முழு அர்ப்பணிப்பின் ஒரு பகுதியாக, இந்த கிளைகள் ஏசியா ஆசெட் ஃபைனான்ஸின் முழுமையான தயாரிப்புகள் மற்றும் சேவைகளை வழங்கத் தயாராக உள்ளன. எங்கள் சமீபத்திய இடங்களில் எங்களை பார்வையிடுங்கள், நீங்கள் எதிர்பார்க்கும் அதே நம்பகமான மற்றும் தனிப்பயனாக்கப்பட்ட சேவையை அனுபவிக்கவும்.",
  newest_branch_name: "டெனியாயா",
  newest_branch_address: "எண் 196, மெயின் வீதி, டெனியாயா",
  newest_branch_tp: "+94 11 7699000",
  newest_branch_email: "deniyaya@aaf.lk",
  btn: "கிளை வலையமைப்புக்கள்",
  our_branch_network_btn: "எங்கள் கிளை நெட்வொர்க்",

},
inquiryForm: {
  title: "இன்றே எங்களை தொடர்பு கொள்ளுங்கள்",
  subtitle: "",
  label1: "பெயர்",
  field1: "உங்கள் பெயரை உள்ளிடவும்",
  error1: "தயவுசெய்து உங்கள் பெயரை வழங்கவும்",
  error1_1: "தயவுசெய்து சரியான மின்னஞ்சல் முகவரியை வழங்கவும்",
  label2: "கைபேசி எண்",
  field2: "உங்கள் கைபேசி எண்ணை உள்ளிடவும்",
  error2: "தயவுசெய்து உங்கள் கைபேசி எண்ணை வழங்கவும்",
  label3: "மின்னஞ்சல்",
  field3: "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
  error3: "தயவுசெய்து உங்கள் மின்னஞ்சலை வழங்கவும்",
  label4: "விசாரணை",
  field4: "உங்கள் விசாரணையை இங்கே உள்ளிடவும்",
  error4: "",
  label5: "ஊழியரின் பெயர்",
  field5: "ஊழியரின் பெயரை இங்கே  உள்ளிடவும்",
  error5: "",
  label6: "துறை",
  field6: "துறையின் பெயரை இங்கே உள்ளிடவும்",
  error6: "",
  label7: "கிளை",
  field7: "கிளையின் பெயரை இங்கே உள்ளிடவும்",
  error7: "",
  label8: "முகவரி ",
  field8: "Enter your address here",
  error8: "",
  label9: "நகரம் ",
  field9: "Enter your nearest city here",
  error9: "",
  button1: "மீள அமைக்க",
  button2: "சமர்ப்பிக்கவும்",
  inquiry: "விசாரணை படிவம்",
  cus_complaint: "வாடிக்கையாளர் புகார்",
  titleLabel: "தலைப்பு",
  titlePlaceholder: "தயவுசெய்து உங்கள் தலைப்பைத் தேர்ந்தெடுக்கவும்",
  titleOptions: [ "திரு", "செல்வி", "திருமதி", "டாக்டர்", "பேராசிரியர்", "மற்ற", ],
  customer_details: "வாடிக்கையாளர் விபரங்கள்",
  employee_details: "ஊழியர் விபரங்கள்",
},

//About Page Components
bannerAbout: {
  src: bannerAbout,
  title: "எங்களைப் பற்றி",
  intro: "உங்கள் நிதி எதிர்காலத்தை வலுவடிக்கச் செய்கிறோம்",
  specialnote: "1970 முதல்",
  description: "“ மக்களுக்கு அதிகாரம் வழங்குதல் மற்றும் வாழ்க்கையை மாற்றுதல் ”",
},
cardsAbout: [
  { stat: "70,000+", text: "நுகர்வோர்", icon: faUsers },
  { stat: "54+", text: "சிறப்புத் தகுதி ஆண்டுகள்", icon: faClock },
  { stat: "1000+", text: "உதவியாளர்கள்", icon: faBriefcase },
  { stat: "100+", text: "கிளைகள்", icon: faBuilding },
],
overviewAbout: {
  title: "கண்ணோட்டம்",
  description: "50 ஆண்டுகளுக்கு மேலாக, ஏசியா எசட் பைனான்ஸ் பீ எல் சீ, எங்கள் ஆர்வங்களை பல்வேறு மனிதர்களிலும், வணிகங்களிலும் முதலீடு செய்துள்ளது. எங்கள் சுயாதீனமான வட்டி விகிதத்தில் வழங்கப்படும் தங்க கடன்கள், குத்தகை, உடன் கடன்கள், குழு தனிப்பட்ட கடன்கள், தனிப்பட்ட கடன்கள், வணிக கடன்கள், நிறுவன கடன்கள், மைக்ரோ கடன்கள் அல்லது உங்கள் பொது அடையாளங்களை ஏற்கின்றன என்பதை பரிசுத்தமான முறையில் சமூகங்கள் வளர்ந்துள்ளன. ஏசியா ஆஸெட் ஃபைனான்ஸ் பிஎல்சி என்பது முபூட் ஃபைனான்ஸ் லிமிடெட் நிறுவனத்தின் முழுமையாக கையிருப்புக்கான துணை நிறுவனமாகும் மற்றும் இலங்கை மத்திய வங்கி மூலம் பதிவு செய்யப்பட்ட பூரணமாக உரிமை பெற்ற, பொதுத் தொகுப்பு ஏற்ற ஆற்றலுடைய நிறுவனம் ஆகும். சமூகத்தின் நிதி தேவைகள் தொடர்ந்து வளர்ந்து வருகின்றன, ஏசியா ஆஸெட் இந்த தேவைகளுக்கு பூரணமாக நம்பிக்கையுடன் இணைக்கப்பட்டுக் கொண்டுள்ளது. எங்கள் முயற்சிகள் எப்போதும் எங்கள் வாடிக்கையாளர்களுக்கு அவர்கள் வாழும் மற்றும் வணிகம் செய்வதற்கான முறையில் வளர்ச்சி அடைய உதவுவதாக இருந்துள்ளன. ஏசியா ஆஸெட் ஃபைனான்ஸ் பிஎல்சி இன் கதை “மக்களுக்கு அதிகாரம் அளித்தல் மற்றும் வாழ்க்கையை மாற்றுதல்” என்பதாகும்.",
},
missionVisionGoal: {
  mission: {
    category: "தொலைநோக்கு",
    title: "",
    description: "எங்கள் வாடிக்கையாளர்களுக்கு நிதித் தேவைகளுக்காக நாங்கள் வழங்கும் தீர்வுகள் வழக்கத்திற்கு மாறானதாகவும், புதுமையானதாகவும், அவர்களின் வாழ்க்கைத் தரத்தை மேம்படுத்துவதற்கான அவர்களின் தேவைகளுக்கு பொருத்தமானதாகவும் இருக்கும், அதே நேரத்தில் வாடிக்கையாளர் சேவையின் உயர்ந்த நிலைகளைப் பராமரிக்கும்.",
  },
  vision: {
    category: "தொலைபார்வை",
    title: "",
    description: "வாழ்க்கையை மாற்றும் மக்களுக்கு அதிகாரம் அளித்தல்.",
  },
  goal: {
    category: "இலக்கு",
    title: "",
    description: "இலங்கையில் ஒரு முதன்மையான நிதி நிறுவனமாக மாற.",
  }
},
bodProfilesAbout: [
  { imgSrc: mrAlexandra, name: 'ஜி எம் அலெக்சாண்டர்', title: 'நிறைவேற்று அதிகாரமற்ற பணிப்பாளர்' },
  { imgSrc: mrBijimon, name: 'கே ஆர் பிஜிமொன்', title: 'நிறைவேற்று அதிகாரமற்ற பணிப்பாளர்' },
  { imgSrc: mrJayasekara, name: 'ஜே பி டி ஆர் ஜயசேகர', title: 'சுயாதீன நிறைவேற்று அதிகாரமற்ற பணிப்பாளர்' },
  { imgSrc: mrKumarasiri, name: 'டி சி டி குமாரசிறி', title: 'நான்-நிறுவன இயக்குனர்' },
  { imgSrc: mrRoshan, name: 'ஆர் டி எஸ் குணசேகர', title: 'நிறைவேற்று பணிப்பாளர் / பிரதான செயட்பாடு அதிகாரி' },

],
bodTextsAbout: {
  title1: "ஆலோசகர் குழு",
  title2: "",
  subtitle: "எங்கள் தரிசனத்தை வழிநடத்துதல், துறைசார்ந்த அறிவும் நெருக்கமுமாக",
  intro: "எங்கள் ஆலோசகர் குழுவில் மிக்க அனுபவமும் மாறுபட்ட பின்னணிகளும் கொண்ட வணிக நிபுணர்கள் அடங்கியுள்ளனர். இவர்களின் வழிகாட்டுதலும் உள்ளுணர்வுகளும் Asia Asset Finance ஐ நிலைத்த உத்தேச வளர்ச்சிக்கான நிச்சயமாக மாற்றுகின்றன.",
  chairman_name: "வி. ஏ. பிரசாந்த்",
  chairman_position: "தலைவர்",
  chairman_description: "வி. ஏ. பிரசாந்த் என்பது வணிக வங்கியாளராக 37 ஆண்டுகளுக்கு மேல் அனுபவமுள்ளவர், குறிப்பாக தன்னிச்சையான மற்றும் காப்பீடு வங்கியாளர்கள், பொறுப்பு செயல்பாடுகள் மற்றும் தகவல் பாதுகாப்பு போன்ற துறைகளில்...",
  ceo_name: "ஆர். ஜே. ஏ. குணவர்தன",
  ceo_position: "நிறைவேற்று பணிப்பாளர் / பிரதான நிறைவேற்று அதிகாரி",
  ceo_description: "திரு. ரஜீவ் குணவர்தன, Asia Asset Finance PLC இன் தலைமை நிர்வாக அதிகாரி / ஆலோசகர், 2009 டிசம்பர் மாதத்தில் ஆலோசகர் குழுவுக்கு நியமிக்கப்பட்டார். நிறுவனம் தரிசனம் அமைத்தல் மற்றும் செயல்படுத்தல் போன்ற செயல்களுக்கு அவர் பொறுப்பாளரானவர்...",
  see_more_btn: "மேலும் காண்க",
  view_profile_btn: "சுயவிவரத்தைக் காண்க",
},
comTextsAbout: {  
  title1: "குழு",  
  title2: "நிர்வாகம்",  
  subtitle: "பாதுகாப்பான நிதி வளர்ச்சிக்கான முழுமையான தீர்வுகள்",  
  description: "ஏசியா எசட் பைனான்ஸ், எங்கள் காப்பக மேலாண்மை குழு அனுபவமிக்க நிபுணர்களால் அமைக்கப்பட்டுள்ளது, அவர்கள் தங்களுடைய அனுபவமும் ஆழமான பார்வையும் கொண்டு வருகின்றனர். அவர்களின் மூலோபாயமான முன்னேற்றம் மற்றும் சிறந்ததுவதை நிலைநிறுத்துவதற்கான கடமையுடன் எங்கள் நிறுவனம் வெற்றியுடன் முன்னேறி, இலங்கையின் நிதி சேவைத் துறையில் முன்னணியில் இருக்க எங்களுடைய முன்னணி நிலையை உறுதி செய்கின்றனர்."  
},  


comProfilesAbout: [ 
  { imgSrc: mrRajiv, name: 'ரஜீவ் குணவர்தன', title: 'நிறுவன இயக்குனர் / நிறைவேற்று பணிப்பாளர் / பிரதான நிறைவேற்று அதிகாரி' },
  { imgSrc: mrRoshan, name: 'ரோஷன் குணசேகர', title: 'நிறைவேற்று பணிப்பாளர் / பிரதான செயட்பாடு அதிகாரி' },
  { imgSrc: msKokila, name: 'கோகிலா பெரேரா', title: 'பிரதான நிதி அதிகாரி' },
  { imgSrc: mrJayantha, name: 'ஜயந்த வீரப்புலிகே', title: 'பொது முகாமையாளர் - சேவைகள் செயல்பாடு' },
  { imgSrc: mrSajith, name: 'சஜித் அடபத்து', title: 'பொது முகாமையாளர் - செயல்பாடு' },
  { imgSrc: mrInditha, name: 'இந்தித ஜயதிலக', title: 'பொது முகாமையாளர்- தகவல் தொழில்நுட்பம்' },
  { imgSrc: mrPraveen, name: 'பிரவீன் பீரிஸ்', title: 'பொது முகாமையாளர் - திறைசேரி' },
  { imgSrc: mrSameera, name: 'சமீரா வெவெல்தெனிய', title: 'துணை பொது முகாமையாளர் - நிலையான வைப்பு' },
  { imgSrc: mrThushara, name: 'துஷார விஜேவர்தன', title: 'துணை பொது முகாமையாளர் - கடன்' },
  { imgSrc: msWaruni, name: 'வருணி பெரேரா', title: 'துணை பொது முகாமையாளர் - அபாய மேலாண்மை' },
],

branchNetworktext: {
  title1: "எங்கள் ",
  title2: "கிளை நெட்வொர்க்",
  subtitle: "நிதித் தீர்வுகளை உங்களுக்கு நெருக்கமாகக் கொண்டுவருதல்",
  description1: "எங்கள் சேவையை அனுபவிக்க அறியப்பட்ட ",
  description2: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ ன் 100+ கிளைகளில் ",
  description3: "ஒன்றை  இன்றே   நாடவும் . இலங்கையில் எங்கிருந்தாலும் உங்கள் நிதிப் பயணத்திற்கு ஆதரவளிக்க நாங்கள் இங்கு இருக்கிறோம். ",
  label: "உங்கள் அருகிலுள்ள கிளையை தேடவும்:",
  field: "கிளையை தேடவும்...",
  all_tab: "அனைத்து  வலயங்கள்",
  viewOnMapBtn: "வரைபடத்தில் பார்க்க",
  callNowBtn: "அழைப்பு"
},
branchesData: {
  head_office: {
    title: "தலைமையகம்",
    branches: [
      { name: "தலைமையகம்", location: "எண் 76, பார்க் தெரு, கொழும்பு 02.", contact: "0117699150-152", image: "/media/branches/headoffice.webp", lat: "6.915119", lng: "79.859896" },

    ]
  },
  western: {
    title: "மேற்கு  வலயம்",
    branches: [
      { name: "நீர்கொழும்பு", location: "இல. 295, பிரதான வீதி, நீர்கொழும்பு.", contact: "0317699020-023", image: "/media/branches/negombo.webp", lat: "7.21274791602540", lng: "79.8410733794413" },
      { name: "கம்பஹா", location: "இல. 69, கொழும்பு வீதி, கம்பஹா.", contact: "0337699010-015", image: "/media/branches/gampaha.webp", lat: "7.09190677434260", lng: "79.9952417365682" },
      { name: "களுத்துறை", location: "இல. 344, மகா வீதி, களுத்துறை தெற்கு.", contact: "0347699010-016", image: "/media/branches/kaluthara.webp", lat: "6.57872884306934", lng: "79.9623528915085" },
      { name: "மொரட்டுவ", location: "இல. 16, புதிய டி சொய்சா வீதி, ராவத்தவத்தை. மொரட்டுவ.", contact: "0117681510-518", image: "/media/branches/moratuwa.webp", lat: "6.78770536070150", lng: "79.8860613498311" },
      { name: "வெள்ளவத்தை", location: "இல. 344, காலி வீதி, வெள்ளவத்தை.", contact: "0117681530-533", image: "/media/branches/wellawatte.webp", lat: "6.867254", lng: "79.86071" },
      { name: "மத்துகம", location: "K & W மையம், No.5, காமினி மாவத்தை, அளுத்கம வீதி, மத்துகம.", contact: "0347699020-022", image: "/media/branches/mathugama.webp", lat: "6.52165873970042", lng: "80.1145063423287" },
      { name: "கொட்டாஞ்சேனை", location: "இல. 31, கொட்டாஞ்சேனை வீதி, கொழும்பு 13.", contact: "0117699109-110", image:  "/media/branches/kotahena.webp", lat: "6.94858156424990", lng: "79.8623878922922" },
      { name: "பாணந்துறை", location: "இல. 114, D S சேனநாயக்க மாவத்தை, பாணந்துறை.", contact: "0387699010-012", image: "/media/branches/panadura.webp", lat: "6.7141", lng: "79.907744" },
      { name: "மட்டக்குளி", location: "இல. 3/810, பண்ணை வீதி, மட்டக்குளி.", contact: "0117699480-482", image: "/media/branches/mattakkuliya.webp", lat: "6.97804611388718", lng: "79.8762274337617" },
      { name: "கிராண்ட்பாஸ்", location: "இல. 428, மாதம்பிடிய வீதி, கொழும்பு 14.", contact: "0117681500-502", image: "/media/branches/grandpass.webp", lat: "6.95719420793741", lng: "79.8769183828602" },
      { name: "எலகந்தை", location: "இல. 327, திம்பிரிகஸ்யாய, ஹந்தல, வத்தளை.", contact: "0117699446", image: "/media/branches/elakanda.webp", lat: "6.99478253017945", lng: "79.8756576325868" },
      { name: "ஹோமாகம", location: "இல  78 ஏ, ஹை லெவல் வீதி, ஹோமாகம.", contact: "0117699415-417", image: "/media/branches/homagama.webp", lat: "6.84152813241502", lng: "80.0038718288356" },
    ]
  },
  eastern: {
    title: "கிழக்கு  வலயம்",
    branches: [
      { name: "மட்டக்களப்பு", location: "இல. 187, திருகோண வீதி, மட்டக்களப்பு.", contact: "0657699010-012", image: "/media/branches/batticaloa.webp", lat: "7.718111", lng: "81.6985" },
      { name: "செங்கலடி", location: "புதிய சந்தை சாலை, செங்கலடி.", contact: "0657699020-022", image: "/media/branches/chenkalady.webp", lat: "7.78358189774221", lng: "81.5931858680916" },
      { name: "கல்முனை", location: "இல. 69, பிரதான வீதி, கல்முனை.", contact: "0677699020-022", image: "/media/branches/kalmunai.webp", lat: "7.41654230398386", lng: "81.8246567153597" },
      { name: "சம்மாந்துறை", location: "இல. 120, அம்பாறை வீதி, கருவாட்டுகல்-02, சம்மாந்துறை.", contact: "0677699025-027", image: "/media/branches/sammanthurai.webp", lat: "7.357484", lng: "81.795105" },
      { name: "அக்கரைப்பற்று", location: "இல. 155, அம்பாறை வீதி, அக்கரைப்பற்று.", contact: "0677699010-012", image: "/media/branches/akkaraipattu.webp", lat: "7.21787575668551", lng: "81.8492521045523" },
      { name: "வாழைச்சேனை", location: "பிரதான வீதி, மாவடிச்சேனை, வாழைச்சேனை", contact: "0657699040-042", image: "/media/branches/valaichchenai.webp", lat: "7.912117223429645", lng: "81.52707297668584" },
      { name: "திருகோணமலை", location: "இல. 285, மத்திய வீதி, திருகோணமலை.", contact: "0267699020-022", image: "/media/branches/trincomalee.webp", lat: "8.57941500313335", lng: "81.2308190342658" },
      { name: "கிண்ணியா", location: "இல. 88, பிரதான வீதி, சின்ன கிண்ணியா, கிண்ணியா 03.", contact: "0267699030-032", image: "/media/branches/kinniya.webp", lat: "8.502384474", lng: "81.1827385164287" },
      { name: "களுவாஞ்சிகுடி", location: "இல.172, பிரதான வீதி, களுவாஞ்சிகுடி.", contact: "0657699030-035", image: "/media/branches/kalawanchikuddy.webp", lat: "7.517246", lng: "81.786933"   },
      { name: "பொத்துவில்", location: "பிரதான வீதி, பொத்துவில்.", contact: "0637699010-012", image: "/media/branches/pottuvil.webp", lat: "6.875271", lng: "81.830633" },
      { name: "கந்தளாய்", location: "இல. 137, பிரதான வீதி, கந்தளாய்.", contact: "0267699010-012", image: "/media/branches/kanthale.webp", lat: "8.351263", lng: "81.006993" },
      { name: "திருக்கோவில்", location: "பிரதான வீதி, திருக்கோவில்", contact: "0677699040-042", image: "/media/branches/thirukkovil.webp", lat: "7.1159148318762", lng: "81.8520663720749" },
      { name: "நிந்தவூர்", location: "இல. 42/11, பிரதான வீதி, நிந்தவூர்.", contact: "0677699050-052", image: "/media/branches/ninthavur.webp", lat: "7.35547048615244", lng: "81.8458707513758" },
      { name: "சேருநுவர", location: "இல. 44, A.R.B.03, சேருநுவர.", contact: "0267699050-052", image: "/media/branches/serunuwara.webp", lat: "8.325101", lng: "81.300209" },
      { name: "மூதூர்", location: "மட்டக்களப்பு வீதி, ஆலிம் நகர், மூதூர்.", contact: "0267699040-042", image: "/media/branches/muthur.webp", lat: "8.44276637829916", lng: "81.2630812704972" },
      { name: "அம்பாறை", location: "இல. 451, D.S சேனநாயக்க வீதி, அம்பாறை.", contact: "0637699020-023", image: "/media/branches/ampara.webp", lat: "7.2917359", lng: "81.6803183" },
      { name: "கொக்கட்டிச்சோலை", location: "பிரதான வீதி, இல. 10, கொக்கட்டிச்சோலை.", contact: "0657699060-063", image: "/media/branches/kokkadicholai.webp", lat: "7.609681591789088", lng: "81.7121303580231" },
      { name: "கிரான்", location: "பிரதான வீதி, கிரான்.", contact: "0657699050-053", image: "/media/branches/kiran.webp", lat: "7.865244496822327", lng: "81.53848100905222" },
      { name: "பன்குளம்", location: "பிரதான வீதி, திருகோணமலை வீதி, பன்குளம்..", contact: "0117170757", image: "/media/branches/pankulam.webp", lat: "8.629169066638466", lng: "81.03232430445199" },
      { name: "ஆரையம்பதி", location: "பிரதான வீதி, ஆரையம்பதி.", contact: "0117170758", image: "/media/branches/arayampathy.webp", lat: "7.664316664102133", lng: "81.7391842050213" },
      { name: "காரைதீவு", location: "பிரதான வீதி, காரைதீவு 01.", contact: "0117170759", image: "/media/branches/karaitivu.webp", lat: "7.384270233691014", lng: "81.83753616227506" },
      { name: "புல்முட்டை", location: "இல. 4, பிரதான வீதி, புல்முட்டை.", contact: "1369", image: "/media/branches/pulmoddai.webp", lat: "8.939817280704222", lng: "80.98680765952446" },
      { name: "ஓட்டமாவடி", location: "பிரதான வீதி, மாவடிச்சேனை, வாழைச்சேனை.", contact: "0117170762", image: "/media/branches/oddamavadi.webp", lat: "7.912146446855825", lng: "81.52707431779137" },
      

    ]
  },
  southern: {
    title: "தெற்கு  வலயம்",
    branches: [
      { name: "காலி", location: "இல. 170/172, கடவீதிய, பிரதான வீதி, காலி.", contact: "0917699000-006", image: "/media/branches/galle.webp", lat: "6.035643578305275", lng: "80.22053327164475" },
      { name: "மாத்தறை", location: "79, அனகாரிக தர்மபால மாவத்தை, மாத்தறை.", contact: "0417699010-012", image: "/media/branches/matara.webp", lat: "5.949379105734931", lng: "80.54374826944834" },
      { name: "பேருவளை", location: "இல. 199, ஜெயது, காலி வீதி , பேருவளை.", contact: "0347699030-034", image: "/media/branches/beruwala.webp", lat: "6.472090864359676", lng: "79.9847138819168" },
      { name: "அம்பலாந்தோட்டை", location: "இல. 55, பிரதான தெரு, அம்பலாந்தோட்டை.", contact: "0477699000-003", image: "/media/branches/ambalantota.webp", lat: "6.122573584370459", lng: "81.02260975452502" },
      { name: "எல்பிட்டிய", location: "இல. 14, அம்பலாங்கொட வீதி, எல்பிட்டிய.", contact: "0917699010-013", image: "/media/branches/elpitiya.webp", lat: "6.29022579625833", lng: "80.16204502253045" },
      { name: "தெனியாய", location: "இல. 196, பிரதான வீதி, தெனியாய.", contact: "0417699020-023", image: "/media/branches/deniyaya.webp", lat: "6.3445203771652094", lng: "80.56016068020213" },
    ]
  },
  northern: {
    title: "வடக்கு  வலயம்",
    branches: [
      { name: "யாழ்ப்பாணம்", location: "இல. 109, கஸ்திரியார் சாலை, யாழ்ப்பாணம்.", contact: "0217699050-052", image: "/media/branches/jaffna.webp", lat: "9.668439", lng: "80.011014" },
      { name: "சாவகச்சேரி", location: "இல. 05, கண்டி வீதி, சாவகச்சேரி.", contact: "0217699040-042", image: "/media/branches/chavakachcheri.webp", lat: "9.659811", lng: "80.160394" },
      { name: "பருத்தித்துறை", location: "இல. 374, ரஜினா கட்டிட வளாகம், பருத்தித்துறை.", contact: "0217699080-082", image: "/media/branches/pointpedro.webp", lat: "9.821597", lng: "80.236677" },
      { name: "சுன்னாகம்", location: "இல. 15, நிலைய வீதி, சுன்னாகம்.", contact: "0217699005-007", image: "/media/branches/chunnakam.webp", lat: "9.74494172154708", lng: "80.0281830455549"  },
      { name: "நெல்லியடி", location: "இல.82, பருத்தித்துறை வீதி, நெல்லியடி.", contact: "0217699070-072", image: "/media/branches/nelliady.webp", lat: "9.800680866182810", lng: "80.2034085379105" },
      { name: "சங்கணை", location: "மகான் தங்க பிளாசா, பிரதான வீதி , சங்கானை.", contact: "0217699030-032", image: "/media/branches/changanai.webp", lat: "9.747417", lng: "79.972524" },
      { name: "வேலணை", location: "வகலவாடி, வேலணை.", contact: "0217699020-022", image: "/media/branches/velanai.webp", lat: "9.63615", lng: "79.900869" },
      { name: "அச்சுவேலி", location: "இல.53, ஆவரங்கால் வீதி, அச்சுவேலி.", contact: "0217699010-012", image: "/media/branches/achchuveli.webp", lat: "9.77819", lng: "80.115729" },
      { name: "மானிப்பாய்", location: "இல. 260, மானிப்பாய் வீதி, மானிப்பாய்.", contact: "0217699115-117", image: "/media/branches/manipay.webp", lat: "9.716558", lng: "79.996658" },
      { name: "உரும்பிராய்", location: "பலாலி வீதி, உரும்பிராய்.", contact: "0217699090-092", image: "/media/branches/urumpirai.webp", lat: "9.71497883728503", lng: "80.0438207355821" },
      { name: "கிளிநொச்சி", location: "முருகன் கோவிலுக்கு அருகில், ஏ9 வீதி, கிளிநொச்சி.", contact: "0217699060-064", image: "/media/branches/kilinochchi.webp", lat: "9.40012537643521", lng: "80.4084344188591" },
      { name: "புதுக்குடியிருப்பு", location: "இல. 02, பரந்தன் வீதி, புதுக்குடியிருப்பு.", contact: "0217699085-087", image: "/media/branches/puthukudiyirippu.webp", lat: "9.31595127619480", lng: "80.6926724583882" },
      { name: "முல்லைத்தீவு", location: "பிரதான வீதி, முல்லைத்தீவு.", contact: "0217699065-067", image: "/media/branches/mullaitivu.webp", lat: "9.26938280223006", lng: "80.8147716934679" },
      { name: "வவுனியா", location: "இல. 27, 2வது குறுக்குத் தெரு, வவுனியா.", contact: "0247699010-012", image: "/media/branches/vavuniya.webp", lat: "8.7523859", lng: "80.4970501" },
      { name: "ஒட்டுசுட்டான்", location: "முல்லைத்தீவு, பிரதான வீதி, வித்யாபுரம், ஒட்டுசுட்டான்.", contact: "0217699075-077", image: "/media/branches/oddusuddan.webp", lat: "9.15584218827980", lng: "80.6522662099292" },
      { name: "மன்னார்", location: "இல. 05, முதல் குறுக்குத் தெரு, பேத்தா, மன்னார்.", contact: "0237699010-012", image: "/media/branches/mannar.webp", lat: "8.97978731934710", lng: "79.9118612790098" },
      { name: "செட்டிகுளம்", location: "பிரதான வீதி, செட்டிகுளம்.", contact: "0247699020-022", image: "/media/branches/cheddikulam.webp", lat: "8.65996749223797", lng: "80.3124537278841" },
      { name: "முழங்காவில்", location: "மன்னார் வீதி, முழங்காவில்.", contact: "0237699020-022", image: "/media/branches/mulankavil.webp", lat: "9.25438991577004", lng: "80.1419943983477" },
      { name: "மல்லாவி", location: "துன்னுகை சாலை, மல்லாவி, முலேட்டிவ்.", contact: "0217699095-098", image: "/media/branches/mallavi.webp", lat: "9.13529394427059", lng: "80.3121381846574" },
      { name: "விசுவமடு", location: "சுண்டிக்குளம் சந்தி, விஸ்வமடுவ, முல்லைத்தீவு", contact: "0247699030-033", image: "/media/branches/visuvamadu.webp", lat: "9.398447279520965", lng: "80.5381797667411" },
      { name: "பளை", location: "A 9 வீதி, பளை டவுன், பளை.", contact: "0217699111-114", image: "/media/branches/pallai.webp", lat: "9.608956493958125", lng: "80.33094899999998" },
      { name: "தலைமன்னார்", location: "வார்டு 8, பேசாலை தலைமன்னார் வீதி, மன்னார்.", contact: "0237699040-043", image: "/media/branches/pesalai.webp", lat: "9.085049036054754", lng: "79.82747541349308" },
      { name: "பலாலி", location: "இல 526, காங்கசன்துறை சாலை, தெல்லிப்பளை, பலாலி.", contact: "0217699105-108", image: "/media/branches/palaly.webp", lat: "9.785353650866927", lng: "80.0332677315456" },
      { name: "முருக்கன்", location: "மெதவச்சி-மன்னார் சாலை, முருங்கன், மன்னார்.", contact: "0237699030-033", image: "/media/branches/murunkan.webp", lat: "8.839195949252595", lng: "80.03688615004205" },
      { name: "கல்வியங்காடு", location: "1133, பருத்தித்துறை வீதி, கல்வியங்காடு, யாழ்ப்பாணம்.", contact: "1369", image: "/media/branches/kalviyankadu.webp", lat: "9.683052390135007", lng: "80.04115572446625" },
      { name: "மூளாய்", location: "340, காரைநகர் வீதி, மூளாய், சுழிபுரம், யாழ்ப்பாணம்.", contact: "1369", image: "/media/branches/moolai.webp", lat: "9.749698599299634", lng: "79.93194292883584" },
    ]
  },
  central: {
    title: "மத்திய  வலயம்",
    branches: [
      { name: "திகன", location: "ஜே/2005 11/02. ராஜவெல்ல திகன.", contact: "0817699030-037", image: "/media/branches/digana.webp", lat: "7.29628", lng: "80.733276" },
      { name: "ஹட்டன்", location: " இல 19, பிரதான வீதி, ஹட்டன்.", contact: "0517699001-004", image: "/media/branches/hatton.webp", lat: "6.890217390251945", lng: "80.5982444405497" },
      { name: "தலவாக்கலை", location: "இல. 8/2, பிரதான வீதி, தலவாக்கலை.", contact: "0527699035-037", image: "/media/branches/thalawakale.webp", lat: "6.93603423987978", lng: "80.6611086192476" },
      { name: "நாவலப்பிட்டி", location: "இல. 75, அம்பகமுவ வீதி, நாவலப்பிட்டி.", contact: "0817699040-043", image: "/media/branches/nawalapitiya.webp", lat: "7.054935", lng: "80.530689" },
      { name: "கம்பளை", location: "இல. 63, நுவரெலியா வீதி, கம்பளை.", contact: "0817699001-004", image: "/media/branches/gampola.webp", lat: "7.16260499123707", lng: "80.5711980001460" },
      { name: "ராகலை", location: "இல. 67, பிரதான வீதி, ராகலை.", contact: "0527699030-034", image: "/media/branches/ragala.webp", lat: "7.01260826631179", lng: "80.8595450177179" },
      { name: "மாத்தளை", location: "இல. 242, பிரதான வீதி, மாத்தளை.", contact: "0667699020-023", image: "/media/branches/matale.webp", lat: "7.47154", lng: "80.624389" },
      { name: "பூண்டலுஓயா", location: "இல.250/B/7, கடடோர பிட்டிய வீதி, பூண்டலுஓயா.", contact: "0517699030-032", image: "/media/branches/pundaluoya.webp", lat: "7.01568432166580", lng: "80.6649462711641" },
      { name: "மஸ்கெலியா", location: "இல. 244, பிரதான வீதி, மஸ்கெலியா.", contact: "0527699010-012", image: "/media/branches/maskeliya.webp", lat: "6.831457", lng: "80.571781" },
      { name: "கடுகஸ்தோட்டை", location: "இல. 144, குருநாகல் வீதி, கடுகஸ்தோட்டை.", contact: "0817699010-012", image: "/media/branches/katugastota.webp", lat: "7.32320148924444", lng: "80.6229334576716" },
      { name: "நாவுல", location: "இல. 26, தம்புள்ளை வீதி, நாவுல.", contact: "0667699010-012", image: "/media/branches/naula.webp", lat: "7.705474", lng: "80.652596" },
      { name: "பொகவந்தலாவ", location: "இல. 90, பிரிட்வெல் பஜார், பொகவந்தலாவ.", contact: "0527699020-022", image: "/media/branches/bogawantalawa.webp", lat: "6.79662063632186", lng: "80.6782139381486" },
      { name: "புஸ்ஸல்லாவா", location: "இல. 305, நுவரெலியா வீதி, புஸ்ஸல்லாவ.", contact: "0817699020-022", image: "/media/branches/pussellawa.webp", lat: "7.11083080391683", lng: "80.6342358527280" },
      { name: "வத்தேகம", location: "இல. 55, பிரதான வீதி, வத்தேகம.", contact: "0817699025-027", image: "/media/branches/wattegama.webp", lat: "7.350414", lng: "80.689989" },
      { name: "அகரபத்தனை", location: "இல. 34, பிரதான வீதி, அகரபத்தனை.", contact: "0517699010-012", image: "/media/branches/agarapathana.webp", lat: "6.863127", lng: "80.707834" },
      { name: "ஹவாலியா", location: "இல. 26, உடபுஸ்ஸல்லாவ வீதி, ஹவாலியா.", contact: "0527699115-117", image: "/media/branches/hawaeliya.webp", lat: "6.97102741829262", lng: "80.7825167520040" },
      { name: "கொட்டகலை", location: "இல. 179/1, பிரதான வீதி, கொட்டகலை.", contact: "0517699020-022", image: "/media/branches/kotagala.webp", lat: "6.925373823", lng: "80.6081208208255" },
      { name: "ஹங்குரன்கெத", location: "இல. 16, ராகல வீதி, ரிகில்லகஸ்கட.", contact: "0817699050-052", image: "/media/branches/hanguranketha.webp", lat: "7.14579467543395", lng: "80.7839917244378" },
      { name: "டயகம", location: "இல. B/1, டயகம பஜார், டயகம.", contact: "0517699041", image: "/media/branches/dayagama.webp", lat: "6.855981523234289", lng: "80.74814456282456" },
      { name: "ஹபுகஸ்தலாவ", location: "ஹல்கொல்ல, இல. 01, ஹபுகஸ்தலாவ, நாவலப்பிட்டி.", contact: "0547699000-003", image: "/media/branches/hapugastalawa.webp", lat: "7.055096748044914", lng: "80.5729400273714" }
    ]
  },
  northwestern: {
    title: "வட மேற்கு  வலயம்",
    branches: [
      { name: "குருநாகல்", location: "இல. 81, நீர்கொழும்பு வீதி, குருநாகல்.", contact: "0377699001-007", image: "/media/branches/kurunegala.webp", lat: "7.486689243249437", lng: "80.35761032234345" },
      { name: "வென்னப்புவ", location: "224/3A, கொழும்பு வீதி, வென்னப்புவ.", contact: "0317699010-012", image: "/media/branches/wennappuwa.webp", lat: "7.33815246626181", lng: "79.8430220792178" },
      { name: "சிலாபம்", location: "39, கொழும்பு வீதி, சிலாபம்.", contact: "0327699015-017", image: "/media/branches/chilaw.webp", lat: "7.57463737919976", lng: "79.7967668090491" },
      { name: "உடப்புவ", location: "இல. 75, பிரிவு இலக்கம் 2, உடப்புவ.", contact: "0327699030-032", image: "/media/branches/udappuwa.webp", lat: "7.74801456346774", lng: "79.7901098724389" },
      { name: "புத்தளம்", location: "இல. 61, குருநாகல் வீதி, புத்தளம்.", contact: "0327699010-013", image:  "/media/branches/puttalam.webp", lat: "8.02713861322438", lng: "79.8371258866641" },
      { name: "கல்பிட்டி", location: "பிரதான வீதி, கல்பிட்டி.", contact: "0327699020-022", image: "/media/branches/kalpitiya.webp", lat: "8.23406059521350", lng: "79.7629007070031" },
      { name: "வாரியபொல", location: "பிளாக் 1 & 2, சிலாபம் வீதி, வாரியபொல.", contact: "0377699010-013", image: "/media/branches/wariyapola.webp", lat: "7.61956186993873", lng: "80.2413604335368" },
      { name: "தங்கொடுவ", location: "இல. 07, நாத்தாண்டிய வீதி, தங்கொடுவ.", contact: "0317699030-033", image: "/media/branches/dankotuwa.webp", lat: "7.29765178658540", lng: "79.8818356590114" },
    ]
  },
  uva: {
    title: "ஊவா மாகாணம்",
    branches: [
      { name: "மொனராகலை", location: "இல. 141, 1வது லேன், வெல்லவாய வீதி, மொனராகலை.", contact: "0557699020-022", image: "/media/branches/monaragala.webp", lat: "6.87200986129306", lng: "81.35137626671371" },
      { name: "மஹியங்கனை", location: "இல. 23, புதிய நகரம், மஹியங்கனை.", contact: "0557699030-032", image: "/media/branches/mahiyanganaya.webp", lat: "7.337864", lng: "80.989453" },
      { name: "பதுளை", location: "இல. 49, கொக்கோவத்தை வீதி, பதுளை.", contact: "0557699010-018", image: "/media/branches/badulla.webp", lat: "6.986059", lng: "81.058621" },
      { name: "ஹப்புத்தளை", location: "இல. 27, பிரதான வீதி, ஹப்புத்தளை.", contact: "0577699010-012", image: "/media/branches/haputale.webp", lat: "6.765414", lng: "80.952566" },
      { name: "வெலிமடை", location: "இல. 51, நுவரெலியா வீதி, வெலிமடை.", contact: "0577699015-017", image: "/media/branches/welimada.webp", lat: "6.901907", lng: "80.907925" },
      { name: "பிபிலை", location: ".  இல. 06, வைத்தியசாலைக்கு எதிரில், மட்டக்களப்பு வீதி, பிபிலை.", contact: "0557699050-052", image: "/media/branches/bibile.webp", lat: "7.163275", lng: "81.225672" },
      { name: "பொரலந்த", location: "ஹப்புத்தளை வீதி, பொரலந்த.", contact: "0577699020-023", image: "/media/branches/boralanda.webp", lat: "6.82825", lng: "80.8943889" },
      { name: "கிரந்துருகோட்டே", location: "இல. 04, புதிய நகரம், கிராதுருகோட்டே.", contact: "0277699000-003", image: "/media/branches/girandurukotte.webp", lat: "7.4716381", lng: "81.016923" },
      { name: "லுனுகல", location: "இல. 156, பிரதான வீதி, லுனுகல.", contact: "0557699060-063", image: "/media/branches/lunugala.webp", lat: "7.0403865", lng: "81.2014486" },
      { name: "பசறை", location: "இல. 289, பிரதான சாலை, பசறை.", contact: "0557699040-042", image: "/media/branches/passara.webp", lat: "6.935118", lng: "81.1559392" },
      { name: "புத்தல", location: "17, வெள்ளவாய வீதி, புத்தல.", contact: "0117170756", image: "/media/branches/buttala.webp", lat: "6.759466368556405", lng: "81.24563105051159" }
    ]
  },
sabaragamuwa: {
    title: "சப்ரகமுவ மாகாணம்",
    branches: [
      { name: "மாவனல்லை", location: "இல. 246, கண்டி வீதி, மாவனல்லை.", contact: "0357699010-012", image: "/media/branches/kegalle.webp", lat: "7.251167", lng: "80.449528" },
      { name: "ருவன்வெல்ல", location: "இல. 104. பிரதான வீதி, ருவன்வெல்ல.", contact: "0367699001-003", image: "/media/branches/ruwanwella.webp", lat: "7.043524", lng: "80.254517" },
      { name: "பலாங்கொடை", location: "இல. 16, ரீசெட் ஹவுஸ் அப்ரோச் வீதி, பலாங்கொடை.", contact: "0457699000-005", image: "/media/branches/balangoda.webp", lat: "6.65062511715612", lng: "80.6985981109200" },
      { name: "ரக்வானா", location: ". . எண். 29 ரக்வானா பிரதான வீதி", contact: "0457699010-012", image: "/media/branches/rakwana.webp", lat: "6.474218", lng: "80.610933" },
      { name: "எஹலியகொட", location: "இல. 36 பிரதான வீதி, எஹலியகொட.", contact: "0367699010-012", image: "/media/branches/eheliyagoda.webp", lat: "6.850315", lng: "80.264785" },
      { name: "தெரணியகல", location: "இல.78, தெஹியோவிட்ட வீதி, தெரணியகல.", contact: "0367699015-018", image: "/media/branches/deraniyagala.webp", lat: "6.9507732000699", lng: "80.3266479875920" },
      { name: "குருவிட்ட", location: "இல. 71/C/1, கொழும்பு வீதி, குருவிட்ட.", contact: "0457699015-018", image: "/media/branches/kuruvita.webp", lat: "6.7789517998867", lng: "80.3633930154367" },
      { name: "கஹவத்தை", location: "இல.131/A, பிரதான வீதி, கஹவத்தை.", contact: "0457699020-023", image: "/media/branches/kahawatta.webp", lat: "6.577667436605311", lng: "80.57525585767128" }
    ]
  }
},

  //Investor Relations Page Components
  bannerIR: {
    src: bannerIR,
    title: "எங்களைப் பற்றி",
    intro: "நம்பிக்கையுடன் மற்றும் பார்வையுடன் செல்வத்தை உருவாக்குவது",
    specialnote: "1970 முதல்",
    description: "“ முன்னேற்றத்திற்கான கூட்டாளியாக, நிலையான வளர்ச்சியை இயக்குகிறோம் ”"
  },
  corporateProfileIR: {
    title1: "நிறுவனத்தின் ",
    title2: "சுயவிவரம்",
    label1: "நிறுவனத்தின் பெயர்",
    field1: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ",
    label2: "நிறுவனத்தின் மதிப்பீடு",
    field2: "Fitch A+",
    label3: "சட்ட பரிமாணம்",
    /*field3_1: "- 1970 செப்டம்பர் 23 ஆம் தேதி தனியார் வரையறுக்கப்பட்ட நிறுவனமாக பதிவு செய்யப்பட்டது. (1938 51 ஆம் சட்ட ஒழுங்கின் (Cap 145) கீழ்)",
    field3_2: "- 2006 அக்டோபர் 03 ஆம் தேதி பெயர் மாற்றப்பட்டது. (1938 51 ஆம் சட்ட ஒழுங்கின் (Cap 145) கீழ்)",
    field3_3: "- 2008 ஜனவரி 23 ஆம் தேதி 2007 07 ஆம் நிறுவன சட்டத்தின் கீழ் மறுபதிவு செய்யப்பட்டது.",
    field3_4: "- 2012 மார்ச் 20 ஆம் தேதி 2007 07 ஆம் நிறுவன சட்டத்தின் கீழ் பொது வரையறுக்கப்பட்ட நிறுவனமாக மாற்றப்பட்டது.",
    field3_5: "- பதிவு எண் (1982 17 ஆம் நிறுவன சட்டத்தின் கீழ்): PB 139 PQ.",
    field3_6: "- புதிய பதிவு எண் (2007 7 ஆம் நிறுவன சட்டத்தின் கீழ்): PB 139 PQ.", */
    field3_1: "1938 ஆம் ஆண்டு செப்டம்பர் 23 ஆம் தேதி நிறுவன கட்டளை எண் 51 (கேப் 145) இன் கீழ் ஒரு தனியார் வரையறுக்கப்பட்ட பொறுப்பு நிறுவனமாக இணைக்கப்பட்டது மற்றும் நிறுவன உத்தரவின் கீழ் பெயர் மாற்றப்பட்டது, 1938 ஆம் ஆண்டின் 51 (கேப் 145) 03 அக்டோபர் 2006 இல் மீண்டும் பதிவு செய்யப்பட்டது 2007 ஆம் ஆண்டின் நிறுவனச் சட்டம் எண் .07, 23 ஜனவரி 2008 இல் மற்றும் 2007 ஆம் ஆண்டின் நிறுவனச் சட்டம் எண் .07 இன் கீழ் ஒரு பொது நிறுவனமாக மாற்றப்பட்டது. புதிய பதிவு எண் (2007 ஆம் ஆண்டின் நிறுவனச் சட்டம் எண் .7 இன் கீழ்) பிபி 139 PQ",
    label4: "நிறுவனத்தின் பதிவு எண்",
    field4: "PB 139 PQ",
    label5: "நிறுவனத்தின் சட்ட ஆலோசகர்கள்",
    field5: "ஷிராந்தி குணவர்தன அசோசியேட்ஸ், \n எண் 22/1, எலியட் பிளேஸ், கொழும்பு 08.",
    label6: "பணிப்பாளர்கள் குழுமம்",
    field6_1: "தலைவர் - V A பிரசந்த்",
    field6_2: "பிரதான நிறைவேற்று அதிகாரி - R J A குணவர்தன",
    field6_3: "G M அலெக்சாண்டர்",
    field6_4: "K R பிஜிமான்",
    field6_7: "J P D R ஜயசேகரா",
    field6_8: "R D S குணசேகர",
    field6_9: "T C D குமாரசிறி",
    field6_10: "M திருநீலகண்டன்",
    label7: "நிறுவனத்தின் செயலாளர்",
    field7: "திருமதி ருவாணி அங்கமான, எண் 76, பார்க் தெரு, கொழும்பு 02.",
    field7_1: "மின்னஞ்சல்: companysecretary@asiaassetfinance.lk",
    label8: "நிறுவனத்தின் கணக்காய்வாளர்கள்",
    field8: "KPMG, \n 32A, சர் மொஹமட் மக்கான் மார்க்கர் மாவத்தை, \n கொழும்பு 03",
    label9: "வங்கி துணை முகவர்கள் ",
    agmButtonText: "பதிவுப்படிவம்",
  },
  keyFinancialsIR: {
  title1: "நிதித் ",
  title2: "தரவுகள்",
  card1_title: "மொத்த வருமானம்",
  card1_amount: "XX,XXX",
  card2_title: "வரிக்கு பின் இலாபம்",
  card2_amount: "XX,XXX",
  card3_title: "மொத்த சொத்துகள்",
  card3_amount: "XX,XXX",
  card4_title: "சமபங்குகளில் இருந்து வருமானம்",
  card4_amount: "XX,XXX",
  card5_title: "ஒரு பங்குக்கான இலாபம் ",
  card5_amount: "XX,XXX",
  share_price_title: "சமீபத்திய பங்கு விலை",
  share_price_reg: "XXXXXXXXXX",
  share_price_name: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ",
  share_price_amount: "ரூ XX.XX",
  share_price_percentage: "XX,XXXX",
  share_price_type: "ரூ",
  description_line1: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ நிறுவனம் 50 வருடங்களாக ஏராளமானவர்களுக்கும் நிறுவனங்களுக்கும் நிதி ஆதரவினை வழங்கி வருகிறது. எங்களின் தங்க கடன், குத்தகை, கடன் சலுகைகள், குழு தனிநபர் கடன், தனிநபர் கடன், தொழிலாளர் கடன், நிறுவன கடன், மற்றும் பொதுத் தணிப்பு போன்றவை பொருளாதாரங்களை வலுப்படுத்தியதற்காக பெருமைப்படுகிறோம்.",
  description_line2: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ என்பது முத்தூட் பைனான்ஸ் லிமிடெட் நிறுவனத்தின் முழுமையான துணை நிறுவனம் ஆகும் மற்றும் இலங்கை மத்திய வங்கியில் பதிவு செய்யப்பட்ட ஒரு பத்திரமாக்க நிறுவனமாகும்.",
  description_line3: "சமூகத்தின் நிதி தேவைகள் தொடர்ந்து வளர்ந்தாலும், அதனை நிறைவேற்ற ஏஷியா ஆசெட் பல ஆண்டுகளாக வளர்ச்சியடைந்தது. எங்கள் முயற்சிகள் எப்போதும் எங்கள் வாடிக்கையாளர்களுக்கு வாழ்க்கையின் தரத்தை உயர்த்த உதவும்.",
  description_line4: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ நிறுவனத்தின் கதை “மக்களுக்கு அதிகாரம் அளிப்பது மற்றும் வாழ்க்கையை மாற்றுவது” ஆகும்.",
  },
  documentsIR: {
    title: "பதிவிறக்கம்",
    tab1_title: "ஆண்டு அறிக்கைகள்",
    tab1_content: "இப்போது பதிவேற்றப்பட்ட அறிக்கைகள் எதுவும் இல்லை!",
    tab2_title: "கடன் மதிப்பீடுகள்",
    tab2_content: "இப்போது பதிவேற்றப்பட்ட அறிக்கைகள் எதுவும் இல்லை!",
    tab3_title: "தரவுகள் நிதி அறிக்கைகள்",
    tab3_content: "இப்போது பதிவேற்றப்பட்ட அறிக்கைகள் எதுவும் இல்லை!",
    tab4_title: "மாதாந்திர நிதி அறிக்கைகள்",
    tab4_content: "இப்போது பதிவேற்றப்பட்ட அறிக்கைகள் எதுவும் இல்லை!"
  },
  
    //Downloads Page Components
    downloadsTexts: {
      title: "பதிவிறக்கங்கள்",
      section1: "ஆண்டு அறிக்கைகள்",
      intro1: "ஆவணத்தைப் பார்க்க அதை அழுத்தவும்.",
      section2: "நிதி அறிக்கைகள்",
      intro2: "ஆவணத்தைப் பார்க்க அதை அழுத்தவும்.",
      section3: "வாடிக்கையாளர் தகவல்கள்",
      intro3: "ஆவணத்தைப் பார்க்க அதை அழுத்தவும்.",
      section4: "மற்ற ஆவணங்கள்",
      intro4: "ஆவணத்தைப் பார்க்க அதை அழுத்தவும்.",
      section5: "Debenture Issues 2024",
      intro5: "ஆவணத்தைப் பார்க்க அதை அழுத்தவும்.",
    },

  privacyPolicy: {
    title: "Privacy Policy",
    description: [
      "Asia Asset Finance PLC built all as free. This SERVICE is provided by Asia Asset Finance PLC at no cost and is intended for use as is.",
      "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.",
      "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
      "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions are accessible.",
  ],
  information_collection: "Information Collection and Use",
  ic_description: [
    "For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.",
    "The app does use third party services that may collect information used to identify you.",
  ],
  ic_description_2 : "We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.",
  cookies: "Cookies",
  cookies_text: "This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.",
  service_providers: "Service Providers",
  service_providers_text_1: "We may employ third-party companies and individuals due to the following reasons:",
  service_providers_points: [
    "To facilitate our Service",
    "To provide the Service on our behalf",
    "To perform Service-related services",
    "To assist us in analyzing how our Service is used",
  ],
  service_providers_text_2: "We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.",
  security: "Security",
  security_text: "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.",
  links_to_other_sites: "Links to Other Sites",
  links_to_other_sites_text: "This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
  children_privacy: "Children’s Privacy",
  children_privacy_text: "These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.",
  changes_to_this_privacy: "Changes to This Privacy Policy",
  changes_to_this_privacy_text_1: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.",
  changes_to_this_privacy_text_2: "This policy is effective as of 2021-08-01",
  contact_us: "Contact Us",
  contact_us_text: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@asiassetfinance.lk.",
},

    //Promotions Page
    promotionsPage: {
      title: "சலுகைள்",
      subtitle: "தற்போது சலுகைள் இல்லை",
      description: "புதிய அறிவிப்புகளுக்கு இந்த பக்கத்தை பிறகு வந்துகாண்க.",
    },

    //Products and Services Page Components
    bannerProducts: {
      title: "தயாரிப்புகள் மற்றும் சேவைகள்",
      intro: "நிதி தீர்வுகளை எளிதாக்குதல்",
      specialnote: "1970 முதல்",
      description: "“ வளர்ச்சிக்கும் வளத்திற்கும் பங்காளி ”",
    },
    
    productsSelector: { 
      'Fixed Deposit': {
        images: [FD, FD],
        name: "நிலையான வைப்பு",
        features: [
          { title: "உயர் வட்டி விகிதம்", description: "இயல்பான சேமிப்பு கணக்குகளை விட அதிக வட்டியுடன் ஈட்டுங்கள்." },
          { title: "நெகிழ்வான காலஅளவு", description: "உங்கள் தேவைகளுக்கு ஏற்ப காலஅளவுகளைத் தேர்ந்தெடுக்கவும்." },
        ],
      },
      'Gold Loan': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "தங்கக் கடன்",
        features: [
          { title: "விரைவான ஒப்புதல்", description: "உங்கள் தங்கத்தை அடமாகக் கொண்டு விரைவாக நிதி பெறுங்கள்." },
          { title: "குறைந்த வட்டி", description: "தங்க அடமாகக் கொண்ட கடன்களுக்கான போட்டித்திறன் கொண்ட வட்டிகளைப் பெறுங்கள்." },
        ],
      },
      'Mortgage': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "அடமானம்",
        features: [
          { title: "சரியான வட்டி விகிதம்", description: "சிறிய அளவிலான அடமானங்களுக்கான குறைந்த வட்டி விகிதங்கள்." },
          { title: "நெகிழ்வான தொகுப்புகள்", description: "வருமானத்தின்படி அமைக்கக்கூடிய திருப்பிச் செலுத்தும் திட்டங்கள்." },
        ],
      },
      'Leasing': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "குத்தகை",
        features: [
          { title: "விரைவான குத்தகை தேர்வுகள்", description: "வாகனங்கள், உபகரணங்கள் மற்றும் பலவற்றுக்கான குத்தகை முறை உள்ளன." },
          { title: "விரைவான செயலாக்கம்", description: "குத்தகை விண்ணப்ப செயல்முறை எளிதாகவும் விரைவாகவும்." },
        ],
      },
      'Forex': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "விநியோகம்",
        features: [
          { title: "போட்டித் திறனுள்ள விகிதங்கள்", description: "சிறந்த விகிதத்தில் நாணயங்களை மாற்றவும்." },
          { title: "பல நாணயங்கள்", description: "பல்வேறு சர்வதேச நாணயங்களுக்கு அணுகல் கிடைக்கும்." },
        ],
      },
    },
    
    luckewalletProductsPage: {
      description1: "50 ஆண்டுகளாக பல தனிநபர்கள் மற்றும் தொழில்கள் மீது தங்கள் ஆர்வத்தைச் செலவழித்து வந்திருக்கிறோம். நியாயமான வட்டி விகிதத்தில் தங்க கடன்கள், குத்தகை, அடமானக் கடன்கள், குழு தனிநபர் கடன்கள், தனிநபர் கடன்கள், தொழில்முனைவோர் கடன்கள், நிறுவன கடன்கள், மைக்ரோ கடன்கள் அல்லது பொதுத் தகுப்பு எங்கள் சேவைகளை வழங்குவதன் மூலம் சமூகங்களை சுயாதீனமாக உருவாக்க நாங்கள் பெருமிதமாக இருக்கிறோம்.",
      description2: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ என்பது Muthoot Finance Ltd நிறுவனத்தின் முழுமையான துணை நிறுவனம் ஆகும் மற்றும் இலங்கை மத்திய வங்கியால் பதிவு செய்யப்பட்ட முழுமையான உரிமம் பெற்றவை.",
      kFeature1: "முக்கிய ",
      kFeature2: "அம்சங்கள்",
      f1title: "எளிதான கணக்கு மேலாண்மை",
      f1Text: "எல்லா கணக்குகளையும் ஒரு இடத்தில் எளிதாக பார்க்கவும் நிர்வகிக்கவும்.",
      f2title: "விரைவான கடன் விண்ணப்பங்கள்",
      f2Text: "கடன்களுக்காக விண்ணப்பிக்கவும் மற்றும் உங்கள் விண்ணப்ப நிலையைச் சரிபார்க்கவும்.",
      f3title: "எளிதான ஆன்லைன் பரிவர்த்தனைகள்",
      f3Text: "விரைவான, பாதுகாப்பான மற்றும் சிரமமில்லாத மாறுபாட்டு சேவைகளை அனுபவிக்கவும்.",
      f4title: "நேரடிக் அறிவிப்புகள்",
      f4Text: "கணக்கு செயல்பாடுகள் மற்றும் சலுகைகள் குறித்த உடனடி அறிவிப்புகளைப் பெறுங்கள்.",
    },
    

    //------------------------------------------------------ Sub Pages --------------------------------------------------------------//
    
    //Careers Page Components
    careersBanner: {
      title: "தொழில் வாய்ப்புகள்",
      description: "எங்களுடன் உங்கள் எதிர்காலத்தை உருவாக்குங்கள்!",
    },
    
    titleCareers: {
      title1: "நாங்கள் ",
      title2: "பணியமர்த்துகிறோம்",
      description1: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ யில் நாங்கள் செய்யும் விஷயங்கள் இங்கே! நாங்கள் தனிநபர்களுக்கு அவர்கள் விரும்பும் வாழ்க்கையை வாழ உதவுகிறோம், நாங்கள் வணிகங்களை அமைப்பதற்கான சாதனமாக உள்ளோம், நாங்கள் நிதி இடைவெளியை குறைக்கும் செயலில் உள்ளோம்.",
      description2: "நாங்கள் அடிக்கடி பொருளாதாரங்களை உருவாக்கும் ஆர்வமுள்ள தொழில்முனைவோரை தேடுகிறோம். உங்களிடம் அதற்கான தகுதி இருக்கிறது என்று நீங்கள் நினைத்தால், கீழே உள்ள கிடைக்கும் நிலைகளுக்கு விண்ணப்பிக்கவும்.",
    },


    //------------------------------------------------------ Products Pages --------------------------------------------------------------//
    
    //Gold Loan Page Components
    goldLoanPage: {
      title: "தங்கக்கடன்",
      description: "பொறுப்பு என்பது நமக்கு அனைவருக்கும் வரும் ஒன்று. உங்கள் மகளின் திருமண செலவுகளைப் பற்றி கவலைப்படும் தந்தையாகவும், உங்கள் மகனுக்கு சிறந்த கல்வியை வழங்க முயற்சிக்கும் தாயாகவும், திடீர் அறுவை சிகிச்சைக்கான பணம் தேவைப்படும் துணையாகவும் இருக்கலாம். பயப்படாதீர்கள். எங்கள் தங்க கடன் சேவை உங்கள் தேவைகளை பூர்த்தி செய்ய தயார். எங்கள் கிளைகளில் வருகை தந்து நம்பகத்தன்மை உள்ள நிபுணர்களுடன் பேசுங்கள். தங்கத்தை உங்களுக்கே பாதுகாப்பான இடத்தில் வைத்திருக்க உத்தரவாதம் தருகிறோம்.",
      kfd: "/media/attachments/customerProtectionFramework/ta_key_fact_document_gl.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "கட்டண மற்றும் விகித பட்டியல்",
      btn_3: "வாடிக்கையாளர் தகவல் ஆவணங்கள்",
      hotline: "துரித எண்",
      note: "குறிப்பு: குறிப்பு: இந்த மதிப்புகள் அவ்வப்போது மாறும்.",
      charges_tariff: "/media/uploads/charges_and_tariff/ta_gl_cat.png",
    },
    
    //FD Page Components
    fdPage: {
      title: "நிலையான வைப்புக்கள்",
      description: "சேமிக்கத் தொடங்குவதற்கு இது ஒரு மோசமான நேரமல்ல, எங்களிடம் சேமிக்கத் தொடங்குவது மோசமான யோசனையல்ல. 50 ஆண்டுகளுக்கும் மேலான வரலாற்றைக் கொண்டு, ஏசியா எசட் பைனான்ஸ் பீ எல் சீ ஆனது, இலங்கை மத்திய வங்கியில் பதிவுசெய்யப்பட்ட நிதி நிறுவனமாக காலத்தால் சோதிக்கப்பட்ட முதலீட்டு பங்காளியாக மாறியுள்ளது. உங்கள் செல்வத்தின் பாதுகாப்பை நாங்கள் உறுதிசெய்கிறோம், அதேசமயம் டெபாசிட் விகிதங்களை வழங்குகிறோம். இலங்கையானது பல பொருளாதார நெருக்கடிகளை எதிர்கொண்டுள்ளது. இருந்த போதிலும் ஆசிய சொத்துக்கள் எப்போதும் வழங்கப்பட்டுள்ளன. உங்கள் தனிப்பட்ட தேவைகளைப் பூர்த்தி செய்வதற்காக நட்பு மற்றும் தனிப்பயனாக்கப்பட்ட நிபுணர்களின் குழுவுடன் வீடு வீடாகச் செல்லும் சேவை எங்கள் சேவைகளில் அடங்கும்.",
      kfd: "/media/attachments/customerProtectionFramework/ta_key_fact_document_fd.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "வட்டி விகிதம்",
      btn_3: "வாடிக்கையாளர் தகவல் ஆவணங்கள்",
      btn_4: "Collection Bank Accounts",
      collectionAccounts: "/media/uploads/fd_collection_accounts.webp",
      hotline: "துரித எண்",
      note: "குறிப்பு: குறிப்பு: இந்த மதிப்புகள் அவ்வப்போது மாறும்.",
      fdRates: "/media/uploads/ta_fd_rates.webp",
    },
    
    //Leasing Page Components
    leasingPage: {
      title: "குத்தகை",
      description: "உங்கள் கனவு வாகனத்தை நீங்கள் இப்போது ஓட்டக்கூடாது என்று யாரும் சொல்ல வேண்டாம்! நீங்கள் ஓட் விரும்பும் எந்தவொரு வாகனமும், உங்கள் அருகில் உள்ள ஆசிய அசெட் கிளைக்கு ஒரு முறை சென்று வந்தால் போதும். சொந்தமாக. ஓட்டுங்கள். மேலும் உலகில் உள்ள எல்லா நேரமும் அதற்கு பணம் செலுத்த வேண்டும். இந்த ஒப்பந்தத்தில், நீங்கள் வெற்றி பெறுவீர்கள்! எங்களிடமிருந்து நீங்கள் குத்தகைக்கு விண்ணப்பிக்கும்போது, ​​எங்கள் பயிற்சி பெற்ற வல்லுநர்கள் உங்களுக்கு வழங்குவார்கள்; சந்தையில் சிறந்த வட்டி விகிதங்கள், வீட்டு வாசல் சேவை, குறைந்தபட்ச ஆவணங்கள், நெகிழ்வான திருப்பிச் செலுத்தும் விதிமுறைகள் மற்றும் பல. எனவே, எங்களுடன் எளிதாக குத்தகைக்கு எடுத்து உங்கள் கனவை இயக்குங்கள்!",
      kfd: "/media/attachments/customerProtectionFramework/ta_key_fact_document_l.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "கட்டண மற்றும் விகித பட்டியல்",
      btn_3: "வாடிக்கையாளர் தகவல் ஆவணங்கள்",
      hotline: "துரித எண்",
      note: "குறிப்பு: குறிப்பு: இந்த மதிப்புகள் அவ்வப்போது மாறும்.",
      charges_tariff: "/media/uploads/charges_and_tariff/ta_l_cat.png",
    },
    
    //Mortgage Page Components
    mortgagePage: {
      title: "அடைமானம்",
      description: "பணம் உங்களின் அனைத்து நிதி பிரச்சனைகளையும் தீர்க்கும். ஏசியா எசட்டில் நாங்கள் உங்கள் நிதி வாழ்க்கை முறையை மேம்படுத்த எங்களின் அனைத்து முயற்சிகளையும் முதலீடு செய்கிறோம். நீங்கள் நிதி திரட்டுவதற்கான விரைவான வழி இதுவாகும். உங்கள் சொத்தை எங்களிடம் அடமானம் வைத்து, பணத்தை உருவாக்கி, சரியான நேரத்தில் உங்கள் சொத்தை மீட்டெடுக்கவும். எனவே, கவலைப்படுவதை நிறுத்துங்கள். போ. வளருங்கள். உங்களுக்கு தடையாக இருக்கும் அனைத்து பிரச்சனைகளையும் நாங்கள் ஏற்கனவே தீர்த்துவிட்டோம். சிறந்த, பயனுள்ள மற்றும் திறமையான சேவையை நாங்கள் உங்களுக்கு உறுதியளிக்கிறோம். நாங்கள் உங்களைப் பார்ப்பதால் நீங்கள் பெறக்கூடிய நியாயமான கட்டணங்களை நாங்கள் உறுதியளிக்கிறோம். எல்லாவற்றிற்கும் மேலாக, மக்களை மேம்படுத்துவதும் வாழ்க்கையை மாற்றுவதும் எங்கள் நோக்கம்!",
      kfd: "/media/attachments/customerProtectionFramework/ta_key_fact_document_m.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "கட்டண மற்றும் விகித பட்டியல்",
      btn_3: "வாடிக்கையாளர் தகவல் ஆவணங்கள்",
      hotline: "துரித எண்",
      note: "குறிப்பு: குறிப்பு: இந்த மதிப்புகள் அவ்வப்போது மாறும்.",
      charges_tariff: "/media/uploads/charges_and_tariff/ta_m_cat.png",
    },
    
    //Forex Page Components
    forexPage: {
      title: "வெளிநாட்டு நாணய மாற்று",
      description: "ஏசியா எசட் பைனான்ஸ் உங்கள் வெளிநாட்டு நாணய மாற்றங்களை   ஒரே நேரத்தில் செய்துவிடலாம். அதை விவரிக்கும் எளிய வடிவத்தில், இது ஒரு நாணயத்தை விற்று மற்றொரு நாணயத்தை வாங்குவதாகும். இவை எப்போதும் ஜோடிகளாகவே மேற்கோள் காட்டப்படும்- அதாவது, அடிப்படை (வாங்கிய) நாணயத்தின் ஒரு யூனிட், மேற்கோள் (விற்ற) நாணயத்தின் அடிப்படையில் எவ்வளவு. எங்களுடைய தொழில்முறை ஆலோசனையுடன், எங்கள் அணுகுமுறையுடன், உங்கள் செல்வம் பெருகுவதைப் பாருங்கள்.",
      btn_1: "வாடிக்கையாளர் தகவல் ஆவணங்கள்",
      btn_2: "அந்நிய செலாவணி மாற்று விகிதங்கள்",
      btn_3: "முக்கிய தகவல் ஆவணம்",
      hotline: "துரித எண்",
      note: "குறிப்பு: இந்த மதிப்புகள் அவ்வப்போது மாறும்.",
      charges_tariff: "",
      our_partners: "எங்கள் துணை முகவர்கள் ",
      forexRate: "/media/uploads/forex_rate_ta.webp",
      kfd: "/media/attachments/customerProtectionFramework/ta_key_fact_document_f.pdf",

    },

    //Luckewallet Page Components
    luckewalletPage: {
      title: "Luckewallet",
      subtitle: "உங்கள் செல்வத்தை எங்கிருந்தாலும் அணுகுங்கள்",
      description: ["Luckewallet  இலங்கையில் முன்னணி பணம் பரிவர்த்தனை தளமாக தன்னை உறுதியாக நிலைநிறுத்தியுள்ளது. இது அதிகமான பரிவர்த்தனை அளவுக்காகவும், பரந்த வாடிக்கையாளர் அடிப்படைக்காகவும் பிரபலமானது. Luckewallet பலவகையான நிதி சேவைகளை வழங்குகிறது, அவற்றில் டிஜிட்டல் சேமிப்பு கணக்குகள், டிஜிட்டல் நிலையான வைப்புகள், மற்றும் தங்கக் கடன் வட்டி செலுத்தல் அடங்கும். பயனர்கள் தங்கள் பயன்பாட்டு மின்சாரக் கட்டணங்களைச் செலுத்தலாம் மற்றும் கிரெடிட் கார்டு பணப் பரிவர்த்தனைகளை எந்த ஒரு கிளையையும் சென்று தேவை இல்லாமல் ஏற்றுக்கொள்ளலாம். இந்த தளம், வாடிக்கையாளர்களையும் வியாபாரிகளையும் முழுமையாக இணைக்கும் வகையில் வடிவமைக்கப்பட்டுள்ளது, பாதுகாப்பான மற்றும் ஒருங்கிணைந்த அனுபவத்தை வழங்குகிறது.",
        "எங்கள் E-சேமிப்பு கணக்கின் நீட்சியான அம்சம் இதன் மிகப் போட்டித்தன்மை கொண்ட வட்டி விகிதமாகும், இது சந்தையில் தனித்துவமானதாக இருக்கிறது. E-சேமிப்பு கணக்கு பயனர்களுக்கு தங்கள் சேமிப்புகளில் வட்டி சம்பாதிக்கும் வசதியையும், நிதிகளை டிஜிட்டல் முறையில் நிர்வகிக்கும் சுதந்திரத்தையும் வழங்குகிறது. வாடிக்கையாளர்கள் தங்கள் டிஜிட்டல் சேமிப்பு கணக்குகளை நேரடியாக செயலியின் மூலம் திறக்கவும் நிர்வகிக்கவும் முடியும், மேலும் வழக்கமான சேமிப்பு கணக்குகளைவிட உயர்ந்த வட்டி சம்பாதிக்கவும் கூடுதல் நன்மை உள்ளது. இந்த அம்சம் பயனர்களுக்கு தங்கள் சேமிப்புகளை எளிதாக வளர்க்கும் வாய்ப்பை வழங்குகிறது, எப்போது வேண்டுமானாலும் தங்கள் நிதிகளை அணுகவும் கணக்கு நடவடிக்கைகளை கண்காணிக்கவும் அனுகுமுறையுடன்.",
        "Luckewallet  சாதாரணமாக ஒரு கட்டண தளம் அல்ல, முழுமையான சுற்றுச்சூழல் அமைப்பாக காட்சியளிக்கப்படுகிறது, நிறுவனமானது வியாபாரியர்களை பெற்றுக் கொள்ளும் கூட்டாளியாக செயல்படுகிறது. மேம்பட்ட மென்பொருள் கட்டமைப்பிற்காக சர்வதேச அளவில் பாராட்டப்பட்ட இந்த செயலி, பயனர்களுக்கு மெலிதான மற்றும் செயல்திறனான அனுபவத்தை உறுதிப்படுத்த தொடர்ந்து மேம்படுத்தப்படுகிறது. முக்கிய அம்சங்களில் எளிய வாடிக்கையாளர் சேர்க்கை, சுய பதிவேற்றம், மற்றும் மொபைல் ரீசார்ஜ்கள் மற்றும் பிற வங்கிக் கணக்குகளுடன் நேரடி பரிவர்த்தனைகளைச் செய்யும் பல்வேறு சேவைகள் அடங்கும். E-சேமிப்பு கணக்கு மற்றும் அதனுடைய போட்டித்தன்மை வாய்ந்த வட்டி விகிதத்துடன், Luckewallet  டிஜிட்டல் பரிவர்த்தனைகளுக்கு மேல் செல்லும் ஒரு பயணத்தை வழங்குகிறது — இது பாவனையாளர்களுக்கு தங்கள் நிதி எதிர்காலத்தை உருவாக்க உதவுகிறது.",
      ],
      kfd: "/media/attachments/customerProtectionFramework/ta_key_fact_document_s.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "வாடிக்கையாளர் தகவல் ஆவணங்கள்",
      btn_3: "",
      hotline: "துரித எண்",
      note: "குறிப்பு: இந்த மதிப்புகள் சுட்டுரைச் செய்யும் பொருட்டு மட்டுமே வழங்கப்பட்டுள்ளன மற்றும் அவை காலத்தின்படி மாறக்கூடும்.",
      charges_tariff: "",
      
    },

    //Contact Page Components
    contactsPage: {
      title1: "தொடர்பு கொள்ளுங்கள் ",
      title2: "எங்களுடன்",
      subtitle: "இன்று எங்களைத் தொடர்பு கொள்ளுங்கள், உங்களுக்குத் தேவையான ஆதரவை நாங்கள் வழங்குவோம்!",
      learnMoreBtn: "மேலும் அறியவும்",
      card1title: "முகவரி",
      card1Body: "எண் 76, பார்க்க் வீதி, கொழும்பு 02",
      card2title: "வாடிக்கையாளர் சேவை",
      card2Body: "011 71 70 712",
      card3title: "தொலைபேசி",
      card3Body: "011 76 99 000",
      card4title: "மின்னஞ்சல்",
      card4Body: "info@asiaassetfinance.lk",
      card5title: "புகார்கள்",
      card5Body: "077 79 99 922",
      card6title: "துரித எண்",
      card6Body: "1369",
      card7title: "திறக்கும் நேரம்",
      card7Body: ["திங்கள் - வெள்ளி: காலை 8:30 - மாலை 5:00 மணி", "சனி: காலை 8:30 - பிற்பகல் 1:00 மணி", "அனைத்து வர்த்தக விடுமுறை நாட்களிலும் மூடப்படும்."]
    },    
    
    //Personal Profile page
    profileDetails: [
      {
        id: "1",
        name: "வி ஏ பிரசாந்த்",
        src: mrPrasanth,
        designation: "தலைவர்",
        description : ["திரு. வி. ஏ. பிரசாந்த், தனிப்பட்ட மற்றும் பெருநிறுவன வங்கியியல், திறைசேரி செயல்பாடுகள் மற்றும் தகவல் பாதுகாப்பு ஆகியவற்றில் 37 ஆண்டுகளுக்கும் மேலான அனைத்து வகையான அனுபவத்தை  கொண்ட வணிக வங்கியாளர் ஆவார். முன்பு இந்தியன் வங்கியில் பொது மேலாளராகவும், தலைமை தகவல் அதிகாரியாகவும் பணியாற்றினார். இந்த நேரத்தில், அவர் தகவல் தொழில்நுட்பம் மற்றும் டிஜிட்டல் வங்கியின் பொறுப்பாளராக இருந்தார். இந்தியன் வங்கியில் தலைமை நிதி அதிகாரியாக பணியாற்றினார். முந்தைய பணிகளில் அவர் வங்கியின் இரண்டு முக்கிய வலயங்களுக்கு வலய மேலாளராக தலைமை வகித்தார். 1994- 1998 ஆம் ஆண்டு மும்பையில் உள்ள அந்நிய செலாவணி வர்த்தக அறையின் தலைவராகவும், 2001-2005 ஆம் ஆண்டு சிங்கப்பூர் திறைசேரியின் தலைவராகவும், 2009-2011 ஆம் ஆண்டில் திறைசேரி பின் அலுவலகத் தலைவராகவும், நிதிச் சந்தைகளில் இரண்டு தசாப்தங்களுக்கும் மேலாக அனுபவம் பெற்றவர். 2009 மற்றும் 2011 இடையே இந்தியன் வங்கியின் (WMS) செல்வ மேலாண்மை சேவைகளின் நிர்வாகி . அவர் மார்ச் 2024 வரை மூத்த டொமைன் நிபுணராக ஹைதராபாத்தில் 'வங்கி தொழில்நுட்பத்தில் வளர்ச்சி மற்றும் ஆராய்ச்சிக்கான நிறுவனம்' (IDRBT) உடன் இணைந்து பணியாற்றினார். தற்போது திரு. வி. ஏ. பிரசாந்த் 'இந்திய வங்கி மற்றும் நிதி நிறுவனம்' (IIBF) உடன் தொடர்புடையவர். மும்பை பொருள் நிபுணராக (SME). அவர் ஜூன் 2020 இல் Asia Asset Finance PLC இன் தலைவராக நியமிக்கப்பட்டார்",

        ]
      },
      {
        id: "2",
        name: "ஜார்ஜ் முத்தூட் அலெக்சாண்டர்",
        src: mrAlexandra,
        designation: "நிறைவேற்று அதிகாரமற்ற பணிப்பாளர்",
        description : ["திரு. அலெக்சாண்டர், நார்த் கரோலினா பல்கலைக்கழகத்தில் வணிக நிர்வாகத்தில் முதுகலைப் பட்டம் பெற்றுள்ளார் - கெனான் & ஃபிளாக்லர் வணிகப் பள்ளியில் மற்றும் கேரளா பல்கலைக்கழகத்தில் - டிகேஎம் பொறியியல் கல்லூரியில் இயந்திரப் பொறியியலில் இளங்கலைப் பட்டம் பெற்றார். அவர் தற்போது முத்தூட் நிதியின் துணை நிர்வாக இயக்குநராக பணிபுரிகிறார் மற்றும் இந்தியாவில் கர்நாடகா, கோவா மற்றும் தெலுங்கானா மாநிலங்களில் செயல்பாடுகளை மேற்பார்வையிடுகிறார். அமெரிக்காவில் உள்ள முத்தூட் குழுமத்தின் உலகளாவிய செயல்பாடுகளுக்கு தலைமை தாங்கும் கூடுதல் பொறுப்பை அவர் கொண்டுள்ளார் மேலும் மூன்று குழு நிறுவனங்களின் (Asia Asia Assets Finance PLC, Muthoot Insurance Brokers மற்றும் Belstar Finance & Investments) குழுவில் பணியாற்றுகிறார். முத்தூட் ஃபைனான்ஸ் லிமிடெட் ஒரு தங்கக் கடன் NBFC (வங்கி அல்லாத நிதி நிறுவனம்) மற்றும் தி முத்தூட் குழுமத்தின் முதன்மை நிறுவனமாகும். இது 2011 இல் பட்டியலிடப்பட்டது மற்றும் BSE & NSE இல் வர்த்தகம் செய்யப்பட்டு தற்போது இந்தியாவின் மிகப்பெரிய தங்கக் கடன் நிறுவனமாகும். முத்தூட் ஃபைனான்ஸ் லிமிடெட் தவிர, முத்தூட் குழுமம் விருந்தோம்பல், சுகாதாரப் பாதுகாப்பு, ஈக்விட்டி & கமாடிட்டி டிரேடிங், இன்சூரன்ஸ் ப்ரோக்கிங் போன்ற 16 பிரிவுகளைக் கொண்டுள்ளது. குடும்பத்திற்குச் சொந்தமான வணிகம், நான்கு தலைமுறைகளாக நிறுவப்பட்ட இந்த குழுவானது நான்காவது தலைமுறையை பிரதிநிதித்துவப்படுத்துகிறார். குடும்பம். அவரது குடும்ப வணிகத்தில் சேருவதற்கு முன்பு, அவர் இந்தியாவில் உள்ள ING & Kotak Mahindra வங்கியில் இணைக்கப்பட்டார். இந்திய கூட்டமைப்பின் தலைவராக பணியாற்றினார் இண்டஸ்ட்ரீஸ் – யங் இந்தியன்ஸ் பெங்களூர் அத்தியாயம் 2015. அவர் AIYDக்காக இந்தியாவைப் பிரதிநிதித்துவப்படுத்தத் தேர்ந்தெடுக்கப்பட்ட 10 இந்தியர்களில் ஒருவர் (ஆஸ்திரேலியா இந்தியா இளைஞர் உரையாடல்) சிட்னி மற்றும் மெல்போர்னில் 2013 & 2022. அவர் தொழில்முனைவோரின் நிதித் தலைவராக இருந்தார். 2016-2018 வரை பெங்களூரு அமைப்பு. அவர் தற்போது இருக்கிறார் வடக்கு பல்கலைக்கழகத்தில் ஆலோசகர் குழுவில் பணியாற்றுகிறார் கரோலினாவின் - கெனன்-ஃபிளாக்லர் வணிகப் பள்ளி மற்றும் குழுவில் பெங்களூர் XIME வணிகப் பள்ளி.",

        ]
      },
      {
        id: "3",
        name: "குட்டிக்கட்டு ராஜப்பன் பிஜிமோன்",
        src: mrBijimon,
        designation: "நிறைவேற்று அதிகாரமற்ற பணிப்பாளர்",
        description : ["பிஜிமோன், புது தில்லியில் உள்ள இந்திய பட்டயக் கணக்காளர்கள் நிறுவனத்தின் சக உறுப்பினர், மும்பை இந்தியன் இன்ஸ்டிடியூட் ஆஃப் பேங்கிங் அண்ட் ஃபைனான்ஸ் அசோசியேட் மற்றும் இலங்கை நிறுவனத்தின் சான்றளிக்கப்பட்ட மேலாண்மைக் கணக்காளர்களின் சக உறுப்பினர். அவர் எம்ஜி பல்கலைக்கழகத்தில் எல்எல்பி பட்டமும், கொச்சி பல்கலைக்கழகத்தில் எம்பிஏ பட்டமும் பெற்றவர், நிதிச் சேவைத் துறையில் 28 ஆண்டுகளுக்கும் மேலான அனுபவம் உள்ளவர் மற்றும் தொடக்கத்தில் இருந்து முத்தூட் ஃபைனான்ஸ் லிமிடெட் நிறுவனத்தில் பணிபுரிந்து வருகிறார். நிறுவனத்தின் நிர்வாக இயக்குனர் மற்றும் COO என்ற முறையில் அவர் கடன், உள் தணிக்கை, சந்தைப்படுத்தல், தகவல் தொழில்நுட்பம், மீட்பு மற்றும் நிறுவனத்தின் சட்ட மற்றும் கண்காணிப்பு துறைகளை மேற்பார்வையிடுகிறார். முத்தூட் குழுமத்தின் (அமெரிக்கா, ஐக்கிய அரபு எமிரேட்ஸ், யுகே, நேபாளம் மற்றும் இலங்கை) உலகளாவிய செயல்பாடுகளுக்கான தலைமை இயக்க அதிகாரி ஆவார். அமெரிக்கா, இங்கிலாந்து, நேபாளம் மற்றும் இலங்கை ஆகிய நாடுகளுக்கு தனது நடவடிக்கைகளை விரிவுபடுத்தும் முத்தூட் குழுமத்தின் உந்து சக்தியாக இருந்து வருகிறார். திரு. கே.ஆர். பிஜிமோன் முத்தூட் குழும நிறுவனங்களில் இயக்குநராக உள்ளார் அதாவது. முத்தூட் ஹோம் ஃபின் (இந்தியா) லிமிடெட், முத்தூட் செக்யூரிட்டீஸ் லிமிடெட், முத்தூட் கமாடிட்டிஸ் லிமிடெட், முத்தூட் ஃபாரெக்ஸ் லிமிடெட், முத்தூட் Finserv USA INC. Asia Asset Finance PLC Sri Lanka மற்றும் Belstar Microfinance Ltd. முத்தூட்டின் ஆட்சிக்குழு உறுப்பினராகவும் உள்ளார் தொழில்நுட்பம் மற்றும் அறிவியல் நிறுவனம் (MITS).",

        ]
      },
      {
        id: "4",
        name: "ஜேபிடிஆர் ஜயசேகர",
        src: mrJayasekara,
        designation: "சுயாதீன நிறைவேற்று அதிகாரமற்ற பணிப்பாளர்",
        description : ["திரு. ஜயசேகர ஜயசேகர பத்திரன்நெஹலகே தனசிறி ரூபகுமார ஜயசேகர இரண்டாம் தர உயர்தரப் பிரிவில் பொருளாதாரத்தில் BA (சிறப்பு) பட்டம் பெற்றுள்ளார். வரிவிதிப்பு, தகவல் தொழில்நுட்பம் மற்றும் வங்கி மற்றும் நிதி ஆகியவற்றில் 33 ஆண்டுகளுக்கும் மேலான முற்போக்கான அனுபவம் பெற்றவர். அவர் 1984 இல் உள்நாட்டு வருவாய்த் திணைக்களத்தின் மதிப்பீட்டாளராகப் பதவியேற்றார், அதன்பின் 1994 இல் மூத்த மதிப்பீட்டாளர், 2005 இல் துணை ஆணையர், ஆணையாளர் மற்றும் மூத்த ஆணையர் மற்றும் துணை ஆணையர் ஜெனரலாக (ICT நிர்வாகம் மற்றும் வரி செயல்பாட்டு ஆதரவு) பதவிகளை 2015 இல் வகித்தார். அவர் ஒரு முன்னோடி உறுப்பினராக இருந்தார், வருவாய்த்துறையின் மூத்த கூடுதல் திட்ட இயக்குனராக இருந்தார் நிர்வாக மேலாண்மை தகவல் அமைப்பு (RAMIS), இது துறையில் இப்போது செயல்பாட்டில் உள்ளது. ஓய்வுபெறும் போது, ​​அவர் உள்நாட்டு இறைவரித் திணைக்களத்தின் பிரதி ஆணையாளர் நாயகமாக (தகவல் தொழில்நுட்பம்) கடமையாற்றினார், திரு. 2003 இல் யுனைடெட் கிங்டமில் நடைபெற்ற மேம்பட்ட மேலாண்மை திறன் (மூத்த படிப்பு) பற்றிய ஒரு சிறப்புப் பயிற்சித் திட்டம் 2007 இல் இந்தியாவில் தணிக்கை முகாமைத்துவம், மற்றும் 2012 இல் அங்கோலாவில் நடைபெற்ற சுங்க விரிவாக்க நவீனமயமாக்கல் தொடர்பான பிந்தைய விடாமுயற்சி குறித்த நிகழ்ச்சி. செஷல்ஸ் மற்றும் சவூதி அரேபியாவுடன் இலங்கை கைச்சாத்திட்ட இரட்டை வரிவிதிப்பு ஒப்பந்தப் பேச்சுவார்த்தைகளிலும் அவர் மதிப்புமிக்க வெளிப்பாடுகளைப் பெற்றுள்ளார். அவர் 2012 இல் பிரான்சில் நடைபெற்ற 'OECD Global Forum on VAT' மற்றும் 2013 இல் ஜப்பானின் டோக்கியோவில் நடைபெற்ற 'ஆசிய நாடுகளுக்கான நான்காவது IMF - ஜப்பான் உயர்மட்ட வரி மாநாடு' போன்ற மாநாடுகளின் பிரதிநிதியாக மூலோபாய அளவிலான மன்றங்களில் பங்கேற்றார். சீனாவில் நீலப் பொருளாதாரம் மற்றும் கடல்சார் பட்டுப் பாதையில். அவர் 2014 இல் சீனாவுடன் முன்மொழியப்பட்ட வர்த்தக ஒப்பந்தத்தின் பேச்சுவார்த்தையில் பணிபுரிந்த குழுவின் உறுப்பினராக இருந்தார். RAMIS திட்டம் தொடர்பாக உரிய விடாமுயற்சி அறிக்கைகளைத் தயாரிப்பதில் வணக்கக் குழுவின் உறுப்பினர்களில் ஒருவராக இருந்தார், இதற்காக சிங்கப்பூர் மற்றும் அங்கோலாவுக்குச் சென்றார். காரணம். திரு. ஜெயசேகர APFA (இலங்கையின் பொது நிதிக் கணக்காளர்களின் சங்கம்) இல் உறுப்பினராக உள்ளார் மற்றும் சைனா ஸ்ரீலங்கா சொசைட்டியின் செயலில் உறுப்பினராக உள்ளார். சுறுசுறுப்பான பரோபகாரியான அவர் சமூக சேவையில் தீவிரமாக ஈடுபட்டுள்ள பல சங்கங்கள் மற்றும் சங்கங்களில் உறுப்பினராக உள்ளார்.",

        ]
      },
      {
        id: "5",
        name: "டி சி டி குமாரசிறி",
        src: mrKumarasiri,
        designation: "நிறைவேற்று அதிகாரமற்ற பணிப்பாளர்",
        description : ["திரு .சாமிந்த குமாரசிறி ஒரு மூத்த அங்கீகாரம் பெற்ற கணக்காளர், மேலாண்மை ஆலோசகர், முக்கியப் பேச்சாளர், வணிக ஆலோசகர் மற்றும் நிறுவனப் பயிற்றுநர் ஆவார். அவர் முன்னணி உள்ளூர் நிறுவனங்களிலும் பலநாட்டு நிறுவனங்களிலும் மூத்த தலைமை பதவிகளை வகித்து வருகிறார். அவர் ஆசியப் பெருங்கோள் பணமும் தொழில்முனைவோரை மேம்படுத்தும் நிறுவனம் (Asia Pacific Institute of Money and Entrepreneurship Development) என்ற நிறுவனத்தை நிறுவியவர் மற்றும் அதில் அதிபராக பணியாற்றுபவர், 'ஹ்யூமன் காப்பிட்டல் பாட்டர்னர்' என்ற நிறுவனத்தை நிறுவிய மற்றும் அதன் CEO ஆவார். 'எச்சி.பி. கன்சல்டிங் (பிரைவேட்) லிமிடெடின்' தலைவராகவும் முக்கிய ஆலோசகராகவும் உள்ளார். அவர் சனச வளர்ச்சி வங்கி பி.எல்.சி-இல் சுயதனிப்பட்ட அல்லாத நிர்வாக இயக்குநராக பணியாற்றுகிறார் மற்றும் பல முன்னணி தனியார் மற்றும் பொது துறைகள் நிறுவனங்களுக்கான ஆலோசகர் மற்றும் கன்சல்டனாகவும் பணியாற்றுகிறார். மேலும், உலகளாவிய கணக்கியல் கல்வி குழுவான 'International Panel on Accounting Education (IPAE)' - இல் தென் ஆசியாவிலிருந்து ஒரே பிரதிநிதியாக திகழ்கிறார். அவர் CA இலங்கையின் ஆட்சி மன்றத்தில் இரண்டு தொடர்ச்சியான காலங்கள் பணியாற்றி, தற்போது ACCA இலங்கையின் உறுப்பினர் நெட்வொர்க் மேலாண்மை துணைத் தலைவர் ஆவார். திரு. குமாரசிறி தொழில்முறை மற்றும் கல்வி தகுதிகளில் விசாலமான அனுபவம் மற்றும் பல்வேறு பரிசுகள் மற்றும் பதக்கங்களை பெற்றவர் ஆவார். அவர் இலங்கை சார்டர்ட் அக்கவுண்டன்ட் நிறுவனத்தின் (Institute of Chartered Accountants of Sri Lanka), பிரிட்டன் சார்டர்ட் சர்டிபைட் அக்கவுண்டன்ட் (Association of Chartered Certified Accountants – UK), இலங்கை கணக்கியல் தொழில்நுட்பிகள் சங்கம் (Association of Accounting Technicians of Sri Lanka) மற்றும் இலங்கை சான்றளிக்கப்பட்ட மேலாண்மை அக்கவுண்டன்ட் நிறுவனத்தின் (Institute of Certified Management Accountants of Sri Lanka) தேர்ச்சி பெற்ற உறுப்பினராக உள்ளார். அவர் ஸ்ரீ ஜெயவர்தனபுர பல்கலைக்கழகத்தில் முதல் நிலை பாராட்டுக்களுடன் கணக்கியல் (சிறப்பு) பட்டம் பெற்றவர் மற்றும் கோழும்பு பல்கலைக்கழகத்தில் நிதி துறையில் MBA (மாஸ்டர் ஆப் பிசினஸ் அட்மினிஸ்டிரேஷன்) பட்டம் பெற்றவர். ஒரு முன்னணி நிறுவனப் பயிற்றுநராக, அவர் இலங்கையும் வெளிநாடுகளிலும் எண்ணற்ற மனிதர்களுக்கு மிகுந்த முன்னேற்றத்தை வழங்கியுள்ளார். வணிக மண்டபங்கள் மற்றும் தொழில்முனைவோரை சார்ந்த நிகழ்ச்சிகளில் பேச்சாளர் மற்றும் பேனலிஸ்ட் ஆக frequently அழைக்கப்படுகிறார். அவர் தொழில்முனைவோர் சூழலில் முக்கியமான ஒரு பணியாளராக உள்ளார் மற்றும் பல தேசிய தொலைக்காட்சி/வானொலி சேனல்களிலும் பிரபலமான YouTube சேனல்களிலும் தன் கருத்துக்களை பகிர்ந்து வருகிறார். அவர் ACCA National Advocate of the Year Award - 2022 என்ற பரிசை பெற்றுள்ளார், இது கணக்கியல் தொழில்முறையை மேம்படுத்துவதிலும் அதன் மதிப்புகளை பரப்புவதிலும் அவரது உத்தேசமான அர்ப்பணிப்புக்கும் நம்பகத்தன்மைக்கும் வழங்கப்பட்டது.",
        ]
      },
      {
        id: "6",
        name: "ரோஷன் டி சில்வா குணசேகர",
        src: mrRoshan,
        designation: "நிறைவேற்று பணிப்பாளர் / பிரதான செயட்பாடு அதிகாரி",
        description : ["திரு. ரொஷான் டி சில்வா குணசேகர நிறைவேற்றுப் பணிப்பாளராகவும், பிரதம செயற்பாட்டு அதிகாரியாகவும் பணியாற்றுவதுடன், அனுபவத்தையும் நிபுணத்துவத்தையும் தனது பாத்திரத்திற்கு கொண்டு வந்துள்ளார். அவர் 2023 இல் நிர்வாக இயக்குநராக இயக்குநர்கள் குழுவில் நியமிக்கப்பட்டார், ஆரம்பத்தில் ஏப்ரல் 2010 இல் நிறுவனத்தில் சேர்ந்தார். பல ஆண்டுகளாக, அவர் விதிவிலக்கான தலைமைத்துவத்தையும், Asia Asset Finance PLC மற்றும் பெரிய நிதிச் சேவைத் துறையின் ஆழமான புரிதலையும் வெளிப்படுத்தியுள்ளார். திரு. குணசேகரவின் நிதித்துறையில் 30 வருடங்கள் நீடித்தது, 1994 ஆம் ஆண்டு அவர் கொமர்ஷல் லீசிங் கம்பனி லிமிடெட்டில் கிரெடிட் அதிகாரியாகப் பொறுப்பேற்றது முதல் LOLC ஃபினான்ஸ் பிஎல்சியுடன் இணைந்தது. அவரது விரிவான பிந்தைய தகுதி அனுபவம் அவரது மூலோபாய பார்வை மற்றும் செயல்பாட்டு புத்திசாலித்தனத்தை வடிவமைப்பதில் முக்கியமானது, இது நிறுவனத்தின் வளர்ச்சி மற்றும் ஸ்திரத்தன்மைக்கு குறிப்பிடத்தக்க பங்களிப்பைச் செய்கிறது. கல்வி ரீதியாக, திரு. குணசேகர ஒரு வலுவான கல்விப் பின்னணியுடன் நன்கு பொருத்தப்பட்டவர். அவர் ஸ்ரீ ஜயவர்தனபுர பல்கலைக்கழகத்தில் வணிக நிர்வாகத்தில் இளங்கலை விஞ்ஞானப் பட்டம் (சிறப்பு) மற்றும் கொழும்பு பல்கலைக்கழகத்தில் MBA பட்டம் பெற்றுள்ளார். கூடுதலாக, அவர் இங்கிலாந்தில் உள்ள பட்டய மேலாண்மைக் கணக்காளர் நிறுவனத்தில் (CIMA) பகுதி தகுதிகளை முடித்துள்ளார், மேலும் அவரது நிதி நிபுணத்துவத்தை மேலும் மேம்படுத்தினார். அவரது தொழில்முறை மற்றும் கல்வி சாதனைகளுக்கு அப்பால், திரு. குணசேகர ஜப்பானில் உள்ள வெளிநாட்டு தொழில்நுட்ப மூத்த மேலாண்மை உதவித்தொகைக்கான சங்கத்தின் (AOTS) மதிப்பிற்குரிய உறுப்பினர் ஆவார். கொழும்புப் பல்கலைக்கழகத்தில் நிதிச் சேவைகள் சந்தைப்படுத்தலில் வருகை தரும் விரிவுரையாளராக அவர் கடமையாற்றுவதன் மூலம் கல்விக்கான அவரது அர்ப்பணிப்பு வெளிப்படுகிறது, அங்கு அவர் தனது அறிவையும் அனுபவத்தையும் ஆர்வமுள்ள நிதி நிபுணர்களுடன் பகிர்ந்து கொள்கிறார். அவர் பல்வேறு அறிவுப் பகிர்வு மன்றங்களில் தேடப்படும் வள நபராக உள்ளார், பரந்த நிதிச் சேவைகள் சமூகத்திற்கு பங்களிக்கிறார். தற்போது, ​​திரு. குணசேகர கொழும்பு பல்கலைக்கழகத்தில் வணிக நிர்வாகத்தின் (DBA) முனைவர் பட்டத்தை தொடர்கிறார், இது தொடர்ச்சியான கற்றல் மற்றும் தொழில்முறை மேம்பாட்டிற்கான அவரது அர்ப்பணிப்பை பிரதிபலிக்கிறது. தொழில்துறை போக்குகள் மற்றும் சிறந்த நடைமுறைகளில் முன்னணியில் இருப்பதற்கான அவரது உறுதிப்பாட்டை அவரது தற்போதைய கல்வி நோக்கங்கள் அடிக்கோடிட்டுக் காட்டுகின்றன. ரொஷான் டி சில்வா குணசேகரவின் நடைமுறை அனுபவம், கல்வித் திறன் மற்றும் அறிவைப் பரப்புவதற்கான அர்ப்பணிப்பு ஆகியவற்றின் கலவையானது அவரை நிதிச் சேவைத் துறையில் ஒரு முக்கிய நபராக ஆக்குகிறது. ஏசியா அசெட் ஃபைனான்ஸ் பிஎல்சியின் தலைமைத்துவமானது, போட்டித் தொழில்துறை நிலப்பரப்பில் நிறுவனத்தின் தொடர்ச்சியான வெற்றியை உறுதிசெய்து, புதுமை மற்றும் சிறந்து விளங்குவதைத் தொடர்கிறது.",

        ]
      },
      {
        id: "7",
        name: "ரஜீவ் ஜேம்ஸ் அபேவிக்ரம குணவர்தன",
        src: mrRajiv,
        designation: "நிறைவேற்று பணிப்பாளர் / பிரதான நிறைவேற்று அதிகாரி",
        description : ["எம்.ஆர். ரஜீவ் குணவர்தன, Asia Asset Finance PLC இன் பிரதம நிறைவேற்று அதிகாரி / பணிப்பாளர் ஆவார். அவர் டிசம்பர் 2009 இல் வாரியத்திற்கு நியமிக்கப்பட்டார் மற்றும் நிறுவனத்தின் பார்வை மற்றும் மூலோபாயத்தை அமைப்பதற்கும் செயல்படுத்துவதற்கும் மற்றும் நிறுவனத்தின் ஒட்டுமொத்த செயல்பாடுகள் மற்றும் செயல்திறன் மூலம் மதிப்பை வழங்குவதற்கும் பொறுப்பானவர். அவர் ஐக்கிய இராச்சியத்தில் வணிகம் மற்றும் தகவல் அமைப்புகளில் இளங்கலை அறிவியல் பட்டம் பெற்றுள்ளார் மற்றும் ஆஸ்திரேலியாவின் மோனாஷ் பல்கலைக்கழகத்தில் தொழில்முறை கணக்கியல் முதுநிலைப் பட்டத்தை முடித்துள்ளார். ஏசியா அசெட் ஃபைனான்ஸ் நிறுவனத்தில் சேருவதற்கு முன்பு, அவர் ஏசியா கேபிடல் பிஎல்சியில் மூத்த முதலீட்டு ஆய்வாளராகப் பணியாற்றியுள்ளார். ஆஸ்திரேலிய வணிக மற்றும் தொழில்நுட்பக் கல்லூரியில் கணக்கியல் விரிவுரையாளராக இருந்தார்.",

        ]
      },
      {
        id: "8",
        name: "ரோஷன் டி சில்வா குணசேகர",
        src: mrRoshan,
        designation: "நிறைவேற்று பணிப்பாளர் / பிரதான செயட்பாடு அதிகாரி",
        description : ["திரு. ரொஷான் டி சில்வா குணசேகர நிறைவேற்றுப் பணிப்பாளராகவும், பிரதம செயற்பாட்டு அதிகாரியாகவும் பணியாற்றுவதுடன், அனுபவத்தையும் நிபுணத்துவத்தையும் தனது பாத்திரத்திற்கு கொண்டு வந்துள்ளார். அவர் 2023 இல் நிர்வாக இயக்குநராக இயக்குநர்கள் குழுவில் நியமிக்கப்பட்டார், ஆரம்பத்தில் ஏப்ரல் 2010 இல் நிறுவனத்தில் சேர்ந்தார். பல ஆண்டுகளாக, அவர் விதிவிலக்கான தலைமைத்துவத்தையும், Asia Asset Finance PLC மற்றும் பெரிய நிதிச் சேவைத் துறையின் ஆழமான புரிதலையும் வெளிப்படுத்தியுள்ளார். திரு. குணசேகரவின் நிதித்துறையில் 30 வருடங்கள் நீடித்தது, 1994 ஆம் ஆண்டு அவர் கொமர்ஷல் லீசிங் கம்பனி லிமிடெட்டில் கிரெடிட் அதிகாரியாகப் பொறுப்பேற்றது முதல் LOLC ஃபினான்ஸ் பிஎல்சியுடன் இணைந்தது. அவரது விரிவான பிந்தைய தகுதி அனுபவம் அவரது மூலோபாய பார்வை மற்றும் செயல்பாட்டு புத்திசாலித்தனத்தை வடிவமைப்பதில் முக்கியமானது, இது நிறுவனத்தின் வளர்ச்சி மற்றும் ஸ்திரத்தன்மைக்கு குறிப்பிடத்தக்க பங்களிப்பைச் செய்கிறது. கல்வி ரீதியாக, திரு. குணசேகர ஒரு வலுவான கல்விப் பின்னணியுடன் நன்கு பொருத்தப்பட்டவர். அவர் ஸ்ரீ ஜயவர்தனபுர பல்கலைக்கழகத்தில் வணிக நிர்வாகத்தில் இளங்கலை விஞ்ஞானப் பட்டம் (சிறப்பு) மற்றும் கொழும்பு பல்கலைக்கழகத்தில் MBA பட்டம் பெற்றுள்ளார். கூடுதலாக, அவர் இங்கிலாந்தில் உள்ள பட்டய மேலாண்மைக் கணக்காளர் நிறுவனத்தில் (CIMA) பகுதி தகுதிகளை முடித்துள்ளார், மேலும் அவரது நிதி நிபுணத்துவத்தை மேலும் மேம்படுத்தினார். அவரது தொழில்முறை மற்றும் கல்வி சாதனைகளுக்கு அப்பால், திரு. குணசேகர ஜப்பானில் உள்ள வெளிநாட்டு தொழில்நுட்ப மூத்த மேலாண்மை உதவித்தொகைக்கான சங்கத்தின் (AOTS) மதிப்பிற்குரிய உறுப்பினர் ஆவார். கொழும்புப் பல்கலைக்கழகத்தில் நிதிச் சேவைகள் சந்தைப்படுத்தலில் வருகை தரும் விரிவுரையாளராக அவர் கடமையாற்றுவதன் மூலம் கல்விக்கான அவரது அர்ப்பணிப்பு வெளிப்படுகிறது, அங்கு அவர் தனது அறிவையும் அனுபவத்தையும் ஆர்வமுள்ள நிதி நிபுணர்களுடன் பகிர்ந்து கொள்கிறார். அவர் பல்வேறு அறிவுப் பகிர்வு மன்றங்களில் தேடப்படும் வள நபராக உள்ளார், பரந்த நிதிச் சேவைகள் சமூகத்திற்கு பங்களிக்கிறார். தற்போது, ​​திரு. குணசேகர கொழும்பு பல்கலைக்கழகத்தில் வணிக நிர்வாகத்தின் (DBA) முனைவர் பட்டத்தை தொடர்கிறார், இது தொடர்ச்சியான கற்றல் மற்றும் தொழில்முறை மேம்பாட்டிற்கான அவரது அர்ப்பணிப்பை பிரதிபலிக்கிறது. தொழில்துறை போக்குகள் மற்றும் சிறந்த நடைமுறைகளில் முன்னணியில் இருப்பதற்கான அவரது உறுதிப்பாட்டை அவரது தற்போதைய கல்வி நோக்கங்கள் அடிக்கோடிட்டுக் காட்டுகின்றன. ரொஷான் டி சில்வா குணசேகரவின் நடைமுறை அனுபவம், கல்வித் திறன் மற்றும் அறிவைப் பரப்புவதற்கான அர்ப்பணிப்பு ஆகியவற்றின் கலவையானது அவரை நிதிச் சேவைத் துறையில் ஒரு முக்கிய நபராக ஆக்குகிறது. ஏசியா அசெட் ஃபைனான்ஸ் பிஎல்சியின் தலைமைத்துவமானது, போட்டித் தொழில்துறை நிலப்பரப்பில் நிறுவனத்தின் தொடர்ச்சியான வெற்றியை உறுதிசெய்து, புதுமை மற்றும் சிறந்து விளங்குவதைத் தொடர்கிறது.",

        ]
      },
      {
        id: "9",
        name: "கோகிலா பெரேரா",
        src: msKokila,
        designation: "பிரதான நிதி அதிகாரி",
        description : [
          "திருமதி கொகிலா பெரேரா அவர்கள் Asia Asset Finance PLC நிறுவனத்தின் தலைமை நிதி அதிகாரியாக (Chief Financial Officer) பணியாற்றுகிறார். நிறுவனத்திற்கு மூலோபாய நிதி தலைமையை வழங்குவதுடன், நிதி திட்டமிடல், திறைநிதி (Treasury) மேலாண்மை, ஒழுங்குமுறை இணக்கம், அபாய மேலாண்மை மற்றும் நிதி அறிக்கையிடல் ஆகியவற்றை மேற்பார்வையிடுகிறார். மேலும், நிலையான வளர்ச்சியும் பங்குதாரர் மதிப்பையும் முன்னேற்றுவதற்காக இயக்குநர் குழு மற்றும் மூத்த நிர்வாகத்துக்கு ஆதரவு வழங்குகிறார். அவர் இலங்கை பட்டயக் கணக்காளர்கள் நிறுவனத்தின் (Institute of Chartered Accountants of Sri Lanka) Fellow உறுப்பினராக (FCA) உள்ளார். மேலும், ஐக்கிய இராச்சியத்தின் University of Wales Trinity and Saint David பல்கலைக்கழகத்தில் இருந்து வணிக நிர்வாகத்தில் முதுநிலைப் பட்டம் (MBA) பெற்றுள்ளார். நிதி சேவைத் துறையில் நிதி, கணக்கியல் மற்றும் நிறுவன நிதி ஆகியவற்றில் 25 ஆண்டுகளுக்கும் மேலான அனுபவத்தை அவர் கொண்டுள்ளார்.",
          "தற்போதைய பொறுப்புக்கு முன், நிதி நிறுவனங்கள் மற்றும் பெருநிறுவனங்களில் மூத்த நிதி பதவிகளை வகித்துள்ளார். அந்தப் பதவிகளில், நிதி கட்டுப்பாடுகளை வலுப்படுத்துதல், இலாபத்தன்மையை மேம்படுத்துதல், ஒழுங்குமுறை மற்றும் தணிக்கை தேவைகளை நிர்வகித்தல், மற்றும் நிதி மாற்ற முயற்சிகளை முன்னெடுத்தல் ஆகியவற்றில் முக்கிய பங்கு வகித்துள்ளார். பட்ஜெட் தயாரித்தல் மற்றும் முன்னறிவிப்பு, சொத்து–பொறுப்பு மேலாண்மை (Asset–Liability Management), வரிவிதிப்பு, மற்றும் ஒழுங்குமுறை அதிகாரிகள், தணிக்கையாளர்கள் மற்றும் நிதி நிறுவனங்களுடன் பங்குதாரர் ஈடுபாடு ஆகியவை அவரது முக்கிய நிபுணத்துவப் பகுதிகளாகும்."
        ]
      },
      {
        id: "10",
        name: "ஜயந்த வீரபுல்லிகே",
        src: mrJayantha,
        designation: "பொது முகாமையாளர் - சேவைகள் செயல்பாடு",
        description : ["திரு. ஜயந்த வீரப்புலிகே 2008 இல் Asia Asset Finance PLC இல் இணைந்தார். தற்போது அவர் பொது முகாமையாளர் - செயல்பாடு அதிகாரியாக பணியாற்றுகிறார், ஆரம்பத்தில் அவர் AGM தரமாக உயர்த்தப்படுவதற்கு முன்னர் 3 வருடங்கள் மூத்த மேலாளர் கடன் வழங்குபவராக பணியாற்றினார் மற்றும் 2022 இல் DGM பதவிக்கு உயர்த்தப்பட்டார். . திரு. ஜயந்த வீரப்புலிகே கொழும்பு பல்கலைக்கழகத்தில் வணிக நிர்வாகத்தில் B. Com (சிறப்பு) பட்டம் மற்றும் MBA பட்டம் பெற்றவர். மார்கெட்டிங், கிரெடிட், ஆபரேஷன்ஸ், கணக்குகள் ஆகியவற்றில் 20 ஆண்டுகள் நிதித் துறையில் செலவழித்த 23 ஆண்டுகளுக்கும் மேலான பணி அனுபவத்தை அவர் கணக்கிடுகிறார், மேலும் 2003 முதல் பீப்பிள்ஸ் மெர்ச்சன்ட் வங்கியில் தனது முந்தைய வேலையில் வங்கித் துறையில் அனுபவம் பெற்றவர். 2008. ஆசியா அசெட் ஃபைனான்ஸ் பிஎல்சியின் உயர் நிர்வாகத்தில் 15 ஆண்டுகளுக்கும் மேலான அனுபவம் பெற்றவர். சந்தைப்படுத்தல், கடன், நிர்வாகம் மற்றும் மீட்டெடுப்புகளை உள்ளடக்கிய கிளைகளின் ஒட்டுமொத்த செயல்பாடுகள் மற்றும் ஒட்டுமொத்த கிளை நெட்வொர்க்கையும் கவனிப்பதற்கு அவர் பொறுப்பானவர். தயாரிப்பு மற்றும் வணிக மேம்பாடு, மூலோபாய திட்டமிடல் மற்றும் செயல்படுத்தல் ஆகியவற்றிற்கு அவர் மேலும் பொறுப்பானவர்.",

        ]
      },
      {
        id: "11",
        name: "சஜித் அதபத்து",
        src: mrSajith,
        designation: "பொது முகாமையாளர் - செயல்பாடு",
        description : ["திரு. சஜித் அதபத்து 2010 இல் Asia Asset Finance PLC இல் இணைந்தார் பொது முகாமையாளர் - செயல்பாடு பொது முகாமையாளர் பதவியை வகிக்கிறார். இந்த 14 வருட காலப்பகுதியில், திரு. அதபத்து பல்வேறு பாத்திரங்களை ஏற்று, கடன் மற்றும் மீட்பு முதல் செயல்பாடுகள், நிர்வாகம் மற்றும் இடர் வரை பல்வேறு பொறுப்புகளை ஏற்றார், அங்கு அவர் அமைப்பின் முக்கிய துறைகளில் அனுபவச் செல்வத்தை குவித்துள்ளார். பல்வேறு துறைகளுக்கிடையேயான தொடர்பு மற்றும் நிறுவன இலக்குகளை அடைவதற்கான அவர்களின் முயற்சிகளை சீரமைப்பதன் முக்கியத்துவம் பற்றிய விரிவான புரிதலை அவர் பெற்றுள்ளார். திரு. சஜித் அதபத்து தனது வாழ்க்கையை லண்டன் மியூச்சுவல் கிரெடிட் யூனியனில் (யுகே) தொடங்கினார், இது நிதி உள்ளடக்கத்தை ஊக்குவிப்பதற்காக அர்ப்பணிக்கப்பட்டுள்ளது LMCU இல் அவர் பணியாற்றிய காலத்தில், நிதித் துறையின் நுணுக்கங்களைப் பற்றிய மதிப்புமிக்க நுண்ணறிவுகளைப் பெற்றுள்ளார் மற்றும் அனைத்து தனிநபர்களுக்கும் அணுகக்கூடிய நிதிச் சேவைகளை வழங்குவதன் முக்கியத்துவத்தைப் பற்றிய ஆழமான புரிதலை உருவாக்கினார். இங்கிலாந்தின் கீலே பல்கலைக்கழகத்தில் இளங்கலைப் பட்டம் பெற்றவர்.",

        ]
      },
      {
        id: "12",
        name: "இந்தித ஜயதிலக",
        src: mrInditha,
        designation: "பொது முகாமையாளர்- தகவல் தொழில்நுட்பம்",
        description : ["திரு. இந்தித ஜயதிலக்க ஆசியா அசெட் ஃபைனான்ஸ் பிஎல்சியில் அனைத்து தகவல் தொழில்நுட்பம் தொடர்பான பணிகளுக்கும் தலைசிறந்த தீர்வு வழங்குநராக உள்ளார். வங்கி மற்றும் நிதி தீர்வு மேம்பாடு மற்றும் செயல்படுத்தலில் 12 ஆண்டுகளுக்கும் மேலான அனுபவம் கொண்டவர். டப்ளின் பல்கலைக்கழக கல்லூரியில் எம்ஐஎஸ்ஸில் பிஎஸ்சி பட்டம் பெற்றார். அவரது தொழில் வாழ்க்கையில், அவர் பல்வேறு துறைகளில் இருந்து அனுபவத்தைப் பெற்றார், இறுதியில் மிஷன்-கிரிட்டிகல் மென்பொருள் மற்றும் உள்கட்டமைப்பு தீர்வுகளை வழங்குவதன் மூலம் நிதித்துறையில் நிபுணத்துவம் பெற்றார். தற்போது, ​​தகவல் தொழில்நுட்பத் துறையை ஐடி தொடர்பான உள்கட்டமைப்பு, மென்பொருள் மற்றும் பாதுகாப்பு சேவைகளை வழங்குவதன் மூலம் அவர் மேற்பார்வையிடுகிறார்.",

        ]
      },
      {
        id: "13",
        name: "பிரவீன் பீரிஸ்",
        src: mrPraveen,
        designation: "பொது முகாமையாளர் - திறைசேரி",
        description : ["திரு. பிரவீன் பீரிஸ் 2014 இல் Asia Asset Finance PLC இல் இணைந்தார் மற்றும் 20 வருடங்களுக்கும் மேலாக நிதி மற்றும் திறைசேரி அனுபவத்தைக் கொண்டுள்ளார். அவர் 2004 இல் ஒரு குளோபல் ஆடிட் நிறுவனத்தில் தனது வாழ்க்கையைத் தொடங்கினார் மற்றும் 2008 இல் வங்கி அல்லாத நிதித் துறையில் சேர்ந்தார். Asia Asset Finance PLC இல் சேருவதற்கு முன்பு, அவர் பட்டியலிடப்பட்ட நிதி நிறுவனத்தில் திறைசேரி - மேலாளராக பணியாற்றினார். மூலோபாய இடர் மேலாண்மை, சொத்து - பொறுப்பு மேலாண்மை மற்றும் பண மேலாண்மை உள்ளிட்ட திறைசேரி மேலாண்மையில் நிபுணத்துவம் பெற்றவர். அவர் செயல்பாட்டு நிர்வாகத்தில் திறமையானவர் மற்றும் அதிக மதிப்புள்ள திட்டங்களுக்கு நிதியளிக்கும் திறனைக் கொண்டவர். திரு. பீரிஸ் U.K, வேல்ஸ் பல்கலைக்கழகத்தில் MBA பட்டம் பெற்றவர் மற்றும் U.K., பட்டய மேலாண்மைக் கணக்காளர் நிறுவனத்தில் இறுதிப் போட்டியாளராக உள்ளார்.",

        ]
      },
      {
        id: "14",
        name: "சமிரா வெவெல்தெனிய",
        src: mrSameera,
        designation: "துணை பொது முகாமையாளர் - நிலையான வைப்பு",
        description : ["திரு. சமிர வெவெல்தெனிய 2006 ஆம் ஆண்டு ஜூன் மாதம் நீர்கொழும்பு கிளை முகாமையாளராக AAF இல் இணைந்தார் மற்றும் 2009 இல் பிராந்திய முகாமையாளர் - நிலையான வைப்புத் துறைக்கு நியமிக்கப்பட்டார், அதைத் தொடர்ந்து 2011 இல் நிலையான வைப்புத் துறையின் மூத்த மேலாளராக நியமிக்கப்பட்டார். அவர் உதவிப் பொது முகாமையாளராக பதவி உயர்வு பெற்றார். - 2014 இல் சந்தைப்படுத்தல். அவருக்கு 22 ஆண்டுகளுக்கும் மேலான அனுபவம் உள்ளது நிதித் துறையில் டெபாசிட் மார்க்கெட்டிங் மற்றும் தற்போது DGM- நிலையான வைப்புத் திறனில் பணிபுரிகிறார் மற்றும் நிறுவனத்தின் நிதி திரட்டல் மற்றும் கிளை வளர்ச்சிக்கு பங்களிக்கிறார். AAF இல் இணைவதற்கு முன்னர், திரு. வெவெல்தெனிய செலிங்கோ டெவலப்மெண்ட் வங்கியில் பணியாற்றினார். திரு. வெவெல்தெனிய இங்கிலாந்தில் உள்ள பக்கிங்ஹாம்ஷயர் நியூ பல்கலைக்கழகத்தில் எம்பிஏ பட்டம் பெற்றவர் மற்றும் தி ஆசியா மார்க்கெட்டிங் ஃபெடரேஷன் (ஏஎம்எஃப்) மூலம் சான்றளிக்கப்பட்ட நிபுணத்துவ சந்தைப்படுத்துபவர்-ஆசியா (சிபிஎம் - ஆசியா) முதுகலை தொழில்முறை அந்தஸ்தைப் பெற்றார். அவர் ஆஸ்திரேலியாவின் (AMA-Australia) சான்றளிக்கப்பட்ட மேலாண்மை கணக்காளர்களின் இணை உறுப்பினராகவும் உள்ளார். தவிர, அவர் இலங்கை சந்தைப்படுத்தல் நிறுவனத்தின் (SLIM) சான்றளிக்கப்பட்ட உறுப்பினராகவும் உள்ளார்.",

        ]
      },
      {
        id: "15",
        name: "துஷார விஜேவர்தன",
        src: mrThushara,
        designation: "துணை பொது முகாமையாளர் - கடன்",
        description : ["துஷார விஜேவர்தன அவர்கள் 2025 அக்டோபர் மாதத்தில் Asia Asset Finance PLC நிறுவனத்தில் இணைந்தார். வங்கி மற்றும் நிதி துறையில் 33 ஆண்டுகளுக்கும் மேலான அனுபவம் கொண்ட ஒரு தொழில்முறை வங்கியாளராக அவர் திகழ்கிறார். அவரது அனுபவத்தில் பொது மேலாண்மை மற்றும் கடன் மேலாண்மை ஆகிய துறைகள் அடங்கும். இலங்கையின் முன்னணி நிதி நிறுவனங்களில் 15 ஆண்டுகளுக்கும் மேலாக கார்ப்பரேட் மேலாண்மை உறுப்பினராக பணியாற்றிய அவர், கடன் செயல்பாடுகள், கடன் நிர்வாகம் மற்றும் வசூல் நடவடிக்கைகளை தலைமை தாங்கி முன்னெடுத்துள்ளார். திரு. விஜேவர்தன அவர்கள் இலங்கை வங்கியாளர் நிறுவனம் (Institute of Bankers of Sri Lanka – IBSL) வழங்கும் Associate of Institute of Bankers (AIB) தகுதியை பெற்றவர். மேலும், கொழும்பு பல்கலைக்கழகத்தில் இருந்து Master of Business Studies பட்டத்தையும், இங்கிலாந்தின் Kingston University-யில் இருந்து Banking and Finance துறையில் Master of Business Administration (MBA) பட்டத்தையும் பெற்றுள்ளார். அவர் Credit Management Institute of Sri Lanka (SLICM) மற்றும் Institute of Bankers of Sri Lanka (IBSL) ஆகிய நிறுவனங்கள் நடத்தும் பயிற்சி நிகழ்ச்சிகளுக்காக AIA நிறுவனத்தில் பயிற்சியாளராகவும் விரிவுரையாளராகவும் செயல்பட்டு வருகிறார். கடந்த ஒரு தசாப்தமாக வங்கி மற்றும் நிதி துறையில் இளம் தொழில்முறையாளர்களுக்கு கடன் மேலாண்மை தொடர்பான பயிற்சிகளை வழங்கி, துறையின் வளர்ச்சிக்கு முக்கிய பங்காற்றி வருகிறார்.",

        ]
      },
      {
        id: "16",
        name: "துஷார விஜேவர்தன",
        src: msWaruni,
        designation: "துணை பொது முகாமையாளர் - அபாய மேலாண்மை",
        description : [
          "திருமதி வருணி பெரேரா அவர்கள் 2026 ஆம் ஆண்டில் Asia Asset Finance PLC நிறுவனத்தில் துணை பொது மேலாளர் – அபாய மேலாண்மை பதவிக்கு நியமிக்கப்பட்டார். இலங்கையின் உரிமம் பெற்ற நிதி நிறுவனத் துறையில் (Licensed Finance Company sector) 14 ஆண்டுகளுக்கும் மேலான விரிவான அனுபவத்தை அவர் கொண்டுள்ளார். முன்னணி நிதி நிறுவனமொன்றில் அபாய மேலாண்மை செயல்பாட்டை தலைமையிலே வழிநடத்தியதுடன், அதன் பின்னர் ஒரு உலகளாவிய கடன் மதிப்பீட்டு நிறுவனத்தில் பணியாற்றி, அங்கு வங்கி அல்லாத நிதி நிறுவனங்கள் (Non-Bank Financial Institutions – NBFIs) தொடர்பான கடன் மதிப்பீடுகளில் சிறப்பு பெற்றார்.",
          "அவர் ஐக்கிய இராச்சியத்தின் Chartered Institute of Management Accountants (CIMA) நிறுவனத்தின் Associate உறுப்பினராக (ACMA) உள்ளார். மேலும், கொழும்பு பல்கலைக்கழகத்தில் இருந்து நிதி பொருளாதாரத்தில் (Financial Economics) முதுநிலைப் பட்டமும், ஸ்ரீ ஜெயவர்த்தனபுர பல்கலைக்கழகத்தில் இருந்து கணக்கியல் துறையில் விஞ்ஞானப் பட்டமும் (BSc in Accounting) பெற்றுள்ளார்."
        ]
      },
    ],

      //News & Events Page Components
      newsAndEvents: {
        pageTitle: "செய்தி மற்றும் நிகழ்வுகள்",
        articlesTitle: "நவீன செய்தி",
        eventsTitle: "நிகழ்வுகள்",
        heroDescription: "எங்கள் சமீபத்திய செய்திகள், சாதனைகள் மற்றும் நினைவுகூரத்தக்க நிகழ்வுகளுடன் புதுப்பித்த நிலையில் இருங்கள்",
        articlesDescription: "ஆசியா அசெட் ஃபைனான்ஸிலிருந்து சமீபத்திய புதுப்பிப்புகள் மற்றும் அறிவிப்புகள்",
        noNewsTitle: "செய்தி புதுப்பிப்புகள் எதுவும் கிடைக்கவில்லை",
        noNewsMessage: "சமீபத்திய புதுப்பிப்புகளுக்கு பின்னர் மீண்டும் சரிபார்க்கவும்",
        events: [
          // {
          //   title: "2025 வருடாந்திர பொதுக் கூட்டம்",
          //   date: "2025-09-10",
          //   description: "பிரதான அரங்கில் எங்கள் வருடாந்திர பொதுக் கூட்டத்தில் எங்களுடன் சேரவும். அனைத்து பங்குதாரர்களும் கலந்துகொள்ள வரவேற்கப்படுகிறார்கள்.",
          //   images: ["/media/events/agm1.jpg", "/media/events/agm2.jpg", "/media/events/agm3.jpg"],
          //   location: "தலைமை அலுவலக அரங்கம்",
          //   time: "காலை 10:00"
          // },
        ]
      },

    },
  },
  // Additional language data omitted for brevity
};

export default resources;
