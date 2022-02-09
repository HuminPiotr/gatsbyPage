import React from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby";
// Styles
import {navigation, hoverEffect} from './style.module.scss'

const Navigation = ({ className, onClick}) => {
    return (
      <nav className={`${navigation} ${className}`}>
          <ul>
            <li   >
              <Link to="#"  onClick={() => onClick(false)}>Poznaj przestrzeń
                <span className={hoverEffect}></span>
              </Link>
            </li>
            <li   >
              <Link to="#"  onClick={() => onClick(false)}>Oferta
                <span className={hoverEffect}></span> 
              </Link>

            </li>
            <li   >
              <Link to="#"  onClick={() => onClick(false)}>Lokalizacja
                <span className={hoverEffect}></span>
              </Link> 
              
            </li>
            <li   >
              <Link  to="#" onClick={() => onClick(false)}  >Własne biuro
                <span className={hoverEffect}></span>
              </Link> 
              </li>
            <li   >
              <Link to="#" onClick={() => onClick(false)} >Kontakt
                <span className={hoverEffect}></span>
              </Link> 
              </li>
          </ul>
        </nav>
    )
}

Navigation.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Navigation;