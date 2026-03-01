import './Experience.css';

const Experience = () => {
    const experienceData = [
        {
            year: "2019",
            title: "Diploma in Mechanical Engineering",
            institution: "Impact College of Polytechnic",
            active: false
        },
        {
            year: "2023",
            title: "Degree in AI and ML",
            institution: "Impact College of Engineering and Applied Sciences",
            active: false
        },
        {
            year: "2026",
            title: "Internship",
            institution: "Glowlogics",
            active: true // Highlights this as the current active role
        }
    ];

    return (
        <section className="experience-section" id="experience">
            <div className="container">
                <div className="text-center">
                    <h2 className="experience-title">Experience & Education</h2>
                    <p className="experience-subtitle">My academic and professional journey so far</p>
                </div>

                <div className="timeline-container">
                    {experienceData.map((item, index) => (
                        <div key={index} className={`timeline-item ${item.active ? 'active' : ''}`}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">{item.year}</span>
                                <h3 className="timeline-role">{item.title}</h3>
                                <p className="timeline-institution">{item.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
