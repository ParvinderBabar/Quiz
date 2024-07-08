/* eslint-disable react/prop-types */
// src/context/QuizContext.jsx
import  { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple')
      .then(response => {
        setQuestions(response.data.results);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  return (
    <QuizContext.Provider value={{ questions, currentQuestion, score, nextQuestion, incrementScore, loading }}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizProvider, QuizContext };
