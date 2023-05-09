import React, {useState} from 'react';
import '../styles/image-slider.css';

export default function ImageSlider({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const slideElements = slides.map((slide, index) => {
        return (
            <div
                key={index}
                className="slider-card"
                style={{transform: `translateX(${100 * (index - currentIndex)}%)`}}
            >
                <img src={slide.slideUrl} alt={slide.slideAlt}/>
                <p className="slide-text">{slide.slideText}</p>
            </div>
        )
    })

    const dotsElements = slides.map((slide, index) => {
        return (
            <div
                key={index}
                className="slider-dot"
                onClick={() => goToSlide(index)}
                style={index === currentIndex ? {backgroundColor: 'var(--primary-accent-color)'} : {backgroundColor: 'var(--tertiary-accent-color-opacity)'}}
            >
            </div>
        )
    })

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="slider-container">
            <div className="slider-images">
                {slideElements}
                <div className="slider-btn slider-btn-previous" onClick={goToPrevious}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M11.8284 12.0005L14.6569 14.8289L13.2426 16.2431L9 12.0005L13.2426 7.75781L14.6569 9.17203L11.8284 12.0005Z"></path>
                    </svg>
                </div>
                <div className="slider-btn slider-btn-next" onClick={goToNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
                    </svg>
                </div>
            </div>
            <div className="slider-dots">
                {dotsElements}
            </div>
        </div>
    )
}