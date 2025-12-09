import { useState, useEffect } from 'react'
import './questions.css'
import { useParams } from "react-router-dom";
import { getQuestions, getAnswer } from '../../services/api';

function Question() {
  const { difficulty } = useParams();

  const [questions, setQuestions] = useState()
  const [question, setQuestion] = useState()
  const [index, setIndex] = useState(0)
  const [error, setError] = useState()
  const [isAnswered, setIsAnswered] = useState()
  const [answer, setAnswer] = useState()
  const [optionChoosed, setOptionChoosed] = useState()

  useEffect(() => {
    console.log(difficulty);
    
        getQuestions(`${difficulty}`)
        .then((response) => setTimeout(() => setQuestions(response), 1000))
        .catch((error) => { setTimeout(() => setError(error), 1000) }) 
    }, []); 

  useEffect(() => {
    if(questions){
      setQuestion(questions[index])
    }
  }, [index, questions])


  const  handleClick = async (option) => {
    if (question) {
      const answer = await getAnswer(question.id, option)
      setTimeout(() => {
        setOptionChoosed(option)
        setIsAnswered(true)
        setAnswer(answer.answer)
      }, 500)
    }

    setTimeout(() => {
      setIsAnswered(false)
      setIndex((prev) => prev + 1)
    }, 1000)
  }

  const getButtonClass = (option) => {
            let base = 'button';
            if (!isAnswered) return base;

            if (option === optionChoosed) {
                if (answer === true) return `${base} rigthAnswer`;
                if (answer === false) return `${base} wrongAnswer`;
            }
            return `${base} disabled`;
        };


  if (error) return <p>Error al cargar: {error.message}</p>;

  if (!question) {
  return <p>Cargando preguntas...</p>;
  }

  return (
    <div className="all">
      <div className="containerQuestion">
        {question.question}
      </div>
      <div className="contenedorDeColumnas">
          <button className={getButtonClass("option1")} onClick={() => handleClick("option1")}>
            {question.option1}
          </button>
          <button className={getButtonClass("option2")} onClick={() => handleClick("option2")}>
            {question.option2}
          </button>
          <button className={getButtonClass("option3")} onClick={() => handleClick("option3")}>
            {question.option3}
          </button>
          <button className={getButtonClass("option4")} onClick={() => handleClick("option4")}>
            {question.option4}
          </button>
      </div>
    </div>
  )
}

export default Question
