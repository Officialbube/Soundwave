import React from "react";

import "./topbar.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Topbar = function (){
    return(
        <div className="header-container">
            <div className="arrow-container">
                <ArrowBackIcon />
                <ArrowForwardIcon />
            </div>
            <div className="search-container">
                <input type="searchinput" placeholder="search for artists,songs and..." className="search"/>
            </div>
        </div>
    );
}

export default Topbar;