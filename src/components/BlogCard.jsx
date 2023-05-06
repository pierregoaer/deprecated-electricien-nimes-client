import React from 'react';
import {Link} from 'react-router-dom';


export default function BlogCard({blogData}) {
    return (
        <div className="blog-card-container">
            <div className="blog-card">
                <div className="blog-card-thumbnail-container">
                    <img className="blog-card-thumbnail" src={`https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_500,w_800,f_auto/v1682719065/website-lending/electricien-nimes/${blogData.hero_image_url}`} alt=""/>
                </div>
                <div className="blog-card-text-container">
                    <div className="blog-card-text">
                        <p className="blog-card-date">{`${blogData.date} - ${blogData.reading_time} minutes de lecture`}</p>
                        <h3 className="blog-card-title">{blogData.title}</h3>
                        <p className="blog-card-description">{blogData.meta_description}</p>
                    </div>
                    <Link to={`/blog/${blogData.url}`} className="blog-card-read-more">Lire la suite</Link>
                </div>
            </div>
        </div>
    );
}
