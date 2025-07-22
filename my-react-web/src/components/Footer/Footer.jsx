import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Assuming these icons are available in the specified path
import instagramIcon from '../../assets/assets/State=Hover.png';
import facebookIcon from '../../assets/assets/State=Hover-1.png';
import twitterIcon from '../../assets/assets/State=Hover-2.png';

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
          <a href="#" aria-label="Instagram"><img src={instagramIcon} alt="Instagram" /></a>
          <a href="#" aria-label="Facebook"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="#" aria-label="Twitter"><img src={twitterIcon} alt="Twitter" /></a>
        </div>
        <p className="copyright">@2025 WeTrade. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
