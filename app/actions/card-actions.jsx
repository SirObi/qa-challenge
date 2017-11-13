import {findIndex} from 'lodash';
import {
    ADD_CARD,
    DELETE_CARD,
    UPDATE_CARD,
    REQUEST_CARDS,
    RECEIVE_CARDS
} from '../constants';
const LOCAL_STORAGE_KEY = 'CARDS';

function getLocalStorageData () {
    const storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storageData && JSON.parse(storageData);
}

const mockState = [
    {
        id: 1,
        title: '1- Title',
        description: 'Description 1'
    },
    {
        id: 2,
        title: '2 - Title',
        description: 'Description 2'
    }
];

export function addCard (title, description) {
    let data = getLocalStorageData() || [];
    data.push({
        id: data.length + 1,
        title,
        description
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    return {
        type: ADD_CARD,
    };
}

export function deleteCard (id) {
    let data = getLocalStorageData() || [];
    const index = findIndex(data, item => item.id.toString() === id.toString());
    if (index >= 0) {
        data.splice(index, 1);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
    return {
        type: DELETE_CARD
    }
}

export function findCard (state, id) {
    if (state.items == null) {
        return;
    }
    return state.items.find(item => item.id.toString() === id);
}

export function updateCard (id, title, desc){   
    let data = getLocalStorageData() || [];
    const index = findIndex(data, item => item.id.toString() === id);
    if (index >= 0) {
        data.splice(index, 1, {
            id: data[index],
            title: title,
            description: desc
        });
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }

    return {
        type: UPDATE_CARD
    }
}

export function requestCards () {
    return {
        type: REQUEST_CARDS
    }
}

export function receiveCards (cards) {
    return {
        type: RECEIVE_CARDS,
        cards: cards,
        receivedAt: Date.now()
    };
}

export function fetchCards () {
    return dispatch => {
        dispatch(requestCards());
        const storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
        let data = storageData && JSON.parse(storageData);
        if (!storageData) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockState));
            data = mockState;
        }
        dispatch(receiveCards(data));
    };
}
