import { REQUEST_HOTELS } from './actions'

const initialState = {
    hotelsData: []
}

export function hotelsReducer (state = initialState, action) {
    switch(action.type) {
        case REQUEST_HOTELS: return { hotelsData: action.payload };

        default: return state;
    }
}