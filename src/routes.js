import React from 'react';
import {Switch, Route} from 'react-router-dom';
// Components
import Home from './Components/Home/Home';

export default <Switch>
    <Route exact path='/' component={Home} />
</Switch>