import React, {useState, useEffect} from 'react';
import {Helmet} from "react-helmet";

import Hero from '../components/HomeHero.jsx';
import HomeAboutUs from '../components/HomeAboutUs';
import HomeServices from '../components/HomeServices';
import Testimonials from '../components/Testimonials';
import HomeRealizations from '../components/HomeRealizations.jsx';
import HomeFAQ from '../components/HomeFAQ';

import '../styles/home.css';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Helmet>
                <title>Électricien Nîmes : Services & Réalisations | Votre Expert Local</title>
                <meta name="description"
                      content="Découvrez notre expertise en électricité à Nîmes : installations, rénovations, dépannages et plus encore. Faites confiance à notre équipe pour vos projets électriques."/>
                <meta name="robots" content="index, follow"/>

                <meta property="og:url" content="https://eletricien-nimes.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Électricien Nîmes : Services & Réalisations | Votre Expert Local"/>
                <meta property="og:description" content="Découvrez notre expertise en électricité à Nîmes : installations, rénovations, dépannages et plus encore. Faites confiance à notre équipe pour vos projets électriques."/>
                <meta property="og:image" content="{{ article['hero-image-url'] }}"/>
            </Helmet>
            <Hero/>
            <HomeAboutUs/>
            <HomeServices/>
            <Testimonials/>
            <HomeFAQ/>
        </>
    );
}
