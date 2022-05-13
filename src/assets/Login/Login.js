import './login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login-container'>
            <div className='login-layer'>
                <Link to='/'>
                    <img src='Netflix-Brand-Logo.png' alt='Netflix Logo' className='logo' />
                </Link>

                <form className='login-form'>
                    <h3>Entrar</h3>

                    <div className='signup-login'>
                        <input type='text' placeholder='Email ou número de telefone' />
                        <input type='password' placeholder='Senha' />
                        <button type='button'>
                            Entrar
                        </button>
                        <div>
                            <span>Lembre-se de mim</span>
                            <a href="#">Precisa de ajuda?</a>
                        </div>
                    </div>

                    <p>Novo por aqui? <a href="">Assine agora.</a></p>

                    <p>
                        Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. 
                        <a href="">Saiba mais.</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login