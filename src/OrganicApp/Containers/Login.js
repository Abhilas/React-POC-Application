import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../Assets/SCSS/Login.scss';
import '../Assets/SCSS/Common.scss';

import Spinner from '../Utility/UtilityComponents/Spinner';

import { LoginElementData } from '../Utility/UtilityComponents/i18n';

import { connect } from 'react-redux';
import * as LoginActions from '../Store/Actions/LoginActions';
import Axios from 'axios';

class Login extends Component {
    emailValueChangeHandler  = (event) => {
        this.props.emailChangeHandler(event.target.value);
    }
    passwordValueChangeHandler = (event) => {
        this.props.passwordChangeHandler(event.target.value);
    }
    componentDidMount () {
        this.props.getinitialData();
    }
    render () {
        const mtData = this.props.initialData;
        if(mtData){
            console.log('from render...', mtData);
            mtData.map(dataMt => {
                console.log('inside map...',dataMt.id);
                console.log('inside map...',dataMt.item);
            })
        }
            
        return (
            <Fragment>
                <div className="loginContainerDiv">
                    <h4 className="loginHeader">{LoginElementData.header}</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="tb_loginEmail">{LoginElementData.usrName}</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="tb_loginEmail" 
                                aria-describedby="emailHelp" 
                                placeholder={LoginElementData.usrNamePlaceholder} 
                                required 
                                value={this.props.username}
                                onChange={this.emailValueChangeHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tb_loginPass">{LoginElementData.password}</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="tb_loginPass" 
                                aria-describedby="emailHelp" 
                                placeholder={LoginElementData.passwordPlaceholder} 
                                required 
                                value={this.props.password}
                                onChange={this.passwordValueChangeHandler}/>
                        </div>
                        <button type="submit" className="btn btn-primary loginButton">{LoginElementData.btnlogin}</button>
                        <div className="signUpParent">
                            <p>
                                {LoginElementData.noAccount}
                                <Link to="/Register">{LoginElementData.signUp}</Link>                                
                            </p>                            
                        </div>
                    </form>                   
                </div>
                {/*<Spinner text={LoginElementData.spinnerText}/>*/}
            </Fragment>
        )
    }
}

Login.propTypes = {

}

const mapStateToProps = (state) => {
    console.log('state...', state);
    return {
        username: state.Login.usrname,
        password: state.Login.password,
        initialData: state.Login.initLoginData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        emailChangeHandler: (username) => dispatch(LoginActions.loginUsername(username)),
        passwordChangeHandler: (password) => dispatch(LoginActions.loginPassword(password)),
        getinitialData: () => dispatch(LoginActions.getInitialData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));