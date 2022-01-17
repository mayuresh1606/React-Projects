import React from "react";


export const SingleComponent = ({id, name, image, age}) => {
    return <>
        <article className="single-component">
            <img src={image} alt={name} className="person-img"/>
            <div className="person-info">
                <h4 className="person-name">{name}</h4>
                <span className="person-age">{age} years</span>
            </div>
        </article>
    </>
}