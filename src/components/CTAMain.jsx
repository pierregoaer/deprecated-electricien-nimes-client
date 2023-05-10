import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/cta-main.css';

export default function CTAMain() {
    return (
        <section className="cta-main-container">
            <div className="section-inner cta-main-main">
                <div className="cta-main-text">
                    <h3>Vous cherchez un expert en électricité à Nîmes?</h3>
                    <p>Forts de notre expérience et de notre expertise, nous vous proposons
                        une gamme complète de services électriques adaptés à vos besoins. Vous êtes au bon endroit pour
                        un service de qualité, réalisé par des professionnels compétents et passionnés. Ensemble,
                        faisons de vos projets électriques une réussite !</p>
                    <Link to={'/contact'} className="btn-secondary">Contactez-Nous</Link>
                </div>
            </div>
        </section>
    );
}
