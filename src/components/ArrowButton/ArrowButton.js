import React from 'react';
import PropTypes from "prop-types";
// Styles
import {arrowButton, hoverEffect, prev, next } from './style.module.scss';

const ArrowButton = ({type, width, height, onClick}) => {

    return (
        <button  style={{width: width, height: height}} className={`${arrowButton} `}  onClick={onClick}>
            <img  src={`/${type}Arrow.svg`} alt={`${type} arrow`} />
              {
                  type === "prev" ? 
                    <img  className={`${hoverEffect} ${prev}`} src={`/${type}Arrow-black.svg`} alt={`${type} arrow`} />
                  : 
                    <img  className={`${hoverEffect} ${next}`} src={`/${type}Arrow-black.svg`} alt={`${type} arrow`} />

              }
        </button>
    )
}

ArrowButton.propTypes = {
    type: PropTypes.oneOf(['prev', 'next']).isRequired,
    onClick: PropTypes.func
  }

export default ArrowButton;