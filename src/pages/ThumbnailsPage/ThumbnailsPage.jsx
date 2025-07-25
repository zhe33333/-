import React, { useRef } from 'react';
import './ThumbnailsPage.css';

// Image paths
import prevIcon from '../../assets/I115_865_46_710.png';
import nextIcon from '../../assets/I115_866_46_714.png';
import brandIcon from '../../assets/brandicon.png';
import searchIcon from '../../assets/searchicon.png';
import collectionIcon from '../../assets/favoriteicon.png';
import cartIcon from '../../assets/carticon.png';
import membershipIcon from '../../assets/I827_9159_519_5724_27_318_27_83.png';
import filterIcon from '../../assets/filtericon.png';
import sortIcon from '../../assets/sortIcon.png';
import product1 from '../../assets/assets/watchimage1.png';
import product2 from '../../assets/assets/watchimage2.png';
import product3 from '../../assets/assets/watchimage3.png';
import product4 from '../../assets/assets/watchimage4.png';
import xIcon from '../../assets/xIcon.png';
import instagramIcon from '../../assets/instagramIcon.png';
import facebookIcon from '../../assets/facebookIcon.png';


const ThumbnailsPage = () => {
  const categoriesScrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (categoriesScrollRef.current) {
      const scrollAmount = direction === 'left' ? -312 : 312; // 240px (card width) + 40px (gap)
      categoriesScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const products = [
    { id: 1, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product1 },
    { id: 2, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product2 },
    { id: 3, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product3 },
    { id: 4, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product4 },
    { id: 5, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product1 },
    { id: 6, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product2 },
    { id: 7, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product3 },
    { id: 8, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product4 },
  ];

  return (
    <>
      {/* <header id="section-header" className="site-header"> ... </header> */}
      <main className="page-content">
        <div className="thumbnail-page-wrapper">
        <section id="section-breadcrumbs" className="breadcrumbs-section">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumbs-list">
                <li><a href="#">商品縮圖頁</a></li>
                <li><span className="separator">/</span></li>
                <li aria-current="page">PATEK PHILIPPE 百達翡麗</li>
              </ol>
            </nav>
          </div>
        </section>

        <section id="section-categories" className="categories-section">
          <div className="container">
            <div className="categories-header">
              <h2>錶類 | 功能選擇</h2>
              <div className="carousel-controls">
                <button className="arrow-button" onClick={() => handleScroll('left')}>
                  <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.125 18.5H10.125M10.125 18.5L14.25 22.625M10.125 18.5L14.25 14.375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 23V14C3 12.4087 3.63214 10.8826 4.75736 9.75736C5.88258 8.63214 7.4087 8 9 8H27C28.5913 8 30.1174 8.63214 31.2426 9.75736C32.3679 10.8826 33 12.4087 33 14V23C33 24.5913 32.3679 26.1174 31.2426 27.2426C30.1174 28.3679 28.5913 29 27 29H9C7.4087 29 5.88258 27.8679 4.75736 27.2426C3.63214 26.1174 3 24.5913 3 23Z" strokeWidth="1.5" />
                  </svg>
                </button>
                <button className="arrow-button" onClick={() => handleScroll('right')}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.125 18H25.125M25.125 18L21 22.125M25.125 18L21 13.875" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 22.5V13.5C3 11.9087 3.63214 10.3826 4.75736 9.25736C5.88258 8.13214 7.4087 7.5 9 7.5H27C28.5913 7.5 30.1174 8.13214 31.2426 9.25736C32.3679 10.3826 33 11.9087 33 13.5V22.5C33 24.0913 32.3679 25.6174 31.2426 26.7426C30.1174 27.8679 28.5913 28.5 27 28.5H9C7.4087 28.5 5.88258 27.8679 4.75736 26.7426C3.63214 25.6174 3 24.0913 3 22.5Z" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="horizontal-scroll" ref={categoriesScrollRef}>
              <div className="categories-list">
                <a href="#" className="category-card"><div className="card-text">Men’s Watches<br />男錶</div></a>
                <a href="#" className="category-card"><div className="card-text">Diver’s Watch<br />潛水錶</div></a>
                <a href="#" className="category-card"><div className="card-text">Sport Watch<br />運動錶</div></a>
                <a href="#" className="category-card"><div className="card-text">Skeleton<br />透背錶</div></a>
                <a href="#" className="category-card"><div className="card-text">GMT<br />世界時區錶</div></a>
                <a href="#" className="category-card"><div className="card-text">Chronograph<br />計時碼錶</div></a>
                <a href="#" className="category-card"><div className="card-text">Moon Phase<br />月相錶</div></a>
                <a href="#" className="category-card"><div className="card-text">Perpetual Calendar<br />萬年曆</div></a>
                <a href="#" className="category-card"><div className="card-text">Tourbillon<br />陀飛輪</div></a>
                <a href="#" className="category-card"><div className="card-text">Women's Watches<br />女錶</div></a>
              </div>
            </div>
          </div>
        </section>

        <section id="section-products" className="products-section">
          <div className="container">
            <div className="product-controls">
              <div className="filter-sort-wrapper">
                <button className="filter-button">
                  <span>篩選</span>
                  <img src={filterIcon} alt="Filter icon" />
                </button>
                <div className="sort-control">
                  <span>排序依據</span>
                  <img src={sortIcon} alt="Sort icon" />
                  <button className="sort-button">價格由高往低</button>
                </div>
              </div>
            </div>
            <div className="product-grid">
              {products.map(product => (
                <a href="/-/purchase-page.html" key={product.id} className="product-card-link">
                  <article className="product-card">
                    <img src={product.image} alt={product.name.replace(/<br>/g, ' ')} className="product-image" />
                    <div className="product-info">
                      <h3 dangerouslySetInnerHTML={{ __html: product.name }}></h3>
                      <div className="product-meta">
                        <p className="price">{product.price}</p>
                        <button className="add-to-cart-btn">加入購物車</button>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        <section id="section-info" className="info-section">
          <div className="container">
            <div className="info-content">
              <div className="info-item">
                <h4>保固範圍</h4>
                <p>每次購買均受到全面保固的保護，涵蓋指定期間內的維修和保養。</p>
              </div>
              <div className="info-item">
                <h4>客戶支援</h4>
                <p>我們提供全天候的專屬客戶支援，協助處理任何查詢或問題。</p>
              </div>
              <div className="info-item">
                <h4>退貨政策</h4>
                <p>商品在購買後 30 天內可以退貨並獲得全額退款，前提是商品必須保持原始狀態。</p>
              </div>
              <div className="info-item">
                <h4>運送選項</h4>
                <p>商品在購買後 30 天內可以退貨並獲得全額退款，前提是商品必須保持原始狀態。</p>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
      {/* <footer id="section-footer" className="site-footer"> ... </footer> */}
    </>
  );
};

export default ThumbnailsPage;
