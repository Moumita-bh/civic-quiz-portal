import React from "react";

const LandingPage = ({ startQuiz }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-100 text-center">
      <h1 className="text-4xl font-bold mb-6">Civic Awareness Quiz Portal</h1>
      <p className="text-lg mb-8">Test your knowledge on civic responsibilities 🧠</p>
      <button
        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default LandingPage;
