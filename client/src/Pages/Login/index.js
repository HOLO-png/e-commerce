import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Signin from '../../components/Login/Signin';
import Signup from '../../components/Login/Signup';
import { Link, useHistory, useParams } from 'react-router-dom';

function Login(props) {
    const { isStateLogin } = useParams();
    const [isActive, setIsActive] = useState(isStateLogin === 'signup');

    const isShowSignup = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="form">
            <div
                className={
                    isActive ? 'container right-panel-active' : 'container'
                }
            >
                <Signup />
                <Signin />

                <div className="form__overlay-container">
                    <div className="form__overlay">
                        <div className="form__overlay-panel form__overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your
                                personal info
                            </p>
                            <button
                                className="form__btn__ghost"
                                onClick={isShowSignup}
                            >
                                <Link to="/buyer/signin">Sign In</Link>
                            </button>
                        </div>
                        <div className="form__overlay-panel form__overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>
                                Enter your personal details and start journey
                                with us
                            </p>
                            <button
                                className="form__btn__ghost"
                                onClick={isShowSignup}
                            >
                                <Link to="/buyer/signup">Sign Up</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="form__footer">
                <p>
                    Shop ??i???n t??? Iphone <i className="fa fa-heart" /> c???a
                    <a type="link"> Ho??ng Long</a> - Xin ch??n th??nh c???m ??n qu??
                    kh??ch ???? gh?? qua ???
                </p>
            </footer>
        </div>
    );
}

Login.propTypes = {};

export default Login;
