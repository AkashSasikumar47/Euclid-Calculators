import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-20 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">CONTACT</h2>
                <p className="text-lg mb-8">Let's get in touch! Reach out to me through one of the following channels:</p>
                <div className="flex justify-center items-center space-x-4">
                    <a href="mailto:example@example.com" className="text-xl font-medium hover:text-gray-300 transition duration-300 ease-in-out">Email</a>
                    <a href="tel:+1234567890" className="text-xl font-medium hover:text-gray-300 transition duration-300 ease-in-out">Phone</a>
                    <a href="https://twitter.com/example" className="text-xl font-medium hover:text-gray-300 transition duration-300 ease-in-out">Twitter</a>
                    <a href="https://linkedin.com/in/example" className="text-xl font-medium hover:text-gray-300 transition duration-300 ease-in-out">LinkedIn</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;