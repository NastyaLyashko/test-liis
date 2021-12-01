import { DISLIKE_HOTEL, LIKE_HOTEL } from './actions'

const initialState = {
    favouritesHotelsData: []
}

export function likesReducer (state = initialState, action) {
    switch(action.type) {
        case LIKE_HOTEL: return { ...state, favouritesHotelsData: state.favouritesHotelsData.concat(action.value)};
        case DISLIKE_HOTEL: return { ...state, favouritesHotelsData: state.favouritesHotelsData.filter(card => card !== action.value)}
        default: return state;
    }
}