import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="bg-blue-900 text-white py-20 px-4">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold">Hey there, Matt here 👋</h1>
                <p className="text-lg md:text-xl mt-4">
                    A web design freelancer, specialising in UI/UX design & visual development
                </p>
                <button className="mt-8 bg-white text-blue-900 py-2 px-6 rounded-md hover:bg-blue-100 hover:text-blue-900 transition duration-300 ease-in-out">
                    About me
                </button>
            </div>
        </div>
    );
};

export default Hero;