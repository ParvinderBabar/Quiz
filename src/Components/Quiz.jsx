import { useContext } from 'react';
import { QuizContext } from '../Context/QuizContext.jsx';

const Quiz = () => {
  const { questions, currentQuestion, score, nextQuestion, incrementScore, loading } = useContext(QuizContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (questions.length === 0) {
    return <div>No questions available.</div>;
  }

  const question = questions[currentQuestion];

  if (!question) {
    return <div>Quiz completed! Your score is: {score}</div>;
  }

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      incrementScore();
    }
    nextQuestion();
  };

  return (
    <div>
      <h1>Quiz React App</h1>
      <div>
        <h2>{question.question}</h2>
        {question.incorrect_answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(false)}>{answer}</button>
        ))}
        <button onClick={() => handleAnswer(true)}>{question.correct_answer}</button>
      </div>
      <div>Current Score: {score}</div>
    </div>
  );
};

export default Quiz;
