import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { RegisterElementData } from '../Utility/UtilityComponents/i18n';

const Notify = (props) => {
    console.log('props from Notify...', props);
    let msgContent;
    if(props.status) {
        msgContent = (
            <Fragment>
                <p className="notifyMsg">
                    {RegisterElementData.notifyMessage.msgKeyword.thankyou} 
                    <strong>{props.details.firstName} {props.details.lastName}</strong>
                    {RegisterElementData.notifyMessage.success}
                </p>
                <p className="notifyMsg">
                    {RegisterElementData.notifyMessage.msgKeyword.pls}
                    <Link to="/">{RegisterElementData.notifyMessage.msgKeyword.login}</Link>
                    {RegisterElementData.notifyMessage.loginAgain}
                </p>
            </Fragment>
        );
    }
    else {
        msgContent = (
            <Fragment>
                <p className="notifyMsg">
                    {RegisterElementData.notifyMessage.msgKeyword.sorry} 
                    <strong>{props.details.firstName} {props.details.lastName}</strong>
                    {RegisterElementData.notifyMessage.error}
                </p>
            </Fragment>
        );
    }
    return (
        <Fragment>
            <div>
                {msgContent}
            </div>
        </Fragment>
    );
}

export default Notify;