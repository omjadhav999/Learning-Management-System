import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-Josefin text-4xl font-bold mb-4 text-gradient">
          Welcome to Your App
        </h1>
        <p className="font-Poppins text-lg text-gray-600 dark:text-gray-300">
          Your application is running successfully!
        </p>
      </div>
    </div>
  );
};

export default Home;