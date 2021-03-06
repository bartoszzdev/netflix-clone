import React from 'react'
import './header.css'
import { MdLanguage, MdArrowDropDown, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <section className='container-main'>
            <div className='layer'>
                <main>
                    <header className='header'>
                        <img src='Netflix-Brand-Logo.png' alt='Netflix logo' className='logo' />
                        <div className='menu-container'>
                            <div className='lang-btn'>
                                <MdLanguage className='lang-icon' />
                                <select>
                                    <option>Português</option>
                                    <option>English</option>
                                </select>
                                <MdArrowDropDown className='arrow-icon' />
                            </div>
                            <Link to='/login'>
                                <button type='button' className='enter-btn'>
                                    Entrar
                                </button>
                            </Link>
                        </div>
                    </header>

                    <article className='main-content'>
                        <h1 className='title'>Filmes, séries e muito mais.</h1>
                        <h1 className='title'>Sem limites.</h1>
                        <h3 className='subtitle'>Assista onde quiser. Cancele quando quiser.</h3>
                        <span>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</span>

                        <form>
                            <input type='text' name='email' placeholder='Email' className='input-email' />
                            <button type='button' className='join-btn'>
                                Vamos lá
                                <MdOutlineKeyboardArrowRight />
                            </button>
                        </form>
                    </article>
                </main>
            </div>
      </section>
    )
}

export default Header