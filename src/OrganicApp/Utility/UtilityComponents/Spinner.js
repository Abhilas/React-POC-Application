import React, { Fragment } from 'react';

import '../../Assets/SCSS/Spinner.scss';

const Spinner = (props) => {
    return (
        <Fragment>
            <div className="sp-parent">
                <div className="sp-child">
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className="loadText">{props.text}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Spinner;