import './HotelsCardList.css';
import HotelsCard from '../HotelsCard/HotelsCard';
import bracket from '../../images/bracket.svg';
import Carousel from '../Carousel/Carousel';


function HotelsCardList ({ cards, date, city, hotelsCounter, daysCounter, handleLikeCard, handleDeleteCard, likedCards }) {

    const listItems = cards.map((card) =>

    <HotelsCard key={card.hotelId} 
    card={card} 
    likedCards={likedCards}
    daysCounter={daysCounter}
    date={date}
    favouritesComponent={false}
    handleLikeCard={handleLikeCard}
    handleDeleteCard={handleDeleteCard} />
    );

    return (
        <section className="container hotels">
            <div className="hotels__header">
                <h2 className="hotels__title">Отели<img className="hotels__line" src={bracket} alt='line' />{city}</h2>
                <span className="hotels__date">{date}</span>
            </div>
            <Carousel />
            <p className="hotels__text">Добавлено в Избранное: <span className="hotels__count">{hotelsCounter}</span> отеля</p>
            <ul className="hotels__card-list hotels__card-list_main">
                {listItems}
            </ul>
        </section>
    )
}

export default HotelsCardList;