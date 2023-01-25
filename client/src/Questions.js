import { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';

function Questions({ currentUser, users }) {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        fetch('/questions')
        .then((r) => r.json())
        .then((questions) => {
            setQuestions(questions)
            console.log(questions)
        })

    },[])

    const mappedQuestions = () => {

        return questions.map((question) => {
            return (
                <QuestionCard question={question} key={question.id} currentUser={currentUser} users={users} setQuestions={setQuestions} questions={questions}/>
            )
        })
    } 

    return (
        <div>
            {mappedQuestions()}
        </div>
    )
}

export default Questions