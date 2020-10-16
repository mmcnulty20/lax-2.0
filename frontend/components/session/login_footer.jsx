import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <footer className="auth-footer">
        <div>
            <div>
                <Link to="/welcome">
                    <FontAwesomeIcon icon="umbrella-beach" flip="horizontal"/>
                </Link>
                <ul>
                    <li>
                        <span>
                            Contact Me
                        </span>
                    </li>
                    <li>
                        <a href="https://github.com/mmcnulty20/">
                            <button>
                                <FontAwesomeIcon icon={ ["fab", "github"] } />
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/megan-mcnulty-26a2641b1/">
                            <button>
                                <FontAwesomeIcon icon={ ["fab", "linkedin"] } />
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)