import React from "react";
import './Location.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Warning from '../Warning/Warning';
import Groups from '../Groups/Groups';

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
                <Groups />
            </div>
        </div>
    )
};
export default Location;