import React from "react";

export const AboutScreen = () => {
    return (
        // <div className='about'>
        <div className="w-container about-content">
            <div className="about-item">
                <img src="./assets/about-1.jpg" alt="imagen about" />
            </div>
            <div className="about-item">
                <div className="about-item-title">
                    <h1> ¿Qué es Develor Jr?</h1>
                </div>
                <div className="about-item-text">
                    <p>
                        Somos un grupo de estudiantes con conocimientos del Desarrolo web, que queremos a ayudar a la comunidad peruana con nuestro conocimiento y adquirir experiencia en el camino
                    </p>
                </div>
            </div>
        </div>
        // </div>
    );
};
