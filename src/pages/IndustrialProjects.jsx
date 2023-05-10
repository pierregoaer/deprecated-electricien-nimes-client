import React, {useState, useEffect} from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import '../styles/support-page.css';
import Testimonials from "../components/Testimonials";
import ImageSlider from "../components/ImageSlider";

export default function ResidentialProjects() {
    const newConstructionSlides = [
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682695420/website-lending/electricien-nimes/images/maison-moderne.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Installation d\'un tableau électrique moderne et fonctionnel dans une maison individuelle.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682631078/website-lending/electricien-nimes/images/salon-moderne-1.jpg',
            slideName: 'Conception et réalisation de constructions neuves',
            slideText: 'Mise en place de prises et d\'interrupteurs design dans un salon contemporain.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659622/website-lending/electricien-nimes/images/maison-connectee.jpg',
            slideName: 'Conception et réalisation de constructions neuves',
            slideText: 'Installation de luminaires encastrés pour créer une ambiance chaleureuse dans une cuisine ouverte.'
        }
    ]

    const renovationSlides = [
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682630773/website-lending/electricien-nimes/images/armoire-electrique-a-remplacer.jpg',
            slideName: "Rénovation d'installation électrique",
            slideText: 'Installation d\'un tableau électrique moderne et fonctionnel dans une maison individuelle.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659617/website-lending/electricien-nimes/images/cables-electriques-1.jpg',
            slideName: "Rénovation d'installation électrique",
            slideText: 'Mise en place de prises et d\'interrupteurs design dans un salon contemporain.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1681828281/website-lending/electricien-nimes/images/electricien-sur-chantier-3.jpg',
            slideName: "Rénovation d'installation électrique",
            slideText: 'Installation de luminaires encastrés pour créer une ambiance chaleureuse dans une cuisine ouverte.'
        }
    ]

    const extensionSlides = [
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659624/website-lending/electricien-nimes/images/veranda-extension.jpg',
            slideName: 'Extension et aménagement d\'habitations',
            slideText: 'Installation d\'un tableau électrique moderne et fonctionnel dans une maison individuelle.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659623/website-lending/electricien-nimes/images/panneaux-solaires.jpg',
            slideName: 'Extension et aménagement d\'habitations',
            slideText: 'Mise en place de prises et d\'interrupteurs design dans un salon contemporain.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659613/website-lending/electricien-nimes/images/allee-lumineuse.jpg',
            slideName: 'Extension et aménagement d\'habitations',
            slideText: 'Installation de luminaires encastrés pour créer une ambiance chaleureuse dans une cuisine ouverte.'
        }
    ]

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
                        <ImageSlider slides={newConstructionSlides}/>
                    </div>
                </section>
                <section className="inverted-section">
                    <div className="secondary-section-padding">
                        <div className="support-page-text">
                            <h2>Rénovation électrique</h2>
                            <p>La rénovation électrique est essentielle pour garantir la sécurité et la performance de
                                votre installation électrique. Notre équipe d'électriciens à Nîmes est spécialisée dans
                                les travaux de rénovation électrique pour améliorer la qualité de vie de nos clients.
                                Découvrez quelques exemples de nos réalisations en matière de rénovation électrique
                                :</p>
                        </div>
                        <ImageSlider slides={renovationSlides}/>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text">
                            <h2>Extension et aménagement</h2>
                            <p>Les extensions et aménagements de votre habitation nécessitent souvent une adaptation de
                                votre installation électrique. En tant qu'électricien à Nîmes, nous vous accompagnons
                                dans ces projets pour garantir une intégration harmonieuse et sécurisée de vos
                                équipements électriques. Découvrez quelques exemples de nos réalisations en matière
                                d'extension et d'aménagement :</p>
                        </div>
                        <ImageSlider slides={extensionSlides}/>
                    </div>
                </section>
                <Testimonials/>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text-block">
                            <p>En tant qu'électricien à Nîmes, nous sommes fiers de vous présenter nos réalisations en
                                matière de projets résidentiels. La satisfaction de nos clients est notre priorité. Nous
                                mettons tout en œuvre pour vous offrir un service de qualité, adapté à vos besoins et à
                                vos attentes.</p>

                            <p>N'hésitez pas à nous contacter pour discuter de votre projet résidentiel et obtenir un
                                devis personnalisé. En choisissant notre entreprise d'électriciens à Nîmes, vous
                                bénéficierez d'une expertise reconnue et d'un accompagnement personnalisé tout au long
                                de votre projet. Ensemble, concrétisons vos projets électriques et assurons la sécurité,
                                la performance et le confort de votre habitation !</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
