import React from 'react';
import TestimonialCard from "./TestimonialCard.jsx";
import {Link} from "react-router-dom";

import '../styles/testimonials.css'

export default function Testimonials() {
    return (
        <section className="testimonials-container">
            <div className="section-inner secondary-section-padding testimonials-main">
                <div className="testimonials-text">
                    <h2>Nos clients sont satisfaits</h2>
                    <p>En tant qu'électricien à Nîmes, nous sommes fiers de vous présenter nos réalisations en matière de projets résidentiels. La satisfaction de nos clients est notre priorité. Nous mettons tout en œuvre pour vous offrir un service de qualité, adapté à vos besoins et à vos attentes.</p>
                    <p>N'hésitez pas à nous contacter pour discuter de votre projet résidentiel et obtenir un devis personnalisé. En choisissant notre entreprise d'électriciens à Nîmes, vous bénéficierez d'une expertise reconnue et d'un accompagnement personnalisé tout au long de votre projet. Ensemble, concrétisons vos projets électriques et assurons la sécurité, la performance et le confort de votre habitation !</p>
                    {/*<Link to={'/contact'} className="btn-primary">Contactez-Nous</Link>*/}
                </div>
                <ul className="testimonials-list">
                    <TestimonialCard
                        quote="Nous avons fait appel à cette entreprise d'électriciens à Nîmes pour la construction de notre maison. Du début à la fin, l'équipe a été à l'écoute de nos besoins et a su nous conseiller sur les meilleures solutions pour notre installation électrique. Le résultat est à la hauteur de nos attentes : une installation performante, sécurisée et esthétique. Nous les recommandons sans hésiter !"
                        name="Stéphanie et Laurent"
                    />
                    <TestimonialCard
                        quote="Nous avons confié la rénovation électrique de notre maison ancienne à cette entreprise d'électriciens à Nîmes. Leurs conseils et leur expertise nous ont permis de moderniser notre installation tout en respectant le cachet de notre habitation. La sécurité de notre famille est désormais assurée grâce à leur travail soigné et professionnel. Merci à toute l'équipe !"
                        name="Mathilde et Pierre"
                    />
                    <TestimonialCard
                        quote="Suite à l'agrandissement de notre maison, nous avons sollicité les services de ces électriciens à Nîmes pour adapter notre installation électrique. Ils ont su nous proposer des solutions adaptées à notre projet et à notre budget. Le résultat est impeccable et nous sommes ravis de pouvoir profiter pleinement de notre nouvel espace de vie !"
                        name="Sandrine et Guillaume"
                    />
                </ul>
            </div>
        </section>
    );
}
