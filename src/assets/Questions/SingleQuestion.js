import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { VscClose } from 'react-icons/vsc'

const SingleQuestion = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <li className='question'>
            <button type='button' onClick={() => setShowAnswer(!showAnswer)}>
                {question}
                {showAnswer ? <VscClose /> : <AiOutlinePlus />}
            </button>

            {showAnswer && <p className='answer'>{answer}</p>}
        </li>
    )
}

export default SingleQuestion
