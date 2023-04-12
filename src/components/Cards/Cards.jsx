import React from "react";
import './Cards.css';
import More from '../More/More';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

function Cards() {
    return (
        <div className="Cards">
            <div className="Card">
                <div className="Image" id="img1">

                </div>
                <div className="Type">
                    ✍️ Article
                </div>
                <div className="TitleArea">
                    <div className="Text">
                        What if famous brands had regular fonts? Meet RegulaBrands!
                    </div>
                    <More />
                </div>
                <div className="Subtitle">
                    I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                </div>
                <div className="Postedby">
                    <div className="Left">
                        <div className="Pfp" id="pfp1">

                        </div>
                        <div className="Name">
                            Sarthak Kamra
                        </div>
                    </div>
                    <div className="Right">
                        <FontAwesomeIcon icon={faEye} id="view" /> 1.4k views
                        <div className="Buttons">
                            <button>
                                <FontAwesomeIcon icon={faShareAlt} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Card">
                <div className="Image" id="img2">

                </div>
                <div className="Type">
                    🔬️ Education
                </div>
                <div className="TitleArea">
                    <div className="Text">
                        Tax Benefits for Investment under National Pension Scheme launched by Government
                    </div>
                    <More />
                </div>
                <div className="Subtitle">
                    I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                </div>
                <div className="Postedby">
                    <div className="Left">
                        <div className="Pfp" id="pfp2">

                        </div>
                        <div className="Name">
                            Sarah West
                        </div>
                    </div>
                    <div className="Right">
                        <FontAwesomeIcon icon={faEye} id="view" /> 1.4k views
                        <div className="Buttons">
                            <button>
                                <FontAwesomeIcon icon={faShareAlt} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Card">
                <div className="Image" id="img3">

                </div>
                <div className="Type">
                    🗓️ Meetup
                </div>
                <div className="TitleArea">
                    <div className="Text">
                        Finance & Investment Elite Social Mixer @Lujiazui
                    </div>
                    <More />
                </div>
                <div className="Postedby">
                    <div className="Left">
                        <div className="Pfp" id="pfp3">

                        </div>
                        <div className="Name">
                            Ronal Jones
                        </div>
                    </div>
                    <div className="Right">
                        <FontAwesomeIcon icon={faEye} id="view" /> 1.4k views
                        <div className="Buttons">
                            <button>
                                <FontAwesomeIcon icon={faShareAlt} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Card">
                <div className="Type">
                    💼️ Job
                </div>
                <div className="TitleArea">
                    <div className="Text">
                        Software Developer
                    </div>
                    <More />
                </div>
                <div className="Postedby">
                    <div className="Left">
                        <div className="Pfp" id="pfp4">

                        </div>
                        <div className="Name">
                            Joseph Gray
                        </div>
                    </div>
                    <div className="Right">
                        <FontAwesomeIcon icon={faEye} id="view" /> 1.4k views
                        <div className="Buttons">
                            <button>
                                <FontAwesomeIcon icon={faShareAlt} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Cards;