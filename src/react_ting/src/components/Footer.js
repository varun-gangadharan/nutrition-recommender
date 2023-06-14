import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid style={{backgroundColor: '#f8f9fa', marginTop: '20px', padding: '20px'}}>
            <Row>
                <Col>
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

                <Col>
                    <h5>Follow us</h5>
                    <p>Stay connected on social media</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
