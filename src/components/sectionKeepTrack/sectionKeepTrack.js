import React from "react";
import computers from '../../images/image-computer.png'

import './sectionKeepTrack.css'

const SectionKeepTrack = () => {
    return (
        <section className="keep-track">
            <h2 className="title">Keep track of your snippets</h2>
            <p className="description">Clipboard instantly stores any item you copy in the cloud,
                meaning you can access your snippets immediately on all your
                devices. Our Mac and iOS apps will help you organize everything.</p>
            <div className="info">
                <img src={computers} alt="computers"></img>

                <ul>
                    <li>
                        <h3>Quick Search</h3>
                        <p>Easily search your snippets by content, category, web address, application, and more.</p>
                    </li>
                    <li>
                        <h3>iCloud Sync</h3>
                        <p>Instantly saves and syncs snippets across all your devices.</p>
                    </li>
                    <li>
                        <h3>Complete History</h3>
                        <p>Retrieve any snippets from the first moment you started using the app.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SectionKeepTrack