import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CafeContext from '../context/CafeContext';
import { naviItemsEN, naviItemsPT } from '../services/lists';

export default function App() {
  const [naviItems, setNaviItems] = useState([]);
  const { language, setLanguage } = useContext(CafeContext);

  const langChange = ({ target }) => {
    const { id } = target;
    if (id === 'PT-BTN') {
      return setLanguage('PT');
    }
    return setLanguage('EN');
  };

  useEffect(() => {
    if (language === 'PT') {
      return setNaviItems(naviItemsPT);
    }
    return setNaviItems(naviItemsEN);
  }, [language]);

  return (
    <header className="header-container">
      <div className="header-content w95">
        <div className="header-logo-navi-container">
          <span className="header-logo text-megrim text-stroke1 white-100">Café</span>
          <navi className="header-navi">
            <ul className="header-navi-list">
              {naviItems.map((item, index) => <li className="header-navi-item" key={index}><a href="#xpto">{item}</a></li>)}
            </ul>
          </navi>
        </div>
        <div className="header-controls-container">
          <div className="header-login-BTN-container">
            <Link to="/login" className="header-link-login  btn btn-outline-secondary" id="Login-BTN">Login</Link>
          </div>
          <div className="header-langs">
            <button type="button" className="header-lag-btn btn btn-outline-secondary btn-sm" onClick={langChange} id="PT-BTN">PT</button>
            <button type="button" className="header-lag-btn btn btn-outline-secondary btn-sm" onClick={langChange} id="EN-BTN">EN</button>
          </div>
        </div>
      </div>
    </header>
  );
}
