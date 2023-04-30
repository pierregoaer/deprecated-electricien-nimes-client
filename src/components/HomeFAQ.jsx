import React from 'react';
import FAQQuestion from "./FAQQuestion";
import {Link} from "react-router-dom";

export default function HomeServices() {
    return (
        <section className="home-faq-container">
            <div className="section-inner secondary-section-padding home-faq-main">
                <div className="home-faq-text">
                    <h2>Les questions fréquentes sur l'électricité</h2>
                    <p>Vous avez d'autres questions ?</p>
                    <Link to={'/contact'} className="btn-primary">Contactez-Nous</Link>
                </div>
                <ul className="home-faq-list">
                    <FAQQuestion
                        question="Quelles sont les normes à respecter pour une installation électrique ?"
                        answer="Les installations électriques doivent respecter la norme NF C 15-100, qui garantit la sécurité et la performance des équipements électriques. Nos électriciens à Nîmes veillent à respecter cette norme lors de la réalisation de vos projets."
                    />
                    <FAQQuestion
                        question="Comment savoir si mon installation électrique est aux normes ?"
                        answer="Pour vérifier si votre installation électrique est aux normes, il est recommandé de faire appel à un électricien professionnel à Nîmes. Celui - ci pourra effectuer un diagnostic complet de votre installation et vous conseiller sur les éventuelles améliorations à apporter. Vous pouvez aussi faire appel à un diagnostiqueur immobilier professionnel."
                    />
                    <FAQQuestion
                        question="Combien coûte un dépannage électrique ?"
                        answer="Le coût d'un dépannage électrique peut varier en fonction de la nature du problème et de la complexité des travaux à réaliser. N'hésitez pas à nous contacter pour obtenir un devis personnalisé pour vos besoins en dépannage électrique à Nîmes."
                    />
                    <FAQQuestion
                        question="Quelle est la durée de vie d'une installation électrique ?"
                        answer="La durée de vie d'une installation électrique dépend de plusieurs facteurs, tels que la qualité des matériaux utilisés, l'entretien et les conditions d'utilisation. En règle générale, une installation électrique bien entretenue peut durer entre 20 et 40 ans."
                    />

                </ul>
            </div>
        </section>
    );
}
