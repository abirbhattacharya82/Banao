import React from "react";
import Cards from '../Cards/Cards';
import Location from '../Location/Location';
import './Articles.css';
function Articles(){
    return(
        <div className="Articles">
            <div className="Left">
                <Cards />
            </div>
            <div className="Right">
                <Location />
            </div>
        </div>
    )
};
export default Articles;