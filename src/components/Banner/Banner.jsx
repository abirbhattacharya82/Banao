import React from "react";
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import MobileLogin from "../MobileLogin/MobileLogin";

function Banner() {
    function showLogin()
    {
        document.getElementById('mobile_login_form_unique').style.display="block";
    }
    return (
        <div className="Banner">
            <div className="Text">
                <div className="ButtonAreaMobile">
                    <div className="Left">
                        <button><FontAwesomeIcon icon={faArrowLeft} /></button>
                    </div>
                    <div className="Right">
                        <button onClick={showLogin}>Join Group</button>
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