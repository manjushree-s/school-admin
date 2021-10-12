import React from 'react';
import blackboard from '../images/blackboard.jpg';

const About = () => {
    return (
        <header class="header sticky-top" style={{ top: '0', width: '100%', overflow: 'hidden', marginLeft: '0', marginRight: '0' }}>
            <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-white text-dark">
                <div className="container" >
                    <title>About Us</title>
                    <p><br /><br /></p>
                    <p><br /><br /></p>
                    <div class="card bg-dark text-white">
                        <img src={blackboard} width="560" height="500" class="card-img" />
                        <div class="card-img-overlay">
                            <h1 class="card-title text-center">Our School</h1>
                            <p class="card-text text-center">We further believe in nurturing a culture of learning that facilitates the pursuit of excellence in every learner. Why Our School? We constantly innovate to blend contemporary educational research and strengthen our pedagogy, providing our learners with diverse and impact learning opportunities. Nothing is impossible for an achiever. Looking back at the start up days, the institution has grown in a phased manner with the support of all concerned.</p>
                            <p class="card-text"></p>
                        </div>
                    </div>
                    <p><br /><br /></p>
                    <div class="container text-center">
                        <iframe width="800" height="400" src="https://www.youtube.com/embed/8UhBLbM638s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </nav>
        </header>
        
    );
}

export default About;