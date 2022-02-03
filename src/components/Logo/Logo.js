import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { logo } from './style.module.scss';

const Logo = ({ link, className }) => {
    return (
        <>
            {
                link
                  ? <Link to='/' className={className}> <h2 className={logo}>LOGO</h2> </Link>
                  : <h2 className={`${logo} ${className}`}>LOGO</h2> 
            }
        </>
    )
} 

Logo.propTypes = {
    link: PropTypes.bool,
    className: PropTypes.string
}

Logo.defaultProps = {
    link: false,
}

export default Logo;