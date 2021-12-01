import '../Header/Header.css';
import logOutImg from '../../images/logOut.svg';

function Header ({ logOut }) {

    return (
        <header className="header">
            <h1 className="header__title">Simple Hotel Check</h1>
            <button type='button' onClick={logOut} className="header__button">Выйти
                <img className="header__button-icon" src={logOutImg} alt='log out'/>
            </button>
        </header>
    )
}

export default Header;