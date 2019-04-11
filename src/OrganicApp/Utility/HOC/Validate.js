import React, { Component } from 'react';

const Validate = (WrappedComp, validationRules) => {
    return class HOC extends Component {
        state = {}

        componentDidMount () {
            console.log('componentDidMount from Validate HOC...');
        }

        validateForm = (event) => {
            console.log('From validateForm...');
            let rules = validationRules[event.target.getAttribute('data-field')],
                eleValue = event.target.value,
                isValid = true,
                errorMessage;

            // if(rules.required.is) {
            //     isValid = eleValue.trim() !== "" && isValid;
            //     errorMessage = rules.required.message
            // }

            // if(rules.minLength) {
            //     if(eleValue.trim().length < rules.minLength.is && isValid) {
            //         isValid = false;
            //         errorMessage = rules.minLength.message
            //     }                
            // }

            console.log('From inside validateForm...', isValid);

            return {
                isValid,
                errorMessage
            };
        }

        render () {
            console.log('RegistrationValidityRules...', validationRules);
            return (
                <WrappedComp {...this.props} validateMe={this.validateForm}/>
            )
        }
    }
}

export default Validate;