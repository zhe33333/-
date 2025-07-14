import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Assuming these icons are available in the specified path
import xIcon from '../../assets/images/I127_2329_46_657_44_264.svg';
import instagramIcon from '../../assets/images/I127_2329_46_658_44_276.svg';
import facebookIcon from '../../assets/images/I127_2329_46_659_44_270.svg';

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
          <a href="https://x.com" aria-label="X"><img src={xIcon} alt="X icon" /></a>
          <a href="https://instagram.com" aria-label="Instagram"><img src={instagramIcon} alt="Instagram icon" /></a>
          <a href="https://facebook.com" aria-label="Facebook"><img src={facebookIcon} alt="Facebook icon" /></a>
        </div>
        <p className="copyright">@2025 WeTrade. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
