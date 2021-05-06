import React, { useContext } from 'react';
import CafeContext from '../context/CafeContext';

export default function Location() {
  const { language } = useContext(CafeContext);

  return (
    <div className="location-container">
      <h2 className="section-title text-white70 text-megrim text-stroke1">{language === 'PT' ? 'Localização' : 'Location'}</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3113.3869304496006!2d-9.1339239!3d38.7089246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193476d59d2bd3%3A0x62aead7a3abe381b!2sRua%20da%20Alf%C3%A2ndega%2044%2C%201100-135%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2sbr!4v1620315363792!5m2!1sen!2sbr" width="350" height="250" allowFullScreen="" loading="lazy" title="map" className="location-iframe" />
    </div>
  );
}
