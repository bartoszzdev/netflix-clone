import './header.css'

function Header() {
    return (
        <header className='header'>
            <img src='Netflix-Brand-Logo.png' alt='Netflix logo' className='logo' />
            <div className='menu-container'>
                <select>
                    <option>português</option>
                    <option>english</option>
                </select>
                <button type='button'>
                    Entrar
                </button>
            </div>

        </header>
    )
}

export default Header