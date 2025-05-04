import React, { useState } from "react";
import { questions } from "../data/questions";
import QuestionCard from "./QuestionCard";
import ResultPage from "./ResultPage";

const QuizPage = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === questions[index].answer) setScore(score + 1);
    setSelected(null);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return <ResultPage score={score} total={questions.length} />;
  }

  return (
    <div className="mt-10">
      <div className="text-center mb-4">
        <p className="text-lg text-gray-600">
          Question {index + 1} of {questions.length}
        </p>
      </div>
      <QuestionCard
        questionObj={questions[index]}
        selectedOption={selected}
        setSelectedOption={setSelected}
        handleNext={handleNext}
      />
    </div>
  );
};

export default QuizPage;
