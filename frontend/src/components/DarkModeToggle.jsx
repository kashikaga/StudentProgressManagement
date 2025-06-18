import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    return (
        <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            style={{
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                border: 'none',
                background: darkMode ? '#222' : '#eee',
                color: darkMode ? '#fff' : '#222',
                cursor: 'pointer',
            }}
        >
            {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );
};

export default DarkModeToggle;