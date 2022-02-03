import React from 'react';
import PropTypes from "prop-types";
// Styles
import { button, background, backgroundHover, text } from './style.module.scss';

const Button = ({children}) => {

    return (
        <button className={button}>
            <div className={background}></div>
            <div className={backgroundHover}></div>
            <p className={text}> {children} </p>
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default Button;