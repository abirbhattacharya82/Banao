import React from "react";
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Banner() {
    return (
        <div className="Banner">
            <div className="Text">
                <div className="ButtonAreaMobile">
                    <div className="Left">
                        <button><FontAwesomeIcon icon={faArrowLeft} /></button>
                    </div>
                    <div className="Right">
                        <button>Join Group</button>
                    </div>
                </div>
                <div className="Heading">
                    Computer Engineering
                </div>
                <div className="Subheading">
                    142,765 Computer Engineers follow this
                </div>
            </div>
        </div>
    )
};
export default Banner;