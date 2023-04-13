import React from "react";
import './Write.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function Write() {
    return (
        <div className="Write">
            <button>
                <FontAwesomeIcon icon={faPencilAlt} />
            </button>
        </div>
    )
};
export default Write;