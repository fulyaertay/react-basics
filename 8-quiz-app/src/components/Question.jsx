import React, { useState } from 'react';

const Question = ({ question, options, handleAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    handleAnswer(answer);
  };

  return (
    <div>
      <h2>{question}</h2>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleClick(option)}
          style={{ backgroundColor: selectedAnswer === option ? 'green' : '' }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
