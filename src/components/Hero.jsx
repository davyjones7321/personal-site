import profilePic from '../assets/profile-pic.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section" id="about">
            {/* Decorative background circle */}
            <div className="bg-circle bg-circle-top"></div>

            <div className="hero-content text-center container">
                <h1 className="hero-title text-primary">Abdul Khader</h1>
                <p className="hero-description text-light">
                    I'm a full stack developer currently finishing up my degree in AI & ML. I've spent the last couple years building web apps and getting into machine learning — mostly because I wanted to understand how things actually work under the hood, not just use them.
                </p>
                <p className="hero-description text-light">
                    I like building stuff that people actually use. Whether that's a site for a local business or training an object detection model for my final year project, I'd rather work on something real than another to-do app.
                </p>

                <div className="hero-avatar">
                    <div className="avatar-circle">
                        <img src={profilePic} alt="Abdul Khader" className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
