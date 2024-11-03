import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom styles for your navbar
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import 'flag-icons/css/flag-icons.min.css'; 

const NavBar = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const [isFixed, setIsFixed] = useState(false);
    const [expanded, setExpanded] = useState(false); // Track navbar state

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {  // Adjust this value to determine when the navbar should be fixed
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Small Top Navbar */}
            {/* <div className='container-fluid'> */}
            <Navbar bg="light" variant="light" className="top-navbar" style={{ borderBottom: '2px solid gray' }}>
                <div className=''>
                    <div className='row w-100' >
                        {/* Buttons on the Left */}
                        <div className='col-md-3 d-flex align-items-center'>
                            <Nav className="ml-auto">
                                <Button className="mx-1" style={{background: 'red'}}>Subscribe</Button> 
                                <Button className="mx-1" style={{background: 'green'}}>Login</Button> 
                                <Button className="mx-1" style={{background: 'blue'}}>ePaper</Button> 
                            </Nav>
                        </div>

                        <div className='col-md-7 d-flex align-items-center'>
                            <span className="edition-info mr-auto">
                                <strong>Edition:</strong> INDIA <span className="fi fi-in mx-2"></span>| 
                                <strong> Today:</strong> {formattedDate} | 
                                <strong> Updated:</strong> 10:00 AM
                                <i className="fas fa-map-marker-alt mx-2"></i> {/* Location Icon */}
                                <strong> Location:</strong> New Delhi | 
                                <i className="fas fa-thermometer-half mx-2"></i> {/* Temperature Icon */}
                                <strong> 27°C</strong>
                            </span>
                        </div>

                        {/* Social Media Icons on the Right */}
                        <div className='col d-flex justify-content-end align-items-center'>
                            <Nav className="social-icons">
                                <a href="https://www.facebook.com" className="mx-1 facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.twitter.com" className="mx-1 twitter"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.youtube.com" className="mx-1 youtube"><i className="fab fa-youtube"></i></a>
                                <a href="#rss" className="mx-1 rss"><i className="fas fa-rss"></i></a>
                                <a href="https://www.instagram.com" className="mx-1 instagram"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com" className="mx-1 linkedin"><i className="fab fa-linkedin-in"></i></a>
                            </Nav>
                        </div>
                    </div>
                </div>
            </Navbar>

            {/* Large Header */}
            <header className="header">
                <h1>PRIME-NEWS</h1>
                <p>---Your trusted source of news---</p>
            </header>

            {/* Main Navbar */}
            <Navbar expand="lg" className={`small-navbar ${isFixed || expanded ? 'fixed-navbar' : ''}`} expanded={expanded} onToggle={() => setExpanded(!expanded)}>
                <Navbar.Brand href="#home" className='mx-1'>Home</Navbar.Brand>
                {/* Toggler Button with custom styling */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ zIndex: '1050', color: '#fff'}}>
                    <span className="navbar-toggler-icon" style={{ color: '#white' }}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="mx-auto">
                        <Nav.Link href="#politics" className='mx-1'>City</Nav.Link>
                        <Nav.Link href="#politics" className='mx-1'>India</Nav.Link>
                        <Nav.Link href="#world" className='mx-1'>World</Nav.Link>
                        <Nav.Link href="#politics" className='mx-1'>Politics</Nav.Link>
                        <Nav.Link href="#business" className='mx-1'>Business</Nav.Link>
                        <Nav.Link href="#technology" className='mx-1'>Technology</Nav.Link>
                        <Nav.Link href="#sports" className='mx-1'>Sports</Nav.Link>
                        <Nav.Link href="#sports" className='mx-1'>Life & Style</Nav.Link>
                        <Nav.Link href="#sports" className='mx-1'>Education</Nav.Link>
                        <Nav.Link href="#sports" className='mx-1'>Entertainment</Nav.Link>
                        <Nav.Link href="#sports" className='mx-1'>Auto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        // </div>
    );
}

export default NavBar;
