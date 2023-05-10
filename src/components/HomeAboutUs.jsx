import React from 'react';
import {Link} from "react-router-dom";

export default function HomeAboutUs() {
    return (
        <section className="home-about-us-container">
            <div className="section-inner secondary-section-padding home-about-us-main">
                <div className="home-about-us-text">
                    <h2>Qui sommes-nous ?</h2>
                    <p className="justified-text">Notre entreprise d'électricité à Nîmes est née de la volonté de proposer des services de qualité et un accompagnement personnalisé à nos clients. Depuis plus de 10 ans, nous avons créé notre équipe composée d'électriciens qualifiés et expérimentés. Celle - ci met son savoir-faire au service des particuliers et des professionnels pour réaliser tous les types de projets électriques.</p>
                    <p className="justified-text">Nous nous engageons à respecter la norme NF C 15-100 en vigueur et à utiliser des matériaux de qualité pour garantir la sécurité et la performance de vos installations électriques. La satisfaction de nos clients est au cœur de notre démarche, en offrant des solutions adaptées à chaque besoin tout en assurant un suivi attentif tout au long de chaque projet.</p>
                </div>
            </div>
        </section>
    );
}
