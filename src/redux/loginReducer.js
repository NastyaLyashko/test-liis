import { ACTION_LOGIN } from './actions'

const initialState = {
    data: {
        login:'', 
        password: ''
    }
}

export function loginReducer (state = initialState, action) {
    switch(action.type) {
        case ACTION_LOGIN: return { data: action.value };

        default: return state;
    }

}