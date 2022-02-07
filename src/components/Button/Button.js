import React from 'react';
import PropTypes from "prop-types";
// Styles
import { button, background, backgroundHover, text, arrow } from './style.module.scss';

const Button = ({children, variant}) => {
    const variantClass = variant === 'arrow' ? arrow : '';
    return (
        <button className={`${button} ${variantClass}` }>
            <div className={background}></div>
            <div className={backgroundHover}></div>
            <p className={text}> {children} </p>
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'arrow'])
  }

Button.defaultProps = {
    variant: 'default'
}

export default Button;