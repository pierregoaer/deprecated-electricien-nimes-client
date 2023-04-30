import React, {useState} from 'react';

export default function FAQQuestion({question, answer}) {
    const [active, setActive] = useState(false)

    function handleToggle() {
        setActive(!active)
    }

    return (
        <li className={active && "active"}>
            <h3 className="home-faq-question" onClick={handleToggle}>
                {question}
                <div className={`plus-minus-toggle ${active ? "" : "collapsed"}`}></div>
            </h3>
            <div className="home-faq-answer">
                <p>{answer}</p>
            </div>
        </li>

    );
}