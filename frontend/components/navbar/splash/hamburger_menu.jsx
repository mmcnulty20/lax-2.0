import React from 'react'
import LoginDemoButton from '../../misc/login_demo_button';
import LogoButtonFigure from '../../misc/logo_button_fig';

const HamburgerMenu = ({ loggedIn, close }) => (
    <div className="ham-menu">
        <div>
            <LogoButtonFigure />
            <button onClick={ close }>X</button>
        </div>
        <ul>
            <li>
                Same
            </li>
            <li>
                Nav
            </li>
            <li>
                Links
            </li>
            <li>
                { loggedIn ? (
                    <>
                    <button>Launch</button>
                    <button>Github?</button>
                    </>
                ) : (
                <>
                    <button>Sign in</button>
                    <LoginDemoButton className="ham-demo">
                        TRY THE DEMO
                    </LoginDemoButton>
                </>
                )}
            </li>
        </ul>
    </div>
)

export default HamburgerMenu;