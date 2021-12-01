import React, { useState, useEffect } from 'react';
import '../Favourites/Favourites.css';
import HotelsCard from '../HotelsCard/HotelsCard';

function Favourites ({ cards, date, daysCounter, handleLikeCard, handleDeleteCard, likedCards }) {

    const [favouritesCards, setFavouritesCards] = useState([])
    const [sortedCards, setSortedCards] = useState([])
    const [isSorted, setIsSorted] = useState(false)
    const [activeRating, setActiveRating] = useState(false)
    const [activePrice, setActivePrice] = useState(false)

    useEffect(() => {
        if(isSorted) {
            setFavouritesCards(sortedCards)
            setIsSorted(false)
        } else {
            setFavouritesCards(cards)
        }
    }, [cards, sortedCards, isSorted])

    function priceOptions(c) {
        setSortedCards(c)
        setIsSorted(true)
        setActivePrice(true)
        setActiveRating(false)
    }

    function starsOptions(c) {
        setSortedCards(c)
        setIsSorted(true)
        setActiveRating(true)
        setActivePrice(false)
    }

    function handlePriceDes() {
        const sortedCards = cards.sort((a, b) => a.priceFrom - b.priceFrom)
        priceOptions(sortedCards)
    }

    function handlePriceAsc() {
        const sortedCards = cards.sort((a, b) => b.priceFrom - a.priceFrom)
        priceOptions(sortedCards)
    }

    function handleStarsDes() {
        const sortedCards = cards.sort((a, b) => a.stars - b.stars)
        starsOptions(sortedCards)
    }

    function handleStarsAsc() {
        const sortedCards = cards.sort((a, b) => b.stars - a.stars)
        starsOptions(sortedCards)

    }

    const listItems = favouritesCards.map((card) =>
        <HotelsCard key={card.hotelId} 
                    card={card} 
                    likedCards={likedCards}
                    daysCounter={daysCounter}
                    date={date}
                    favouritesComponent={true}
                    handleLikeCard={handleLikeCard}
                    handleDeleteCard={handleDeleteCard} />
    );

    return (
        <section className="favourites container">
            <h2 className="favourites__title">Избранное</h2>
            <div className="favourites__fiters">
                <div className={`${activeRating  ? "favourites__fiter_active" : ""} favourites__fiter`}>Рейтинг
                    <div className="favourites__fiter-buttons">
                        <button className="favourites__fiter-button favourites__fiter-button_up" onClick={handleStarsAsc} ></button>
                        <button className="favourites__fiter-button favourites__fiter-button_down" onClick={handleStarsDes} ></button>
                    </div>
                </div>
                <div className={`${activePrice ? "favourites__fiter_active" : ""} favourites__fiter`}>Цена
                    <div className="favourites__fiter-buttons">
                            <button className="favourites__fiter-button favourites__fiter-button_up" onClick={handlePriceAsc}></button>
                            <button className="favourites__fiter-button favourites__fiter-button_down" onClick={handlePriceDes}></button>
                        </div>
                </div>
            </div>
            <ul className="hotels__card-list hotels__card-list_favourites">
                {listItems}
            </ul>
        </section>
    )
}

export default Favourites;