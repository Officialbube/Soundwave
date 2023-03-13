import React from "react";
import "./collection.css"
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Collection = function(){
    return(
        <div className="collection-container">
            <p>Your Collection</p>
            <nav>
                <a href="/"><FavoriteBorderOutlinedIcon />Favourite Songs</a>
                <a href="/"><PeopleOutlineOutlinedIcon />Artist</a>
                <a href="/"><StarBorderOutlinedIcon />Albums</a>
            </nav>
        </div>
    )
}

export default Collection;