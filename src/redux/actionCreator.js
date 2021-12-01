import { ACTION_LOGIN, FETCH_HOTELS, REQUEST_HOTELS, LIKE_HOTEL, DISLIKE_HOTEL } from './actions'

export function createLogin (data) {
    return {
        type: ACTION_LOGIN,
        value: data
    }
}

export function requestHotels () { 
    return {
        type: REQUEST_HOTELS
    }
}

export function fetchHotels (location, checkIn, checkOut) { 
    return {
        type: FETCH_HOTELS,
        location,
        checkIn,
        checkOut
    }
}

export function addFavouriteHotel (data) {
    return {
        type: LIKE_HOTEL,
        value: data
    }
}

export function deleteFavouriteHotel (data) {
    return {
        type: DISLIKE_HOTEL,
        value: data
    }
}