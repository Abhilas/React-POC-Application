import React, { Component, Fragment } from 'react';

class addPerson extends Component {
    state = {
        name: ''
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render () {
        return (
            <Fragment>
                <input type="text" value={this.state.name} onChange={this.onNameChange}/>
                <button onClick={() => this.props.onAddPersonClicked(this.state.name)}>Add Person</button>
                {/*<p>{this.state.name}</p>*/}
            </Fragment>
        )
    }
}

export default addPerson;