import React, { useState, useEffect } from 'react';
import './HotelsCard.css';
import Stars from '../Stars/Stars';
import house from '../../images/house.svg';
import line from '../../images/line.svg';
import bottomLine from '../../images/bottomLine.svg'

function HotelsCard ({ card, date, daysCounter, favouritesComponent, handleLikeCard, handleDeleteCard, likedCards }) {

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const savedCard = likedCards.find((hotel) => hotel.hotelId === card.hotelId);
        if (savedCard) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }, [setIsLiked, card, likedCards]);

    function handleLikeClick() {
        if(!isLiked) {
            handleLikeCard(card);
            setIsLiked(true);
        } else {
            handleDeleteCard(card)
            setIsLiked(false);
        }
    }

    return (
        <li className="card">
            <div className="card__container">
                <div className="card__left-container">
                    <div className={`${favouritesComponent  ? "card__icon_disabled" : "card__icon"}`}><img className="card__icon-item" src={house} alt='hotel img' /></div>
                    <div className="card__hotel-container">
                        <h4 className="card__title">{card.hotelName}</h4>
                        <p className="card__date">{date}<img className="card__date-line" src={line} alt='line' />{daysCounter} день</p>
                        <Stars rating={card.stars} />
                    </div>
                </div>
                <div className={`${favouritesComponent  ? "card__rigth-container_favourites" : ""} card__rigth-container`}>
                    <button className={`${isLiked ? "card__button_like_active" : "card__button_like"} card__button`} onClick={handleLikeClick}></button>
                    <div className="card__price-container">
                        <span className="card__price">Price:</span>
                        <span className="card__cost">{card.priceFrom} &#x20bd; </span>
                    </div>
                </div>
            </div>
            <img className="card__bottom-line" src={bottomLine} alt='line' />
        </li>
    )
}

export default HotelsCard;