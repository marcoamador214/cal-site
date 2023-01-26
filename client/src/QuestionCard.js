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
                <li style={{ color: 'var(--color-black)', backgroundColor: 'var(--color-white)', paddingBottom: '20px', textAlign: 'left', listStyle: 'none'}}>🌟 {comment.body}</li>
        )
    })

    return (
        <div className='question-form'>
            <h1 style={{ color: 'var(--color-black)', backgroundColor: 'var(--color-white)', paddingBottom: '15px'}}>{question.body}</h1>
            <img src={question.image}/>
            <div style={{ backgroundColor: 'var(--color-white)'}}>
                <h3 style={{ backgroundColor: 'var(--color-white)', paddingBottom: '10px', paddingTop: '10px'}}>Responses:</h3>
                {mappedComments}</div>
            <form style={{ backgroundColor: 'var(--color-white)'}} onSubmit={handleSubmit}>
                <input
                    name='comment'
                    placeholder='Give an Answer'
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: 'var(--color-white)', width: '335px', height: '26px'}}
                />
                <br></br>
                <button style={{ cursor: 'pointer', backgroundColor: 'var(--color-golden)', marginTop: '10px', padding: '5px', borderRadius: '14%' }}>Answer</button>
            </form>
        </div>
    )
}

export default QuestionCard;