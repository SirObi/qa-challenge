import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Main from './components/main';
import Home from './components/home';
import CardsAddContainer from'./containers/cards-add-container';
import CardsUpdateContainer from'./containers/cards-update-container';

export default (
    <Route path='/' component={Main}>
        <IndexRoute component={Home}/>
        <Route path='card-add' component={CardsAddContainer} />
        <Route path='card-update/:id' component={CardsUpdateContainer} />
        <Route path='/:num' component={Home} />
    </Route>
);
