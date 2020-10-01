import React, { useEffect, useState } from 'react';
import Question from './components/Question';
// import Result from './components/Result';
import Scoreboard from './components/Scoreboard';
import CategorySelector from './components/CategorySelector';
import './App.css';

function App() {
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    getQuestion();
  }, []);

  const getQuestion = () => {
    const url = `https://opentdb.com/api.php?amount=1`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.results[0]);
      });
  };
  return (
    <div className='app'>
      {/* <Result /> */}
      <div className='question__header'>
        <CategorySelector />
        <Scoreboard />
      </div>
      <div className='question__main'>
        {question && <Question question={question} />}
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
