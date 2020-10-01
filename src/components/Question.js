import React from 'react';

const sample = ['one', 'two', 'three', 'four'];

const Question = () => {
  return (
    <div className='question'>
      <h2>Question</h2>
      {sample.map((answer, index) => (
        <button key={index}>{answer}</button>
      ))}
    </div>
  );
};

export default Question;
