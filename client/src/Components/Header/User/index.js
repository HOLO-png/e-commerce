/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../Context/AuthProvider';
import { renderPhotoAccout } from '../../../utils/avartarChange';
// import { logoutAction } from '../../../Store/Reducer/authReducer';
import { useDispatch } from 'react-redux';
// import { setLoadingAction } from '../../../Store/Reducer/loadingReducer';

const user = {};
function User({ user }) {
    const userDrawerRef = useRef(null);
    // const dispatch = useDispatch();
    // const data = React.useContext(AuthContext);
    // const { photoURL, displayName, email, id } = data.user;

    const someHandler = () => {
        if (userDrawerRef.current) {
            userDrawerRef.current.classList.add('active');
        }
    };

    const someOtherHandler = () => {
        if (userDrawerRef.current) {
            userDrawerRef.current.classList.add('active');
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            if (
                !e.target.closest('#userId') &&
                !e.target.closest('#userDrawerId')
            ) {
                if (userDrawerRef.current) {
                    userDrawerRef.current.classList.remove('active');
                }
            }
        });
        return () => {
            window.removeEventListener('mousemove', null);
        };
    }, []);

    // const handleLogout = () => {
    //     dispatch(setLoadingAction(true));
    //     dispatch(logoutAction());
    //     setTimeout(() => {
    //         dispatch(setLoadingAction(false));
    //     }, 500);
    // };

    return (
        <div
            className="header__menu__item header__menu__right__item buyer"
            style={{ width: !user && '200px' }}
        >
            <div
                className="header__menu__item__user"
                onMouseEnter={someHandler}
                onMouseLeave={someOtherHandler}
                id="userId"
            >
                <div className="header__menu__item__user-icon">
                    {user ? (
                        <Link to="/user/all">
                            {renderPhotoAccout(
                                user.profilePicture,
                                '',
                                user.username,
                            )}
                        </Link>
                    ) : (
                        <>
                            <div className="header__menu__item__buyer">
                                <Link
                                    to="/buyer/signup"
                                    className="header__menu__item__buyer-signup"
                                >
                                    Đăng Ký
                                </Link>
                                <Link
                                    to="/buyer/signin"
                                    className="header__menu__item__buyer-signin"
                                >
                                    Đăng Nhập
                                </Link>
                            </div>
                        </>
                    )}
                </div>
                {/* {user && (
                    <div
                        className="header__menu__item__user-drawer"
                        id="userDrawerId"
                        ref={userDrawerRef}
                    >
                        <Link to="/user/profile">
                            <div className="header__menu__item__user-drawer-accout">
                                {renderPhotoAccout(
                                    user.profilePicture,
                                    'small',
                                    user.username,
                                )}
                                <span
                                    className="display-name-user"
                                    style={{ marginLeft: 5 }}
                                >
                                    {user.username}
                                </span>
                            </div>
                        </Link>
                        <Link to="/user/all">
                            <div className="header__menu__item__user-drawer-accout">
                                <i className="fad fa-calendar-week"></i>
                                <span>Đơn mua</span>
                            </div>
                        </Link>

                        {user.isAdmin ? (
                            <Link to="/dashboard/main">
                                <div className="header__menu__item__user-drawer-dashboard">
                                    <i className="fad fa-tachometer-slowest"></i>
                                    <span>Dashboard</span>
                                </div>
                            </Link>
                        ) : (
                            ''
                        )}
                        <div className="header__menu__item__user-drawer-accout">
                            <i className="fad fa-sign-in-alt"></i>
                            <Link
                                className="menu-content"
                                to="/buyer/signin"
                                // onClick={handleLogout}
                            >
                                <span>Đăng xuất</span>
                            </Link>
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    );
}

User.propTypes = {};

export default User;
