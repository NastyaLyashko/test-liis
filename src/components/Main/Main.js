import '../Main/Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Favourites from '../Favourites/Favourites';
import HotelsCardList from '../HotelsCardList/HotelsCardList';

function Main ({ logOut }) {

    return (
        <>
            <Header logOut={logOut}/>
            <section className="main">
                <SearchForm />
                <Favourites />
                <HotelsCardList />
            </section>
        </>

    )
}

export default Main;