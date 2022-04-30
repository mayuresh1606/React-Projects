import React from 'react';
import { useState } from 'react';

import { BsFillPlayFill, BsPauseFill} from "react-icons/bs"
import {meal} from "../../constants"
import './Intro.css';

const Intro = () => {
  const[playVideo, setPlayVideo] = useState(false)

  const vidRef = React.useRef();
  const handleVideo = () => {
    setPlayVideo(!playVideo);
    if(playVideo){
      vidRef.current.pause();
      const videoDiv = document.querySelector(".app__video-overlay")
      videoDiv.classList.remove("app__video-opacity-reduce");
    }else{
      vidRef.current.play();
      const videoDiv = document.querySelector(".app__video-overlay")
      videoDiv.classList.add("app__video-opacity-reduce");
    }
  }
  return (
    <div className='app__video'>
      <video src={meal} type="video/mp4" loop controls={false} muted ref={vidRef} />
      <div className="app__video-overlay flex__center">
        <div 
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo?<BsPauseFill color='#fff' fontSize={30}/>:<BsFillPlayFill color='#fff' fontSize={30}/>}
        </div>
      </div>
    </div>
    )
}

export default Intro;
