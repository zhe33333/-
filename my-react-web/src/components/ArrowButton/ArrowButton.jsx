import React from 'react';
import './ArrowButton.css';

const ArrowButton = ({ direction, targetRef, scrollAmount = 168 }) => {
  const handleClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const leftArrow = (
    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.125 18.5H10.125M10.125 18.5L14.25 22.625M10.125 18.5L14.25 14.375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 23V14C3 12.4087 3.63214 10.8826 4.75736 9.75736C5.88258 8.63214 7.4087 8 9 8H27C28.5913 8 30.1174 8.63214 31.2426 9.75736C32.3679 10.8826 33 12.4087 33 14V23C33 24.5913 32.3679 26.1174 31.2426 27.2426C30.1174 28.3679 28.5913 29 27 29H9C7.4087 29 5.88258 27.8679 4.75736 27.2426C3.63214 26.1174 3 24.5913 3 23Z" strokeWidth="1.5" />
    </svg>
  );

  const rightArrow = (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.125 18H25.125M25.125 18L21 22.125M25.125 18L21 13.875" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 22.5V13.5C3 11.9087 3.63214 10.3826 4.75736 9.25736C5.88258 8.13214 7.4087 7.5 9 7.5H27C28.5913 7.5 30.1174 8.13214 31.2426 9.25736C32.3679 10.3826 33 11.9087 33 13.5V22.5C33 24.0913 32.3679 25.6174 31.2426 26.7426C30.1174 27.8679 28.5913 28.5 27 28.5H9C7.4087 28.5 5.88258 27.8679 4.75736 26.7426C3.63214 25.6174 3 24.0913 3 22.5Z" strokeWidth="1.5" />
    </svg>
  );

  return (
    <button className="arrow-button small" onClick={handleClick}>
      {direction === 'left' ? leftArrow : rightArrow}
    </button>
  );
};

export default ArrowButton;
