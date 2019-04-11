import React, { Fragment } from 'react';
// import {Card, CardTitle, CardMedia, CardHeader, CardText, CardActions} from 'material-ui';
import { connect } from 'react-redux';

const Mycard = (props) => {
    console.log('props from child...', props);
    return (        
        <Fragment>
            <h4>{props.counter}</h4>
            <button onClick={props.onIncrement}>Increment from Child !!!</button>
        </Fragment>
    )
}

// function restructureImageURL(url){
//     console.log('url...', url);
//     let updatedURL = `https://image.tmdb.org/t/p/w300${url}`;
//     return updatedURL;
// }

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: "INCREMENT"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mycard);

{/*<div className="col-sm-4">
            <img src={restructureImageURL(props.movie.poster_path)} />
            <p>{props.movie.title}</p>
        </div>*/}
