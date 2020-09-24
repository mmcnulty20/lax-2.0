import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom"

const LogoButtonFigure = () => (
    <figure id="logo-button">
        <Link to="/welcome">
            <FontAwesomeIcon
                id="logo-img"
                icon="umbrella-beach"
                flip="horizontal" />
            <span>
                lax
                    </span>
        </Link>
    </figure>
)

export default LogoButtonFigure;