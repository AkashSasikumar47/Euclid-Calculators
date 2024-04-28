import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-slate-200 py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
                <div className="max-w-3xl mx-auto text-lg text-gray-700">
                    <p className="mb-8">
                        <span className="font-bold">Overview of Mission and Vision:</span> At GAINZ, our mission is simple: to democratize finance by providing beginner traders with indispensable tools that enhance financial planning and analysis. We believe that everyone deserves access to the resources needed to navigate the complexities of the stock market with confidence and clarity.
                    </p>
                    <p className="mb-8">
                        Through our user-friendly calculators, we aim to empower individuals with the knowledge and insights necessary to build robust trading strategies, manage risk effectively, and ultimately achieve their financial goals. Whether you're looking to optimize your intraday positions, plan your SIP investments, or calculate the returns on your fixed deposits, GAINZ is here to guide you every step of the way.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;