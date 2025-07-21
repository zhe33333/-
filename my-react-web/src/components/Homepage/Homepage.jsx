import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BrandCard from "../BrandCard/BrandCard";
import MainFunctionCard from "../MainFunctionCard/MainFunctionCard";
import ArrowButton from "../ArrowButton/ArrowButton";
import "./Homepage.css";
import magazineCover from "../../assets/magazine.png";
import bigWatch from "../../assets/BigWatchPicture.svg";
import banner2 from "../../assets/banner-2/Homepage/banner2-3.svg";
import banner3 from "../../assets/banner-3/Homepage/banner2-2.svg";

const Homepage = () => {
  const heroTexts = [
    "Ready to Find Your Next Timepiece?",
    "We trust so WeTrade",
    "Explore Exclusive Collections Today!",
  ];
  const bannerImages = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1dddce55f44c8196f8a70cea39c0107979d395c4?width=3840",
    banner2,
    banner3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(bannerImages.length - 1);

  // Refs for the scrollable grids
  const partnersGridRef = useRef(null);
  const brandsGridRef = useRef(null);

  // State for drag-to-scroll functionality
  const [isPartnersDragging, setIsPartnersDragging] = useState(false);
  const [partnersStartX, setPartnersStartX] = useState(0);
  const [partnersScrollLeft, setPartnersScrollLeft] = useState(0);
  const [hasPartnersDragged, setHasPartnersDragged] = useState(false); // New state for drag detection

  const [isBrandsDragging, setIsBrandsDragging] = useState(false);
  const [brandsStartX, setBrandsStartX] = useState(0);
  const [brandsScrollLeft, setBrandsScrollLeft] = useState(0);
  const [hasBrandsDragged, setHasBrandsDragged] = useState(false); // New state for drag detection

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Sync with text animation duration

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, bannerImages.length]);

  // Global mouseup listener to stop dragging if mouse is released outside the element
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsPartnersDragging(false);
      setIsBrandsDragging(false);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  // Drag-to-scroll handlers for partnersGrid
  const handlePartnersMouseDown = (e) => {
    setIsPartnersDragging(true);
    setPartnersStartX(e.pageX - partnersGridRef.current.offsetLeft);
    setPartnersScrollLeft(partnersGridRef.current.scrollLeft);
    setHasPartnersDragged(false); // Reset drag flag on mouse down
  };

  const handlePartnersMouseLeave = () => {
    setIsPartnersDragging(false);
  };

  const handlePartnersMouseUp = () => {
    setIsPartnersDragging(false);
    if (hasPartnersDragged) {
      // Prevent click event on child links after a drag
      const preventClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.removeEventListener('click', preventClick, true); // Remove self after one use
      };
      window.addEventListener('click', preventClick, true); // Use capture phase
    }
  };

  const handlePartnersMouseMove = (e) => {
    if (!isPartnersDragging) return;
    e.preventDefault();
    const x = e.pageX - partnersGridRef.current.offsetLeft;
    const walk = (x - partnersStartX) * 1; // Reduced sensitivity
    partnersGridRef.current.scrollLeft = partnersScrollLeft - walk;

    // If mouse has moved more than a threshold, consider it a drag
    if (Math.abs(walk) > 3) { // 3 pixels threshold
      setHasPartnersDragged(true);
    }
  };

  // Drag-to-scroll handlers for brandsGrid
  const handleBrandsMouseDown = (e) => {
    setIsBrandsDragging(true);
    setBrandsStartX(e.pageX - brandsGridRef.current.offsetLeft);
    setBrandsScrollLeft(brandsGridRef.current.scrollLeft);
    setHasBrandsDragged(false); // Reset drag flag on mouse down
  };

  const handleBrandsMouseLeave = () => {
    setIsBrandsDragging(false);
  };

  const handleBrandsMouseUp = () => {
    setIsBrandsDragging(false);
    if (hasBrandsDragged) {
      // Prevent click event on child links after a drag
      const preventClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.removeEventListener('click', preventClick, true); // Remove self after one use
      };
      window.addEventListener('click', preventClick, true); // Use capture phase
    }
  };

  const handleBrandsMouseMove = (e) => {
    if (!isBrandsDragging) return;
    e.preventDefault();
    const x = e.pageX - brandsGridRef.current.offsetLeft;
    const walk = (x - brandsStartX) * 1; // Reduced sensitivity
    brandsGridRef.current.scrollLeft = brandsScrollLeft - walk;

    // If mouse has moved more than a threshold, consider it a drag
    if (Math.abs(walk) > 3) { // 3 pixels threshold
      setHasBrandsDragged(true);
    }
  };

  const brandsTop = [
    "Breitling\n百年靈",
    "Rolex\n勞力士",
    "TAG Heuer\n泰格豪雅",
    "Omega\n歐米茄",
    "Panerai\n沛納海",
    "Patek Philippe\n百達翡麗",
    "Hublot\n宇舶",
    "Zenith\n真力時",
    "Breguet\n寶璣",
  ];

  const brandsBottom = [
    "Cartier\n卡地亞",
    "Audemars Piguet\n愛彼",
    "IWC Schaffhausen\n萬國錶",
    "Jaeger-LeCoultre\n積家",
    "Tudor\n帝舵",
    "Vacheron Constantin\n江詩丹頓",
    "Chopard\n蕭邦",
    "Girard-Perregaux\n芝柏",
    "Ulysse Nardin\n雅典錶",
  ];

  const partnerStores = [
    {
      name: "王永昌鐘錶行",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a4f186f16174cfd34087f4298a6ef05dc17a5bdc?width=320",
    },
    {
      name: "永生名錶",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d0d7e78a4da93423d6802359d2bc1ea5c65d0faf?width=320",
    },
    {
      name: "金光鐘錶",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/406af99056597efd43d5086a263a971523bdadc0?width=320",
    },
    {
      name: "瑞士精工時計",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a4f186f16174cfd34087f4298a6ef05dc17a5bdc?width=320",
    },
    {
      name: "時光收藏品店",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d0d7e78a4da93423d6802359d2bc1ea5c65d0faf?width=320",
    },
    {
      name: "時光收藏品店",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/277a20e3f8c4d47580622ca72d32645df881b6f3?width=320",
    },
  ];

  const features = [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.5306 18.4694L14.8366 13.7762C17.6629 10.383 17.3204 5.36693 14.0591 2.38935C10.7978 -0.588237 5.77134 -0.474001 2.64867 2.64867C-0.474001 5.77134 -0.588237 10.7978 2.38935 14.0591C5.36693 17.3204 10.383 17.6629 13.7762 14.8366L18.4694 19.5306C18.7624 19.8237 19.2376 19.8237 19.5306 19.5306C19.8237 19.2376 19.8237 18.7624 19.5306 18.4694ZM1.75 8.5C1.75 4.77208 4.77208 1.75 8.5 1.75C12.2279 1.75 15.25 4.77208 15.25 8.5C15.25 12.2279 12.2279 15.25 8.5 15.25C4.77379 15.2459 1.75413 12.2262 1.75 8.5Z"
            fill="white"
          />
        </svg>
      ),
      title: "購買與販售",
      description: "我們的專業鑑定師仔細檢查每一隻手錶，以確保其真實性和狀況。",
    },
    {
      icon: (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.75 7.5C16.75 7.91421 16.4142 8.25 16 8.25H12.25C11.8358 8.25 11.5 7.91421 11.5 7.5C11.5 7.08579 11.8358 6.75 12.25 6.75H16C16.4142 6.75 16.75 7.08579 16.75 7.5ZM16 9.75H12.25C11.8358 9.75 11.5 10.0858 11.5 10.5C11.5 10.9142 11.8358 11.25 12.25 11.25H16C16.4142 11.25 16.75 10.9142 16.75 10.5C16.75 10.0858 16.4142 9.75 16 9.75ZM19.75 2.25V15.75C19.75 16.5784 19.0784 17.25 18.25 17.25H1.75C0.921573 17.25 0.25 16.5784 0.25 15.75V2.25C0.25 1.42157 0.921573 0.75 1.75 0.75H18.25C19.0784 0.75 19.75 1.42157 19.75 2.25ZM18.25 15.75V2.25H1.75V15.75H18.25ZM10.7256 12.5625C10.8292 12.9638 10.5878 13.373 10.1866 13.4766C9.78529 13.5801 9.37605 13.3388 9.2725 12.9375C9.02594 11.9756 8.04813 11.25 6.99906 11.25C5.95 11.25 4.97312 11.9756 4.72563 12.9375C4.62207 13.3388 4.21283 13.5801 3.81156 13.4766C3.41029 13.373 3.16895 12.9638 3.2725 12.5625C3.51588 11.6566 4.09118 10.8755 4.88406 10.3744C4.02237 9.51779 3.76242 8.22604 4.22572 7.10283C4.68901 5.97961 5.78405 5.24675 6.99906 5.24675C8.21407 5.24675 9.30911 5.97961 9.77241 7.10283C10.2357 8.22604 9.97576 9.51779 9.11406 10.3744C9.90781 10.8748 10.4836 11.6562 10.7266 12.5625H10.7256ZM7 9.75C7.82843 9.75 8.5 9.07843 8.5 8.25C8.5 7.42157 7.82843 6.75 7 6.75C6.17157 6.75 5.5 7.42157 5.5 8.25C5.5 9.07843 6.17157 9.75 7 9.75Z"
            fill="white"
          />
        </svg>
      ),
      title: "原廠證書與值得信賴的經銷商認證",
      description: "每一隻手錶都附有數位護照，提供完整的歷史和來源。",
    },
    {
      icon: (
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5 0.75H1.5C0.671573 0.75 0 1.42157 0 2.25V7.76062C0 16.1616 7.10812 18.9487 8.53125 19.4222C8.8352 19.5256 9.1648 19.5256 9.46875 19.4222C10.8938 18.9487 18 16.1616 18 7.76062V2.25C18 1.42157 17.3284 0.75 16.5 0.75ZM16.5 7.76156C16.5 15.1134 10.2797 17.5697 9 17.9972C7.73156 17.5744 1.5 15.12 1.5 7.76156V2.25H16.5V7.76156ZM4.71938 10.2806C4.42632 9.98757 4.42632 9.51243 4.71938 9.21937C5.01243 8.92632 5.48757 8.92632 5.78063 9.21937L7.5 10.9388L12.2194 6.21937C12.5124 5.92632 12.9876 5.92632 13.2806 6.21937C13.5737 6.51243 13.5737 6.98757 13.2806 7.28063L8.03063 12.5306C7.88995 12.6715 7.69906 12.7506 7.5 12.7506C7.30094 12.7506 7.11005 12.6715 6.96937 12.5306L4.71938 10.2806Z"
            fill="white"
          />
        </svg>
      ),
      title: "安全交易",
      description: "我們提供一個安全且透明的平台，讓您能夠買賣奢華手錶。",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.7443 4.61758 15.3824 0.255684 10 0.25ZM10 18.25C5.44365 18.25 1.75 14.5563 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.2448 14.5542 14.5542 18.2448 10 18.25ZM16 10C16 10.4142 15.6642 10.75 15.25 10.75H10C9.58579 10.75 9.25 10.4142 9.25 10V4.75C9.25 4.33579 9.58579 4 10 4C10.4142 4 10.75 4.33579 10.75 4.75V9.25H15.25C15.6642 9.25 16 9.58579 16 10Z"
            fill="white"
          />
        </svg>
      ),
      title: "保固與退貨",
      description: "享受我們全面的保固和退貨政策帶來的安心。",
    },
  ];

  return (
    <div className="homepage">
      <main className="main-content-area">
        <section className="hero-section">
          <div className="hero-banner">
            {bannerImages.map((image, index) => (
              <img
                key={index}
                className={`hero-background ${
                  index === currentIndex ? "active" : ""
                } ${index === previousIndex ? "previous" : ""}`}
                src={image}
                alt={`Hero background ${index + 1}`}
              />
            ))}
            <div className="hero-content">
              <div className="hero-text">
                <div className="hero-line" key={currentIndex}>
                  <span>{heroTexts[currentIndex % heroTexts.length]}</span>
                </div>
              </div>
              <Link to="/thumbnails" className="cta-button">
                <span>立即進入商品頁面</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="content-section main-content">
          <div className="background-images">
            <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/644d8a4e048086e21d947fe670f09a7ff5d71055?width=3840"
            alt="Background 1"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4807fef77ee4dac9e46dfb0ffba747f490311b03?width=3840"
            alt="Background 2"
          />
        </div>

        <div className="content-container">
          {/* Featured Brands Section */}
          <div className="featured-brands-section">
            <div className="section-header">
              <div className="section-title-container">
                <h2>精選熱門品牌</h2>
                <div className="navigation-arrows">
                  <ArrowButton direction="left" targetRef={brandsGridRef} scrollAmount={320} />
                  <ArrowButton direction="right" targetRef={brandsGridRef} scrollAmount={320} />
                </div>
              </div>
            </div>

            <div
              className="brands-grid-container"
              ref={brandsGridRef}
              onMouseDown={handleBrandsMouseDown}
              onMouseLeave={handleBrandsMouseLeave}
              onMouseUp={handleBrandsMouseUp}
              onMouseMove={handleBrandsMouseMove}
            >
              <div className="brands-row">
                {brandsTop.map((brand, index) => (
                  <Link to="/thumbnails" key={index}>
                    <BrandCard brandName={brand} />
                  </Link>
                ))}
              </div>
              <div className="brands-row">
                {brandsBottom.map((brand, index) => (
                  <Link to="/thumbnails" key={index}>
                    <BrandCard brandName={brand} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="main-function-wrapper">
            <div className="section-header">
              <div className="section-title-container">
                <h2>網站簡介</h2>
                <div className="navigation-arrows">
                  <button className="arrow-button">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.9167 19.9993H11.25M11.25 19.9993L15.8333 24.5827M11.25 19.9993L15.8333 15.416"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33331 24.9997V14.9997C3.33331 13.2316 4.03569 11.5359 5.28593 10.2856C6.53618 9.03539 8.23187 8.33301 9.99998 8.33301H30C31.7681 8.33301 33.4638 9.03539 34.714 10.2856C35.9643 11.5359 36.6666 13.2316 36.6666 14.9997V24.9997C36.6666 26.7678 35.9643 28.4635 34.714 29.7137C33.4638 30.964 31.7681 31.6663 30 31.6663H9.99998C8.23187 31.6663 6.53618 30.964 5.28593 29.7137C4.03569 28.4635 3.33331 26.7678 3.33331 24.9997Z"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                  <button className="arrow-button">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.25 19.9993H27.9167M27.9167 19.9993L23.3333 24.5827M27.9167 19.9993L23.3333 15.416"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33331 24.9997V14.9997C3.33331 13.2316 4.03569 11.5359 5.28593 10.2856C6.53618 9.03539 8.23187 8.33301 9.99998 8.33301H30C31.7681 8.33301 33.4638 9.03539 34.714 10.2856C35.9643 11.5359 36.6666 13.2316 36.6666 14.9997V24.9997C36.6666 26.7678 35.9643 28.4635 34.714 29.7137C33.4638 30.964 31.7681 31.6663 30 31.6663H9.99998C8.23187 31.6663 6.53618 30.964 5.28593 29.7137C4.03569 28.4635 3.33331 26.7678 3.33331 24.9997Z"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="main-function-container">
              {features.map((feature, index) => (
                <MainFunctionCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          {/* Website Features Section */}
          <div className="features-section">
            <div className="section-header">
              <h2>合作廠商</h2>
              <div className="navigation-arrows">
                <ArrowButton direction="left" targetRef={partnersGridRef} />
                <ArrowButton direction="right" targetRef={partnersGridRef} />
              </div>
            </div>

            <div
              className="partners-grid-container"
              ref={partnersGridRef}
              onMouseDown={handlePartnersMouseDown}
              onMouseLeave={handlePartnersMouseLeave}
              onMouseUp={handlePartnersMouseUp}
              onMouseMove={handlePartnersMouseMove}
            >
              <div className="partners-row">
                {partnerStores.map((store, index) => (
                  <a href="/Partner Page.html" key={index} className="partner-card">
                    <img src={store.image} alt={store.name} />
                    <h3>{store.name}</h3>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Magazine Section */}
          <div className="magazine-section">
            <div className="magazine-grid">
              <a href="/Magazine Page.html" className="magazine-card large">
                <img
                  src={magazineCover}
                  alt="Magazine Cover Faded"
                  className="image-bottom"
                />
                <img
                  src={magazineCover}
                  alt="Magazine Cover"
                  className="image-top"
                />
                <div className="magazine-overlay">
                  <h3>HODINKEE</h3>
                  <p>
                    現代、時尚、故事性強，將腕錶視為一種生活態度的展現，將手錶融入文化與生活。
                  </p>
                </div>
              </a>
              <a href="/Magazine Page.html" className="magazine-card medium">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9b32689f7103ee325660c5a28d2043446a118f3?width=754"
                  alt="WatchTime Magazine"
                  className="image-bottom"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9b32689f7103ee325660c5a28d2043446a118f3?width=754"
                  alt="WatchTime Magazine"
                  className="image-top"
                />
                <div className="magazine-overlay center-overlay">
                  <h3>WatchTime</h3>
                  <p>
                    全面的市場評測指標，客觀、務實、數據化，以詳盡的實測報告和市場新聞為核心。
                  </p>
                </div>
              </a>
              <a href="/Magazine Page.html" className="magazine-card medium">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed823eff9882c1fc164b3f518ef9d4b6140a925c?width=714"
                  alt="Watch Magazine"
                  className="image-bottom"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed823eff9882c1fc164b3f518ef9d4b6140a925c?width=714"
                  alt="Watch Magazine"
                  className="image-top"
                />
                <div className="magazine-overlay center-overlay">
                  <h3>城邦國際名表 (IWW)</h3>
                  <p>華語圈的權威百科，嚴謹、專業、經典，深入探討製錶工藝與市場動態。</p>
                </div>
              </a>
            </div>
            <img src={bigWatch} alt="Big Watch" className="big-watch-image" />
          </div>
        </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
