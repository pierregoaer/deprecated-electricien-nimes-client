import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/cta-main.css';

export default function CTAMain() {
    return (
        <section className="cta-main-container">
            <div className="section-inner cta-main-main">
                <div className="cta-main-text">
                    <h3>Vous cherchez un expert en électricité à Nîmes?</h3>
                    <p>id eu duis laboris ex eiusmod consequat in proident sunt elit culpa Lorem aliquip mollit id cupidatat ex commodo sunt ipsum dolore reprehenderit mollit quis</p>
                    <Link to={'/contact'} className="btn-secondary">Contactez-Nous</Link>
                </div>
            </div>
        </section>
    );
}
