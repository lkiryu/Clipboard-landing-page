import React from "react";
import imageDevices from '../../images/image-devices.png'

const SectionAccess = () => {
    return (
        <section className="access">
            <h2>Access Clipboard anywhere</h2>
            <p className="description">Whether you’re on the go, or at your computer, you can access all your Clipboard
                snippets in a few simple clicks.</p>
            <img src={imageDevices} alt="devices"></img>
        </section>
    )
}

export default SectionAccess