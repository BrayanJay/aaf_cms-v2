# Bugs, Pain Points, SEO Issues & Performance Audit

> Last audited: 2026-03-24 | Branch: `dev`

---

## Table of Contents

1. [Bugs & Glitches](#1-bugs--glitches)
2. [Pain Points & UX Issues](#2-pain-points--ux-issues)
3. [SEO Issues](#3-seo-issues)
4. [Performance Issues](#4-performance-issues)
5. [Code Quality](#5-code-quality)
6. [Priority Fix List](#priority-fix-list)

---

## 1. Bugs & Glitches

---

### BUG-01 — Duplicate `useEffect` for Modal · `src/App.jsx` lines 70–88

**Problem:** Two back-to-back `useEffect` blocks contain identical logic. Both read `hasModalBeenShown` from localStorage and call `setIsModalOpen(true)`. On first visit the modal fires twice and sets the localStorage key twice.

**Current code:**
```jsx
useEffect(() => {
  const hasModalBeenShown = localStorage.getItem("hasModalBeenShown");
  if (!hasModalBeenShown) {
    setIsModalOpen(true);
    localStorage.setItem("hasModalBeenShown", "true");
  }
}, []);

useEffect(() => {
  // Check if the modal has been shown before using localStorage
  const hasModalBeenShown = localStorage.getItem("hasModalBeenShown");
  if (!hasModalBeenShown) {
    setIsModalOpen(true);
    localStorage.setItem("hasModalBeenShown", "true"); // Store in localStorage
  }
}, []);
```

**Recommended fix:** Delete the second block entirely — keep only one.
```jsx
useEffect(() => {
  const hasModalBeenShown = localStorage.getItem("hasModalBeenShown");
  if (!hasModalBeenShown) {
    setIsModalOpen(true);
    localStorage.setItem("hasModalBeenShown", "true");
  }
}, []);
```

---

### BUG-02 — Assignment Operator Instead of Value · `src/components/BOD.jsx` lines 54, 84

**Problem:** Template literals use `profileDetails.id=1` and `profileDetails.id=7` — this is a **JavaScript assignment**, not a comparison. It permanently overwrites `profileDetails.id` on every render, corrupting the object for any subsequent code.

**Current code:**
```jsx
// Line 54
<Link to={`/profile/${profileDetails.id=1}`} onClick={scrolltoTop}>

// Line 84
<Link to={`/profile/${profileDetails.id=7}`} onClick={scrolltoTop}>
```

**Recommended fix:** Hardcode the profile IDs as plain literals (they are fixed values, not dynamic):
```jsx
// Line 54
<Link to={`/profile/1`} onClick={scrolltoTop}>

// Line 84
<Link to={`/profile/7`} onClick={scrolltoTop}>
```

---

### BUG-03 — Wrong Error Field Under City Dropdown · `src/components/InquiriesForm.jsx` line 248

**Problem:** The city `<CityDropdown>` section renders `formErrors.product` beneath it. If the user misses the city field, no error shows; if they miss the product field, the error appears in the wrong place.

**Current code:**
```jsx
<CityDropdown value={formData.city} onChange={handleChange} token={token}/>
{formErrors.product && <p className="text-red text-sm">{formErrors.product}</p>}
```

**Recommended fix:**
```jsx
<CityDropdown value={formData.city} onChange={handleChange} token={token}/>
{formErrors.city && <p className="text-red text-sm">{formErrors.city}</p>}
```

---

### BUG-04 — Hardcoded String `"Null"` Sent to API · `src/components/InquiriesForm.jsx` line 109

**Problem:** `nic: "Null"` sends the literal string `"Null"` to the API. Most APIs treat this as a valid non-null value, which can cause unexpected server-side behaviour or database entries.

**Current code:**
```js
const updatedFormData = {
  ...formData,
  nic: "Null",
  ...
};
```

**Recommended fix:**
```js
const updatedFormData = {
  ...formData,
  nic: null,
  ...
};
```

---

### BUG-05 — `response.ok` Checked After `.json()` Parse · `src/components/InquiriesForm.jsx` lines 132–137

**Problem:** `response.json()` is called before `response.ok` is checked. If the API returns a 4xx/5xx with an HTML error body, the JSON parse will throw an unhandled exception before the error is caught gracefully.

**Current code:**
```js
const result = await response.json();
console.log("✅ API Response:", result);

if (!response.ok) {
  throw new Error(result.message || "Something went wrong");
}
```

**Recommended fix:** Check `response.ok` first, then parse:
```js
if (!response.ok) {
  throw new Error(`Server error: ${response.status} ${response.statusText}`);
}
const result = await response.json();
```

---

### BUG-06 — Missing `response.ok` Check in All Three Dropdown Fetches · `src/components/ComplaintForm.jsx` lines 82–138

**Problem:** All three `fetch` calls (cities, branches, departments) parse `.json()` without checking `response.ok`. A server error returns silently with empty dropdowns and no user feedback.

**Current code (same pattern in all three):**
```js
const response = await fetch("https://asiaassetfinance.net/.../getcities", { ... });
const data = await response.json();
setCities(data);
```

**Recommended fix (apply to all three):**
```js
const response = await fetch("https://asiaassetfinance.net/.../getcities", { ... });
if (!response.ok) throw new Error(`Failed to load cities: ${response.status}`);
const data = await response.json();
setCities(data);
```

Also add user-facing error state per dropdown:
```js
const [cityError, setCityError] = useState(null);
// ...
} catch (error) {
  console.error("Error fetching cities:", error);
  setCityError("Could not load cities. Please refresh and try again.");
}
// In JSX:
{cityError && <p className="text-red-500 text-sm">{cityError}</p>}
```

---

### BUG-07 — Missing `[token]` Dependency in `useEffect` · `src/components/CityDropdown.jsx` line 29

**Problem:** `fetchCities()` uses the `token` prop in its Authorization header, but the `useEffect` dependency array is `[]`. If the parent re-renders and passes a new token, the city list will never re-fetch.

**Current code:**
```js
fetchCities();
}, []);
```

**Recommended fix:**
```js
fetchCities();
}, [token]);
```

---

### BUG-08 — Null Reference Risk in Modal Click-Outside Handler · `src/components/Modal.jsx` line 53

**Problem:** `checkOutsideAndCloseModal` accesses `mouseDownEv.screenX` and `mouseDownEv.screenY`. If a `mouseup` fires before any `mousedown` has set the state (e.g. programmatic trigger), `mouseDownEv` is still `null` and this throws a TypeError.

**Current code:**
```js
const checkOutsideAndCloseModal = e => {
  if (!isDismissible) return;
  if (
    modalRef.current.contains(e.target) ||
    Math.abs(mouseDownEv.screenX - e.screenX) > 15 ||
    Math.abs(mouseDownEv.screenY - e.screenY) > 15
  )
    return;
  ...
};
```

**Recommended fix:**
```js
const checkOutsideAndCloseModal = e => {
  if (!isDismissible) return;
  if (!mouseDownEv) return; // guard against null
  if (
    modalRef.current.contains(e.target) ||
    Math.abs(mouseDownEv.screenX - e.screenX) > 15 ||
    Math.abs(mouseDownEv.screenY - e.screenY) > 15
  )
    return;
  ...
};
```

---

### BUG-09 — Invalid Tailwind Class `opacity-1` · `src/components/Modal.jsx` line 84

**Problem:** `opacity-1` is not a valid Tailwind utility. The valid class is `opacity-100`. The modal overlay is invisible when open because the class has no effect.

**Current code:**
```jsx
className={`... ${isOpen ? "opacity-1 z-[1000] transition-opacity" : "-z-50 opacity-0 transition-all"}`}
```

**Recommended fix:**
```jsx
className={`... ${isOpen ? "opacity-100 z-[1000] transition-opacity" : "-z-50 opacity-0 transition-all"}`}
```

---

### BUG-10 — `titleIndex` Returns `-1` for Unmatched Title · `src/components/ComplaintForm.jsx` line 189–190

**Problem:** If `formData.title` is not found in `titleOptions`, `indexOf` returns `-1`. The current code converts `-1` to titleId `0` (`-1 + 1 = 0`), which may be interpreted by the API as a valid "unknown" title rather than an error.

**Current code:**
```js
const titleIndex = inquiryForm.titleOptions.indexOf(formData.title);
const titleId = titleIndex !== -1 ? titleIndex + 1 : 0;
```

**Recommended fix:** Treat `-1` as a validation failure and block submission:
```js
const titleIndex = inquiryForm.titleOptions.indexOf(formData.title);
if (titleIndex === -1) {
  setFormErrors(prev => ({ ...prev, title: "Please select a valid title." }));
  setIsLoading(false);
  return;
}
const titleId = titleIndex + 1;
```

---

### BUG-11 — Stale Comment in `HeroBanner.jsx` · `src/components/HeroBanner.jsx` line 15

**Problem:** The comment says _"Auto-slide every 5 seconds"_ but the interval is `3500`ms (3.5 seconds). Minor but misleading during maintenance.

**Current code:**
```js
// Auto-slide every 5 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  }, 3500);
```

**Recommended fix:**
```js
// Auto-slide every 3.5 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  }, 3500);
```

---

## 2. Pain Points & UX Issues

---

### UX-01 — No Per-Dropdown Loading States · `src/components/ComplaintForm.jsx`

**Problem:** City, Branch, and Department data all fetch simultaneously on mount. All three dropdowns appear empty with no feedback while data loads.

**Recommended fix:** Add individual loading flags:
```js
const [isCityLoading, setIsCityLoading] = useState(true);
const [isBranchLoading, setIsBranchLoading] = useState(true);
const [isDeptLoading, setIsDeptLoading] = useState(true);

// In fetchCities:
setIsCityLoading(true);
const data = await response.json();
setCities(data);
setIsCityLoading(false);

// In JSX:
<select disabled={isCityLoading}>
  <option value="">{isCityLoading ? "Loading cities…" : "Select a city"}</option>
  {cities.map(...)}
</select>
```

---

### UX-02 — No Loading State in `CityDropdown` · `src/components/CityDropdown.jsx`

**Problem:** The dropdown renders empty immediately with no indication data is loading.

**Current code:**
```jsx
<select ... value={value} onChange={onChange}>
  <option value="">{inquiryForm.field9}</option>
  {cities.map((city) => (
    <option key={city.CityId} value={city.CityId}>...</option>
  ))}
</select>
```

**Recommended fix:**
```jsx
const [isLoading, setIsLoading] = useState(true);

// In fetchCities: setIsLoading(false) after setCities(data)

<select ... value={value} onChange={onChange} disabled={isLoading}>
  <option value="">{isLoading ? "Loading cities…" : inquiryForm.field9}</option>
  {cities.map((city) => (
    <option key={city.CityId} value={city.CityId}>...</option>
  ))}
</select>
```

---

### UX-03 — Modal Overlay Causes Body Layout Shift · `src/components/Modal.jsx` line 37

**Problem:** `document.body.style.overflow = "hidden"` removes the scrollbar, causing the page content to jump right when the modal opens.

**Current code:**
```js
document.body.style.overflow = "hidden";
// cleanup:
document.body.style.overflow = "auto";
```

**Recommended fix:** Compensate for scrollbar width to prevent the jump:
```js
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
document.body.style.overflow = "hidden";
document.body.style.paddingRight = `${scrollbarWidth}px`;
// cleanup:
document.body.style.overflow = "";
document.body.style.paddingRight = "";
```

---

### UX-04 — Hardcoded `leadSource` Magic Number · `src/components/InquiriesForm.jsx` line 115

**Problem:** `leadSource: 23` is an unexplained magic number. Future developers have no idea what `23` represents.

**Recommended fix:** Define it as a named constant at the top of the file:
```js
// src/constants/leadSources.js
export const LEAD_SOURCE_WEBSITE_INQUIRY = 23;

// In InquiriesForm.jsx
import { LEAD_SOURCE_WEBSITE_INQUIRY } from '../constants/leadSources';
// ...
leadSource: LEAD_SOURCE_WEBSITE_INQUIRY,
```

---

### UX-05 — No `.env` Token Validation · `src/components/InquiriesForm.jsx` line 90

**Problem:** If `VITE_AUTH_TOKEN_LIVE` is missing from `.env`, all API calls will silently fail with 401 errors.

**Current code:**
```js
const token = import.meta.env.VITE_AUTH_TOKEN_LIVE;
```

**Recommended fix:** Validate at the module level and fail loudly in dev:
```js
const token = import.meta.env.VITE_AUTH_TOKEN_LIVE;
if (!token && import.meta.env.DEV) {
  console.error("VITE_AUTH_TOKEN_LIVE is not set. API calls will fail.");
}
```

---

### UX-06 — Duplicated `scrollToTop` Function · `Footer.jsx`, `Header.jsx`, `Navbar.jsx`

**Problem:** All three components define an identical `scrollToTop` function independently.

**Recommended fix:** Create a shared hook:
```js
// src/hooks/useScrollToTop.js
export const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
```
Then import it in all three files:
```js
import { scrollToTop } from '../hooks/useScrollToTop';
```

---

### UX-07 — Aria-Label Typo on Carousel · `src/components/HeroBanner.jsx` line 83

**Problem:** `aria-label="Pevious Button"` — "Pevious" is misspelled.

**Current code:**
```jsx
aria-label="Pevious Button"
```

**Recommended fix:**
```jsx
aria-label="Previous Button"
```

---

### UX-08 — `<label>` Not Linked to `<input>` in Loan Calculator · `src/components/LoanCalculator.jsx`

**Problem:** Labels exist visually but lack `htmlFor` attributes, so screen readers cannot associate them with their inputs.

**Recommended fix:** Add matching `htmlFor` / `id` pairs:
```jsx
// Before
<label>Loan Amount</label>
<input type="number" ... />

// After
<label htmlFor="loanAmount">Loan Amount</label>
<input id="loanAmount" type="number" ... />
```

---

### UX-09 — Clickable `<div>` Not Keyboard Accessible · `src/components/BranchNetwork.jsx`

**Problem:** `onClick` handlers on `<div>` elements are unreachable by keyboard users.

**Recommended fix:** Either switch to `<button>` or add accessibility attributes:
```jsx
// Before
<div onClick={handleBranchClick}>...</div>

// After — Option A (preferred)
<button onClick={handleBranchClick} className="...existing classes...">...</button>

// After — Option B
<div
  onClick={handleBranchClick}
  role="button"
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleBranchClick()}
>...</div>
```

---

## 3. SEO Issues

---

### SEO-01 — OG & Twitter Images Use Relative Path · `src/pages/LandingPage.jsx` lines 21, 29

**Problem:** Social media crawlers (Facebook, Twitter/X, LinkedIn) require absolute URLs for `og:image` and `twitter:image`. Relative paths are resolved against the crawler's own domain and return a 404.

**Current code:**
```jsx
<meta property="og:image" content="/media/logo.webp" />
<meta name="twitter:image" content="/media/logo.webp"/>
```

**Recommended fix:**
```jsx
<meta property="og:image" content="https://www.asiaassetfinance.com/media/logo.webp" />
<meta name="twitter:image" content="https://www.asiaassetfinance.com/media/logo.webp"/>
```

---

### SEO-02 — No Meta Tags on 404 Page · `src/pages/NotFound.jsx`

**Problem:** The 404 page has no `<Helmet>` block. Search engines may index it as a valid page.

**Current code:**
```jsx
const NotFound = () => {
  return (
    <div className="min-h-screen ...">
```

**Recommended fix:** Add a `<Helmet>` block:
```jsx
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Asia Asset Finance</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen ...">
```

---

### SEO-03 — Missing Canonical URLs on Dynamic Pages

**Problem:** `ArticleDetails.jsx` and `PersonalProfile.jsx` have no `<link rel="canonical" />`. Multiple URLs pointing to the same content will split link equity.

**Recommended fix (apply to both files):**
```jsx
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ArticleDetails = () => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://www.asiaassetfinance.com${pathname}`;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>{article.title} | Asia Asset Finance</title>
      </Helmet>
      ...
    </>
  );
};
```

---

### SEO-04 — Profile Pages Share a Static `<title>` · `src/pages/PersonalProfile.jsx`

**Problem:** All person profiles use the same generic page title, making them indistinguishable in search results and browser tabs.

**Recommended fix:**
```jsx
<Helmet>
  <title>{person.name} – {person.position} | Asia Asset Finance</title>
  <meta name="description" content={`Learn about ${person.name}, ${person.position} at Asia Asset Finance PLC.`} />
  <link rel="canonical" href={`https://www.asiaassetfinance.com/profile/${person.id}`} />
</Helmet>
```

---

### SEO-05 — Twitter Card Tags Missing on All Pages Except Landing

**Problem:** Only `LandingPage.jsx` has Twitter Card meta tags.

**Recommended fix:** Add to every primary page's `<Helmet>`:
```jsx
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@AsiaAssetFinance" />
<meta name="twitter:title" content="Page Title Here" />
<meta name="twitter:description" content="Page description here." />
<meta name="twitter:image" content="https://www.asiaassetfinance.com/media/logo.webp" />
```

---

### SEO-06 — Missing Alt Text on Images · `BOD.jsx`, `SubTitle.jsx`, `ProductLuckewallet.jsx`

**Problem:** Decorative or functional images lack descriptive `alt` text, failing WCAG and losing image-search indexing.

**Current code:**
```jsx
// BOD.jsx lines 32, 97
<img src={gold_ellipse} className="h-72 md:h-96" />
<img src={blue_ellipse} className="h-72 md:h-96" />

// SubTitle.jsx
<img className="lg:w-16 w-8" src={certification1} alt="" />

// ProductLuckewallet.jsx line 60
alt='Click here to Download'
```

**Recommended fix:**
```jsx
// BOD.jsx — decorative, use empty alt so screen readers skip them
<img src={gold_ellipse} className="h-72 md:h-96" alt="" role="presentation" />
<img src={blue_ellipse} className="h-72 md:h-96" alt="" role="presentation" />

// SubTitle.jsx — describe the certification
<img className="lg:w-16 w-8" src={certification1} alt="ISO 9001:2015 Certification" />

// ProductLuckewallet.jsx — describe the image, not the action
alt="Download Luckewallet on the Apple App Store"
```

---

### SEO-07 — No `robots.txt` in `/public`

**Problem:** Without a `robots.txt`, crawlers have no guidance and may index unwanted paths.

**Recommended fix:** Create `/public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://www.asiaassetfinance.com/sitemap.xml
```

---

### SEO-08 — No Sitemap Reference in `index.html`

**Problem:** The `<head>` has no link to `sitemap.xml`, so crawlers must discover it independently.

**Current code (`index.html`):**
```html
<title>Asia Asset Finance PLC | Most Trusted Finance Company in Sri Lanka</title>
```

**Recommended fix:** Add before `</head>`:
```html
<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
```

---

### SEO-09 — Missing `<meta name="description">` in `index.html`

**Problem:** There is no fallback `description` meta tag in the base HTML. Pages that fail to load their `<Helmet>` block will have no description for search engines.

**Recommended fix:** Add to `index.html` `<head>`:
```html
<meta name="description" content="Asia Asset Finance PLC – Sri Lanka's trusted finance company offering gold loans, fixed deposits, leasing, mortgage, and foreign exchange services." />
```

---

### SEO-10 — Missing `LocalBusiness` Structured Data · `src/pages/Contacts.jsx`

**Problem:** The contacts page has address and phone number information but no JSON-LD schema, so Google cannot show rich results for business details.

**Recommended fix:** Add inside `<Helmet>`:
```jsx
<script type="application/ld+json">{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Asia Asset Finance PLC",
  "url": "https://www.asiaassetfinance.com",
  "logo": "https://www.asiaassetfinance.com/media/logo.webp",
  "telephone": "+94-XX-XXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "YOUR ADDRESS",
    "addressLocality": "Colombo",
    "addressCountry": "LK"
  },
  "sameAs": [
    "https://www.facebook.com/AsiaAssetFinancePLC/"
  ]
})}</script>
```

---

### SEO-11 — Missing `WebSite` Search Action Schema · `src/pages/LandingPage.jsx`

**Problem:** Google can display a sitelinks search box if a `WebSite` schema with `SearchAction` is present.

**Recommended fix:** Add to `LandingPage.jsx` Helmet:
```jsx
<script type="application/ld+json">{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.asiaassetfinance.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.asiaassetfinance.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
})}</script>
```

---

## 4. Performance Issues

---

### PERF-01 — No Code Splitting on Routes · `src/App.jsx` lines 19–53

**Problem:** All 15+ page components are statically imported and bundled together. Every user downloads the entire app on first load regardless of which page they visit.

**Current code:**
```js
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import InvesterRelationsPage from './pages/InvesterRelationsPage';
// ... 12 more
```

**Recommended fix:**
```jsx
// src/App.jsx
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';

const LandingPage          = lazy(() => import('./pages/LandingPage'));
const AboutPage            = lazy(() => import('./pages/AboutPage'));
const InvesterRelationsPage = lazy(() => import('./pages/InvesterRelationsPage'));
const CareerPortal         = lazy(() => import('./pages/subpages/careers/CareerPortal'));
const Downloads            = lazy(() => import('./pages/Downloads'));
const NotFound             = lazy(() => import('./pages/NotFound'));
const NewsAndEvents        = lazy(() => import('./pages/NewsAndEvents'));
const ArticleDetails       = lazy(() => import('./pages/ArticleDetails'));
const Contacts             = lazy(() => import('./pages/Contacts'));
const PersonalProfile      = lazy(() => import('./pages/PersonalProfile'));
const GoldLoanPage         = lazy(() => import('./pages/subpages/products/GoldLoanPage'));
const FixedDepositPage     = lazy(() => import('./pages/subpages/products/FixedDepositPage'));
const LeasingPage          = lazy(() => import('./pages/subpages/products/LeasingPage'));
const MortgagePage         = lazy(() => import('./pages/subpages/products/Mortgage'));
const ForeignExchangePage  = lazy(() => import('./pages/subpages/products/ForeignExchange'));
const LuckewalletPage      = lazy(() => import('./pages/subpages/products/LuckewalletPage'));
const Promotions           = lazy(() => import('./pages/Promotions'));

// Wrap your <Routes> block:
<Suspense fallback={<Loader duration={3000} />}>
  <Routes>
    ...
  </Routes>
</Suspense>
```

---

### PERF-02 — Entire FontAwesome Icon Library Loaded · `src/App.jsx` + multiple components

**Problem:** `library.add(fas, fab)` registers every icon in the solid and brands packs — 1000+ SVGs — even though only ~10 are used. This also runs redundantly in `Header.jsx`, `HeroBanner.jsx`, and others.

**Current code (repeated in multiple files):**
```js
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);
```

**Recommended fix:** Register only the specific icons used, once, in `src/main.jsx`:
```js
// src/main.jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faSearch, faHome, faChevronUp, faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faInstagram, faYoutube, faLinkedin, faPhone, faEnvelope, faSearch, faHome, faChevronUp, faChevronDown, faArrowRight);
```
Then remove all `library.add()` calls from every other component.

---

### PERF-03 — Missing `loading="lazy"` on Images

**Problem:** Images across the codebase load eagerly. The `ProductLuckewallet.jsx` image is `100vh` tall and loads immediately even when off-screen.

**Recommended fix:** Add `loading="lazy"` to all below-the-fold images:
```jsx
// Before
<img src={MobilePic} className='lg:h-[100vh]' alt="Luckewallet mobile app" />

// After
<img src={MobilePic} className='lg:h-[100vh]' alt="Luckewallet mobile app" loading="lazy" />
```
Apply this to all `<img>` tags that are not in the initial viewport (hero images should remain `loading="eager"`).

---

### PERF-04 — AOS Animation Library · `src/App.jsx` line 6

**Problem:** The full AOS library is imported for basic scroll-triggered fade animations. This adds unnecessary JS payload.

**Current code:**
```js
import AOS from 'aos';
import 'aos/dist/aos.css';
// ...
AOS.init({ duration: 1000, easing: 'ease-in-out' });
```

**Recommended fix:** Replace with a lightweight custom hook using `IntersectionObserver`:
```js
// src/hooks/useFadeIn.js
import { useEffect, useRef } from 'react';

export const useFadeIn = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('fade-in-visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
};

// In global CSS:
// .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.8s ease, transform 0.8s ease; }
// .fade-in-visible { opacity: 1; transform: translateY(0); }
```

---

### PERF-05 — Auto-Slide Interval Unnecessary Re-creation · `src/components/HeroBanner.jsx`

**Problem:** While the interval is properly cleaned up, it is re-created every time `carouselData.length` changes (which happens on language change). The dependency is correct but the implementation could be tightened.

**Current code:**
```js
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  }, 3500);
  return () => clearInterval(interval);
}, [carouselData.length]);
```

**Recommended fix:** Use a ref to avoid stale closure dependency:
```js
const carouselLengthRef = useRef(carouselData.length);
useEffect(() => { carouselLengthRef.current = carouselData.length; }, [carouselData.length]);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselLengthRef.current);
  }, 3500);
  return () => clearInterval(interval);
}, []); // runs once only
```

---

## 5. Code Quality

---

### CQ-01 — Large Blocks of Commented-Out Code

**Files:** `src/App.jsx` (lines 51–52, 57, 61, 90–92), `src/Footer.jsx` (lines 27–36, 68–99)

**Recommended fix:** If code is no longer needed, delete it — git history preserves it. If it is intentionally disabled, replace with a descriptive comment:
```js
// Forex modal temporarily disabled pending content approval (March 2026)
```

---

### CQ-02 — `TestComponent.jsx` in Production Source

**Problem:** A component with a hardcoded `product_name = "gold_loan"` appears to be a developer test artifact that should not be in the production build.

**Recommended fix:** Either delete the file or gate it behind an env check:
```js
// Only render in development
if (import.meta.env.PROD) return null;
```

---

### CQ-03 — API Base URLs Scattered Across Components

**Problem:** `https://asiaassetfinance.net/imasapi/v2/...` and `https://asiaassetfinance.net/aafleadwave/...` are hardcoded in multiple components.

**Recommended fix:** Centralise in a config file:
```js
// src/config/api.js
export const API_BASE_IMAS    = import.meta.env.VITE_API_BASE_IMAS    || 'https://asiaassetfinance.net/imasapi/v2/application/api.php';
export const API_BASE_LEADWAVE = import.meta.env.VITE_API_BASE_LEADWAVE || 'https://asiaassetfinance.net/aafleadwave/api/v1/application/api.php';

// Usage:
import { API_BASE_IMAS } from '../config/api';
fetch(`${API_BASE_IMAS}/getBranch`, { ... });
```

---

## Priority Fix List

| Priority | ID | File | Issue |
|----------|----|------|-------|
| 🔴 P1 | BUG-02 | `BOD.jsx` lines 54, 84 | Assignment `=` mutating `profileDetails` — broken profile links |
| 🔴 P1 | BUG-03 | `InquiriesForm.jsx` line 248 | City field shows product error message |
| 🔴 P1 | BUG-01 | `App.jsx` lines 70–88 | Duplicate `useEffect` — modal logic runs twice |
| 🔴 P1 | BUG-09 | `Modal.jsx` line 84 | `opacity-1` invalid Tailwind — modal overlay invisible |
| 🟠 P2 | BUG-05 | `InquiriesForm.jsx` lines 132–137 | `response.ok` checked after `.json()` parse |
| 🟠 P2 | BUG-06 | `ComplaintForm.jsx` lines 82–138 | Silent API failures with no user feedback |
| 🟠 P2 | BUG-07 | `CityDropdown.jsx` line 29 | Missing `[token]` dependency in `useEffect` |
| 🟠 P2 | SEO-01 | `LandingPage.jsx` lines 21, 29 | OG/Twitter image paths are relative — broken social previews |
| 🟠 P2 | SEO-06 | `BOD.jsx`, `SubTitle.jsx`, `ProductLuckewallet.jsx` | Missing or incorrect `alt` text |
| 🟠 P2 | SEO-02 | `NotFound.jsx` | No meta tags — 404 may be indexed by search engines |
| 🟡 P3 | PERF-01 | `App.jsx` lines 19–53 | No `React.lazy()` — entire app bundles into one chunk |
| 🟡 P3 | PERF-02 | `App.jsx` + components | Full FontAwesome packs loaded — should tree-shake to used icons only |
| 🟡 P3 | PERF-03 | Multiple image components | Missing `loading="lazy"` on below-fold images |
| 🟡 P3 | UX-06 | `Footer.jsx`, `Header.jsx`, `Navbar.jsx` | Duplicate `scrollToTop` — extract to shared utility |
| 🟡 P3 | UX-03 | `Modal.jsx` line 37 | Body overflow removal causes layout shift |
| 🟢 P4 | SEO-03 | `ArticleDetails.jsx`, `PersonalProfile.jsx` | No canonical URL tags on dynamic pages |
| 🟢 P4 | SEO-04 | `PersonalProfile.jsx` | Static title tag on all profile pages |
| 🟢 P4 | SEO-05 | All pages | Twitter Card tags only on Landing Page |
| 🟢 P4 | SEO-07 | `/public/` | No `robots.txt` file |
| 🟢 P4 | SEO-08 | `index.html` | No sitemap `<link>` in `<head>` |
| 🟢 P4 | SEO-09 | `index.html` | No fallback `<meta name="description">` |
| 🟢 P4 | SEO-10 | `Contacts.jsx` | No `LocalBusiness` JSON-LD schema |
| 🟢 P4 | CQ-03 | Multiple files | API base URLs hardcoded — centralise in `src/config/api.js` |
| 🟢 P4 | UX-07 | `HeroBanner.jsx` line 83 | Aria-label typo "Pevious" → "Previous" |
| 🟢 P4 | UX-08 | `LoanCalculator.jsx` | `<label>` missing `htmlFor` — not linked to inputs |
| 🟢 P4 | PERF-04 | `App.jsx` line 6 | Full AOS library — replace with `IntersectionObserver` |
