import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log(formData);
    };

    return (
        <Container fluid className="auth-container">
            <Row className="justify-content-center align-items-center min-vh-100">
                <Col md={8} lg={6} xl={5}>
                    <Card className="auth-card">
                        <Card.Body className="p-5">
                            <div className="text-center mb-4">
                                <h2 className="text-theme mb-3">
                                    <FaSignInAlt className="me-2" />
                                    Welcome Back
                                </h2>
                                <p className="text-secondary">Please sign in to continue</p>
                            </div>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <FaUser className="text-theme" />
                                        </span>
                                        <Form.Control
                                            type="email"
                                            className="form-control text-themes"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <FaLock className="text-theme" />
                                        </span>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={formData.password}
                                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-4 d-flex justify-content-between align-items-center">
                                    <Form.Check
                                        type="checkbox"
                                        label="Remember me"
                                        className="text-secondary"
                                    />
                                    <Link to="/forgot-password" className="text-theme text-decoration-none">
                                        Forgot Password?
                                    </Link>
                                </Form.Group>

                                <Button variant="red" type="submit" className="w-100 mb-4">
                                    <FaSignInAlt className="me-2" />
                                    Sign In
                                </Button>

                                <div className="text-center text-secondary">
                                    Don't have an account?{' '}
                                    <Link to="/register" className="text-theme text-decoration-none">
                                        Sign Up
                                    </Link>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
