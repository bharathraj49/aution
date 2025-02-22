import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const userString = localStorage.getItem('user');
        if (userString) setUser(JSON.parse(userString));
    }, []);

    useEffect(() => {
        if (isOpen) setIsOpen(false);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = (
        <ul className="navbar-nav w-100">
            <li className="nav-item mb-2">
                <Link className="nav-link fw-semibold" to="/auction" onClick={toggleMenu}>Dashboard</Link>
            </li>
            {user ? (
                <li className="nav-item">
                    <button className="nav-link btn btn-link text-decoration-none text-dark fw-bold" onClick={handleLogout}>
                        {user.username} Logout
                    </button>
                </li>
            ) : (
                <>
                    <li className="nav-item mb-2">
                        <Link className="nav-link text-primary fw-bold" to="/login" onClick={toggleMenu}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-primary fw-bold" to="/register" onClick={toggleMenu}>Register</Link>
                    </li>
                </>
            )}
        </ul>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top m-2">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link className="navbar-brand fw-bold text-primary me-5" to="/">CollabTool</Link>
                <div className="d-none d-lg-flex">{navItems}</div>
                <button className="navbar-toggler border-0 shadow-sm" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                {isOpen && (
                    <div className="position-absolute top-100 start-0 w-100 bg-white shadow-lg rounded-3 mt-2 p-3 d-lg-none">
                        {navItems}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
