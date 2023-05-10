import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import '../styles/support-page.css';

export default function Installation() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (<>
        <Helmet>
            <title>Installation électrique à Nîmes : Expertise résidentielle, commerciale et industrielle</title>
            <meta name="description"
                  content=" Nos services électriques à Nîmes couvrent installations, rénovations, dépannages, éclairages et domotique. Obtenez un service complet et professionnel."/>
            <meta name="robots" content="index, follow"/>

            <meta property="og:url" content="https://eletricien-nimes.com/services"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title"
                  content="Services Électriques à Nîmes | Installation, Rénovation & Dépannage"/>
            <meta property="og:description"
                  content=" Nos services électriques à Nîmes couvrent installations, rénovations, dépannages, éclairages et domotique. Obtenez un service complet et professionnel."/>
            <meta property="og:image" content="{{ article['hero-image-url'] }}"/>
        </Helmet>
        <main className="support-page-service-container">
            <section className="support-page-hero">
                <div className="hero-section-padding">
                    <div className="support-page-text-block">
                        <h1>Installation électrique à Nîmes : Expertise résidentielle, commerciale et
                            industrielle</h1>
                        <p>Vous recherchez un électricien compétent à Nîmes pour vos installations électriques ?
                            Notre
                            entreprise vous offre des solutions complètes et personnalisées pour tous vos besoins.
                            Que
                            ce soit : en installation électrique résidentielle, commerciale et industrielle, nous
                            répondrons à votre besoin. Forts de notre expérience et de notre expertise, nous vous
                            garantissons un travail soigné et conforme aux normes électriques en vigueur. Ainsi,
                            nous
                            vous garantissons une sécurité optimale.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="secondary-section-padding">
                    <div className="support-page-text">
                        <h2>Installation électrique résidentielle</h2>
                        <p>Lors de la construction ou de la rénovation d'une maison, il est essentiel de confier
                            l'installation électrique à un professionnel qualifié et expérimenté. En tant
                            qu'électricien à Nîmes, nous sommes spécialisés dans les installations électriques
                            résidentielles. Qu'il s'agisse d'une habitation neuve, d'une rénovation ou d'une
                            extension, votre installation est garantie.</p>

                        <p>Notre équipe d'électriciens qualifiés vous accompagne tout au long de votre projet
                            d’installation électrique. En partant de l'étude des plans jusqu’à la réalisation des
                            travaux en passant par la sélection des équipements adaptés à vos besoins. Nous nous
                            assurons de respecter la norme NF C 15-100 ainsi que les réglementations en vigueur.
                            Nous garantissons ainsi la sécurité de votre installation électrique.</p>

                        <p>Nos services en installation électrique résidentielle à Nîmes incluent :</p>
                    </div>
                    <ul className="bulleted-list-cards">
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p>La pose de tableaux électriques et la mise en place des circuits électriques</p>
                        </li>
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p>L'installation de prises, interrupteurs et points lumineux</p>
                        </li>
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p>La mise en place de systèmes de domotique et de gestion de l'énergie</p>
                        </li>
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p>Le câblage pour le téléphone, la télévision et Internet</p>
                        </li>
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p>L'installation de systèmes d'éclairage intérieur et extérieur</p>
                        </li>
                    </ul>

                </div>
            </section>
            <section className="inverted-section">
                <div className="secondary-section-padding">
                    <div className="support-page-text">
                        <h2>Installation électrique commerciale</h2>
                        <p>Les installations électriques commerciales requièrent une expertise spécifique. Cette
                            expertise permet d’assurer la sécurité, l'efficacité énergétique et le confort de vos
                            clients et employés. En tant qu'électricien à Nîmes, nous mettons notre savoir-faire à
                            votre disposition pour réaliser des installations électriques adaptées à vos locaux
                            commerciaux.</p>

                        <p>Que vous possédiez un magasin, un restaurant, un hôtel ou un bureau, nous vous proposons
                            des solutions sur-mesure. Celles - ci permettent d’optimiser votre consommation
                            énergétique et garantir un fonctionnement optimal de vos équipements. Nous respectons
                            scrupuleusement les normes en vigueur pour les installations électriques commerciales.
                            De plus, nous vous conseillons sur les meilleures pratiques en matière d'économie
                            d'énergie.</p>

                        <p>Nos services en installation électrique commerciale à Nîmes incluent :</p>
                    </div>
                    <ul className="bulleted-list-cards">
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p>La <span className="bold">conception et l'installation</span> de tableaux électriques
                                spécifiques aux besoins de
                                votre commerce</p>
                        </li>
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p>La <span className="bold">mise en place</span> d'éclairages adaptés à votre activité et à
                                vos espaces</p>
                        </li>
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p><span className="bold">L'installation</span> de systèmes de sécurité, tels que les
                                détecteurs de fumée et les
                                alarmes anti-intrusion</p>
                        </li>
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p><span className="bold">L'installation</span> de prises et de câblage pour les équipements
                                informatiques et de
                                communication</p>
                        </li>
                        <li className="bulleted-list-card mobile-hidden tablet-hidden">
                            <h4></h4>
                            <p></p>
                        </li>
                        <li className="bulleted-list-card mobile-hidden tablet-hidden">
                            <h4></h4>
                            <p></p>
                        </li>
                    </ul>

                </div>
            </section>
            <section>
                <div className="secondary-section-padding">
                    <div className="support-page-text">
                        <h2>Installation électrique industrielle</h2>
                        <p>Les installations électriques industrielles sont complexes et requièrent une connaissance
                            approfondie des normes et des contraintes spécifiques à ce secteur. En tant
                            qu'électricien expérimenté à Nîmes, nous avons développé une expertise solide en matière
                            d'installations électriques industrielles. Cette expertise nous permet d’assurer la
                            sécurité, la fiabilité et la performance de vos équipements.</p>

                        <p>Nous intervenons auprès des usines, des entrepôts, des ateliers et des centres de
                            production. Ainsi, nous concevons et mettons en œuvre des installations électriques
                            adaptées à votre activité et à vos besoins. Notre équipe d'électriciens qualifiés
                            travaille en étroite collaboration avec vous pour comprendre vos exigences. Ainsi, nous
                            vous proposerons des solutions personnalisées et évolutives.</p>

                        <p>Nos services en installation électrique industrielle à Nîmes incluent :</p>
                    </div>
                    <ul className="bulleted-list-cards">
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p>La réalisation d'études techniques et l'élaboration de plans électriques</p>
                        </li>
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p>L'installation de tableaux électriques industriels et la gestion des circuits de
                                puissance et de contrôle</p>
                        </li>
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p>La mise en place de systèmes d'alimentation électrique pour les machines et les équipements de production</p>
                        </li>
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p>L'installation de systèmes d'éclairage et de sécurité adaptés aux environnements industriels</p>
                        </li>
                        <li className="bulleted-list-card">
                            <h4></h4>
                            <p>La maintenance préventive et curative de vos installations
                            électriques</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="secondary-section-padding">
                    <div className="support-page-text-block">
                        <p>En tant qu'électricien à Nîmes, nous mettons notre expertise en installation électrique
                            résidentielle, commerciale et industrielle à votre service pour vous offrir des
                            solutions adaptées à vos besoins. Notre engagement envers la qualité, la sécurité et la
                            satisfaction de nos clients fait de nous le partenaire idéal pour tous vos projets
                            d'installations électriques à Nîmes et ses environs. N'hésitez pas à nous contacter pour
                            discuter de votre projet et obtenir un devis personnalisé. Ensemble, donnons vie à vos
                            ambitions électriques !</p>
                    </div>
                </div>
            </section>
        </main>
    </>);
}
