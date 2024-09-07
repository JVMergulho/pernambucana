import React, { useState, useEffect } from 'react';
import '../style/personalizedServices.css';
import iconwoman from "../assets/iconwoman.svg"
import iconedu from "../assets/iconedu.svg"
import iconprof from "../assets/iconprof.svg"
import iconhealth from "../assets/iconhealth.svg"


const items = [
    { img: iconwoman, text: 'Proteção' },
    { img: iconedu, text: 'Campanhas' },
    { img: iconprof, text: 'Profissional' },
    { img: iconhealth, text: 'Saúde' }
  ];
  
  const MyComponent = () => {
    return (
      <div className= 'pservices-container'>
        {items.map((item, index) => (
          <div key={index} className= 'pservices-item'>
            <div className= 'pservices-rectangle'>
              <img src={item.img} alt="" className= 'pservices-image' />
            </div>
            <div className= 'pservices-text'>{item.text}</div>
          </div>
        ))}
      </div>
    );
  };
  
  export default MyComponent;