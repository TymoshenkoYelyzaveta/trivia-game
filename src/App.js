import React from 'react';
import Question from './components/Question';
// import Result from './components/Result';
import Scoreboard from './components/Scoreboard';
import CategorySelector from './components/CategorySelector';
import './App.css';

function App() {
  return (
    <div className='app'>
      {/* <Result /> */}
      <div className='question__header'>
        <CategorySelector />
        <Scoreboard />
      </div>
      <div className='question__main'>
        <Question />
      </div>
      <div className='question__footer'>
        <button>
          Go to next question
          <span role='img' aria-label=''>
            👉
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
