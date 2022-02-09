import React from 'react';
// Styles
import {wrapper, contact, address} from './style.module.scss';

const BusinessCard = () => {

    return (
        <div className={wrapper}>
            <h2>Logo</h2>
            <div className={address}>
                <p >ul. Towarowa 5/6</p>
                <p >31-000 Kraków</p>
            </div>
            <div className={contact}>
                <a  href="tel:+48999999999">+48 999 999 999 </a>
                <a href="mailto:email@email.com">email@email.com</a>
            </div>
            
        </div>
    )
}

export default BusinessCard;