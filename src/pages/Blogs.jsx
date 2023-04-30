import React, {useState, useEffect} from 'react';
import BlogCard from "../components/BlogCard.jsx";


import '../styles/blogs.css';

export default function Blogs({blogsData, blogsFetched}) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let blogElements = []

    if (blogsFetched) {
        blogElements = blogsData.map(blog => {
            return <BlogCard key={blog.id} blogData={blog}/>
        })
    }

    return (
        <>
            <section className="blogs-container">
                <div className="hero-section-padding blogs-main">
                    <div className="blogs-text">
                        <h1>Blog</h1>
                        <p></p>
                    </div>
                    <div className="blogs-grid">
                        {blogsFetched && blogElements}
                    </div>

                </div>
            </section>
        </>
    )
}
