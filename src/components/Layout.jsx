import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronUp, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from "@/components/theme-provider";
import { useLanguage } from '../contexts/LanguageContext';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { setTheme, theme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <nav className="fixed top-0 left-0 right-0 bg-gold dark:bg-gray-800 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">พระมหาธาตุแก่นนคร</Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-sage">{language === 'en' ? 'Home' : 'หน้าแรก'}</Link>
            <Link to="/about" className="hover:text-sage">{language === 'en' ? 'About' : 'เกี่ยวกับ'}</Link>
            <Link to="/temples" className="hover:text-sage">{language === 'en' ? 'Temples' : 'วัด'}</Link>
            <Link to="/restaurants" className="hover:text-sage">{language === 'en' ? 'Restaurants' : 'ร้านอาหาร'}</Link>
            <Link to="/attractions" className="hover:text-sage">{language === 'en' ? 'Attractions' : 'สถานที่ท่องเที่ยว'}</Link>
            <Link to="/contact" className="hover:text-sage">{language === 'en' ? 'Contact' : 'ติดต่อ'}</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-sage">
              <Globe size={24} />
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-sage">
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gold dark:bg-gray-800 z-40 flex flex-col items-center justify-center">
          <Link to="/" className="py-2" onClick={() => setIsMenuOpen(false)}>{language === 'en' ? 'Home' : 'หน้าแรก'}</Link>
          <Link to="/about" className="py-2" onClick={() => setIsMenuOpen(false)}>{language === 'en' ? 'About' : 'เกี่ยวกับ'}</Link>
          <Link to="/temples" className="py-2" onClick={() => setIsMenuOpen(false)}>{language === 'en' ? 'Temples' : 'วัด'}</Link>
          <Link to="/restaurants" className="py-2" onClick={() => setIsMenuOpen(false)}>{language === 'en' ? 'Restaurants' : 'ร้านอาหาร'}</Link>
          <Link to="/attractions" className="py-2" onClick={() => setIsMenuOpen(false)}>{language === 'en' ? 'Attractions' : 'สถานที่ท่องเที่ยว'}</Link>
          <Link to="/contact" className="py-2" onClick={() => setIsMenuOpen(false)}>{language === 'en' ? 'Contact' : 'ติดต่อ'}</Link>
        </div>
      )}

      <main className="pt-16">
        {children}
      </main>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-gold dark:bg-gray-700 text-white p-2 rounded-full shadow-lg"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Layout;