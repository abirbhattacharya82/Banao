import React, { useState } from "react";
import './MobileLogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function MobileLogin() {
    const [showPassword, setShowPassword] = useState(false);
    function showRegister(){
        document.getElementById('mobile_login').style.display="none";
        document.getElementById('mobile_register').style.display="block";
    }
    function showLogin(){
        document.getElementById('mobile_register').style.display="none";
        document.getElementById('mobile_login').style.display="block";
    }
    function closeForm(){
        document.getElementById('mobile_login_form_unique').style.display="none";
    }
    return (
        <div className="Area" id="mobile_login_form_unique">
            <div className="Form" id="mobile_login">
                <div className="Heading">
                    <div className="Text">
                        Welcome back!
                    </div>
                    <div className="Button">
                        <button onClick={closeForm}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </div>
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
                    <button id="ca" onClick={showRegister}>
                        or, Create Account
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




            <div className="Form" id="mobile_register">
                <div className="Heading">
                    <div className="Text">
                        Create Account
                    </div>
                    <div className="Button">
                        <button onClick={closeForm}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </div>
                <div className="InputArea">
                    <input type="email" placeholder='First Name' id='email' />
                    <input type="email" placeholder='Last Name' id='email' />
                </div>
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
                <div className="InputArea">
                    <input type="password" placeholder='Confirm Password' id='email' />
                </div>
                <div className="ButtonArea">
                    <button>
                        Create Account
                    </button>
                    <button id="ca" onClick={showLogin}>
                        or, Sign In
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
                    By signing up, you agree to our Terms & conditions, Privacy policy
                </div>
            </div>
        </div>
    )
};
export default MobileLogin;