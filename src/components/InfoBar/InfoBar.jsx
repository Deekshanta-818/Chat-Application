  
import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
      <h3 style={{marginLeft:'80px',color:'green'}} className='emoji'>Chat with anyone you like<span role='img' aria-label="emoji" >🥰</span><span role='img' aria-label="emoji" >😎</span><span role='img' aria-label="emoji" >😊</span></h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;