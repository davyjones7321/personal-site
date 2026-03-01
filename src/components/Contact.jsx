import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "5b402070-4651-46f5-93bc-e0053ae76f8b");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                event.target.reset(); // Clear the form
            } else {
                setResult(data.message || "Error submitting form");
            }
        } catch (error) {
            setResult("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact-area" id="contact">
            <div className="container contact-container">
                <div className="contact-text-side">
                    <h2>Any Propositions?</h2>
                    <p>Complete the form below and let's have a talk on your project!</p>
                </div>

                <div className="contact-form-side">
                    <form className="proposition-form" onSubmit={onSubmit}>
                        <input type="text" name="name" placeholder="Name" className="form-input" required />
                        <input type="email" name="email" placeholder="Email Address" className="form-input" required />
                        <textarea name="message" placeholder="Your Message" className="form-input form-textarea" required></textarea>

                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Start Conversation"}
                        </button>

                        {result && <p className={`form-result ${result.includes('success') ? 'success' : ''}`}>{result}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
