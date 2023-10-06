import React, { useState } from 'react';
import Button from './Button';

import questions from "../data/questions.json";
import { renderTextWithLineBreaks } from '../utilis/helpers.jsx';

const QuizBody = () => {
  const quizData = questions;
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  
  return (
    <div className='quiz-container'>
      <h2>Quiz Questions</h2>
      {currentQuestion && (
        <div className='quiz-question'>
          <p>{renderTextWithLineBreaks(currentQuestion.question)}</p>
          <ul className='quiz-options'>
            {currentQuestion.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                {renderTextWithLineBreaks(option)}
              </li>
            ))}
          </ul>
          <p>Correct Answer: {currentQuestion.correctAnswer}</p>
        </div>
      )}
      <div className='navigation-buttons'>
        <Button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0} buttonLabel="Previous" />
        <Button onClick={handleNextQuestion} disabled={currentQuestionIndex === quizData.length - 1} buttonLabel="Next" />
      </div>
    </div>
  );
};

export default QuizBody;