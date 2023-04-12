import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './Groups.css';

function Groups(){
    return(
        <div className="Groups">
            <div className="Heading">
                <div className="Image">
                <FontAwesomeIcon icon={faThumbsUp} className="like" />
                </div>
                <div className="Texti">
                    RECOMMENDED GROUPS
                </div>
            </div>
            <div className="Group">
                <div className="Image" id="grp1"></div>
                <div className="Name">Leisure</div>
                <div className="Button"><button>Follow</button></div>
            </div>
            <div className="Group">
                <div className="Image" id="grp2"></div>
                <div className="Name">Activism</div>
                <div className="Button"><button>Follow</button></div>
            </div>
            <div className="Group">
                <div className="Image" id="grp3"></div>
                <div className="Name">MBA</div>
                <div className="Button"><button>Follow</button></div>
            </div>
            <div className="Group">
                <div className="Image" id="grp4"></div>
                <div className="Name">Philosophy</div>
                <div className="Button"><button>Follow</button></div>
            </div>
        </div>
    )
};
export default Groups;