import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CTAMain from './components/CTAMain';
import Home from './pages/Home';
import Services from './pages/Services';
import Installation from "./pages/Installation.jsx";
import Renovation from "./pages/Renovation.jsx";
import Maintenance from "./pages/Maintenance.jsx";
import Lighting from "./pages/Lighting.jsx";
import Automation from "./pages/Automation.jsx";
import Realizations from './pages/Realizations';
import ResidentialProjects from './pages/ResidentialProjects';
import CommercialProjects from './pages/CommercialProjects';
import IndustrialProjects from './pages/IndustrialProjects';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogArticle from './pages/BlogArticle';
import AboutUs from "./pages/AboutUs";

import './styles/styles.css';

function App() {
    const [blogsData, setBlogsData] = useState({})
    const [blogsFetched, setBlogsFetched] = useState(false)

    useEffect(function () {
        fetch(
            "https://api.electricien-nimes.com/get-blogs",
            // "http://127.0.0.1:8000/get-blogs",
            {
                method: 'GET',
            })
            .then(res => res.json())
            .then(data => {
                setBlogsData(data)
                setBlogsFetched(true)
            })
    }, [])
    return (
        <>
            <Nav/>
            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
                <Route exact path={'/services'} element={<Services/>}/>
                <Route path={'/services/installation'} element={<Installation/>}/>
                <Route path={'/services/renovation-et-mise-aux-normes'} element={<Renovation/>}/>
                <Route path={'/services/depannage-et-maintenance'} element={<Maintenance/>}/>
                <Route path={'/services/eclairage'} element={<Lighting/>}/>
                <Route path={'/services/domotique-et-objets-connectes'} element={<Automation/>}/>
                <Route exact path={'/realisations'} element={<Realizations/>}/>
                <Route path={'/realisations/projets-residentiels'} element={<ResidentialProjects/>}/>
                <Route path={'/realisations/projets-commerciaux'} element={<CommercialProjects/>}/>
                <Route path={'/realisations/projets-industriels'} element={<IndustrialProjects/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'/a-propos'} element={<AboutUs/>}/>
                <Route exact path={'/blog'} element={<Blogs blogsData={blogsData} blogsFetched={blogsFetched}/>}/>
                <Route path={'/blog/:blogUrl'} element={<BlogArticle blogsData={blogsData} blogsFetched={blogsFetched}/>}/>
            </Routes>
            <CTAMain/>
            <Footer/>
        </>
    );
}

export default App;
