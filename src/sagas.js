import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'
import { sendMessageError, sendMessageSuccess, searchingUserSuccess, searchingUserError } from './actions';
import request from './utils/request';

const url = 'http://localhost:4000/';
export function* hello(){
    console.log('hello welcome to my super sagaaaa');
}
export function* watchRequestMessage() {
    yield takeLatest('REQUEST_SEND_MESSAGE', requestMessage);
}
function* requestMessage(action) {
    try{
        const result = yield call(request,'http://localhost:4000/direct_messages/events/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: action.payload.id,
                text: action.payload.text
            })
        });
        yield put(sendMessageSuccess());
    }catch(e){
        yield put(sendMessageError());
    }
}


// =======================================================
export function* watchRequestSearching() {
    yield takeLatest('REQUEST_SEARCH_USER', requestSearching);
}

function* requestSearching(action) {
    console.log(action);
    try{
        const result = yield call(request,`${url}users/search?q=${action.payload.query}`);
        yield put(searchingUserSuccess(result));
    }catch(e){
        yield put(searchingUserError());
    }
}

export default function* rootSaga() {
    yield all([
        hello(),
        watchRequestMessage(), 
        watchRequestSearching()
    ])
}