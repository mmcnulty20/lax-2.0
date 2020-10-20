import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SplashFooter = props => (
    <footer>
        <section>
            <figure id="logo-button">
                <Link to="/welcome">
                    <FontAwesomeIcon id="logo-img" icon="umbrella-beach" flip="horizontal" />
                </Link>
            </figure>
            <nav>
                {[ 
                    ["PROFICIENCIES", "Ruby", "Ruby on Rails", "JavaScript", "React/Redux", "SQL ( PostgreSQL )", "HTML", "CSS/SCSS"],
                    [<>How I RE<strong>LAX</strong></>, "Dungeons and Dragons", "Theater", "Disney", "Sketching", "Eating", "Candy Making", "Singing Poorly", "Camping", "Beer & Wine", "Video Games"],
                    ["OTHER PROJECTS", <a href="#">PoliSee</a>],
                    ["REACH OUT", "Megan McNulty", <a href="mailto:megan.mcnulty07@gmail.com">Email me</a>, <a href="https://www.linkedin.com/in/megan-mcnulty-26a2641b1/">LinkedIn</a>]
                ].map( (list, i) => <ul key={i} > { 
                    list.map( (el, i) => <li key={i}>{el}</li> )
                } </ul> )}                
            </nav>
        </section>
    </footer>
)

export default SplashFooter