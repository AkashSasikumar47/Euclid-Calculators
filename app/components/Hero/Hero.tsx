import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="bg-blue-900 text-white py-20 px-4">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to GAINZ - Your Gateway to Simplified Trading Calculations</h1>
                <p className="text-lg md:text-xl mt-4">
                    Welcome to GAINZ, your ultimate destination for simplified trading calculations. Whether you're a seasoned investor or just stepping into the world of finance, our suite of powerful calculators is designed to empower you with the tools you need to make informed decisions and maximize your gains. Say goodbye to complex calculations and hello to effortless trading strategies with GAINZ by your side.
                </p>
                <button className="mt-8 bg-white text-blue-900 py-2 px-6 rounded-md hover:bg-blue-100 hover:text-blue-900 transition duration-300 ease-in-out">
                    Explore Our Calculators
                </button>
            </div>
        </div>
    );
};

export default Hero;