import React, { Fragment } from 'react';
import '../Assets/SCSS/Landing.scss';

// Used for Routing
import { BrowserRouter } from 'react-router-dom';
import ComponentRoute from '../ComponentRoute';

import Login from '../Containers/Login';

const Landing = (props) => {
    return (
        <Fragment>
            <BrowserRouter>
                <div className="container-fluid">
                    <div className="row">
                        <div className="containerDiv">
                            <ComponentRoute /> 
                        </div>                    
                    </div>
                </div>
            </BrowserRouter>                       
        </Fragment>
    )
}

export default Landing;