import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import brandIcon from "../../assets/brand-icon.svg";
import favoriteIcon from "../../assets/favoriteicon.png";
import cartIcon from "../../assets/cil-cart.svg";
import membershipIcon from "../../assets/membershipicon.png";
import searchIcon from "../../assets/searchicon.png"; // Corrected path and file type

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMembershipDropdownOpen, setIsMembershipDropdownOpen] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setAnimationKey(prevKey => prevKey + 1);
  }, [location.pathname]);

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  // --- 修改重點一：優化資料結構 ---
  // 為每個項目增加 'type' 屬性 ('react' 或 'static')
  // 並填上靜態頁面的正確 'href' 路徑 (以 /-/ 開頭)
  const services = [
    { name: "買錶", path: "/thumbnails", type: "react" },
    { name: "賣錶", path: "/sell", type: "react" },
    { name: "換錶", path: "/-/partner-page.html", type: "static" }, // 假設換錶頁是靜態的
    { name: "租錶", path: "#", type: "static" }, // 暫無頁面，使用 a 標籤
    { name: "鑑定", path: "#", type: "static" }  // 暫無頁面，使用 a 標籤
  ];
  const membershipItems = [
    { name: "登入", path: "/-/login-page.html", type: "static" },
    { name: "會員中心", path: "/-/membership-page.html", type: "static" }, // 假設會員中心是靜態的
    { name: "訊息", path: "#", type: "static" },
    { name: "管理商品", path: "#", type: "static" },
    { name: "登出", path: "#", type: "static" },
  ];

  // --- 修改重點二：建立一個統一的渲染函式 ---
  // 這個函式會根據 item.type 來決定渲染 <Link> 還是 <a>
  const renderLink = (item) => {
    if (item.type === 'react') {
      return (
        <Link to={item.path} className="dropdown-item" key={item.name}>
          {item.name}
        </Link>
      );
    }
    // 預設情況或 item.type === 'static'
    return (
      <a href={item.path} className="dropdown-item" key={item.name}>
        {item.name}
      </a>
    );
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="brand-section" key={animationKey}>
          <div className="brand-logo-container">
            <img src={brandIcon} alt="Brand Icon" className="brand-icon" />
            <span className="brand-name">WeTrade</span>
          </div>
        </Link>

        {/* 搜尋區塊維持不變 */}
        <div
          className={`search-area ${isSearchActive ? "active" : ""}`}
          onClick={handleSearchClick}
        >
          {isSearchActive ? (
            <input
              type="text"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜尋..."
              autoFocus
              onBlur={() => setIsSearchActive(false)}
            />
          ) : (
            <span className="search-placeholder">搜尋</span>
          )}
          <div className="search-icon">
            <img src={searchIcon} alt="Search Icon" />
          </div>
        </div>

        <nav className="main-navigation">
          <div
            className={`nav-item ${isServicesDropdownOpen ? "dropdown-active" : ""}`}
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <span>服務項目</span>
            {isServicesDropdownOpen && (
              <div className="dropdown-menu">
                {/* --- 修改重點三：使用統一的渲染函式 --- */}
                {services.map(renderLink)}
              </div>
            )}
          </div>
          
          {/* 收藏和購物車圖標 */}
          <div className="nav-item nav-with-icon">
            <img src={favoriteIcon} alt="收藏" className="nav-icon" />
            <span>收藏</span>
          </div>
          <div className="nav-item nav-with-icon">
            <img src={cartIcon} alt="購物車" className="nav-icon" />
            <span>購物車</span>
          </div>

          <div
            className={`nav-item membership ${isMembershipDropdownOpen ? "dropdown-active" : ""}`}
            onMouseEnter={() => setIsMembershipDropdownOpen(true)}
            onMouseLeave={() => setIsMembershipDropdownOpen(false)}
          >
            <img src={membershipIcon} alt="會員中心" className="nav-icon" />
            <span>會員中心</span>
            {isMembershipDropdownOpen && (
              <div className="dropdown-menu">
                {membershipItems.map(renderLink)}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
