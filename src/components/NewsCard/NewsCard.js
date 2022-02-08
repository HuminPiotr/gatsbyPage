import React from 'react';
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

// Style
import { wrapper } from './style.module.scss';


const NewsCard = ({ image, date, title, link, imageAlt}) => {
    const imageObject = getImage(image.node.childImageSharp.gatsbyImageData);
    let dateFormater = new Intl.DateTimeFormat('pl', {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    })

    return (
        <div className={wrapper}>
            <GatsbyImage  image={imageObject} alt={imageAlt} />
            <p>{dateFormater.format(date)}</p>
            <h3>{title}</h3>
            <Link to={link}>Więcej</Link>
        </div>
    )
}

NewsCard.propTypes = {
    image: PropTypes.object.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imageAlt: PropTypes.string
}

NewsCard.defaultProps = {
    imageAlt: "Zdjęcie newsa"
}

export default NewsCard;