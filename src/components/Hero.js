import React, { useContext, useEffect, useState } from 'react';
import CafeContext from '../context/CafeContext';

import { subtitleEN, subtitlePT } from '../services/texts';

export default function Hero() {
  const [subtitle, setSubtitle] = useState('');
  const { language } = useContext(CafeContext);

  useEffect(() => {
    if (language === 'PT') {
      return setSubtitle(subtitlePT);
    }
    return setSubtitle(subtitleEN);
  }, [language]);

  return (
    <div className="hero-container">
      <div className="hero-contents">
        <h1 className="hero-title text-white70 text-megrim text-stroke3">Café</h1>
        <h2 className="hero-subtitle text-megrim text-stroke1">{subtitle}</h2>
      </div>
    </div>
  );
}
