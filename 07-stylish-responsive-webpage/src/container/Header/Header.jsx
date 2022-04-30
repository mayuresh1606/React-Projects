import React from 'react';

import './Header.css';
import {images} from "../../constants"
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">Key to fine dining</h1>
      <p className="p__opensans" style={{margin: "2rem 0"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium cum mollitia cumque a! Alias, perspiciatis aspernatur quae quo ab facere?</p>
      <button type='button' className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Img" />
    </div>
  </div>
);

export default Header;
