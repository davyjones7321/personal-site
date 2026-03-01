import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container text-center">
                <h2 className="footer-title">Abdul Khader</h2>

                <ul className="footer-links">
                    <li><a href="#about">About me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer-socials">
                    <a href="https://github.com/davyjones7321" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/abdul-khader-a828431b6" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
                    <a href="mailto:khader7321@gmail.com" className="social-icon"><Mail size={20} /></a>
                </div>

                <div className="footer-bottom">
                    <p>© Created by Abdul Khader</p>
                    <p>All rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
