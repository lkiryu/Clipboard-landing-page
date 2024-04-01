import React from "react";
import Header from "../header/header";
import SectionKeepTrack from "../sectionKeepTrack/sectionKeepTrack";
import SectionAccess from "../sectionAccess/sectionAccess";
import SectionSupercharge from "../sectionSupercharge/sectionSupercharge";

const LandingPage = () => {
    return (
        <div className="container">
            <Header />

            <SectionKeepTrack />

            <SectionAccess />

            <SectionSupercharge />
        </div>
    )
}

export default LandingPage