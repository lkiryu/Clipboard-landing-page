import React from "react";
import Buttons from "../buttons/buttons";

import './sectionClipboard.css'

const SectionClipboard = () => {
    return (
        <section className="clipboard">
            <h2 className="title">Clipboard for iOS and Mac OS</h2>
            <p className="description">Available for free on the App Store. Download for Mac or iOS, sync with iCloud
                and you’re ready to start adding to your clipboard.</p>

            <Buttons />
        </section>
    )
}

export default SectionClipboard