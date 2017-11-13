import React from 'react';
import {connect} from 'react-redux';
import {findCard, updateCard} from '../actions/card-actions';
import CardsAdd from '../components/cards/cards-add';

function cardsUpdateContainer ({dispatch, card, params}) {

    return (
        <CardsAdd
            cards={card}
            id={params.id}
            onSubmit={(title, desc) =>
                dispatch(updateCard(params.id, title,desc))
            }
        />
    );
}

function mapStateToProps (state, ownProps) {
    return {
        card: findCard(state.cards, ownProps.params.id)
    };
}

export default connect(mapStateToProps)(cardsUpdateContainer)
