import React from 'react';
import './Navbar.css'; 
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar expand="lg" className="navbar-custom">
            <Navbar.Brand href="#home" className="navbar-brand-custom">Nutrition Recommender</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink exact activeClassName="active" className="nav-link-custom" to="/">Home</NavLink>
                    <NavLink activeClassName="active" className="nav-link-custom" to="/meals">Meals Inspo</NavLink>
                    <NavLink activeClassName="active" className="nav-link-custom" to="/quiz">Quiz</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
