// src/App.jsx

import React from 'react';
import { Screen } from './Screen'; // 1. 在 App.jsx 中引入 Screen 元件

function App() {
  // 2. 讓 App 元件直接回傳您的 Screen 元件
  return (
    <Screen />
  );
}

export default App;