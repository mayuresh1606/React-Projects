import React from 'react';

import {images} from "../../constants"
import {SubHeading} from "../../components"
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"></SubHeading>
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="Qoute" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, repudiandae.</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio necessitatibus sint eaque incidunt iusto porro velit veniam eligendi quod natus!</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin lou</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="Sign" />
      </div>
    </div>


  </div>
);

export default Chef;
