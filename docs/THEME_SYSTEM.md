# AAF CMS Theme System Documentation

## Overview
The AAF CMS now supports both light and dark themes with automatic system preference detection and persistent user preference storage.

## Features
- ✅ Light and Dark theme support
- ✅ System preference detection
- ✅ Persistent theme storage in localStorage
- ✅ Smooth theme transitions with 300ms duration
- ✅ Theme-aware component styling
- ✅ Accessibility-compliant focus rings and contrast
- ✅ Custom scrollbars for both themes

## Implementation

### Theme Context
The `ThemeContext` provides theme state management:
```jsx
import { useTheme } from './contexts/ThemeContext'

const { theme, isDark, isLight, toggleTheme, setLightTheme, setDarkTheme, isLoading } = useTheme()
```

### Theme Hook
Use `useThemeMode` for advanced theme utilities:
```jsx
import { useThemeMode } from './hooks/useThemeMode'

const { getBgClasses, getTextClasses, getButtonClasses } = useThemeMode()
```

### Theme Toggle Component
```jsx
import ThemeToggle from './components/ThemeToggle'

<ThemeToggle className="your-classes" />
```

## Usage Examples

### Basic Theme Classes
```jsx
// Background classes
<div className="bg-white dark:bg-gray-800 transition-colors duration-300">

// Text classes  
<h1 className="text-gray-900 dark:text-white transition-colors duration-300">

// Border classes
<div className="border border-gray-200 dark:border-gray-700 transition-colors duration-300">
```

### Using Theme Hook Utilities
```jsx
const { getBgClasses, getTextClasses, getButtonClasses } = useThemeMode()

<div className={getBgClasses('card')}>
  <h2 className={getTextClasses('heading')}>Title</h2>
  <button className={getButtonClasses('primary')}>Action</button>
</div>
```

## Theme Configuration

### Tailwind Config
Dark mode is configured as class-based in `tailwind.config.js`:
```javascript
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'aaf': {
          'primary': '#1e40af',
          'primary-dark': '#3b82f6',
          // ... more colors
        }
      }
    }
  }
}
```

### Custom CSS Variables
Theme-aware CSS variables are defined in `styles/theme.css`:
```css
:root {
  --scrollbar-track: #f1f5f9;
  --scrollbar-thumb: #cbd5e1;
}

.dark {
  --scrollbar-track: #1e293b;
  --scrollbar-thumb: #475569;
}
```

## Color Palette

### Light Theme
- **Background**: White (#ffffff), Light Gray (#f8fafc)
- **Text**: Dark Gray (#1f2937), Medium Gray (#6b7280)
- **Primary**: Blue (#1e40af)
- **Success**: Green (#059669)
- **Danger**: Red (#dc2626)

### Dark Theme
- **Background**: Slate 900 (#0f172a), Slate 800 (#1e293b)
- **Text**: Slate 100 (#f1f5f9), Slate 300 (#cbd5e1)
- **Primary**: Blue 500 (#3b82f6)
- **Success**: Emerald 500 (#10b981)
- **Danger**: Red 500 (#ef4444)

## Components Updated

### ✅ Core Components
- [x] App.jsx - Theme provider integration
- [x] Header.jsx - Dark mode styling + theme toggle
- [x] Footer.jsx - Dark mode styling
- [x] Layout.jsx - Dark mode styling
- [x] ThemeToggle.jsx - New component

### 🔄 Components Needing Updates
- [ ] RoleBasedSideBar.jsx
- [ ] Dashboard pages
- [ ] Form components
- [ ] Modal components
- [ ] Card components

## Best Practices

### 1. Always Include Transitions
```jsx
className="bg-white dark:bg-gray-800 transition-colors duration-300"
```

### 2. Use Semantic Color Classes
```jsx
// Good
className="text-gray-900 dark:text-white"

// Better - using theme utilities
className={getTextClasses('heading')}
```

### 3. Test Both Themes
Always test your components in both light and dark themes to ensure proper contrast and readability.

### 4. Accessibility
- Maintain WCAG contrast ratios
- Use focus-visible for keyboard navigation
- Test with screen readers

## Troubleshooting

### Theme Not Persisting
Check localStorage permissions and fallback to system preference.

### Colors Not Updating
Ensure `transition-colors duration-300` is applied to elements.

### Flash of Incorrect Theme
The theme context includes an `isLoading` state to prevent FOIT (Flash of Incorrect Theme).

## Migration Guide

### Updating Existing Components
1. Add dark mode classes to all background, text, and border utilities
2. Include `transition-colors duration-300` for smooth transitions  
3. Test component in both themes
4. Consider using theme hook utilities for complex styling

### Example Migration
```jsx
// Before
<div className="bg-white border border-gray-200 text-gray-900">

// After  
<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white transition-colors duration-300">
```

## Performance
- Theme switching is optimized with CSS variables
- Transitions are GPU-accelerated 
- No JavaScript theme calculations during render
- Theme preference is cached in localStorage