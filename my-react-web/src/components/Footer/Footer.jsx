import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Assuming these icons are available in the specified path
import icon1 from '../../assets/vector---0.svg';
import icon2 from '../../assets/vector---0-1.svg';
import icon3 from '../../assets/vector---0-2.svg';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <Link to="/privacy">隱私權政策</Link>
          <Link to="/sitemap">網站地圖</Link>
          <Link to="/contact">聯絡我們</Link>
        </nav>
        <div className="social-links">
          <a href="#" aria-label="Icon 1"><img src={icon1} alt="Icon 1" /></a>
          <a href="#" aria-label="Icon 2"><img src={icon2} alt="Icon 2" /></a>
          <a href="#" aria-label="Icon 3"><img src={icon3} alt="Icon 3" /></a>
        </div>
        <p className="copyright">@2025 WeTrade. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
