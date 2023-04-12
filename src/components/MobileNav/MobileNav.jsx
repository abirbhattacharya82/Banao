import React from "react";
import './MobileNav.css';

function MobileNav() {
    return (

        <div className="NavForMobile">
            <button id="active">All Posts(32)</button>
            <div className="Gap"></div>
            <button><div className="text">Filter: All </div><div className="Triangle"></div></button>
        </div>
    )
};
export default MobileNav;