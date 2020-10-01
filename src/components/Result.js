import React from 'react';

const Result = () => {
  return (
    <div className='result'>
      <div className='overlay' />
      <div className='result__content'>
        <h3>
          <span role='img' aria-label=''>
            👊👊👊
          </span>
          <br />
          YOU WON!
        </h3>

        <h3>
          <span role='img' aria-label=''>
            😟😢😟
          </span>
          <br />
          YOU LOST!
        </h3>

        <div className='correct-answer'>
          <small>The correct answer was:</small>
          <br />
          <strong>Answer here</strong>
        </div>

        <button>
          Go to next question{' '}
          <span role='img' aria-label=''>
            👉
          </span>
        </button>
      </div>
    </div>
  );
};

export default Result;
