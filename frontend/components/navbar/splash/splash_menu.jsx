import React from 'react'
import { useSelector } from 'react-redux';
import { useLoggedIn } from '../../../utils/hook_util';
import SplashHamburger from './hamburger';

import SplashAuthNav from "./splash_auth";
import SplashProtectedNav from "./splash_protected";

const SplashBar = () => {
    const loggedIn = useLoggedIn();
    return (
        <>
            <SplashHamburger loggedIn={ loggedIn }/>
            { loggedIn ? <SplashProtectedNav /> : <SplashAuthNav /> }        
        </>
    )
}

export default SplashBar;