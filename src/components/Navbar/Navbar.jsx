import React from "react";
import './Navbar.css';
import Join from './Untitled.png';

function Navbar(){
    return(
        <div className="Navbar">
            <div className="LeftButtons">
                <button className="active">All Posts(32)</button>
                <button>Article</button>
                <button>Event</button>
                <button>Education</button>
                <button>Job</button>
            </div>
            <div className="RightButtons">
                <button id="wp">
                    <div className="contain">
                        Write Post 
                        <div className="Triangle"></div>
                    </div>
                </button>
                <button id="jg">
                    <div className="Image"><img src={Join} alt="" /></div>
                    Join Group
                </button>
            </div>
        </div>
    )
};
export default Navbar;