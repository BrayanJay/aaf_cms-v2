import { useTheme } from '../contexts/ThemeContext'

// Custom hook for theme management with additional utilities
export const useThemeMode = () => {
    const { theme, isDark, isLight, toggleTheme, setLightTheme, setDarkTheme, isLoading } = useTheme()

    // Utility functions for getting theme-specific classes
    const getThemeClasses = (lightClasses, darkClasses) => {
        return isDark ? darkClasses : lightClasses
    }

    // Get background classes based on theme
    const getBgClasses = (variant = 'primary') => {
        const variants = {
            primary: getThemeClasses(
                'bg-white',
                'bg-gray-800'
            ),
            secondary: getThemeClasses(
                'bg-gray-50',
                'bg-gray-900'
            ),
            card: getThemeClasses(
                'bg-white shadow-sm border border-gray-200/50',
                'bg-gray-800 shadow-sm border border-gray-700/50'
            ),
            sidebar: getThemeClasses(
                'bg-white/95 backdrop-blur-sm',
                'bg-gray-800/95 backdrop-blur-sm'
            )
        }
        return variants[variant] || variants.primary
    }

    // Get text classes based on theme
    const getTextClasses = (variant = 'primary') => {
        const variants = {
            primary: getThemeClasses(
                'text-gray-900',
                'text-gray-100'
            ),
            secondary: getThemeClasses(
                'text-gray-600',
                'text-gray-400'
            ),
            muted: getThemeClasses(
                'text-gray-500',
                'text-gray-500'
            ),
            heading: getThemeClasses(
                'text-gray-900',
                'text-white'
            )
        }
        return variants[variant] || variants.primary
    }

    // Get border classes based on theme
    const getBorderClasses = () => {
        return getThemeClasses(
            'border-gray-200',
            'border-gray-700'
        )
    }

    // Get input classes based on theme
    const getInputClasses = () => {
        return getThemeClasses(
            'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500',
            'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-400'
        )
    }

    // Get button classes based on theme and variant
    const getButtonClasses = (variant = 'primary') => {
        const variants = {
            primary: getThemeClasses(
                'bg-blue-600 hover:bg-blue-700 text-white',
                'bg-blue-700 hover:bg-blue-800 text-white'
            ),
            secondary: getThemeClasses(
                'bg-gray-600 hover:bg-gray-700 text-white',
                'bg-gray-700 hover:bg-gray-800 text-white'
            ),
            danger: getThemeClasses(
                'bg-red-600 hover:bg-red-700 text-white',
                'bg-red-700 hover:bg-red-800 text-white'
            ),
            success: getThemeClasses(
                'bg-green-600 hover:bg-green-700 text-white',
                'bg-green-700 hover:bg-green-800 text-white'
            ),
            outline: getThemeClasses(
                'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50',
                'bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800'
            )
        }
        return variants[variant] || variants.primary
    }

    return {
        theme,
        isDark,
        isLight,
        isLoading,
        toggleTheme,
        setLightTheme,
        setDarkTheme,
        getThemeClasses,
        getBgClasses,
        getTextClasses,
        getBorderClasses,
        getInputClasses,
        getButtonClasses
    }
}