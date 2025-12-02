import { useState, useEffect } from 'react'
import './App.css'
import { getQuestions, getDifficulties, getAnswer } from '././services/api';

function App() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
        getQuestions()
        .then((response) => setTimeout(() => setQuestions(response), 1000))
        .catch((error) => { setTimeout(() => setError(error), 1000) })  
    }, []); 

  console.log(questions);
  
  return (
    <div>
       <ul className="lista" >
            {questions.map((question, id) => (
                <li key={id}>
                <div>
                  {question.question}
                  {question.option1}
                </div>
            </li>
         ))}
        </ul>
    </div>
  )
}

export default App
