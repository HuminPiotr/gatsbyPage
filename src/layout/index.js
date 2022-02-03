import React, {useState} from "react"
import PropTypes from "prop-types"

// Children components
import { Container } from 'react-bootstrap';
import Navigation from "components/Navigation/Navigation";
import Logo from "components/Logo/Logo";
import SocialButton from "components/SocialButton/SocialButton";
import Burger from 'components/Burger';
import MobileMenu from 'components/MobileMenu';
// Styles
import 'styles/index.scss';
import {navBar, socials} from './style.module.scss'

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="wrapper" >
      <Burger isActive={isMobile} onClick={() => setIsMobile(!isMobile)}/>
      <MobileMenu isOpen={isMobile} onClick={setIsMobile} />
      <div className={navBar}>
        <Container>
            <Logo link={true} className=" d-md-block"/>
            <Navigation className="d-none d-xl-flex" onClick={setIsMobile} />
            <div className={`${socials} d-none d-xl-flex`}>
              <SocialButton icon="facebook" link="https://www.facebook.com/" />
              <SocialButton icon="instagram" link="https://www.instagram.com/" />
            </div>
        </Container>

      </div>
        {children} 
      <footer>

      </footer>
    </div>
  ) 
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
