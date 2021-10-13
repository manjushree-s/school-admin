import React from 'react';
import playground from '../images/playground.jpg';
import smartclass from '../images/smartclass.jpg';
import library from '../images/library.jpg';
import auditorium from '../images/auditorium.jpg';
import complab from '../images/complab.jpg';
import lab from '../images/lab.jpg';
import school from '../images/school.jpg';

const Amenities = () => {
    return (
        <div className="container text-center" >
            <div class="card mb-3" style={{ width: "69.3rem" }}>
                <img src={school} width="200" height="400" class="card-img-top" alt="..."/>
                <div class="card-body text-center">
                    <h3 class="card-text text-center">Build the foundation for your future!</h3>
                    <table class="table table-striped text-center"></table>
                    <p class="card-text text-center">Founders: Aishwarya, Darshini, Manjushree, Nidhi, Rashmitha</p>
                    <p class="card-text text-center">Date of Establishment: Jan 1999</p>
                </div>
        </div>
            <h4 className="display-4 text-center"> Our Amenities </h4>
            <p className="text-center"> What distinguishes a great school from a good school? I believe that clarity of purpose, exceptional teachers, and demonstrated outcomes are hallmarks of great schools. A great school is a place with a deep commitment to student learning, where faculty nourish the intellectual, moral, emotional, and social growth of every student. It is a place where students, teachers, and parents embark together on an academic journey with clear and well-defined objectives. It is filled with the joy of discovery and the excitement of personal challenge and growth. It is a community dedicated to developing strength of character and excellence in all dimensions of its students' lives. And it is a place that has a distinctive and lasting impact.</p>
            <p className="text-center">Our School strives to be a great school. Our mission, simply put, is to prepare students for lives of purpose, achievement, and generosity of spirit. The five dynamic women who founded our school set out with this mission in 1904, and it continues to guide everything that we do.</p>
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
                    <div class="carousel-item">
                        <img class="d-block w-100" src={auditorium} height="450px" alt="Fourth slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={complab} height="450px" alt="Fifth slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={lab} height="450px" alt="Sixth slide" />
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