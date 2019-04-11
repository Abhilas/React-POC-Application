import React, { Component, Fragment } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../Assets/Css/Home.css';
import Utility from '../Utility/Utility';
import { connect } from 'react-redux';
import * as Actions from '../State/Reducer/actionTypes';

import Header from '../Components/Header';


class Home extends Component {
    render () {
        return (
            <Fragment>                
                <Grid fluid={true}>
                    <Row>
                        <div className="containerDiv" style={{height: this.props.height}}>
                            <Header />
                            <h1>{this.props.counter} px</h1>
                            <button onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
                            <h1>Got from another Reducer ==> {this.props.clickVal} px</h1>
                        </div>                        
                    </Row>
                </Grid>
            </Fragment>
        )
    }
}

const mapPropsToState = (state) => {
    console.log('props from child...', state);
    return {
        counter: state.UtilityReducer.counter,
        clickVal: state.AnotherReducer.click
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (counterVal) => dispatch ({type: Actions.INCREMENT, counterVal: counterVal})
    }
}


export default connect(mapPropsToState, mapDispatchToProps)(Home);