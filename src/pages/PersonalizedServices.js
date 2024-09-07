import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/personalizedServices.css';
import iconwoman from "../assets/iconwoman.svg";
import iconedu from "../assets/iconedu.svg";
import iconprof from "../assets/iconprof.svg";
import iconhealth from "../assets/iconhealth.svg";

const items = [
  { img: iconwoman, text: 'Proteção', path: '/app/serviceMacro' },
  { img: iconedu, text: 'Campanhas', path: '/app/serviceCampaigns' },
  { img: iconprof, text: 'Profissional', path: '/app/serviceProfessional' },
  { img: iconhealth, text: 'Saúde', path: '/app/serviceHealth' }
];

const MyComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className='pservices-container'>
      {items.map((item, index) => (
        <div key={index} className='pservices-item'>
          <button onClick={() => handleNavigate(item.path)}>
            <div className='pservices-rectangle'>
              <img src={item.img} alt="" className='pservices-image' />
            </div>
            <div className='pservices-text'>{item.text}</div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
