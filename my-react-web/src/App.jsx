// src/App.jsx

import React from 'react';
import { LoginPage } from './pages/LoginPage'; // 1. 在 App.jsx 中引入 LoginPage 元件
import './styles/App.css';

function App() {
  // 2. 讓 App 元件直接回傳您的 Screen 元件
  return (
    <LoginPage />
  );
}

export default App;
