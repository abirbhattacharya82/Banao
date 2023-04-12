import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Warning.css';

function Warning() {
    return (
        <div className="Warning">
            <div className="LeftWarning">
                <FontAwesomeIcon icon={faExclamationCircle} color="black" id='war_ic' />
            </div>
            <div className="RightWarning">
                Your location will help us serve better and extend a personalised experience.
            </div>
        </div>
    )
};
export default Warning;