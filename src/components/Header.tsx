import { useState } from 'react';
import { SITE_TITLE } from '../consts';
import './Header.css';

interface HeaderProps {
  pathname: string;
}

const Header = ({ pathname }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const isActive = (href: string) => {
    const subpath = pathname.match(/[^/]+/g);
    return href === pathname || href === '/' + (subpath?.[0] || '');
  };

  return (
    <>
      <header className="arwes-header">
        <div className="arwes-header-line top"></div>
        <nav className="arwes-nav">
          <div className="nav-brand">
            <h3 className="brand-title">
              <a href="/" className="brand-link">
                <span className="brand-brackets">[</span>{SITE_TITLE}<span className="brand-brackets">]</span>
              </a>
            </h3>
          </div>
          
          {/* Desktop menu */}
          <div className="nav-links desktop">
            <a 
              href="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              <span className="nav-link-brackets">&gt;</span> Home
            </a>
            <a 
              href="/articles" 
              className={`nav-link ${isActive('/articles') ? 'active' : ''}`}
            >
              <span className="nav-link-brackets">&gt;</span> Articles
            </a>
            <a 
              href="/projects" 
              className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
            >
              <span className="nav-link-brackets">&gt;</span> Projects
            </a>
            <a 
              href="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              <span className="nav-link-brackets">&gt;</span> About
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={openMobileMenu}
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </nav>
        <div className="arwes-header-line bottom"></div>
      </header>
      
      {/* Mobile menu overlay */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
        onKeyDown={(e) => e.key === 'Enter' && closeMobileMenu()}
        role="button"
        tabIndex={0}
        aria-label="Close menu"
      ></div>
      
      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <h3 className="mobile-menu-title">
            <span className="brand-brackets">[</span>Menu<span className="brand-brackets">]</span>
          </h3>
          <button 
            className="close-btn"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="mobile-menu-content">
          <a 
            href="/" 
            className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav-link-brackets">&gt;</span> Home
          </a>
          <a 
            href="/articles" 
            className={`mobile-nav-link ${isActive('/articles') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav-link-brackets">&gt;</span> Articles
          </a>
          <a 
            href="/projects" 
            className={`mobile-nav-link ${isActive('/projects') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav-link-brackets">&gt;</span> Projects
          </a>
          <a 
            href="/about" 
            className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav-link-brackets">&gt;</span> About
          </a>
        </div>
        <div className="mobile-menu-line"></div>
      </div>
    </>
  );
};

export default Header;
