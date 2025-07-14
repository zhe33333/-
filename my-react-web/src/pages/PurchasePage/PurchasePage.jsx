import React from 'react';
import './PurchasePage.css';

// Image imports
import brandIcon from '../../assets/images/I530_9914_519_5718_27_384.svg';
import searchIcon from '../../assets/images/I530_9914_537_8200_29_422.svg';
import collectionIcon from '../../assets/images/I530_9914_519_5722_176_901.svg';
import cartIcon from '../../assets/images/I530_9914_519_5723_176_959.svg';
import membershipIcon from '../../assets/images/I530_9914_519_5724_27_318_27_83.svg';
import mainProductImage from '../../assets/images/4aa23521a55aada8194a1b2ecf1292e74a2e1574.png';
import favoriteIcon from '../../assets/images/I223_1099_220_1343.svg';
import thumbnail1 from '../../assets/images/c254081f1bf2c20392548110faae7ce29586435e.png';
import thumbnail2 from '../../assets/images/3743abb24af335c942d0dcab9b7a899f347247ae.png';
import thumbnail3 from '../../assets/images/efc2a96b6e96328b22790b0e5dfdfbc217581661.png';
import thumbnail4 from '../../assets/images/55b098553902301e5da4a2ffb7a6b8571cb1c08f.png';
import thumbnail5 from '../../assets/images/87dd572674e24267333badca3f13f8532b3abe0c.png';
import toggleIcon from '../../assets/images/146_810.svg';
import xIcon from '../../assets/images/I127_2329_46_657_44_264.svg';
import instagramIcon from '../../assets/images/I127_2329_46_658_44_276.svg';
import facebookIcon from '../../assets/images/I127_2329_46_659_44_270.svg';


const PurchasePage = () => {
  return (
    <>
      {/* <header className="site-header">
        <div className="header-container">
          <a href="#" className="brand">
            <img src={brandIcon} alt="WeTrade Icon" className="brand-icon" />
            <span className="brand-name">WeTrade</span>
          </a>
          <div className="search-area">
            <span>搜尋</span>
            <img src={searchIcon} alt="Search Icon" />
          </div>
          <nav className="main-nav">
            <a href="#services">服務項目</a>
            <a href="#collection" className="nav-link-with-icon">
              <span>收藏</span>
              <img src={collectionIcon} alt="Collection Icon" />
            </a>
            <a href="#cart" className="nav-link-with-icon">
              <span>購物車</span>
              <img src={cartIcon} alt="Cart Icon" />
            </a>
            <a href="#membership" className="membership-link">
              <img src={membershipIcon} alt="Membership Icon" />
              <span>會員中心</span>
            </a>
          </nav>
        </div>
      </header> */}
      <main id="product-details" className="product-details-section">
        <div className="container">
          <nav className="breadcrumbs">
            <a href="#">買錶</a>
            <span>/</span>
            <span>Rolex</span>
          </nav>

          <div className="product-grid">
            <div className="product-image-container">
              <img src={mainProductImage} alt="Rolex Submariner Date 126610LN" className="main-product-image" />
              <button className="favorite-button">
                <img src={favoriteIcon} alt="收藏icon" />
              </button>
            </div>

            <div className="product-info">
              <div className="product-header">
                <h1>Rolex Submariner Date 126610LN<br />勞力士</h1>
                <p className="product-price">NT $200000</p>
              </div>

              <dl className="product-specs">
                <div className="spec-row"><dt>品牌:</dt><dd>Rolex 勞力士</dd></div>
                <div className="spec-row"><dt>系列:</dt><dd>El Primero 系列</dd></div>
                <div className="spec-row"><dt>款式:</dt><dd>男款</dd></div>
                <div className="spec-row"><dt>型號:</dt><dd>5496P-001</dd></div>
                <div className="spec-row"><dt>年分:</dt><dd>2014/08/30</dd></div>
                <div className="spec-row"><dt>材質:</dt><dd>碳纖維</dd></div>
                <div className="spec-row"><dt>保單:</dt><dd>具合作鑑定商保單</dd></div>
              </dl>

              <div className="cta-buttons">
                <button className="btn btn-primary">立即購買 | 向賣家詢問</button>
                <button className="btn btn-secondary">提出其他請求</button>
              </div>
            </div>
          </div>

          <div className="thumbnail-gallery">
            <img src={thumbnail1} alt="Thumbnail 1" className="thumbnail" />
            <img src={thumbnail2} alt="Thumbnail 2" className="thumbnail" />
            <img src={thumbnail3} alt="Thumbnail 3" className="thumbnail" />
            <img src={thumbnail4} alt="Thumbnail 4" className="thumbnail" />
            <img src={thumbnail5} alt="Thumbnail 5" className="thumbnail" />
          </div>

          <div className="other-info-accordion">
            <button className="accordion-header">
              <span>其他資訊</span>
              <img src={toggleIcon} alt="Toggle Info" />
            </button>
            <div className="accordion-content">
              <dl className="product-specs-extra">
                <div className="spec-row"><dt>品牌:</dt><dd>Rolex 勞力士</dd></div>
                <div className="spec-row"><dt>系列:</dt><dd>El Primero 系列</dd></div>
                <div className="spec-row"><dt>款式:</dt><dd>男款</dd></div>
                <div className="spec-row"><dt>型號:</dt><dd>5496P-001</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </main>
      {/* <footer className="site-footer">
        <div className="footer-content">
          <nav className="footer-nav">
            <a href="#">隱私權政策</a>
            <a href="#">網站地圖</a>
            <a href="#">聯絡我們</a>
          </nav>
          <div className="social-links">
            <a href="#" aria-label="X"><img src={xIcon} alt="X icon" /></a>
            <a href="#" aria-label="Instagram"><img src={instagramIcon} alt="Instagram icon" /></a>
            <a href="#" aria-label="Facebook"><img src={facebookIcon} alt="Facebook icon" /></a>
          </div>
          <p className="copyright">@2025 WeTrade. All rights reserved.</p>
        </div>
      </footer> */}
    </>
  );
};

export default PurchasePage;
