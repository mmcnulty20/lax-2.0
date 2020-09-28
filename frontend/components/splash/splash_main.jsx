import React from "react";
import SplashBreakdown from "./splash_breakdown";
import SplashContact from "./splash_contact";
import SplashFooter from "./splash_footer";
import SplashIntro from "./splash_intro";
import SplashLowerBtns from "./splash_lower_btns";

const SplashMain = props => (
    <div className="splash">
        <SplashIntro />
        <SplashBreakdown />
        <SplashContact />
        <SplashLowerBtns />
        <SplashFooter />
    </div>
)

export default SplashMain