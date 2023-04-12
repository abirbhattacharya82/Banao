import React from "react";
import './Location.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Warning from '../Warning/Warning';

function Location() {
    return (
        <div className="Location">
            <div className="MoveR">
                <div className="InputArea">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <input type="text" />
                    <button id="location_search">
                        <FontAwesomeIcon icon={faTimes} id="loc" />
                    </button>
                </div>
                <br />
                <Warning />
            </div>
        </div>
    )
};
export default Location;