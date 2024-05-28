import React from "react";
import SuperchargeInfo from "../superchargeInfo/superchargeInfo";

import iconGoogle from '../../images/logo-google.png'
import iconIbm from '../../images/logo-ibm.png'
import iconMicrosoft from '../../images/logo-microsoft.png'
import iconHp from '../../images/logo-hp.png'
import iconVectorGraphics from '../../images/logo-vector-graphics.png'

import './sectionSupercharge.css'

const infoData = [
    {
        src: "./images/icon-blacklist.svg",
        title: "Create blacklists",
        description: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
    },
    {
        src: "./images/icon-preview.svg",
        title: "Plain text snippets",
        description: "Remove unwanted formatting from copied text for a consistent look.",
    },
    {
        src: "./images/icon-text.svg",
        title: "Sneak preview",
        description: "Quick preview of all snippets on your Clipboard for easy access.",
    },
]

const SectionSupercharge = () => {
    return (
        <section className="supercharge">
            <h2 className="title">Supercharge your workflow</h2>
            <p className="description">We’ve got the tools to boost your productivity.</p>
            <div className="examples">
                <ul>
                    {
                        infoData.map((item, index)=>{
                            return(
                                <SuperchargeInfo 
                                    key={index}
                                    src={item.src}
                                    title={item.title}
                                    description={item.description}
                                />
                            )
                        })
                    }
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