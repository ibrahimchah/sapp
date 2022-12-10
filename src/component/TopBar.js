import React from "react";

const TopBar = () => {
  return (
    <div className='top-bar'>
      <div className='top-Bar_left bar'>
        <i className='fa-sharp fa-solid fa-arrows-split-up-and-left'></i>
      </div>
      <div className='top-bar_center bar'>
        <i className='fa-solid fa-house-medical-flag'></i>
        <i className='fa-solid fa-ruble-sign'></i>
        <i className='fa-solid fa-signs-post'></i>
        <i className='fa-sharp fa-solid fa-braille'></i>
      </div>
      <div className='top-Bar_right bar'>
        <i className='fa-solid fa-right-to-bracket'></i>
        <span className='bar-txt'>Login</span>
      </div>
    </div>
  );
};

export default TopBar;
