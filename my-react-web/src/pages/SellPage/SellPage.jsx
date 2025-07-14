import React, { useState, useEffect } from 'react';
import './SellPage.css';

// Image imports
import brandIcon from '../../assets/brand-icon.svg';
import watchIllustration from '../../assets/images/4ab4e1dd641fcd2d72d111999020d8736fa76d49.png';
import option1Icon from '../../assets/images/I537_9750_244_2065.svg';
import option2Icon from '../../assets/images/I537_9751_244_2072.svg';
import option3Icon from '../../assets/images/I537_9752_244_2079.svg';
import option4Icon from '../../assets/images/I537_9753_244_2086.svg';
import uploadProofIcon from '../../assets/images/537_9774.svg';
import uploadImageIcon from '../../assets/images/537_9779.svg';
import xIcon from '../../assets/images/I537_9492_46_657_44_264.svg';
import instagramIcon from '../../assets/images/I537_9492_46_658_44_276.svg';
import facebookIcon from '../../assets/images/I537_9492_46_659_44_270.svg';


const SellPage = () => {
  const [selectedOptions, setSelectedOptions] = useState(['option1']); // Default selected
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    setIsSubmitDisabled(selectedOptions.length === 0);
  }, [selectedOptions]);

  const handleOptionClick = (optionId) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId) 
        : [...prev, optionId]
    );
  };

  const options = [
    { id: 'option1', icon: option1Icon, text: '原版包裝盒及證明' },
    { id: 'option2', icon: option2Icon, text: '原版證明文件' },
    { id: 'option3', icon: option3Icon, text: '原版包裝盒' },
    { id: 'option4', icon: option4Icon, text: '合作鑑定商文件' },
  ];

  return (
    <div className="page-content">
      {/* <header className="header"> ... </header> */}
      <main id="section-listing-form" className="listing-form-section">
        <div className="container">
          <nav className="breadcrumbs">
            <a href="#">賣錶</a>
            <span>/</span>
            <a href="#" className="active">商品登錄頁面</a>
          </nav>

          <form className="listing-form">
            <div className="form-grid-top">
              <div className="form-inputs-left">
                <h2 className="form-title">錶款細節(輸入鐘錶品牌、型號、系列等)</h2>
                <div className="form-group">
                  <label htmlFor="brand">品牌</label>
                  <input type="text" id="brand" name="brand" className="form-control" placeholder="Rolex" />
                </div>
                <div className="form-group">
                  <label htmlFor="model">型號</label>
                  <input type="text" id="model" name="model" className="form-control" placeholder="5172G-001" />
                </div>
                <div className="form-group">
                  <label htmlFor="year">製造年份</label>
                  <input type="text" id="year" name="year" className="form-control" placeholder="2018" />
                </div>
                <div className="form-group">
                  <label htmlFor="condition">保存狀況</label>
                  <input type="text" id="condition" name="condition" className="form-control" placeholder="優良" />
                </div>
              </div>
              <div className="form-image-right">
                <img src={watchIllustration} alt="Watch illustration" />
              </div>
            </div>

            <div className="form-options">
              <div className="options-row">
                {options.map(option => (
                  <button 
                    type="button" 
                    key={option.id}
                    className={`option-button ${selectedOptions.includes(option.id) ? 'selected' : ''}`}
                    onClick={() => handleOptionClick(option.id)}
                  >
                    <img src={option.icon} alt="" />
                    <span>{option.text}</span>
                  </button>
                ))}
              </div>
              
              <div className="price-section">
                <label className="price-label">設置您的銷售價格</label>
                <div className="price-row">
                  <input type="text" className="price-input" placeholder="NT$150,000" />
                  <button type="submit" className="submit-button" disabled={isSubmitDisabled}>放上拍賣選單</button>
                </div>
              </div>

              <div className="description-section">
                <label htmlFor="description" className="description-label">提供有關您腕錶的更多資訊:</label>
                <textarea id="description" name="description" className="form-control description-input" rows="4" placeholder="請輸入欲補充描述"></textarea>
              </div>
            </div>

            <div className="upload-section">
              <div className="upload-item">
                <div className="upload-box">
                  <img src={uploadProofIcon} alt="Upload proof icon" className="upload-icon" />
                </div>
                <p className="upload-label">上傳手錶相關證明</p>
              </div>
              <div className="upload-item">
                <div className="upload-box">
                  <img src={uploadImageIcon} alt="Upload image icon" className="upload-icon" />
                </div>
                <p className="upload-label">上傳手錶相關圖片</p>
              </div>
            </div>
          </form>
        </div>
      </main>
      {/* <footer id="section-footer" className="site-footer"> ... </footer> */}
    </div>
  );
};

export default SellPage;
