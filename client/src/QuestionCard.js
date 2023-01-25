import { useState, useEffect } from 'react';
import './QuestionCard.css'

function QuestionCard({ question, questions, currentUser, users, setQuestions }) {

    const [comment, setComment] = useState([]);

    function handleChange(e) {
        setComment(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        const commentObj = { body: comment, question_id: question.id, user_id: currentUser.id }

        const configObj = {
            method: "POST",
            headers: {
                "content-type": "application/JSON",
            },
            body: JSON.stringify(commentObj),
        };

        console.log(commentObj)

        
        fetch('/comments', configObj)
        .then((r) => r.json())
        .then((commentReturn) => {
            setComment('');
            setQuestions(
                questions.map((question) => {
                    if(commentReturn.question_id === question.id) {
                        question.comments.push(commentReturn)
                        return question
                    } else return question;
                })
            )
        })
    }


    // useEffect(() => {

    //     fetch('/comments')
    //     .then((r) => r.json())
    //     .then((comments) => {
    //         setComment(comments)
    //         console.log(comments)
    //     })

    // },[])

    const mappedComments = question.comments.map((comment) => {
        return (
                <li style={{ color: 'var(--color-white)'}}>{comment.body}</li>
        )
    })

    return (
        <div className='question-form'>
            <h1 style={{ color: 'var(--color-golden)'}}>{question.body}</h1>
            <img src={question.image}/>
            <div>Comments: {mappedComments}</div>
            <form onSubmit={handleSubmit}>
                <input
                    name='comment'
                    placeholder='Give an Answer'
                    onChange={handleChange}
                    required
                />
                <br></br>
                <button style={{ cursor: 'pointer' }}>Answer</button>
            </form>
        </div>
    )
}

export default QuestionCard;