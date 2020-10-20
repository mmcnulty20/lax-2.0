import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SplashContact = () => (
    <section className="splash-contact">
        <h1>Find Me On</h1>
        <nav>
            <a href="https://github.com/mmcnulty20/">
                <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a href="https://www.linkedin.com/in/megan-mcnulty-26a2641b1/">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
        </nav>
    </section>
)

export default SplashContact