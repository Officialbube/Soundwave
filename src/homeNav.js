import React from "react";
import "./homeNav.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

const Homenav = function(){
    return(
        <div className="homenav-container">
            <nav>
                <a href="/"><HomeOutlinedIcon />Home</a>
                <a href="/"><TrendingUpOutlinedIcon />Trends</a>
                <a href="/"><ExploreOutlinedIcon />Feed</a>
            </nav>
        </div>
    )
}

export default Homenav;