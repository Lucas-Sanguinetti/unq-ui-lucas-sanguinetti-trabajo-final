import { useState, useEffect, useContext  } from 'react'
import './questions.css'
import {  useNavigate } from "react-router-dom";
import { getQuestions, getAnswer } from '../../services/api';
import { ResultContext } from "../../Resultcontext.jsx";
import { DifficultyContext } from "../../Difficultycontext.jsx";

function Question() {

  const [questions, setQuestions] = useState()
  const [question, setQuestion] = useState()
  const [index, setIndex] = useState(0)
  const [error, setError] = useState()
  const [isAnswered, setIsAnswered] = useState()
  const [answer, setAnswer] = useState()
  const [optionChoosed, setOptionChoosed] = useState()
  const [rigthAnswers, setRigthAnswers] = useState()
  const {setTotalQuestions, addRight, total, right} = useContext(ResultContext);
  const {difficulty} = useContext(DifficultyContext);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(difficulty);
        getQuestions(`${difficulty}`)
        .then((response) => setTimeout(() => setQuestions(response), 1000))
        .catch((error) => { setTimeout(() => setError(error), 1000) });
        
    }, []); 

  useEffect(() => {
    
    if(questions){
      setQuestion(questions[index])  
      if (index >= questions.length) {
          handleNavigate();
          return;
      }
    }
  }, [index, questions])

  useEffect(() => {
      setRigthAnswers(right)
  }, [right])


  const  handleClick = async (option) => {
    if (question) {
      const answer = await getAnswer(question.id, option)
      setTimeout(() => {
        setOptionChoosed(option)
        setIsAnswered(true)
        setAnswer(answer.answer)
        if (answer.answer){
          addRight(1)
        }
      }, 500)
    }

    setTimeout(() => {
      setIsAnswered(false)
      setIndex((prev) => prev + 1)
    }, 1000)
  }

  const handleNavigate = () => {
      setTotalQuestions(questions.length)
      navigate(`/results`)
  } 

  const getButtonClass = (option) => {
            let base = 'question-btn ';
            if (!isAnswered) return base;

            if (option === optionChoosed) {
                if (answer === true) return `${base} question-btn-correct`;
                if (answer === false) return `${base} question-btn-wrong`;
            }
            return `${base} question-btn-disabled`;
        };


  if (error) return <p>Error: {error.message}</p>;

  if (!question) {
  return <p>Loading ..</p>;
  }

  return (
  <div className="question-page">
      <div className="question-progress-text">
        You have answered rightly {rigthAnswers} of the {questions.length} questions
      </div>
      <div className="question-box">
        {question.question}
      </div>
      <div className="question-options-grid">
        <button  className={getButtonClass("option1")} onClick={() => handleClick("option1")}>
          {question.option1}
        </button>
        <button className={getButtonClass("option2")} onClick={() => handleClick("option2")}>
          {question.option2}
        </button>
        <button  className={getButtonClass("option3")} onClick={() => handleClick("option3")}>
          {question.option3}
        </button>
        <button className={getButtonClass("option4")} onClick={() => handleClick("option4")}>
          {question.option4}
        </button>
      </div>
  </div>
);

}

export default Question
