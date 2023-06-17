import React from 'react';
import './Footer.css'; 

import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row className="justify-content-between">
                <Col sm={5} className="footer-col">
                    <h5>Join Our Newsletter</h5>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Subscribe
                        </Button>
                    </Form>
                </Col>

                <Col sm={5} className="footer-col">
                    <h5>Follow us</h5>
                    <p>Stay connected on social media</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
