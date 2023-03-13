import React from "react";
import "./shortcut.css"

const Shortcut = function(){
    return(
        <div className="container">
            <div className="shortcut-title">
                <h2>Shortcuts</h2>
            </div>
            <div className="shortcut-details">
                <div className="item">
                    <p>❄️Chill Hits</p>
                </div>
                <div className="item">
                    <p>⭐Hop</p>
                </div>
                <div className="item">
                    <p>🎸Accoustic</p>
                </div>
                <div className="item">
                    <p>🎵Indie Pop</p>
                </div>
                <div className="item">
                    <p>🎹Piano Blues</p>
                </div>
                <div className="item">
                    <p>🎺Jazz</p>
                </div>
            </div>
        </div>
    );
}

export default Shortcut;