import {
    ADD_CARD,
    DELETE_CARD,
    UPDATE_CARD,
    REQUEST_CARDS,
    RECEIVE_CARDS
} from '../constants';

export function cards (state = {}, action) {
    switch(action.type){
        case REQUEST_CARDS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CARDS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.cards,
                lastUpdated: action.receivedAt
            });
        case ADD_CARD:
        case UPDATE_CARD:
        case DELETE_CARD:
        default:
            return state;
    }
}
