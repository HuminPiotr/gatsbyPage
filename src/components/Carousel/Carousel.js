import React, {useState, useEffect, useRef} from 'react';
import PropTypes from "prop-types";
// Style
import { wrapper, slide, active, overlay, panel, progressBar, progressBar__loader, progressBar__container, arrows, inprogress  } from './style.module.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// Children components
import ArrowButton from 'components/ArrowButton';

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide ] = useState(1);
    const numberOfSlides = images.length;
    const loader = useRef(null);
    const timeToChangeSlide = 6000;

    
    const hiddeSlide = (id) => {
        const slide = document.getElementById(id);
        slide.classList.remove(active);
    }

    const showSlide = (id) => {
        const slide = document.getElementById(id);
        slide.classList.add(active); 
    }

    const goToPrevSlide = () => {
        hiddeSlide(currentSlide);
        if(currentSlide === 1){
            setCurrentSlide(numberOfSlides);
            hiddeSlide(1);
            showSlide(numberOfSlides )
        }
        else{
            setCurrentSlide(currentSlide - 1);
            hiddeSlide(currentSlide)
            showSlide(currentSlide - 1)
        }
    }

    const goToNextSlide = () => {
        // reset animation progress bar
        loader.current.classList.remove(inprogress);
        
        hiddeSlide(currentSlide);
        if(currentSlide === numberOfSlides){
            setCurrentSlide(1);
            hiddeSlide(numberOfSlides);
            showSlide(1)
        }
        else{
            setCurrentSlide(currentSlide + 1);
            hiddeSlide(currentSlide)
            showSlide(currentSlide + 1)
        }
    }

    useEffect(() => {
        const idInterval = setInterval(() => {
            goToNextSlide();
        },timeToChangeSlide);

        setTimeout(() => {
            loader.current.classList.add(inprogress);
            loader.current.style.animationDuration = `${timeToChangeSlide / 1000}s`;
        },2);

        return () => {
            clearInterval(idInterval);
            loader.current.classList.remove(inprogress);
        }
    });

    return (
        <div className={wrapper}>
            <img src="/overlay.svg" alt="Overlay" className={overlay} />
            {
                images.map( (item,index ) => {
                    const image = getImage(item.node.childrenImageSharp[0]);
                    if (index === 0) return (<div className={`${slide} ${active}`} key={index} id={index + 1}> <GatsbyImage  image={image} alt={`slide-${index}`} /> </div>) 
                    return (<div className={slide} key={index} id={index + 1}> <GatsbyImage  image={image} alt={`slide-${index}`} /> </div>)
                } )
            }           
            <div className={panel}>
                <div className={arrows}>
                    <ArrowButton size="xl" type="prev" onClick={goToPrevSlide} width="160px" />
                    <ArrowButton size="xl" type="next" onClick={goToNextSlide} />
                </div>

                <div className={progressBar}>
                    <p>0{currentSlide}</p>
                    <div className={progressBar__container}>
                        <div ref={loader} className={progressBar__loader}  ></div>
                    </div>
                    <p>03</p>
                </div>
            </div>
        </div>
    )
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object)
}



export default Carousel;