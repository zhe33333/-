import React from 'react';
import './ThumbnailsPage.css';

// Image imports
import brandIcon from '../../assets/images/I530_9494_519_5718_27_384.svg';
import searchIcon from '../../assets/images/I530_9494_537_8200_29_422.svg';
import collectionIcon from '../../assets/images/I530_9494_519_5722_176_901.svg';
import cartIcon from '../../assets/images/I530_9494_519_5723_176_959.svg';
import membershipIcon from '../../assets/images/I530_9494_519_5724_27_318_27_83.svg';
import prevIcon from '../../assets/images/I115_865_46_710.svg';
import nextIcon from '../../assets/images/I115_866_46_714.svg';
import filterIcon from '../../assets/images/115_748.svg';
import sortIcon from '../../assets/images/115_750.svg';
import product1 from '../../assets/images/2f499b663595501f987a52863560b290742d309e.png';
import product2 from '../../assets/images/85b91d09f9e0b79c17c21e2488b6f43ae1413576.png';
import product3 from '../../assets/images/478e70ace14223d4159039c69e788ac95ca49ff5.png';
import xIcon from '../../assets/images/I92_484_46_657_44_264.svg';
import instagramIcon from '../../assets/images/I92_484_46_658_44_276.svg';
import facebookIcon from '../../assets/images/I92_484_46_659_44_270.svg';


const ThumbnailsPage = () => {
  const products = [
    { id: 1, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product1 },
    { id: 2, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product2 },
    { id: 3, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product1 },
    { id: 4, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product3 },
    { id: 5, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product1 },
    { id: 6, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product2 },
    { id: 7, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product1 },
    { id: 8, name: 'PATEK PHILIPPE 百達翡麗<br>Calatrava 卡拉卓華系列', price: 'NT$:150000', image: product3 },
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
                <button><img src={prevIcon} alt="Previous" /></button>
                <button><img src={nextIcon} alt="Next" /></button>
              </div>
            </div>
            <div className="horizontal-scroll">
              <div className="categories-list">
                <a href="#" className="category-card"><div className="card-text">Men’s Watches<br />男錶</div></a>
                <a href="#" className="category-card"><div className="card-text">Diver’s Watch<br />潛水錶</div></a>
                <a href="#" className="category-card"><div className="card-text">Sport Watch<br />運動錶</div></a>
                <a href="#" className="category-card"><div className="card-text">Skeleton<br />透背錶</div></a>
                <a href="#" className="category-card"><div className="card-text">GMT<br />世界時區錶</div></a>
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
                <article className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name.replace(/<br>/g, ' ')} className="product-image" />
                  <div className="product-info">
                    <h3 dangerouslySetInnerHTML={{ __html: product.name }}></h3>
                    <div className="product-meta">
                      <p className="price">{product.price}</p>
                      <button className="add-to-cart-btn">加入購物車</button>
                    </div>
                  </div>
                </article>
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
