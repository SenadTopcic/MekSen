import React, { useState } from 'react';
import Button from './Button';
import questions from '../data/questions.json';

const QuizBody = () => {
  const quizData = questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState([]); // Store the selected answer index

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswers([]); // Clear the selected answers when moving to the next question
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswers([]); // Clear the selected answers when moving to the previous question
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  
  const handleAnswerClick = (answerIndex) => {
    // Handle answer selection here by updating selectedAnswers
    if (selectedAnswers.includes(answerIndex)) {
      // If the answer is already selected, unselect it
      setSelectedAnswers(selectedAnswers.filter((index) => index !== answerIndex));
    } else {
      // If the answer is not selected, select it
      setSelectedAnswers([...selectedAnswers, answerIndex]);
    }
  };

  const isAnswerSelected = (answerIndex) => {
    // Check if an answer is selected based on selectedAnswers array
    return selectedAnswers.includes(answerIndex);
  };

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };


  return (
    <div className="quiz-container">
      <h2>Quiz Questions</h2>
      {currentQuestion && (
        <div className="quiz-question">
          <p>{renderTextWithLineBreaks(currentQuestion.question)}</p>
          <div className="quiz-options">
            {currentQuestion.options.map((option, optionIndex) => (
              <Button
                key={optionIndex}
                btnClass={selectedAnswerIndex === optionIndex ? 'answer-btn selected' : 'answer-btn'}
                onClick={() => handleAnswerClick(optionIndex)} // Handle answer selection
                buttonLabel={renderTextWithLineBreaks(option)}
              />
            ))}
          </div>
          <p>Correct Answer: {currentQuestion.correctAnswer}</p>
        </div>
      )}
      <div className="navigation-buttons">
        <Button
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
          buttonLabel="Previous"
          btnClass="btn"
        />
        <Button
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === quizData.length - 1}
          buttonLabel="Next"
          btnClass="btn"
        />
      </div>
    </div>
  );
};

export default QuizBody;
