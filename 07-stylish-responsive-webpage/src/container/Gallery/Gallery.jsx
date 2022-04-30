import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';
import { useRef } from 'react';

const Gallery = () => {
  const scrollRef = React.useRef(null)
  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
  const scroll = (direction) => {
    const {current} = scrollRef;
    if (direction === "left"){
      current.scrollLeft -= 300;
    }else{
      current.scrollLeft += 300;
    }
  }
  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title={"Instagram"}></SubHeading>
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color:'#aaa', marginTop:"2rem"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolor libero pariatur saepe incidunt dolorem!</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => {
            return <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="Gallery" />
              <BsInstagram className='gallery__image-icon' />
            </div>
          })}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll("left")}></BsArrowLeftShort>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll("right")}></BsArrowRightShort>
        </div>
      </div>
    </div>
  )
}

export default Gallery;
