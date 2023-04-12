import union from './union.png';
import './Header.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword,setShowPassword] =useState(false);
    useEffect(() => {
        const loginStatus = localStorage.getItem('loginStatus');
        setIsLoggedIn(loginStatus === 'true');
    }, []);
    return (
        <div className='Header'>
            <div className="LoginAreaDesktop">
                <div className="Form">
                    <div className="Crossbutton">
                        <button>
                            <FontAwesomeIcon icon={faTimes} className='cross' />
                        </button>
                    </div>
                    <div className="FormfieldArea">
                        <div className="Formfield">
                            <div className="Heading">
                                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                            </div>
                            <div className="SecondLine">
                                <div className="Left">
                                    Sign In
                                </div>
                                <div className="Right">
                                    <div className="Text">
                                        Don't have an account yet?
                                        <button>
                                            Create new for free!
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="MainForm">
                                <div className="Left">
                                    <div className="InputArea">
                                        <input type="email" placeholder='Email' id='email' />
                                    </div>
                                    <div className="InputArea">
                                        <input type="password" placeholder='Password' id='password' />
                                        <button>
                                            <FontAwesomeIcon
                                                icon={showPassword ? faEyeSlash : faEye}
                                                className="password-icon"
                                            />
                                        </button>
                                    </div>
                                    <div className="ButtonArea">
                                        <button>
                                            Sign In
                                        </button>
                                    </div>
                                    <div className="ButtonAreaSSO">
                                        <button>
                                            <FontAwesomeIcon icon={faFacebook} /> Sign in with Facebook
                                        </button>
                                    </div>
                                    <div className="ButtonAreaSSO">
                                        <button>
                                            {/* Add Google Icon */} Sign In with Google
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Head">
                <div className="Logo">
                    <div className="Atg">
                        ATG.
                    </div>
                    <div className="World">
                        W
                    </div>
                    <div className="Union">
                        <img src={union} alt='' />
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
                        isLoggedIn ? <div className="LoggedIn"><div className="Image"></div><div className="Text">Siddharth Goyal</div></div> : <div className="NotLoggedIn"><div className="Black">Create an Account. </div><div className="Blue">It's free</div></div>
                    }
                    <button><div className="Triangle"></div></button>
                </div>
            </div>
        </div>
    )
}

export default Header;