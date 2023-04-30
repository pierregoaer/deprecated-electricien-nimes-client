import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import '../styles/silo-page.css';

export default function Services() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>Services Électriques à Nîmes | Installation, Rénovation & Dépannage</title>
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
            <main className="silo-page-container">
                <section className="silo-page-hero">
                    <div className="section-inner hero-section-padding silo-main">
                        <div className="silo-page-text-block">
                            <h1>Découvrez nos services électriques à Nîmes : une gamme complète pour répondre à tous vos
                                besoins.</h1>
                            <p>Notre entreprise d'électricité à Nîmes vous propose une gamme complète de services
                                électriques pour répondre à tous vos besoins, qu'il s'agisse d'installations neuves, de
                                rénovations, de dépannages, d'éclairage ou de domotique et objets connectés. Notre
                                équipe
                                d'électriciens professionnels est à votre écoute pour vous accompagner et vous
                                conseiller
                                dans la réalisation de vos projets. Découvrez ci-dessous nos différents services
                                électriques.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="silo-cards secondary-section-padding">
                        <div className="silo-card">
                            <div className="silo-card-text">
                                <h4>Installation</h4>
                                <p>Que vous ayez besoin d'une installation électrique pour un bâtiment neuf ou pour
                                    remplacer un système existant, nous sommes là pour vous aider. Nous réalisons
                                    des
                                    installations électriques résidentielles, commerciales et industrielles, en
                                    veillant
                                    à respecter les normes en vigueur et à optimiser la sécurité et la performance
                                    de
                                    vos équipements.</p>
                                <Link to={'/installation'} className="btn-tertiary">En savoir plus</Link>
                            </div>
                            <div className="silo-card-image">
                                <img
                                    src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1681828281/website-lending/electricien-nimes/mxwsvviqi9q1kxyso14n.jpg"
                                    alt="Electricien Nîmes"/>
                            </div>
                        </div>
                        <div className="silo-card">
                            <div className="silo-card-text">
                                <h4>Rénovation et mise aux normes</h4>
                                <p>La rénovation électrique est essentielle pour garantir la sécurité et la
                                    conformité
                                    de vos installations. Nous prenons en charge la mise aux normes, le remplacement
                                    de
                                    tableaux électriques et la réparation de circuits électriques. Nos électriciens
                                    à
                                    Nîmes travaillent avec rigueur et professionnalisme pour assurer la qualité et
                                    la
                                    sécurité de vos installations.</p>
                                <Link to={'/renovation-et-mise-aux-normes'} className="btn-tertiary">En savoir
                                    plus</Link>
                            </div>
                            <div className="silo-card-image">
                                <img
                                    src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1682630773/website-lending/electricien-nimes/md_jerry-1G5gtser-qY-unsplash_ivmxk5.jpg"
                                    alt="Electricien Nîmes"/>
                            </div>
                        </div>
                        <div className="silo-card">
                            <div className="silo-card-text">
                                <h4>Dépannage et maintenance</h4>
                                <p>En cas de panne ou d'urgence électrique, notre équipe de dépannage intervient
                                    rapidement pour résoudre vos problèmes. Nous diagnostiquons et réparons les
                                    pannes,
                                    et remplaçons les composants défectueux. Nos électriciens sont disponibles 24/7
                                    pour
                                    vous garantir une intervention rapide et efficace en toutes circonstances.</p>
                                <Link to={'/depannage-et-maintenance'} className="btn-tertiary">En savoir
                                    plus</Link>
                            </div>
                            <div className="silo-card-image">
                                <img
                                    src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1681830038/website-lending/electricien-nimes/robert-linder-BJILnzj53_M-unsplash_i8ydct.jpg"
                                    alt="Electricien Nîmes"/>
                            </div>
                        </div>
                        <div className="silo-card">
                            <div className="silo-card-text">
                                <h4>Éclairage</h4>
                                <p>Nous proposons des solutions d'éclairage intérieur et extérieur adaptées à vos
                                    besoins et à votre budget. Notre équipe vous conseille sur les meilleures
                                    options
                                    pour économiser de l'énergie et améliorer le confort de votre habitat ou de
                                    votre
                                    local commercial. Nous installons également des systèmes d'éclairage LED et
                                    domotique pour vous offrir un contrôle optimal de vos installations.</p>
                                <Link to={'/eclairage'} className="btn-tertiary">En savoir plus</Link>
                            </div>
                            <div className="silo-card-image">
                                <img
                                    src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1682631138/website-lending/electricien-nimes/skye-studios-NDLLFxTELrU-unsplash_jguhcr.jpg"
                                    alt="Electricien Nîmes"/>
                            </div>
                        </div>
                        <div className="silo-card">
                            <div className="silo-card-text">
                                <h4>Domotique et objets connectés</h4>
                                <p>La domotique et les objets connectés révolutionnent notre façon de vivre et de
                                    gérer
                                    notre quotidien. Nous vous accompagnons dans l'installation de systèmes
                                    domotiques
                                    et d'objets connectés pour optimiser le confort, la sécurité et l'efficacité
                                    énergétique de votre habitation ou de votre entreprise.</p>
                                <Link to={'/domotique-et-objets-connectes'} className="btn-tertiary">En savoir
                                    plus</Link>
                            </div>
                            <div className="silo-card-image">
                                <img
                                    src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1682631078/website-lending/electricien-nimes/r-architecture-T6d96Qrb5MY-unsplash_vbjufw.jpg"
                                    alt="Electricien Nîmes"/>
                            </div>
                        </div>

                    </div>
                </section>
                <section>
                    <div className="silo-page-text-block">
                        <p>Faites appel à notre entreprise d'électricité à Nîmes pour bénéficier d'une gamme
                            complète de
                            services électriques adaptés à vos besoins. Notre équipe de professionnels qualifiés est
                            à
                            votre service pour vous offrir des solutions sur-mesure et vous garantir des
                            installations
                            sûres et performantes. N'hésitez pas à nous contacter pour discuter de votre projet et
                            obtenir un devis personnalisé.</p>
                    </div>
                </section>
            </main>
        </>
    )
        ;
}
