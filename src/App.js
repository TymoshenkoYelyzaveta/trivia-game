import React, { useEffect, useState, useCallback } from 'react';
import Question from './components/Question';
import Result from './components/Result';
import Scoreboard from './components/Scoreboard';
import CategorySelector from './components/CategorySelector';
import './App.css';

const App = () => {
  const [question, setQuestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('any');
  const [isCorrect, setIsCorrect] = useState(null);

  const getQuestion = useCallback(() => {
    setIsCorrect(null);
    let url = `https://opentdb.com/api.php?amount=1`;
    if (selectedCategory !== 'any') url += `&category=${selectedCategory}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.results[0]);
      });
  }, [selectedCategory]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, selectedCategory]);

  const handleQuestionAnswered = (answer) => {
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);
  };
  return (
    <div className='app'>
      {isCorrect !== null && (
        <Result
          isCorrect={isCorrect}
          question={question}
          getQuestion={getQuestion}
        />
      )}
      <div className='question__header'>
        <CategorySelector
          category={selectedCategory}
          chooseCategory={setSelectedCategory}
        />
        <Scoreboard />
      </div>
      <div className='question__main'>
        {question && (
          <Question
            question={question}
            answerQuestion={handleQuestionAnswered}
          />
        )}
      </div>
      <div className='question__footer'>
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

export default App;
