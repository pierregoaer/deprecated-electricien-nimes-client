import React, {useState} from 'react';

export default function TestimonialCard({quote, name}) {
    return (
        <li className="testimonial-card">
            <div className="testimonial-card-quote">{`"${quote}"`}</div>
            <div className="testimonial-card-details">
                <img className="image" src="/images/user-photo-default.JPG" alt=""/>
                <div className="name">{name}</div>
            </div>
        </li>

    );
}