import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';

import Addperson from './addperson';
import Showperson from './showperson';

class Person extends Component {

    // addPersonHandler = (name) => {
    //     console.log('name is = ', name);
    // }

    render () {
        console.log('this.props.persondata...', this.props.persondata);
        return (
            <Fragment>
                <h4>Add Person using Redux</h4>
                <Addperson onAddPersonClicked={(name) => this.props.addPersonHandler(name)}/>
                <Showperson personData = {this.props.persondata} />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state...', state);
    return {
        persondata: state.person.personArr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPersonHandler: (name) => dispatch({type: Actions.ADD_PERSON, name: name})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);