import React from 'react';
import {connect} from 'react-redux';
import {deleteCard, fetchCards} from '../actions/card-actions';
import CardsList from '../components/cards/cards-list';
import Spinner from '../components/common/spinner';

class CardsContainer extends React.Component {

    componentWillMount () {
        this.props.dispatch(fetchCards());
    }

    render () {
        const { dispatch, cards } = this.props;

        if (cards.isFetching || cards.items == null) {
            return(
                <Spinner />
            );
        } else {
            return(
                <CardsList
                    cards={cards.items}
                    onDelete={(id) => {
                        dispatch(deleteCard(id));      
                        dispatch(fetchCards());
                    }}
                />
            );
        }
    }
}

function mapStateToProps (state) {
    return {
        cards: state.cards 
    };
}

export default connect(mapStateToProps)(CardsContainer);
