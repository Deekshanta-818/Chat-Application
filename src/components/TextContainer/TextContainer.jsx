import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1 style={{color:'lightblue'}} >Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2 style={{color:'yellow'}} >Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2 style={{color:'red'}} >Let's have a chat<span role="img" aria-label="emoji">⬅️</span></h2>
      <h2 style={{color:'royalblue'}}>By: Deekshanta <span role='img' aria-label='emoji' >💥</span> Paudel</h2>
    </div>
    {
      users
        ? (
          <div>
            <h1 style={{fontFamily:'Fredericka the Great',color:'green'}} >People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;