import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import '../styles/support-page.css';

export default function Lighting() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>Éclairage à Nîmes | Solutions Intérieures & Extérieures, LED et Domotique</title>
                <meta name="description"
                      content="Installation d'éclairage intérieur et extérieur à Nîmes, conseils pour économies d'énergie, éclairage LED et domotique. Faites briller vos espaces !"/>
                <meta name="robots" content="index, follow"/>

                <meta property="og:url" content="https://eletricien-nimes.com/services"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title"
                      content="Éclairage à Nîmes | Solutions Intérieures & Extérieures, LED et Domotique"/>
                <meta property="og:description"
                      content="Installation d'éclairage intérieur et extérieur à Nîmes, conseils pour économies d'énergie, éclairage LED et domotique. Faites briller vos espaces !"/>
                <meta property="og:image" content="{{ article['hero-image-url'] }}"/>
            </Helmet>
            <main className="support-page-service-container">
                <section className="support-page-hero">
                    <div className="hero-section-padding">
                        <div className="support-page-text-block">
                            <h1>Éclairage à Nîmes : Installation d'éclairage intérieur et extérieur, conseils en
                                éclairage et
                                économies d'énergie, éclairage LED et domotique</h1>
                            <p>L'éclairage est un élément essentiel dans nos vies, que ce soit pour notre confort ou
                                notre sécurité. En tant qu'électricien à Nîmes, nous vous proposons des services de
                                qualité pour l'installation d'éclairage intérieur et extérieur. Nous fournissons
                                également des conseils personnalisés pour optimiser votre éclairage et réaliser des
                                économies d'énergie. Découvrez notre offre complète et laissez-vous séduire par notre
                                expertise et notre savoir-faire en matière d'éclairage à Nîmes.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text">
                            <h2>Installation d'éclairage intérieur et extérieur</h2>
                            <p>Un éclairage adapté est indispensable pour garantir votre confort et votre sécurité, que
                                ce soit à l'intérieur de votre maison ou dans vos espaces extérieurs. Il permet de créer
                                une ambiance chaleureuse, de mettre en valeur vos espaces de vie et de faciliter vos
                                déplacements.</p>

                            <p>En tant qu'électricien à Nîmes, nous vous proposons des solutions d'éclairage intérieur
                                sur mesure, incluant :</p>
                        </div>
                        <ul className="bullet-list-cards">
                            <li className="bullet-list-card">
                                L'installation de luminaires encastrés, suspendus ou sur rail
                            </li>
                            <li className="bullet-list-card">
                                L'éclairage d'accentuation pour mettre en valeur vos objets décoratifs
                            </li>
                            <li className="bullet-list-card">
                                L'éclairage fonctionnel pour vos espaces de travail, cuisine ou salle de bains
                            </li>
                        </ul>
                        <div className="support-page-text">
                            <p>Pour vos espaces extérieurs, nous vous proposons également des solutions d'éclairage
                                adaptées à vos besoins :</p>
                        </div>
                        <ul className="bullet-list-cards">
                            <li className="bullet-list-card">
                                L'éclairage de sécurité pour prévenir les intrusions et faciliter vos déplacements
                            </li>
                            <li className="bullet-list-card">
                                L'éclairage d'ambiance pour sublimer votre jardin ou votre terrasse
                            </li>
                            <li className="bullet-list-card">
                                L'éclairage architectural pour mettre en valeur les éléments de votre façade
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="inverted-section">
                    <div className="secondary-section-padding">
                        <div className="support-page-text">
                            <h2>Conseils en éclairage et économies d'énergie</h2>
                            <p>Un éclairage bien pensé permet d'améliorer votre confort, de valoriser vos espaces de vie
                                et de réaliser des économies d'énergie. En tant qu'électricien à Nîmes, nous vous
                                accompagnons dans le choix de vos luminaires et vous conseillons sur les meilleures
                                solutions d'éclairage en fonction de vos besoins et de votre budget.</p>
                            <p>Pour optimiser votre éclairage et réaliser des économies d'énergie, nous vous donnerons
                                des conseils sur :</p>
                        </div>
                        <ul className="bullet-list-cards">
                            <li className="bullet-list-card">
                                Choisir des ampoules à faible consommation, telles que les ampoules LED
                            </li>
                            <li className="bullet-list-card">
                                Utiliser des variateurs d'intensité pour adapter l'éclairage à vos besoins
                            </li>
                            <li className="bullet-list-card">
                                Installer des détecteurs de présence pour éviter de gaspiller de l'énergie
                            </li>
                        </ul>

                        <div className="support-page-text">
                            <p>Pour calculer les économies d'énergie réalisées grâce à nos conseils en éclairage, nous
                                vous proposons un bilan énergétique personnalisé et des simulations pour estimer les
                                économies potentielles sur votre facture d'électricité</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text">
                            <h2>Éclairage LED et domotique</h2>
                            <p>L'éclairage LED présente de nombreux avantages, en particulier pour les économies
                                d'énergie et la durabilité :</p>
                        </div>
                        <ul className="bullet-list-cards">
                            <li className="bullet-list-card">
                                Faible consommation d'énergie : les ampoules LED consomment jusqu'à 80 % d'énergie en
                                moins que les ampoules traditionnelles.
                            </li>
                            <li className="bullet-list-card">
                                Longue durée de vie : les ampoules LED ont une durée de vie pouvant atteindre 50 000
                                heures, réduisant ainsi les coûts de remplacement.
                            </li>
                            <li className="bullet-list-card">
                                Qualité de lumière : les LED offrent une lumière de qualité et un excellent rendu des
                                couleurs.
                            </li>
                        </ul>
                        <div className="support-page-text">
                            <p>La domotique permet de contrôler et de gérer votre éclairage à distance, en utilisant une
                                application sur votre smartphone ou une interface dédiée. En tant qu'électricien à
                                Nîmes, nous vous proposons des solutions d'éclairage connecté pour améliorer votre
                                confort et votre sécurité :</p>
                        </div>
                        <ul className="bullet-list-cards">
                            <li className="bullet-list-card">
                                Contrôle à distance de l'éclairage : allumez, éteignez ou ajustez l'intensité de vos
                                luminaires depuis votre smartphone ou votre tablette.
                            </li>
                            <li className="bullet-list-card">
                                Programmation de l'éclairage : programmez des scénarios d'éclairage personnalisés en
                                fonction de vos besoins et de vos habitudes.
                            </li>
                            <li className="bullet-list-card">
                                Détecteurs de mouvement et de luminosité : adaptez automatiquement l'éclairage en
                                fonction de la présence de personnes ou des conditions de luminosité.
                            </li>
                        </ul>
                        <div className="support-page-text">
                            <p>Pour intégrer l'éclairage LED et la domotique dans votre projet d'éclairage à Nîmes, il
                                suffit de nous contacter pour un devis personnalisé. Nous vous proposerons des solutions
                                adaptées à vos besoins et à votre budget, en tenant compte de vos attentes en termes de
                                confort, d'économies d'énergie et de sécurité.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text-block">
                            <p>
                                En tant qu'électricien à Nîmes, nous mettons notre expertise et notre savoir-faire à
                                votre service pour vous accompagner dans votre projet d'éclairage. Que ce soit pour
                                l'installation d'éclairage intérieur ou extérieur, des conseils en éclairage et
                                économies d'énergie, ou encore la mise en place d'éclairage LED et de solutions
                                domotiques, nous vous proposons des prestations de qualité adaptées à vos besoins et à
                                votre budget.
                            </p>

                            <p>
                                N'hésitez pas à nous contacter pour obtenir un devis personnalisé pour votre projet
                                d'éclairage à Nîmes. Nous nous engageons à vous fournir un service professionnel et
                                humain, pour vous aider à améliorer votre confort et à réaliser des économies d'énergie
                                grâce à des solutions d'éclairage modernes et performantes.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
