import React, { useState, useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const lerpedPosition = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const lerpFactor = 1.5;

  useEffect(() => {
    const updateMousePosition = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const updateHoverState = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('.brand-section')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseMove = (e) => {
      updateMousePosition(e);
      updateHoverState(e);
    };

    let animationFrameId;
    const animateCursor = () => {
      // Lerp the position
      lerpedPosition.current.x += (mousePosition.current.x - lerpedPosition.current.x) * lerpFactor;
      lerpedPosition.current.y += (mousePosition.current.y - lerpedPosition.current.y) * lerpFactor;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${lerpedPosition.current.x}px, ${lerpedPosition.current.y}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationFrameId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
    >
      <div className="cursor-dot"></div>
    </div>
  );
};

export default CustomCursor;
