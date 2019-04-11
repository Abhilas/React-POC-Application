import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../State/Reducer/actionTypes';

class Option1class extends Component {
    render () {
        return (
            <Fragment>
                <h2>First Way ==> </h2>
                <br/>
                <h4>value from First Reducer: {this.props.counterVal}</h4>
                <button onClick={() => this.props.onIncrement(this.props.counterVal)}>Increment</button>
                <button onClick={() => this.props.onDecrement(this.props.counterVal)}>Decrement</button>
                <h4>value from Second Reducer (2 * value from first counter): {this.props.counterVal1}</h4>
                <span>*******************************************</span>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counterVal: state.reducer1.counter,
        counterVal1: state.reducer2.counterView
    }
}

// Without using Action Creators
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onIncrement: (value) => dispatch({
//             type: "INCREMENT",
//             counterVal: value
//         }),
//         onDecrement: (value) => dispatch({
//             type: "DECREMENT",
//             counterVal: value
//         })
//     }
// }

//After Using Action Creators
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (value) => dispatch(actionCreators.performIncrement(value)),
        onDecrement: (value) => dispatch(actionCreators.performDecrement(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Option1class);