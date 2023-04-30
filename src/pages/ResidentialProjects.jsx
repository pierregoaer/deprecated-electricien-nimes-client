import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import '../styles/support-page.css';

export default function ResidentialProjects() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>Projets Électriques Résidentiels à Nîmes | Photos & Témoignages</title>
                <meta name="description"
                      content="Parcourez nos projets électriques résidentiels à Nîmes : galerie de photos et témoignages de clients satisfaits. Confiez-nous vos projets !"/>
                <meta name="robots" content="index, follow"/>

                <meta property="og:url" content="https://eletricien-nimes.com/services"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title"
                      content="Projets Électriques Résidentiels à Nîmes | Photos & Témoignages"/>
                <meta property="og:description"
                      content="Parcourez nos projets électriques résidentiels à Nîmes : galerie de photos et témoignages de clients satisfaits. Confiez-nous vos projets !"/>
                <meta property="og:image" content="{{ article['hero-image-url'] }}"/>
            </Helmet>
            <main className="support-page-container">
                <section className="support-page-hero">
                    <div className="hero-section-padding">
                        <div className="support-page-text-block">
                            <h1>Projets résidentiels réalisés par votre électricien à Nîmes : Qualité et satisfaction
                                garanties</h1>
                            <p>Vous recherchez un électricien de confiance à Nîmes pour vos projets résidentiels ?
                                Découvrez nos réalisations et l'expertise de notre équipe pour vous accompagner dans la
                                réussite de vos projets électriques. En tant qu'électricien à Nîmes, nous mettons un
                                point d'honneur à offrir un service de qualité, à la hauteur de vos attentes. Notre
                                galerie de photos de projets résidentiels et les témoignages de nos clients satisfaits
                                témoignent de notre engagement envers l'excellence et la satisfaction de nos
                                clients.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text">
                            <h2>Construction neuve</h2>
                            <p>Dans le cadre de la construction de maisons neuves, notre équipe d'électriciens à Nîmes
                                intervient pour concevoir et réaliser des installations électriques conformes aux normes
                                en vigueur et adaptées à vos besoins. Découvrez quelques exemples de nos réalisations en
                                matière d'installations électriques pour des constructions neuves :</p>
                        </div>
                        <ul className="bullet-list-cards">
                            <li className="bullet-list-card">
                                Contactez-nous par téléphone ou via notre formulaire en ligne pour signaler votre
                                problème électrique
                            </li>
                            <li className="bullet-list-card">
                                Un électricien qualifié se rendra sur place dans les plus brefs délais pour évaluer la
                                situation et effectuer les réparations nécessaires
                            </li>
                            <li className="bullet-list-card">
                                Vous bénéficierez d'un suivi personnalisé et d'un accompagnement tout au long de
                                l'intervention
                            </li>
                        </ul>
                        <div className="support-page-text">
                            <p>Parmi les urgences électriques les plus courantes à Nîmes, on retrouve :</p>
                        </div>
                        <ul className="bullet-list-cards">
                            <li className="bullet-list-card">
                                Les coupures de courant
                            </li>
                            <li className="bullet-list-card">
                                Les courts-circuits
                            </li>
                            <li className="bullet-list-card">
                                Les surchauffes de câbles ou de prises
                            </li>
                            <li className="bullet-list-card">
                                Les problèmes de disjoncteur
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="inverted-section">
                    <div className="secondary-section-padding">
                        <div className="support-page-text">
                            <h2>Diagnostic et réparation de pannes</h2>
                            <p>Un diagnostic précis et une réparation rapide sont essentiels pour résoudre efficacement
                                une panne électrique. Faire appel à un électricien à Nîmes vous garantit un service
                                professionnel et adapté à vos besoins, tout en respectant les normes de sécurité en
                                vigueur.</p>
                            <p>Le diagnostic d'une panne électrique par notre équipe d'électriciens à Nîmes se déroule
                                en plusieurs étapes :</p>
                        </div>
                        <ul className="bullet-list-cards">
                            <li className="bullet-list-card">
                                L'analyse de la situation et l'identification des symptômes de la panne
                            </li>
                            <li className="bullet-list-card">
                                La recherche de la cause du problème, en effectuant des tests et des mesures
                            </li>
                            <li className="bullet-list-card">
                                La proposition de solutions adaptées pour résoudre la panne et prévenir de futurs
                                problèmes
                            </li>
                        </ul>

                        <div className="support-page-text">
                            <p>Parmi les pannes électriques les plus courantes à Nîmes, on retrouve :</p>
                        </div>
                        <ul className="bullet-list-cards">
                            <li className="bullet-list-card">
                                Les problèmes de disjoncteurs ou de fusibles
                            </li>
                            <li className="bullet-list-card">
                                Les courts-circuits
                            </li>
                            <li className="bullet-list-card">
                                Les pannes d'éclairage
                            </li>
                            <li className="bullet-list-card">
                                Les problèmes de prises ou d'interrupteurs
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text">
                            <h2>Remplacement de composants défectueux</h2>
                            <p>
                                Les composants défectueux de votre installation électrique peuvent causer des pannes,
                                une surconsommation d'énergie ou des risques d'accident. Il est donc important de les
                                remplacer pour garantir le bon fonctionnement et la sécurité de votre installation.
                            </p>

                            <p>Le remplacement de composants défectueux par notre équipe d'électriciens à Nîmes implique
                                plusieurs étapes :</p>
                        </div>
                        <ul className="bullet-list-cards">
                            <li className="bullet-list-card">
                                Le diagnostic de l'installation pour identifier les composants défectueux
                            </li>
                            <li className="bullet-list-card">
                                La proposition de solutions adaptées, incluant le remplacement des composants concernés
                            </li>
                            <li className="bullet-list-card">
                                La réalisation des travaux de remplacement et la vérification du bon fonctionnement de
                                l'installation
                            </li>
                        </ul>
                        <div className="support-page-text">
                            <p>Parmi les composants électriques les plus couramment remplacés, on retrouve :</p>
                        </div>
                        <ul className="bullet-list-cards">
                            <li className="bullet-list-card">
                                Les disjoncteurs
                            </li>
                            <li className="bullet-list-card">
                                Les fusibles
                            </li>
                            <li className="bullet-list-card">
                                Les prises et les interrupteurs
                            </li>
                            <li className="bullet-list-card">
                                Les câbles électriques
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text-block">
                            <p>
                                En cas de panne ou d'urgence électrique, il est essentiel de pouvoir compter sur un
                                électricien professionnel et réactif. À Nîmes, notre équipe d'électriciens qualifiés
                                vous propose un service de dépannage électrique de qualité, incluant la gestion des
                                urgences, le diagnostic et la réparation de pannes, ainsi que le remplacement de
                                composants défectueux.
                            </p>

                            <p>
                                N'hésitez pas à nous contacter pour obtenir un devis personnalisé pour vos besoins en
                                dépannage électrique à Nîmes. Nous mettons notre expertise et notre savoir-faire à votre
                                service pour vous offrir des solutions adaptées à vos besoins et un service rapide et
                                efficace. Faites confiance à notre équipe pour vous accompagner dans la résolution de
                                vos problèmes électriques et assurer la sécurité et la performance de votre
                                installation.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
