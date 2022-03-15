import React from "react";
import {Link} from "react-scroll";
// REACT FONTAWESOME
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className="container">
                    <Link smooth={true} to="home" className="navbar-brand" id="logo" href="/">AANdrei.</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                        </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link smooth={true} to="home" offset={-110} className="nav-link" href="/">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="about" offset={-110} className="nav-link" href="/">about me</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="services" offset={-110} className="nav-link" href="/">services</Link>
                            </li>
                                
                            <li className="nav-item">
                                <Link smooth={true} to="experience" offset={-110} className="nav-link" href="/">experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="portofolio" offset={-110} className="nav-link" href="/">portofolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="/">contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar