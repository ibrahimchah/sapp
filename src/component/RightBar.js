import React, { useState } from "react";

const RightBar = () => {
  const [tab, settab] = useState(false);
  return (
    <div className='right-container'>
      <div className='menu'>
        {!tab ? (
          <i className='fa-solid fa-bars' onClick={() => settab(!tab)}></i>
        ) : (
          <i
            className='fa-sharp fa-solid fa-circle-xmark'
            onClick={() => settab(!tab)}
          ></i>
        )}
        <div className='map-item'>
          <i class='fa-solid fa-location-dot'></i>
        </div>
        <div className='map-item'>
          <i class='fa-solid fa-magnifying-glass-plus'></i>
        </div>
        <div className='map-item'>
          <i class='fa-solid fa-magnifying-glass-minus'></i>
        </div>
        <div className='map-item'>
          <i class='fa-solid fa-vr-cardboard'></i>
        </div>
        <div className='map-item'>
          <i class='fa-solid fa-share-from-square'></i>
        </div>
        <div className='map-item'>
          <i class='fa-solid fa-print'></i>
        </div>
      </div>
      {tab && (
        <div className='right-container_user_part'>
          <div className='user-info item'>
            <i className='fa-solid fa-user'></i>
            <p>user name</p>
          </div>
          <div className='item'>
            <i className='fa-sharp fa-solid fa-basket-shopping'></i>
            <p>Basket</p>
          </div>
          <div className='item'>
            <i className='fa-solid fa-wand-magic-sparkles'></i>
            <p>Interesting places</p>
          </div>
          <div className='item'>
            <i className='fa-solid fa-virus-covid'></i>
            <p>Covid-19</p>
          </div>
          <div className='item'>
            <i className='fa-sharp fa-solid fa-mobile'></i>
            <p>Android</p>
          </div>
          <div className='item'>
            <i className='fa-sharp fa-solid fa-desktop'></i>
            <p>PC version</p>
          </div>

          <div className='item'>
            <i className='fa-solid fa-building'></i>
            <p>Add Organization</p>
          </div>
          <div className='item'>
            <i className='fa-solid fa-square-person-confined'></i>
            <p>Personal Area</p>
          </div>
          <div className='item'>
            <i className='fa-solid fa-rectangle-ad'></i>
            <p>Advertising</p>
          </div>
          <div className='item'>
            <i className='fa-solid fa-sitemap'></i>
            <p>App API</p>
          </div>
          <div className='item'>
            <i className='fa-solid fa-database'></i>
            <p>App data</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightBar;
