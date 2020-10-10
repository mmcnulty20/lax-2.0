import React, { useState } from "react";
import { useSelector } from "react-redux";
import SplashBreakdown from "./splash_breakdown";
import SplashContact from "./splash_contact";
import SplashFooter from "./splash_footer";
import SplashIntro from "./splash_intro";
import SplashLowerBtns from "./splash_lower_btns";

const SplashMain = () => {
    let channel = useSelector(({ entities: { users }, session: { id } }) => {
        return id ? users[id].redirectChannel : null
    })
    // const { s, setS } = useState(null)
    debugger
    return (
    <div className="splash">
        <SplashIntro channel={ channel } />
        <SplashBreakdown />
        <SplashContact />
        <SplashLowerBtns channel={ channel } />
        <SplashFooter />
    </div>
)}

export default SplashMain