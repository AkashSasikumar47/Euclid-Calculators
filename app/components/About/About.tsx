import React from 'react';

const About: React.FC = () => {
    return (
        <div className="bg-gray-200 py-20 px-4">
            <div className="container mx-auto">
                <div className="md:flex md:items-center md:justify-center">
                    <div className="md:col-8 md:pr-12">
                        <h2 className="text-3xl font-bold mb-4">ABOUT ME</h2>
                        <p className="text-lg mb-6">Designer focused on visual development.</p>
                        <p className="text-gray-700">
                            Matt is an award-winning web designer specializing in no-code solutions. With over 8 years of professional experience, he has helped countless startups launch & grow their business.
                        </p>
                    </div>
                    <div className="md:col-3 mt-6 md:mt-0 grid grid-cols-3 gap-4">
                        <img src="/image1.jpg" alt="Image 1" className="w-full h-auto rounded-md" />
                        <img src="/image2.jpg" alt="Image 2" className="w-full h-auto rounded-md" />
                        <img src="/image3.jpg" alt="Image 3" className="w-full h-auto rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;