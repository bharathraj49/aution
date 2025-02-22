import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="text-center bg-white shadow-lg rounded-4 p-5 w-75">
                <h1 className="fw-bold text-primary">Welcome to CollabTool</h1>
                <p className="text-muted">
                    Collaborate in real-time, share ideas, and stay productive with your team.
                </p>
                <hr className="w-50 mx-auto my-4" />
                <p className="text-secondary">
                    Whether you're working on a project or just organizing thoughts, CollabTool has everything you need.
                </p>
                <div className="mt-4 d-flex justify-content-center gap-3">
                    <Link to="/register" className="btn btn-primary btn-lg px-4">Get Started</Link>
                    <Link to="/login" className="btn btn-outline-primary btn-lg px-4">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
