import React from 'react';
import PropTypes from "prop-types";

// Styles
import { wrapper } from './style.module.scss';



const SocialButton = ( { icon, link } ) => {

    return(
        <button className={wrapper}>
            <a href={link} target="_blank" rel="noreferrer" >
                <img src={`/${icon}-icon.svg`} alt={`${icon} icon`}/>
            </a>
        </button>
    )
}

SocialButton.propTypes = {
    icon: PropTypes.oneOf(['facebook', 'instagram']).isRequired,
    link: PropTypes.string.isRequired
  }

export default SocialButton;