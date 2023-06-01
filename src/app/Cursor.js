import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (event) => {
    const { clientX: x, clientY: y } = event;
    setCursorPosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="dark:fixed dark:z-50 dark:w-4 dark:h-4 dark:shadow-[0_35px_35px_rgba(0,250,255,1)] dark:rounded-full dark:pointer-events-none"
      style={{ top: cursorPosition.y, left: cursorPosition.x }}
    ></div>
  );
};

export default Cursor;
