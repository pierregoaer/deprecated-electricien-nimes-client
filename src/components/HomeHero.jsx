import React from 'react';
import {Link} from 'react-router-dom';

export default function HomeHero() {
    return (
        <section className="hero-container">
            <div className="section-inner hero-section-padding hero-main">
                <div className="hero-text">
                    <h1>Votre expert en électricité <span className="text-highlight">à Nîmes</span>.</h1>
                    <p>Forts de notre expérience et de notre expertise, nous vous proposons une gamme complète de services électriques adaptés à vos besoins. Vous êtes au bon endroit pour un service de qualité, réalisé par des professionnels compétents et passionnés. Ensemble, faisons de vos projets électriques une réussite !</p>
                    <Link to={'/contact'} className="hero-cta btn-primary">Contactez-Nous</Link>
                </div>
                <div className="hero-image">
                    <img src="/images/electricien-nimes-hero.png" alt="Electricien Nîmes"/>
                </div>
            </div>
        </section>
    );
}
