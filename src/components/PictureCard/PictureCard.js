import React from 'react';
//Children components
// Styles
import { wrapper, picture } from './style.module.scss';

const PictureCard = ({ pictureSrc, signature, picturePosition }) => {

    return(
        <div className={wrapper}>
            <div className={picture}>
                <img src={pictureSrc} alt="picture card" style={picturePosition}/>
            </div>
            <p className="signature">{signature}</p>
        </div>
    )
}


export default PictureCard;