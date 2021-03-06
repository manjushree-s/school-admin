import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from 'react';
import logo from '../images/logo.jpg';

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (isLoggedIn); // use localStorage here 
        setIsLoggedIn(true);
    }, []);

    if (isLoggedIn) {
        return (
            <header class="header sticky-top" style={{ top: '0', width: '100%', overflow: 'hidden', marginLeft: '0', marginRight: '0' }}>
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-success text-white">
                    <div class="container">
                    <Link className="navbar-brand" to="/home">
                        <img src={logo}
                            height="95px" width="115px" alt="Capgemini" />
                    </Link>
                        <h1 className="h1">School Administration System</h1>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Login" >Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About" >About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Amenities" >Amenities</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contact" >Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home" >Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    } else {
        return (
            <header class="header sticky-top" style={{ top: '0', width: '100%', overflow: 'hidden', marginLeft: '0', marginRight: '0' }}>
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/home">
                            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                height="24px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home" >Logout</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About" >About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contact" >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );

    }
}

export default Header;