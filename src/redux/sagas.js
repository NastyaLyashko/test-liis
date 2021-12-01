import { call, takeEvery, put } from "redux-saga/effects";
import { REQUEST_HOTELS, FETCH_HOTELS } from "./actions";

export function* sagaWatcher() {
    yield takeEvery(FETCH_HOTELS, sagaWorcker)
}

function* sagaWorcker(action) {
    const limit = 15;
    const location = action.location
    const checkOut = action.checkOut
    const checkIn = action.checkIn
    const payload = yield call(() => {
        return fetch(`https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=${limit}`)
                .then(res => res.json())
    })
    yield put({ type: REQUEST_HOTELS, payload })
}

