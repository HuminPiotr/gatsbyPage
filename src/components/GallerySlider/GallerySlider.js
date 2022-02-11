import React, {useRef, useState} from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
// Children components
import ArrowButton from 'components/ArrowButton';
import SimpleReactLightBox, { SRLWrapper } from 'simple-react-lightbox';
// Style
import {wrapper, grid, buttons} from './style.module.scss';

const GallerySlider = ({ images }) => {
    const galleryGrid = useRef(null);
    const [displacment, setDisplacment] = useState(0);

    const lightBoxOptions = {
        buttons: {
            showAutoplayButton: false,
            showCloseButton: false,
            showDownloadButton: false,
            showFullscreenButton: false,
            showNextButton: true,
            showPrevButton: true,
            showThumbnailsButton: false,
        },
        caption:{
            showCaption: false
        },
        thumbnails: {
            showThumbnails: false
        }
    }

    const slideNext = () => {
        if (displacment !== -100){
            galleryGrid.current.style.left = `${displacment - 50}%` ;
            setDisplacment(displacment - 50);
        }
        else{
            return;
        }
    }

    const slidePrev = () => {
        if (displacment !== 0){
            galleryGrid.current.style.left = `${displacment + 50}%` ;
            setDisplacment(displacment + 50);
        }
        else{
            return;
        }
    }

    
    const imageList = images.map( (item,index ) => {
        const image = getImage(item.node.childrenImageSharp[0]);
        console.log(item.node.publicURL);
        return (
                <a href={item.node.publicURL}>
                        <GatsbyImage image={image} alt={`gallery-${index}`} />
                </a>
        )
    });
   


    return (
        <SimpleReactLightBox>
         <div className={wrapper}>
            <h2>Galeria</h2>
            <div className={buttons}>
                 <ArrowButton size="xl" width="130px" height="130px" type="prev" 
                 onClick={slidePrev}
                 />
                 <ArrowButton size="xl" width="130px" height="130px" type="next"
                 onClick={slideNext}
                 />
            </div>
            <SRLWrapper options={lightBoxOptions}>
                <div className={grid} ref={galleryGrid}>
                        {imageList}
                </div>
            </SRLWrapper>
        </div>
        </SimpleReactLightBox>
    )
}

GallerySlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default GallerySlider;