import React  from 'react';
import PropTypes from "prop-types";
// Styles
import {wrapper, burger, active} from './style.module.scss';

const Burger = ({ isActive, onClick}) => {
    return (
        <button className={wrapper} onClick={() => onClick(!active)}>
            <div className={isActive ? `${active} ${burger}` : burger }></div>
        </button>
    )
}

Burger.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func
}

Burger.defaultProps = {
    isActive: true
}

export default Burger;