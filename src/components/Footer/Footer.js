import React from 'react';
// Children components
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import { Container } from 'react-bootstrap';
import BusinessCard from 'components/BusinessCard';
// Style
import { footer, footer__top, footer__navigation, footer__bottom, footer__ornament, signature} from './style.module.scss';

const Footer = () => {

    return(
    <footer className={footer}>
        <Container className="flex-wrap position-relative d-flex">
        <StaticImage src="../../images/ornament_footer.svg" className={footer__ornament} />
        <div className={footer__top}>
            <BusinessCard />
            <div className={footer__navigation}>
            <ul>
                <li><Link to="/">Strona główna</Link></li>
                <li><Link to="#">Lokalizacja</Link></li>
                <li><Link to="#">Poznaj przestrzeń</Link></li>
                <li><Link to="#">Własne biuro</Link></li>
                <li><Link to="#">Oferta</Link></li>
                <li><Link to="#">Kontakt</Link></li>
            </ul>
            </div>
        </div>
        <div className={footer__bottom}>
            <Link to="#">Polityka prywatności</Link>
            <div className={signature}>
                <p>Proudly designed by </p>
                <StaticImage src="../../images/logo_adream.svg" />
            </div>
        </div>
        </Container>
    </footer>
    )
    
}

export default Footer;