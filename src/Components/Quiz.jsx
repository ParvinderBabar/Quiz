// src/components/Quiz.js
import  { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const Quiz = () => {
  const { questions, currentQuestion, nextQuestion, incrementScore, loading } = useContext(QuizContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      incrementScore();
      console.log("correct answer")
    }
    nextQuestion();
  };

  const question = questions[currentQuestion];
  const answers = [...question.incorrect_answers, question.correct_answer].sort();

  return (
    <div>
      <h1>Quiz App</h1>
      {currentQuestion < questions.length ? (
        <div>
          <h2>{question.question}</h2>
          {answers.map((answer, index) => (
            <button key={index} onClick={() => handleAnswer(answer === question.correct_answer)}>
              {answer}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your score: {currentQuestion}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
