import union from './union.png';
import './Header.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Siddharth_Goyal from './joseph-gray.jpg';

function Header() {
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    return (
        <div className='Header'>
            <div className="Logo">
                <div className="Atg">
                    ATG.
                </div>
                <div className="World">
                    W
                </div>
                <div className="Union">
                    <img src={union} alt=''/>
                </div>
                <div className="World">
                    RLD
                </div>
            </div>
            <div className="Searchbar">
                <div className="container">
                    <button>
                        <FontAwesomeIcon icon={faSearch} className='SearchIcon' />
                    </button>
                    <input type="text" placeholder='Seacrh for your favourite groups in ATG' />
                </div>
            </div>
            <div className="LoggedArea">
                {
                    isLoggedIn? <div className="LoggedIn"><div className="Image"></div><div className="Text">Siddharth Goyal</div></div> : <div className="NotLoggedIn"><div className="Black">Create an Account. </div><div className="Blue">It's free</div></div>
                }
                <button><div className="Triangle"></div></button>
            </div>
        </div>
    )
}

export default Header;