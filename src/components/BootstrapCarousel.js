import React, { useContext, useEffect, useState } from 'react';
import CafeContext from '../context/CafeContext';
import coffeeCupLand from '../images/coffeeCupLand.jpg';
import coffeeCupWhite from '../images/coffeeCupWhite.jpg';
import coffeeExpress from '../images/coffeeExpress.jpg';
import coffeeFirst from '../images/coffeeFirst.jpg';
import coffeeMachine from '../images/coffeeMachine.jpg';

export default function BootstrapCarousel() {
  const [actionPrevious, setActionPrevious] = useState('');
  const [actionNext, setActionNext] = useState('');
  const { language } = useContext(CafeContext);

  useEffect(() => {
    if (language === 'PT') {
      setActionPrevious('Anterior');
      return setActionNext('Próximo');
    }
    setActionPrevious('Previous');
    return setActionNext('Next');
  }, [language]);

  return (
    <div className="carousel-container">
      <h2 className="section-title text-white70 text-megrim text-stroke1">{language === 'PT' ? 'Galeria' : 'Galery'}</h2>
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active" />
          <li data-target="#carousel" data-slide-to="1" />
          <li data-target="#carousel" data-slide-to="2" />
          <li data-target="#carousel" data-slide-to="3" />
          <li data-target="#carousel" data-slide-to="4" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-slide1">
              <img className="d-block w-100" src={coffeeFirst} alt="Slide 1" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-slide2">
              <img className="d-block w-100" src={coffeeCupWhite} alt="Slide 2" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-slide3">
              <img className="d-block w-100" src={coffeeExpress} alt="Slide 3" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-slide4">
              <img className="d-block w-100" src={coffeeCupLand} alt="Slide 4" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-slide5">
              <img className="d-block w-100" src={coffeeMachine} alt="Slide 4" />
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">{actionPrevious}</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="sr-only">{actionNext}</span>
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
