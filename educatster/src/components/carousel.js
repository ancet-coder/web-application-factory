import React from 'react';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';


const Carousel = () => {
    return (
        <>
        <div className="img-slider container-flued row m-0">
            
        <div className="left">
        </div>
    
        <div id="demo" className="right offset-6 col-6 carousel slide p-0" data-bs-ride="carousel">
    
    
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
    
    
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" height="400" src={image1} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" height="400" src={image1} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" height="400" src={image1} alt="Third slide" />
                </div>
            </div>
    
    
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button> */}
        </div>
    </div>
    </>
  );
}

export default Carousel;
