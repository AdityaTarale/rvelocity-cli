import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text">
      <h1 className="text-4xl font-bold text-primary">
        Welcome to the Home Page
      </h1>
      <p className="mt-4 text-lg">
        This is a sample React application using Tailwind CSS.
      </p>
      <button className="px-4 py-2 mt-6 font-semibold text-white bg-primary rounded hover:bg-secondary">
        Get Started
      </button>
    </div>
  );
};

export default Home;
