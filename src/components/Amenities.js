import React from 'react';
import playground from '../images/playground.jpg';
import smartclass from '../images/smartclass.jpg';
import library from '../images/library.jpg';



const Amenities = () => {
    return (
        <div className="container" >
            <h4 className="display-4 text-center"> Our Amenities </h4>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={playground} height="450px" alt="First slide" />

                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={smartclass} height="450px" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={library} height="450px" alt="Third slide" />
                    </div>

                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Amenities;