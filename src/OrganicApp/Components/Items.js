import React, { Fragment } from 'react';

const CardItems = (props) => {
    console.log('props from Items...', props);
    return (
        <Fragment>
            <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div className="card">
                    <img className="card-img-top" src={props.details.imgLink} alt={props.details.alt} />
                    <div className="card-body">
                        <p className="card-text">{props.details.cardTitle}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CardItems;