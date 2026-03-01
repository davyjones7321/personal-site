import { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
    const projectsData = [
        {
            title: "Jhom Foods",
            type: "Full Stack Web App",
            description: "Built a web app for a food business — frontend, backend, the whole thing. Product pages, responsive design, order flow. It's actually live and being used.",
            link: "https://tbmtc-aw1x.vercel.app",
            images: ["images/website.png", "images/website-2.png", "images/Admin-panel.png", "images/admin-panel1.png"],
            colorClass: "card-yellow"
        },
        {
            title: "Object Detection",
            type: "Deep Learning / CV",
            description: "Final year project. Built a real-time object detection system — trained custom models in Python, got it working on live video. Tuned for speed vs accuracy.",
            link: "#",
            images: ["images/obj-landing page.png", "images/obj-image.png", "images/obj-video.png", "images/obj-home page.png"],
            colorClass: "card-purple"
        }
    ];

    return (
        <section className="projects-section" id="projects">
            <div className="container text-center">
                <h2 className="projects-section-title">Projects</h2>
                <p className="projects-subtitle">
                    Have a look at some of the rolled-out projects I'm proud of:
                </p>

                <div className="projects-list">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIdx((prev) => (prev + 1) % project.images.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [project.images.length]);

    return (
        <div className={`project-card-v2 ${project.colorClass}`}>
            <div className="project-image-side">
                {project.images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className={`project-img ${idx === currentImageIdx ? 'active' : ''}`}
                    />
                ))}
            </div>
            <div className="project-content-side">
                <h3 className="project-title">{project.title}</h3>
                {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-inline-link">
                        View Live Site →
                    </a>
                )}
                <p className="project-desc">{project.description}</p>
            </div>
        </div>
    );
};

export default Projects;
