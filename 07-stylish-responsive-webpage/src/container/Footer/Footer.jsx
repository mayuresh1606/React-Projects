import React from 'react';

import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay></FooterOverlay>
    <Newsletter></Newsletter>
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className="p__opensans">221B, Baker Street, London</p>
        <p className="p__opensans">8169564792</p>
        <p className="p__opensans">8652102923</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="Footer logo" />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, saepe.</p>
        <img src={images.spoon} alt="Spoon" className='spoon__img' style={{marginTop:"15"}}/>
        <div className="app__footer-links_icons"><FiFacebook /><FiTwitter /><FiInstagram /></div>
      </div>
      <div className="app__footer-links_work">
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
