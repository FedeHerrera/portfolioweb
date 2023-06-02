import React from "react";
import './LandingPage.css'
import { Link } from 'react-router-dom'

function LandingPage(){
    return(
        <div id="landing">
            <Link to='/home'>
                <input id="button"/>
            </Link>
        </div>
    )
}

export default LandingPage;