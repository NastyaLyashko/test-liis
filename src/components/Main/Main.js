import '../Main/Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Favourites from '../Favourites/Favourites';
import HotelsCardList from '../HotelsCardList/HotelsCardList';

function Main ({ logOut, onSearch, cards, date, city, hotelsCounter, daysCounter, handleLikeCard, handleDeleteCard, likedCards }) {

    return (
        <>
            <Header logOut={logOut}/>
            <section className="main">
                <SearchForm onSearch={onSearch} />
                <HotelsCardList cards={cards}
                                likedCards={likedCards}
                                date={date} 
                                city={city}
                                hotelsCounter={hotelsCounter}
                                daysCounter={daysCounter}
                                handleLikeCard={handleLikeCard}
                                handleDeleteCard={handleDeleteCard} />
                <Favourites     cards={likedCards}
                                likedCards={likedCards}
                                date={date} 
                                daysCounter={daysCounter}
                                handleLikeCard={handleLikeCard}
                                handleDeleteCard={handleDeleteCard}
                                 />
            </section>
        </>

    )
}

export default Main;