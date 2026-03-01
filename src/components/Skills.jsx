import { Code2, Server, BrainCircuit } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <div className="container text-center">
                <h2 className="skills-title">Skills</h2>

                <div className="skills-grid">
                    {/* Card 1: Back-end */}
                    <div className="skill-card">
                        <div className="skill-icon-wrapper">
                            <Server size={32} className="skill-icon" strokeWidth={1.5} />
                        </div>
                        <h3 className="skill-card-title">Back-end Developer</h3>
                        <p className="skill-desc">
                            Develop robust business logic and server-side systems to support the product architecture and API design.
                        </p>

                        <h4 className="skill-section-title">Languages:</h4>
                        <p className="skill-list">Node.js, Python</p>

                        <h4 className="skill-section-title">My Tools:</h4>
                        <ul className="skill-tools-list">
                            <li>Express</li>
                            <li>REST APIs</li>
                            <li>Git</li>
                            <li>GitHub</li>
                        </ul>
                    </div>

                    {/* Card 2: Front-end */}
                    <div className="skill-card middle-card">
                        <div className="skill-icon-wrapper">
                            <Code2 size={32} className="skill-icon" strokeWidth={1.5} />
                        </div>
                        <h3 className="skill-card-title">Front-end Developer</h3>
                        <p className="skill-desc">
                            I like to code things from scratch, and enjoy bringing ideas to life in the browser with modern UI.
                        </p>

                        <h4 className="skill-section-title">Technologies Stack:</h4>
                        <p className="skill-list">HTML, CSS, JavaScript</p>

                        <h4 className="skill-section-title">My Tools:</h4>
                        <ul className="skill-tools-list">
                            <li>React</li>
                            <li>Vite</li>
                            <li>Tailwind / CSS</li>
                            <li>Figma</li>
                        </ul>
                    </div>

                    {/* Card 3: AI & Machine Learning */}
                    <div className="skill-card">
                        <div className="skill-icon-wrapper">
                            <BrainCircuit size={32} className="skill-icon" strokeWidth={1.5} />
                        </div>
                        <h3 className="skill-card-title">AI & Deep Learning</h3>
                        <p className="skill-desc">
                            Building and training custom models for specialized applications like real-time object detection.
                        </p>

                        <h4 className="skill-section-title">Core Tech:</h4>
                        <p className="skill-list">Python, Deep Learning</p>

                        <h4 className="skill-section-title">My Tools:</h4>
                        <ul className="skill-tools-list">
                            <li>OpenCV</li>
                            <li>TensorFlow</li>
                            <li>PyTorch</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
