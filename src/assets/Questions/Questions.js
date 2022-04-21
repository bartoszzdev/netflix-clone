import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import SingleQuestion from './SingleQuestion'
import { questions } from './data'
import './questions.css'

function Questions() {
    return (
        <section className='question-container'>
            <div className='questions'>
                <h2>Perguntas frequentes</h2>

                <ul className='question-list'>
                    {questions.map(question => {
                        return (
                            <SingleQuestion key={question.id} {...question} />
                        )
                    })}
                </ul>
            </div>

            <div className='questions-form'>
                <p className='text-form'>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>

                <form>
                    <input type='text' name='email' placeholder='Email' className='input-email-02' />
                    <button type='button' className='join-btn-02'>
                        Vamos lá
                        <MdOutlineKeyboardArrowRight />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Questions