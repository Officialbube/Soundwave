import React from "react";
import "./trending.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Trending = function(){
    return(
        <div className="trending-container">
            <p>What's new 🔥</p>
            <div className="trend-title">
                <h2>Trending</h2>
                <div className="more">
                    <a href="/">More</a>
                    <ArrowForwardIosIcon />
                </div>
                
            </div>
            
            <div className="hero-card">
                <div>
                    <p>Artist</p>
                    <h2>On Top<span>Of The World</span></h2>
                    <button className="play">PLAY</button>
                    <button className="follow">FOLLOW</button>
                </div>
                
            </div>
        </div>
    );
};

export default Trending;