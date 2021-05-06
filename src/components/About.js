import React, { useContext, useEffect, useState } from 'react';
import CafeContext from '../context/CafeContext';

import {
  aboutTextOneEN,
  aboutTextOnePT,
  aboutTextTwoEN,
  aboutTextTwoPT,
} from '../services/texts';

export default function About() {
  const [aboutTextOne, setAoutTextOne] = useState('');
  const [aboutTextTwo, setAboutTextTwo] = useState('');

  const { language } = useContext(CafeContext);

  useEffect(() => {
    if (language === 'PT') {
      setAoutTextOne(aboutTextOnePT);
      return setAboutTextTwo(aboutTextTwoPT);
    }
    if (language === 'EN') {
      setAoutTextOne(aboutTextOneEN);
      return setAboutTextTwo(aboutTextTwoEN);
    }
  }, [language]);

  return (
    <div className="about-container">
      <h2 className="section-title text-white70 text-megrim text-stroke1">{language === 'PT' ? 'Sobre' : 'About'}</h2>
      <div className="about-contents w95">
        <div className="about-img about-img-one" />
        <article className="about-article">
          {aboutTextOne}
        </article>
      </div>
      <div className="about-contents w95">
        <article className="about-article">
          {aboutTextTwo}
        </article>
        <div className="about-img about-img-two" />
      </div>
    </div>
  );
}
