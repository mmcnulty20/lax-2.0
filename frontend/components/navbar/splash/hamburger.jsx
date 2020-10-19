import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import HamburgerMenu from './hamburger_menu'

const SplashHamburger = ({ loggedIn }) => {
    const [closed, setClosed] = useState(true)
    return (
        <figure className="hamburger" onClick={ () => setClosed(false) }>
            <FontAwesomeIcon icon="bars" />
            { closed ? null : 
                <HamburgerMenu loggedIn={ loggedIn } close={e => { e.stopPropagation(); setClosed(true) } }/> }
        </figure>
    )
}

export default SplashHamburger