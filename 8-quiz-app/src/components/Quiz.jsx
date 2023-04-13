import React, { useState, useEffect } from 'react';
import Question from './Quiz';
import Result from './Result';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.results.map((question) => ({
          ...question,
          options: [...question.incorrect_answers, question.correct_answer].sort(
            () => Math.random() - 0.5
          ),
        }));
        setQuestions(formattedData);
      });
  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);

    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }

    if (newIndex >= questions.length) {
      setShowResult(true);
    }
  };

  const renderQuiz = () => {
    return (
      <div>
        <Question
          question={questions[currentIndex].question}
          options={questions[currentIndex].options}
          handleAnswer={handleAnswer}
        />
      </div>
    );
  };

  const renderResult = () => {
    return <Result score={score} totalQuestions={questions.length} />;
  };

  return <div>{showResult ? renderResult() : renderQuiz()}</div>;
};

export default Quiz;
