import React from 'react';
import PropTypes from "prop-types";
// Styles
import {arrowButton, prev, next, xl, md, sm, backgroundHover} from './style.module.scss';


const ArrowButton = ({type, size, width, height, onClick, className}) => {
  const getSizeClass = (size) => {
    switch(size){
      case 'xl':
        return xl;
        break;
      case 'md':
        return md;
        break;
      case 'sm':
        return sm;
      default:
        return undefined;
    }
  }

  const classType = type === 'prev' ? prev : next;
  const classSize = getSizeClass(size);

    return (
        <button  style={{width: width, height: height}} className={`${arrowButton} ${classSize} ${className}`}  onClick={onClick}>
            <img  src={`/${type}Arrow.svg`} alt={`${type} arrow`} />
            <div className={`${backgroundHover} ${classType}`}></div>
        </button>
    )
}

ArrowButton.propTypes = {
    type: PropTypes.oneOf(['prev', 'next']).isRequired,
    size: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
  }

export default ArrowButton;