import React,{ useRef, useState } from "react";

const LeftBar = () => {
  const leftBarTab = useRef(null);
  const [tab, settab] = useState(false);

  const handleClick = () => {
    settab(!tab);
  };
  return (
    <div className='left-bar-container'>
      {tab && (
        <div className='left-bar-container_content' ref={leftBarTab}>
          <div className='left-bar-container_content-card'>
            <input type='text' placeholder='Look for a place...' />
            <span>Pick a Place</span>
          </div>
          <div className='left-bar-container_content_list'>
            <div className='item'>
              <i className='fa-solid fa-utensils'></i>

              <p>Restaurants</p>
            </div>
            <div className='item'>
              <i className='fa-solid fa-prescription-bottle-medical'></i>

              <p>Pharmacies</p>
            </div>
            <div className='item'>
              <i className='fa-solid fa-heart'></i>
              <p>Cosmetics</p>
            </div>
            <div className='item'>
              <i className='fa-solid fa-car'></i>
              <p>Car Services</p>
            </div>
            <div className='item'>
              <i className='fa-sharp fa-solid fa-place-of-worship'></i>
              <p>Worship Places</p>
            </div>
            <div className='item'>
              <i className='fa-sharp fa-solid fa-baseball'></i>

              <p>Sport</p>
            </div>
          </div>
          <div className='left-bar-container_ads'></div>
        </div>
      )}
      <div className='left-bar-container_arrow' onClick={handleClick}>
        {tab ? (
          <i className='fa-sharp fa-solid fa-circle-arrow-left'></i>
        ) : (
          <i className='fa-solid fa-circle-arrow-right'></i>
        )}
      </div>
    </div>
  );
};

export default LeftBar;
