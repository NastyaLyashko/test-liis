import React from "react";
import Rating from "react-rating";
import './Stars.css';
import emptyStar from '../../images/emptyStar.svg';
import filledStar from '../../images/filledStar.svg';


function Stars ({ rating }) {

    return(
        <Rating readonly
                initialRating={rating}
                emptySymbol={<img src={emptyStar} className='star' alt='empty star'  /> }
                fullSymbol={<img src={filledStar} className='star' alt='filled star'  /> } />
    );
}

export default Stars;