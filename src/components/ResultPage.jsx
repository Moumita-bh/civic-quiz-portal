import React from "react";

const ResultPage = ({ score, total }) => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Quiz Completed 🎉</h1>
      <p className="text-xl mt-4">
        You scored <span className="text-green-600">{score}</span> out of {total}
      </p>
      <button
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md"
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </div>
  );
};

export default ResultPage;
