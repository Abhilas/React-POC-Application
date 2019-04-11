import React, { Component, Fragment } from 'react';
import { RegisterElementData } from '../Utility/UtilityComponents/i18n';
import { connect } from 'react-redux';
import '../Assets/SCSS/Common.scss';
import '../Assets/SCSS/Register.scss';

import Spinner from '../Utility/UtilityComponents/Spinner';

import * as RegisterActions from '../Store/Actions/RegisterActions';
import Validate from '../Utility/HOC/Validate';

import { RegisterConfig } from '../Utility/UtilityFunctions/elementConfig';
import FormBuild from '../Utility/UtilityFunctions/FormBuild';

import Notify from '../Components/Notify';

import { RegistrationValidityRules } from '../Utility/UtilityComponents/ValidationRules';


class Register extends Component {
    state = {
        showMessage: false,
        messageDesc: ''
    }

    onChangeHandler = (event) => {
        console.log('value...', event.target.value);
        console.log('field identifier...', event.target.getAttribute('data-field'));
        let status = this.props.validateMe(event);
        this.props.onElementChange(event.target.value, event.target.getAttribute('data-field'));
        
        this.setState({
            showMessage: !status.isValid,
            messageDesc: status.errorMessage
        });            
    }

    onBlurHandler = (event) => {
        if(event.target.value !== '') return;
        let status = this.props.validateMe(event);
        this.setState({
            showMessage: !status.isValid,
            messageDesc: status.errorMessage
        }); 
    }
    
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.showHideSpinner(true);
        const objectData = {
            'firstName': this.props.firstName,
            'lastName': this.props.lastName
        }
        this.props.onRegister(objectData);
    }

    render () {
        console.log('Config...', RegisterConfig);
        console.log('validate...', this.props);
        console.log('disabled...', this.state.showMessage);
        let listUser, notifyMsgClass, notifyContainerClass, usrDetails;
        if(this.props.userData && this.props.userData.length > 0) {
            console.log('User Details...', this.props.userData);
            listUser = this.props.userData.map(lstUsr => (
                <li key={lstUsr.id}>{lstUsr.firstName} {lstUsr.lastName}</li>
            ));
        }

        if (this.props.registerStatus) {
            notifyContainerClass = "hide";
            notifyMsgClass = "show";
        }
        else {
            notifyContainerClass = "show";
            notifyMsgClass = "hide";
        }

        usrDetails = {
            firstName: this.props.firstName,
            lastName: this.props.lastName
        }

        return (
            <Fragment>                
                <div className="pageContainer">
                    <div className="banner registerBanner"></div>
                    <div className="containerLayout">
                        <div className={notifyContainerClass}>
                            <h4 className="withHeaderLine">{RegisterElementData.header}</h4>
                            <form onSubmit={this.onFormSubmit}>
                                <div className="form-group row">
                                    <label 
                                        htmlFor="tb_firstName" 
                                        className="col-sm-2 col-form-label bold">{RegisterElementData.firstName}</label>
                                    <input 
                                        type="text" 
                                        className="form-control col-sm-4" 
                                        id="tb_firstName" 
                                        placeholder={`${RegisterElementData.PlaceHolder} ${RegisterElementData.firstName}`}
                                        data-field="firstName"
                                        value={this.props.firstName}
                                        onChange={this.onChangeHandler} 
                                        onBlur={this.onBlurHandler}/>
                                    <label className="col-sm-5 col-form-label red" style={{display: (this.state.showMessage)? 'block':'none'}}>{this.state.messageDesc}</label>
                                </div>
                                <div className="form-group row">
                                    <label 
                                        htmlFor="tb_lastName" 
                                        className="col-sm-2 col-form-label bold">{RegisterElementData.lastName}</label>
                                    <input 
                                        type="text" 
                                        className="form-control col-sm-4" 
                                        id="tb_lastName"  
                                        placeholder={`${RegisterElementData.PlaceHolder} ${RegisterElementData.lastName}`} 
                                        data-field="lastName"
                                        value={this.props.lastName}
                                        onChange={this.onChangeHandler} />
                                </div>
                                {/*<div className="form-group row">
                                    <label 
                                        htmlFor="tb_email" 
                                        className="col-sm-2 col-form-label bold">{RegisterElementData.email}</label>
                                    <input 
                                        type="text" 
                                        className="form-control col-sm-4" 
                                        id="tb_email" 
                                        placeholder={`${RegisterElementData.PlaceHolder} ${RegisterElementData.email}`} 
                                        />
                                </div>
                                <div className="form-group row">
                                    <label 
                                        htmlFor="tb_username" 
                                        className="col-sm-2 col-form-label bold">{RegisterElementData.usrname}</label>
                                    <input 
                                        type="text" 
                                        className="form-control col-sm-4" 
                                        id="tb_username" 
                                        placeholder={`${RegisterElementData.PlaceHolder} ${RegisterElementData.usrname}`} 
                                        />
                                    <button type="button" className="btn btn-link">{RegisterElementData.usrnameCheck}</button>
                                </div>
                                <div className="form-group row">
                                    <label 
                                        htmlFor="tb_password" 
                                        className="col-sm-2 col-form-label bold">{RegisterElementData.password}</label>
                                    <input 
                                        type="password" 
                                        className="form-control col-sm-4" 
                                        id="tb_password" 
                                        placeholder={RegisterElementData.passwordPlaceHolder} 
                                        />
                                </div>
                                <div className="form-group row">
                                    <label 
                                        htmlFor="tb_retypePass" 
                                        className="col-sm-2 col-form-label bold">{RegisterElementData.retypePassword}</label>
                                    <input 
                                        type="password" 
                                        className="form-control col-sm-4" 
                                        id="tb_retypePass"
                                        placeholder={RegisterElementData.retypePasswordPlaceHolder} 
                                        />
                                </div>*/}
                                <hr/>
                                <button 
                                    className="btn btn-primary loginButton"
                                    disabled={(this.state.showMessage? true:false)}>{RegisterElementData.btnRegister}</button>
                            </form>
                        </div>

                        <div className={notifyMsgClass}>
                            <Fragment>
                                <Notify status={this.props.registerStatus} details={usrDetails}/>
                            </Fragment>
                        </div>
                    </div>
                    <ul>
                        {listUser}
                    </ul>
                </div>

                {/*Show or Hide the Spinner*/}
                {/*{
                    (this.props.pageLoading ? <Spinner text={RegisterElementData.spinnerText}/> : false)
                }*/}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('State...', state);
    return {
        registerStatus: state.Register.appStatus,
        firstName: state.Register.firstName,
        lastName: state.Register.lastName,
        userData: state.Register.userDetails,
        pageLoading: state.Register.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (userDataObj) => dispatch(RegisterActions.RegisterUserAction(userDataObj)),
        onElementChange: (val, identifier) => dispatch(RegisterActions.UpdateStore(val, identifier)),
        showHideSpinner: (loadFlag) => dispatch(RegisterActions.ShowHideSpinner(loadFlag))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Validate(Register, RegistrationValidityRules));