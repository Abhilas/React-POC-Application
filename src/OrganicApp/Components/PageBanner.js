import React, { Fragment } from 'react';

import { ImageRef } from '../Utility/UtilityComponents/ImageRef';

const PageBanner = (props) => {
    let imgSource = '';
    switch(props.type) {
        case "register" :
            imgSource = ImageRef.registerBanner;
            break;
        default :
            imgSource = '';
            break;
    }
    return (
        <Fragment>
            <img src={require(imgSource)} className="" />
        </Fragment>
    )
}

export default PageBanner;