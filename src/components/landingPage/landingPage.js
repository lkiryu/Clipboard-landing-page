import React from "react";
import Header from "../header/header";
import SectionKeepTrack from "../sectionKeepTrack/sectionKeepTrack";
import SectionAccess from "../sectionAccess/sectionAccess";
import SectionSupercharge from "../sectionSupercharge/sectionSupercharge";
import SectionClipboard from "../sectionClipboard/sectionClipboard";

const LandingPage = () => {
    return (
        <div className="container">
            <Header />

            <SectionKeepTrack />

            <SectionAccess />

            <SectionSupercharge />

            <SectionClipboard />
        </div>
    )
}

export default LandingPage