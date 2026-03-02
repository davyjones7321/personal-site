import { Github, Linkedin, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar-container">
            <nav className="navbar container">
                <div className="logo">
                    <a href="#">Abdul Khader</a>
                </div>
                <div className="nav-right">
                    <ul className="nav-links">
                        <li><a href="#about">About me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <div className="nav-socials">
                        <a href="https://github.com/davyjones7321" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/abdul-khader-a828431b6" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:khader7321@gmail.com" className="nav-social-icon">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
