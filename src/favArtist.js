import React from "react";
import "./favArtist.css"

const FavArtist = function(){
    return(
        <div className="favArtist-container">
            <div className="favArtist-title">
                <h2>Fav Artist</h2>
            </div>
            <div className="favArtist-details">
                
                    <div className="favArtist-profile">
                        <div className="favArtist-image"></div>
                        <div className="favArtist-song">
                            <div className="favArtist-name">
                                <h4>Taylor Swift</h4>
                            </div>
                            <div className="favArtist-library">
                                <p>190 songs in library</p>
                            </div>
                        </div>
                    </div>
                    <div className="favArtist-more">
                        <h4>..</h4>
                    </div>
                
            </div>
        </div>
    );
}

export default FavArtist;