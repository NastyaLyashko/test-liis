import { ACTION_LOGIN } from './actions'

export function createLogin (data) {
    console.log(data)
    return {
        type: ACTION_LOGIN,
        value: data
    }
}