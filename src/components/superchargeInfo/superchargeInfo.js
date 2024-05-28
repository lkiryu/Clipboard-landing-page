import React from "react";

const SuperchargeInfo = (prop) => {
    return (
        <li className="info">
            <img src={prop.src} alt={prop.title}></img>
            <h3 className="title">{prop.title}</h3>
            <p className="description">{prop.description}</p>
        </li>
    )
}

export default SuperchargeInfo