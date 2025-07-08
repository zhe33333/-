import React from "react";
import { ButtonBase } from "@mui/material";
import { Icon } from "@mui/material";
import cilCart from "./assets/cil-cart.svg";
import flatColorIconsGoogle from "./assets/flat-color-icons-google.svg";
import icBaselineApple from "./assets/ic-baseline-apple.svg";
import x1 from "./assets/--icon-1.svg";
import image from "./assets/---3.png"; 
import vector0 from "./assets/vector---0.svg";
import vector0_2 from "./assets/vector---0-2.svg"; 
import "./Screen.css";

export const Screen = () => {
  return (
    <div className="page-container">
      <header className="header">
        <div className="content">
          <div className="brandname-icon">
            <Icon color="inherit" />
            <div className="brand-name">
              <h1 className="text-wrapper">WeTrade</h1>
            </div>
          </div>

          <div className="search-area" role="search">
            <span className="div">搜尋</span>
            <Icon color="action" />
          </div>

          <nav className="view" aria-label="Main navigation">
            <div className="services">
              <span className="text-wrapper-2">服務項目</span>
            </div>

            <div className="div-2">
              <span className="text-wrapper-2">收藏</span>
              <Icon color="inherit" />
            </div>

            <div className="div-2">
              <span className="text-wrapper-2">購物車</span>
              <img className="img" alt="購物車圖示" src={cilCart} />
            </div>

            <div className="membership">
              <img className="component" alt="會員圖示" src={x1} />
              <span className="text-wrapper-2">會員中心</span>
            </div>
          </nav>
        </div>
      </header>

      <main className="view-2" role="main">
        <section className="keyin-area">
          <div className="div-3">
            <label className="email-label" htmlFor="email">
              <span className="span">請輸入</span>
              <span className="text-wrapper-3">Email</span>
            </label>
            <div className="input">
              <input
                id="email"
                type="email"
                className="email-placeholder"
                placeholder="例123456@gmail.com"
                aria-label="Email"
              />
            </div>
          </div>

          <div className="div-3">
            <label className="password-label" htmlFor="password">
              Password
            </label>
            <div className="input">
              <input
                id="password"
                type="password"
                className="password-placeholder"
                placeholder="********"
                aria-label="Password"
              />
            </div>
          </div>
        </section>

        <div className="other-functions">
          <div className="left-part">
            <a href="#" className="text-wrapper-4">
              註冊帳號
            </a>
          </div>
          <div className="right-part">
            <a href="#" className="text-wrapper-4">
              忘記密碼?
            </a>
          </div>
        </div>

        <button className="login-button" type="submit">
          <span className="div-4">登入</span>
          <img className="img" alt="登入圖示" src={x1} />
        </button>

        <div className="lower-area">
          <button className="button-a">
            <span className="div-4">
              <span className="text-wrapper-5">使用</span>
              <span className="text-wrapper-3">Google</span>
              <span className="text-wrapper-5">繼續</span>
            </span>
            <img
              className="img"
              alt="Google 登入圖示"
              src={flatColorIconsGoogle}
            />
          </button>

          <button className="button-b">
            <span className="div-4">
              <span className="text-wrapper-5">使用</span>
              <span className="text-wrapper-3">Apple</span>
              <span className="text-wrapper-5">繼續</span>
            </span>
            <img className="img" alt="Apple 登入圖示" src={icBaselineApple} />
          </button>
        </div>
      </main>

      <footer className="footer">
        <div className="content-2">
          <nav className="functions" aria-label="Footer navigation">
            <a href="#" className="text-wrapper-6">
              隱私權政策
            </a>
            <a href="#" className="text-wrapper-6">
              網站地圖
            </a>
            <a href="#" className="text-wrapper-6">
              聯絡我們
            </a>
          </nav>

          <div className="socials" aria-label="Social media links">
            <div className="depth-frame-wrapper">
              <div className="depth-frame">
                <div className="vector-wrapper">
                  <img className="vector" alt="Twitter" src={image} />
                </div>
              </div>
            </div>

            <div className="depth-frame-wrapper">
              <div className="div-wrapper">
                <div className="vector-wrapper">
                  <img className="vector-2" alt="Instagram" src={vector0} />
                </div>
              </div>
            </div>

            <div className="depth-frame-wrapper">
              <div className="depth-frame">
                <div className="vector-wrapper">
                  <img className="vector-2" alt="Facebook" src={vector0_2} />
                </div>
              </div>
            </div>
          </div>

          <div className="claims">
            <p className="p" aria-label="Copyright">
              @2025 WeTrade. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};