import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const [isLoading, setIsLoading] = useState(true)

    // Load theme from localStorage on mount
    useEffect(() => {
        try {
            const savedTheme = localStorage.getItem('aaf-cms-theme')
            if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
                setTheme(savedTheme)
            } else {
                // Check system preference
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                setTheme(systemPrefersDark ? 'dark' : 'light')
            }
        } catch (error) {
            console.warn('Failed to load theme from localStorage:', error)
            // Fallback to system preference
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setTheme(systemPrefersDark ? 'dark' : 'light')
        } finally {
            setIsLoading(false)
        }
    }, [])

    // Apply theme to document root
    useEffect(() => {
        if (isLoading) return

        const root = document.documentElement
        
        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }

        // Save to localStorage
        try {
            localStorage.setItem('aaf-cms-theme', theme)
        } catch (error) {
            console.warn('Failed to save theme to localStorage:', error)
        }
    }, [theme, isLoading])

    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        
        const handleChange = (e) => {
            // Only update if no theme is saved in localStorage
            const savedTheme = localStorage.getItem('aaf-cms-theme')
            if (!savedTheme) {
                setTheme(e.matches ? 'dark' : 'light')
            }
        }

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    const setLightTheme = () => {
        setTheme('light')
    }

    const setDarkTheme = () => {
        setTheme('dark')
    }

    const value = {
        theme,
        isLoading,
        isDark: theme === 'dark',
        isLight: theme === 'light',
        toggleTheme,
        setLightTheme,
        setDarkTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}