import React from "react";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    return(
        <div className="Navbar">
            <div className="LeftButtons">
                <button>All Posts(32)</button>
                <button>Article</button>
                <button>Event</button>
                <button>Education</button>
                <button>Job</button>
            </div>
            <div className="Gap"></div>
            <div className="Right">
                <button>
                    Write Post 
                    <div className="Triangle"></div>
                </button>
                <button>
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
            </div>
        </div>
    )
};
export default Navbar;