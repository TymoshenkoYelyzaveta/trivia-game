import React from 'react';

const Result = ({ isCorrect, question, getQuestion }) => {
  return (
    <div className={`result ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
      <div className='overlay' />
      <div className='result__content'>
        {isCorrect && (
          <h3>
            <span role='img' aria-label=''>
              👊👊👊
            </span>
            <br />
            YOU WON!
          </h3>
        )}
        {!isCorrect && (
          <h3>
            <span role='img' aria-label=''>
              😟😢😟
            </span>
            <br />
            YOU LOST!
          </h3>
        )}

        {!isCorrect && (
          <div className='correct-answer'>
            <small>The correct answer was:</small>
            <br />
            <strong
              dangerouslySetInnerHTML={{ __html: question.correct_answer }}
            />
          </div>
        )}
        <button onClick={getQuestion}>
          Go to next question
          <span role='img' aria-label=''>
            👉
          </span>
        </button>
      </div>
    </div>
  );
};

export default Result;
