import React from 'react';
import PropTypes from "prop-types"
// Children components
import Navigation from 'components/Navigation';
import SocialButton from 'components/SocialButton';
import BusinessCard from 'components/BusinessCard';
// Styles
import { wrapper, active } from './style.module.scss';

const MobileMenu = ({ isOpen, onClick }) => {
    return (
        <div className={isOpen ? `${active} ${wrapper}` : wrapper }>
                <Navigation onClick={onClick}/>
                <BusinessCard />
                <div className="socials d-flex justify-content-center">
                    <SocialButton icon="facebook" link="https://www.facebook.com/" />
                    <SocialButton icon="instagram" link="https://www.instagram.com/" />
                </div>
        </div>
    )
}

MobileMenu.propTypes = {
    isOpen: PropTypes.bool,
    onClick: PropTypes.func
}

export default MobileMenu;