import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'; 

const Footer = () => {
    return (
        <Container fluid className="footer">
            <div>
                <p>Created by Varun Gangadharan | <a href="http://varungangadharan.com/">Visit My Portfolio</a></p>
            </div>
        </Container>
    );
}

export default Footer;
