import React from "react";
import Header from "../header/header";
import SectionKeepTrack from "../sectionKeepTrack/sectionKeepTrack";
import SectionAccess from "../sectionAccess/sectionAccess";

const LandingPage = () => {
    return (
        <div className="container">
            <Header />

            <SectionKeepTrack />

            <SectionAccess />
        </div>
    )
}

export default LandingPage