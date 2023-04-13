import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Sonuç</h2>
      <p>
        {score} / {totalQuestions} doğru cevap
      </p>
    </div>
  );
};

export default Result;
