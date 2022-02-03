import React from 'react';
// Children components
import Logo from 'components/Logo';
// Styles
import {wrapper} from './style.module.scss';

const BusinessCard = () => {

    return (
        <div className={wrapper}>
            <Logo />
            <p className='mb-1'>ul. Towarowa 5/6</p>
            <p>31-000 Kraków</p>
            <a className='mb-2' href="tel:+48999999999">+48 999 999 999 </a>
            <a href="mailto:email@email.com">email@email.com</a>
            <p></p>
        </div>
    )
}

export default BusinessCard;