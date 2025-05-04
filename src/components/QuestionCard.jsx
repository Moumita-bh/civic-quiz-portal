import React from "react";

const QuestionCard = ({ questionObj, selectedOption, setSelectedOption, handleNext }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">{questionObj.question}</h2>
      <div className="space-y-3">
        {questionObj.options.map((opt, index) => (
          <button
            key={index}
            onClick={() => setSelectedOption(opt)}
            className={`w-full p-3 text-left border rounded-md ${
              selectedOption === opt ? "bg-blue-500 text-white" : "hover:bg-gray-100"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        className="mt-5 w-full bg-green-600 text-white py-2 rounded-md"
        onClick={handleNext}
        disabled={!selectedOption}
      >
        Next
      </button>
    </div>
  );
};

export default QuestionCard;
