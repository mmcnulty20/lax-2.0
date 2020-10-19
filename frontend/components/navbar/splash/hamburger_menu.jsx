import React, { useEffect, useState } from 'react'
import { promiseDelay } from '../../../utils/hook_util';
import LoginDemoButton from '../../misc/login_demo_button';
import LogoButtonFigure from '../../misc/logo_button_fig';

const HamburgerMenu = ({ loggedIn, close }) => {
    const [closing, setClosing] = useState(false)
    useEffect( () => {
        if (closing) setTimeout( () => close(), 500 )
    }, [closing] )

    return (
    <div className={`ham-menu${ closing ? " out" : ""}`}>
        <div>
            <LogoButtonFigure />
            <figure className="x" onClick={ () => setClosing(true) }>
                X
            </figure>
        </div>
        <ul>
            <li>
                <a href="https://github.com/mmcnulty20/">
                    GitHub
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/megan-mcnulty-26a2641b1/">
                    LinkedIn
                </a>
            </li>
            <li>
                <a href="mailto:megan.mcnulty07@gmail.com">
                    Email me
                </a>
            </li>
        </ul>
        <nav>
        { loggedIn ? (
            <>
            <button>Launch</button>
            <button>Github?</button>
            </>
        ) : (
            <>
            <button className="btn-white">Sign in</button>
            <LoginDemoButton className="btn-blue">
                TRY THE DEMO
            </LoginDemoButton>
            </>
        )}
        </nav>
    </div>
)
}

export default HamburgerMenu;