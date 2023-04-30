import React from 'react';
import {Link} from 'react-router-dom';

export default function HomeRealizations() {
    return (
        <section className="home-about-us-container">
            <div className="section-inner home-about-us-main">
                <div className="home-about-us-text">
                    <h1>Votre expert en électricité à Nîmes.</h1>
                    <p>Intervention chez professionnels et particuliers dans la région de Nîmes. Notre équipe d'experts
                        en électricité est là pour répondre au mieux aux besoins de nos clients.</p>
                    <Link to={'/contact'} className="home-about-us-cta btn-primary">Contactez-Nous</Link>
                </div>
                <div className="home-about-us-image">
                    <img src="/images/electricien-nimes-hero.png" alt="Electricien Nîmes"/>
                </div>
            </div>
        </section>
    );
}
