import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import QuizPage from "./components/QuizPage";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {started ? <QuizPage /> : <LandingPage startQuiz={() => setStarted(true)} />}
    </div>
  );
}

export default App;
