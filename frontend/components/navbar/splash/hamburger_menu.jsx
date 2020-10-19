import React from 'react'
import LoginDemoButton from '../../misc/login_demo_button';
import LogoButtonFigure from '../../misc/logo_button_fig';

const HamburgerMenu = ({ loggedIn, close }) => (
    <div className="ham-menu">
        <div>
            <LogoButtonFigure />
            <figure className="x" onClick={ close }>X</figure>
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

export default HamburgerMenu;