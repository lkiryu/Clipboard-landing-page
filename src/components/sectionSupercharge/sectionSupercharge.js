import React from "react";
import SuperchargeInfo from "../superchargeInfo/superchargeInfo";
import Brand from "../brand/brand";

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

const brandData = [
    {
        src: "./images/logo-google.png",
        alt: "icon google",
    },
    {
        src: "./images/logo-ibm.png",
        alt: "icon ibm",
    },
    {
        src: "./images/logo-microsoft.png",
        alt: "icon microsoft",
    },
    {
        src: "./images/logo-hp.png",
        alt: "icon hp",
    },
    {
        src: "./images/logo-vector-graphics.png",
        alt: "icon vector graphics",
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
                    {
                        brandData.map((item, index)=>{
                            return(
                                <Brand 
                                    key={index}
                                    src={item.src}
                                    alt={item.alt}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionSupercharge