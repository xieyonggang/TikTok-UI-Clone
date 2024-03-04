import React, { useRef, useEffect } from 'react';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';
import './YTVideoCard.css';

const YTVideoCard = (props) => {
  const { url, username, description, song, likes, shares, comments, saves, profilePic, setVideoRef, autoplay } = props;
  const videoRef = useRef(null);


  return (
    <div className="video">
      {/* The video element */}
      <iframe width="560" height="315" 
        src={url} title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
      
      <div className="bottom-controls">
        <div className="footer-left">
          {/* The left part of the container, comments and etc */}
          <FooterLeft username={username} description={description} song={song} />
        </div>
        <div className="footer-right">
          {/* The right part of the container */}
          <FooterRight likes={likes} shares={shares} comments={comments} saves={saves} profilePic={profilePic} />
        </div>
        
      </div>
      
    </div>
  );
};

export default YTVideoCard;
