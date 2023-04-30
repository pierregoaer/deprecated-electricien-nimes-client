import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import '../styles/blog-article.css';

export default function Blogs({blogsData, blogsFetched}) {
    const {blogUrl} = useParams()
    let curBlog
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (blogsFetched) {
        curBlog = blogsData.find(blog => blog.url === blogUrl)
        const articleHTML = <div dangerouslySetInnerHTML={{__html: curBlog.article}}/>

        return (
            <>
                <article className="blog-article-container">
                    <div className="section-inner blog-article--main">
                        <div className="blog-article-header">
                            <h1>{curBlog.title}</h1>
                            <p className="article-date">{`${curBlog.date} - ${curBlog.readingTime} minutes de lecture`}</p>
                            <img src={curBlog.heroImageUrl} alt={curBlog.title} className="hero-image"/>
                        </div>
                        <div className="blog-article-body">
                            {articleHTML}
                        </div>
                    </div>
                </article>
            </>
        )
    }
}
