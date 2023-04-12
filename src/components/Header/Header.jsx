import union from './union.png';
import './Header.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import loginPage from './loginImage.png';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        const loginStatus = localStorage.getItem('loginStatus');
        setIsLoggedIn(loginStatus === 'true');
    }, []);
    function toggle(){
        setShowPassword(!showPassword);
    }
    function closeLogin(){
        document.getElementById('login').style.display="none";
    }
    function closeSignin(){
        document.getElementById('register').style.display="none";
    }
    function showLogin(){
        document.getElementById('register').style.display="none";
        document.getElementById('login').style.display="flex";
    }
    function showSignin(){
        document.getElementById('login').style.display="none";
        document.getElementById('register').style.display="flex";
    }
    return (
        <div className='Header'>

            <div className="LoginAreaDesktop" id='login'>
                <div className="Form">
                    <div className="Crossbutton">
                        <button onClick={closeLogin}>
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
                                        <button onClick={showSignin}>
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
                                        <button onClick={toggle}>
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
                                            <FontAwesomeIcon icon={faFacebook} className='icons' /> Sign in with Facebook
                                        </button>
                                    </div>
                                    <div className="ButtonAreaSSO">
                                        <button>
                                            <img src="https://img.icons8.com/color/48/null/google-logo.png" alt="" className='icons' /> Sign In with Google
                                        </button>
                                    </div>
                                    <div className="ButtonArea">
                                        <a href="/">Forgot Password?</a>
                                    </div>
                                </div>
                                <div className="Right">
                                    <div className="Image">
                                        <img src={loginPage} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="LoginAreaDesktop" id='register'>
                <div className="Form">
                    <div className="Crossbutton">
                        <button onClick={closeSignin}>
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
                                    Create Account
                                </div>
                                <div className="Right">
                                    <div className="Text">
                                        Already have an account?
                                        <button onClick={showLogin}>
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="MainForm">
                                <div className="Left">
                                    <div className="InputArea">
                                        <input type="text" placeholder='First Name' /><input type="text" placeholder='Last Name' />
                                    </div>
                                    <div className="InputArea">
                                        <input type="email" placeholder='Email' />
                                    </div>
                                    <div className="InputArea">
                                        <input type="password" placeholder='Password' id='password' />
                                        <button onClick={toggle}>
                                            <FontAwesomeIcon
                                                icon={showPassword ? faEyeSlash : faEye}
                                                className="password-icon"
                                            />
                                        </button>
                                    </div>
                                    <div className="InputArea">
                                        <input type="password" placeholder='Confirm Password' />
                                    </div>
                                    <div className="ButtonArea">
                                        <button>
                                            Sign In
                                        </button>
                                    </div>
                                    <div className="ButtonAreaSSO">
                                        <button>
                                            <FontAwesomeIcon icon={faFacebook} className='icons' /> Sign in with Facebook
                                        </button>
                                    </div>
                                    <div className="ButtonAreaSSO">
                                        <button>
                                            <img src="https://img.icons8.com/color/48/null/google-logo.png" alt="" className='icons' /> Sign In with Google
                                        </button>
                                    </div>
                                </div>
                                <div className="Right">
                                    <div className="Image">
                                        <img src={loginPage} alt="" />
                                    </div>
                                    <div className="Gap">
                                        By signing up, you agree to our Terms & conditions, Privacy policy
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
                    <button onClick={showSignin}><div className="Triangle"></div></button>
                </div>
            </div>
        </div>
    )
}

export default Header;