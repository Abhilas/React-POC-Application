import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import Login from './Containers/Login';
import Home from './Containers/Home';
import Register from './Containers/Register';
import Select from './Containers/Select';

class ComponentRoute extends Component {
    render () {
        return (
            <Fragment>
                <Route path="/" component={Login} exact />
                <Route path="/Home" component={Home} exact />
                <Route path="/Register" component={Register} exact />
                <Route path="/Select" component={Select} exact />
            </Fragment>
        )
    }
}

export default ComponentRoute;