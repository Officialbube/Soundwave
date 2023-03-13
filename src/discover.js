import React from "react";
import "./discover.css"
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';

const Discover = function(){
    return(
        <div className="discover-container">
            <p>Discover</p>
            <nav>
                <a href="/"><WidgetsOutlinedIcon />New and Notable</a>
                <a href="/"><CalendarMonthOutlinedIcon />Release Calender</a>
                <a href="/"><ConfirmationNumberOutlinedIcon />Events</a>
            </nav>
        </div>
    )
}

export default Discover;