import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SplashContact = () => (
    <section className="splash-contact">
        <h1>Find Me On</h1>
        <nav>
            <a href="https://github.com/mmcnulty20/">
                <button>
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </button>
            </a>
            <a href="#">
                <button>
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </button>
            </a>
        </nav>
    </section>
)

export default SplashContact