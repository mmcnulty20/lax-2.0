import React from 'react'
import { useSelector } from 'react-redux';
import { useLoggedIn } from '../../../utils/hook_util';
import SplashHamburger from './hamburger';

import SplashAuthNav from "./splash_auth";
import SplashProtectedNav from "./splash_protected";

const SplashBar = () => {
    const loggedIn = useLoggedIn();
    console.log(loggedIn)
    const state = useSelector(state => state)
    console.log(state)
    return (
        <>
            <SplashHamburger loggedIn={ loggedIn }/>
            { loggedIn ? <SplashProtectedNav /> : <SplashAuthNav /> }        
        </>
    )
}

export default SplashBar;