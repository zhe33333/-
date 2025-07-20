import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './PurchasePage.css';

const PurchasePage = () => {
  // Placeholder images, as the original ones from the HTML are not in the project structure.
  const mainProductImage = '/images/a2f1b207144054d217551fbd392188ecfb87de6b.png';
  const favoriteIcon = '/images/I827_9193_46_658_44_276.svg'; // Using instagram icon as placeholder
  const thumbnail1 = '/images/1ca9015fb46f3c47d6a45e4da54dac4080d18068.png';
  const thumbnail2 = '/images/2f80cb6eec1532e4eb034379b4433aee9602e30d.png';
  const thumbnail3 = '/images/6438ee73644920cb6e7e275a8e7a86e27807c186.png';
  const thumbnail4 = '/images/a746bcc17db92e13fe07174d16ed67e144f35e34.png';
  const thumbnail5 = '/images/ed244e17d0935ba27523544be11bfa104bd53eb1.png';
  const toggleIcon = '/images/827_9178.svg';

  return (
    <>
      <Header />
      <div className="page-content">
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
      </div>
      <Footer />
    </>
  );
};

export default PurchasePage;
