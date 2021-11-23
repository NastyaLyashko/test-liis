import '../Header/Header.css';
import logOutImg from '../../images/logOut.png';

function Header ({ logOut }) {

    return (
        <header className="header">
            <h1 className="header__title">Simple Hotel Check</h1>
            <button type='button' onClick={logOut} className="header__button">Выйти
                <img src={logOutImg} alt='log out'/>
            </button>
        </header>
    )
}

export default Header;