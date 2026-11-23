import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Check initial theme from document root or localStorage
    const isLight = document.documentElement.classList.contains('light');
    setTheme(isLight ? 'light' : 'dark');

    // Handle cross-tab storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const newTheme = e.newValue === 'light' ? 'light' : 'dark';
        setTheme(newTheme);
        if (newTheme === 'light') {
          document.documentElement.classList.add('light');
          document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', 'light');
        } else {
          document.documentElement.classList.remove('light');
          document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', 'dark');
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);

    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
      metaColorScheme?.setAttribute('content', 'light');
      try {
        localStorage.setItem('theme', 'light');
      } catch (e) {
        // Handle private browsing or restricted quota gracefully
      }
    } else {
      document.documentElement.classList.remove('light');
      metaColorScheme?.setAttribute('content', 'dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch (e) {
        // Handle private browsing or restricted quota gracefully
      }
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      type="button"
      className={`relative p-2 rounded-full border border-white/[0.1] bg-[#181922] hover:bg-[#20222D] hover:border-[#E05D38]/50 text-white transition-colors cursor-pointer flex items-center justify-center min-w-[38px] min-h-[38px] ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'Day' : 'Night'} mode`}
      title={`Switch to ${theme === 'dark' ? 'Day (Light)' : 'Night (Dark)'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Sun className="w-4 h-4 text-[#F5A623] hover:text-[#FFA000] transition-colors" />
        ) : (
          <Moon className="w-4 h-4 text-[#E05D38] hover:text-[#F06B45] transition-colors" />
        )}
      </motion.div>
    </motion.button>
  );
};
