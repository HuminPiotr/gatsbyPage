import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// Children components
import { Link } from 'gatsby';
import ArrowButton from 'components/ArrowButton';
// Styles
import {wrapper, overlay, header, headerBottom, button } from './styled.module.scss';
import {hover} from 'components/ArrowButton/style.module.scss';

const PhotoCard = ({image, title, subtitle, link, headerPosition}) => {
    const imageObject = getImage(image.node.childrenImageSharp[0]);
    const [hoverClass, setHoverClass] = useState('');

    return(
        <div className={wrapper} onMouseEnter={() => setHoverClass(hover)} onMouseLeave={() => setHoverClass('')}>
            <Link to={link} >
                <img src="/overlay-light.svg" alt="Overlay" className={overlay} />
                <GatsbyImage image={imageObject} alt="obrazek" />

                <div className={headerPosition === 'bottom' ? `${headerBottom} ` : header }>
                        <h3>{title}</h3>
                        <p>{subtitle}</p>
                </div>

                <ArrowButton size="md" type="next" className={`${button} ${hoverClass}`}/>

            </Link>
            
        </div>
    )

}

PhotoCard.propTypes = {
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    headerPosition: PropTypes.oneOf(['up', 'bottom'])
}

PhotoCard.defaultProps = {
    link: "#",
    headerPosition: 'up'
}

export default PhotoCard;