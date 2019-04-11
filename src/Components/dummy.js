import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import Mycard from '../Containers/Card';
import {Grid, Row, Col} from 'react-bootstrap';

import { connect } from 'react-redux';

class Dummy extends Component {
    // state = {
    //     movie: []
    // }

    // componentDidMount(){
    //     console.log('Hello');
    //     Axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=a941e679edd13d22e87be70b35af953a')
    //         .then(response => {
    //             console.log(response);
    //             this.setState({
    //                 movie: response.data.results
    //             })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    render(){
        /*let contentData;
        console.log('movie from state', this.state.movie);
        if(this.state.movie.length > 0){
            contentData = this.state.movie.map(data => {
                return (
                    <Col key={data.id} xs={12} sm={4} md={3} lg={3}>
                        <Mycard movie={data} />
                    </Col>
                )
            });
        }
        else{
            contentData = "Loading..."
        }*/
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <Mycard />
                    </div>
                    <button onClick={this.props.incrementCounter}>Increment !!!</button>
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: () => dispatch({type: "INCREMENT"})
    }
}

export default connect(null, mapDispatchToProps)(Dummy);
