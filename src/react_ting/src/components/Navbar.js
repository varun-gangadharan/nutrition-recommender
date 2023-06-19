import React from 'react';
import './Navbar.css'; 
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar className="navbar-custom">
            <h1 className="navbar-brand-custom">AI Nutrition Recommender</h1> 
            <Nav className="ml-auto">
                <NavLink exact activeClassName="active" className="nav-link-custom" to="/">Home</NavLink>
                <NavLink activeClassName="active" className="nav-link-custom" to="/meals">Meals Inspo</NavLink>
                <NavLink activeClassName="active" className="nav-link-custom" to="/quiz">Quiz</NavLink>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;
