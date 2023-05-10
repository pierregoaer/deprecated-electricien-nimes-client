import React, {useState} from 'react';

export default function TestimonialCard({quote, name, image}) {
    return (
        <li className="testimonial-card">
            <div className="testimonial-card-quote justified-text">{`"${quote}"`}</div>
            <div className="testimonial-card-details">
                <img className="image" src={image} alt={`Témoignage ${name}`}/>
                <div className="name">{name}</div>
            </div>
        </li>

    );
}