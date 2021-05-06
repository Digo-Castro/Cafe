import React, { useContext } from 'react';
import CafeContext from '../context/CafeContext';

import email from '../images/email.svg';
import facebook from '../images/facebook.svg';
import github from '../images/github.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';
import webpage from '../images/webpage.svg';
import whatsapp from '../images/whatsapp.svg';

export default function Contact() {
  const { language } = useContext(CafeContext);

  return (
    <footer className="contact-container">
      <h2 className="section-title text-white70 text-megrim text-stroke1">{language === 'PT' ? 'Contato' : 'Contact'}</h2>
      <div className="contact-contents">
        <address className="contact-address text-white">
          <p>
            Tel.: +00 000 0000-0000
            <img src={whatsapp} alt="Whatsapp" className="contact-link-img" />
          </p>
          <a href="mailTo: cafe@cafe.com" Subject="Hello Café!" className="footer-link text-white">
            <p>
              <img src={email} alt="E-mail" className="contact-link-img" />
              E-mail
            </p>
          </a>
          <div className="contact-address-links-container">
            <a href="#xpto" className="footer-link text-white">
              <p>
                <img src={instagram} alt="Instagram" className="contact-link-img" />
                Instagram
              </p>
            </a>
            <a href="#xpto" className="footer-link text-white">
              <p>
                <img src={facebook} alt="Facebook" className="contact-link-img" />
                Facebook
              </p>
            </a>
            <a href="#xpto" className="footer-link text-white">
              <p>
                <img src={twitter} alt="Twitter" className="contact-link-img" />
                Twitter
              </p>
            </a>
          </div>
        </address>

      </div>
      <div className="contact-maker-container text-white">
        <p>Create by: Digo-Castro</p>
        <div className="contact-maker-links-container">
          <a href="#xpto" className="footer-link text-white">
            <p>
              <img src={webpage} alt="Webpage" className="contact-maker-link-img" />
              Page
            </p>
          </a>
          <a href="#xpto" className="footer-link text-white">
            <p>
              <img src={linkedin} alt="LinkedIn" className="contact-maker-link-img" />
              LinkedIn
            </p>
          </a>
          <a href="#xpto" className="footer-link text-white">
            <p>
              <img src={github} alt="GitHub" className="contact-maker-link-img" />
              GitHub
            </p>
          </a>
        </div>
        <p>Make with: React, Bootstrap, Unsplash and Creativity</p>
      </div>
    </footer>
  );
}
