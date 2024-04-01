import React from "react";
import iconBlacklist from '../../images/icon-blacklist.svg'
import iconText from '../../images/icon-text.svg'
import iconPreview from '../../images/icon-preview.svg'
import iconGoogle from '../../images/logo-google.png'
import iconIbm from '../../images/logo-ibm.png'
import iconMicrosoft from '../../images/logo-microsoft.png'
import iconHp from '../../images/logo-hp.png'
import iconVectorGraphics from '../../images/logo-vector-graphics.png'

import './sectionSupercharge.css'

const SectionSupercharge = () => {
    return (
        <section className="supercharge">
            <h2 className="title">Supercharge your workflow</h2>
            <p className="description">We’ve got the tools to boost your productivity.</p>
            <div class="examples">
                <ul>
                    <li>
                        <img src={iconBlacklist} alt="Blacklist"></img>
                        <h3 className="title">Create blacklists</h3>
                        <p className="description">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </li>
                    <li>
                        <img src={iconText} alt="Blacklist"></img>
                        <h3 className="title">Plain text snippets</h3>
                        <p className="description">Remove unwanted formatting from copied text for a consistent look.</p>
                    </li>
                    <li>
                        <img src={iconPreview} alt="Blacklist"></img>
                        <h3 className="title">Sneak preview</h3>
                        <p className="description">Quick preview of all snippets on your Clipboard for easy access.</p>
                    </li>
                </ul>
                <div className="brands">
                    <img src={iconGoogle} alt="icon google"></img>
                    <img src={iconIbm} alt="icon ibm"></img>
                    <img src={iconMicrosoft} alt="icon microsoft"></img>
                    <img src={iconHp} alt="icon hp"></img>
                    <img src={iconVectorGraphics} alt="icon vector graphics"></img>
                </div>
            </div>
        </section>
    )
}

export default SectionSupercharge