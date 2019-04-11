import React, { Fragment } from 'react';

const FormBuild = (props) => {
    console.log('Props...', props);

    let configElementAttr = {},
        configLabelAttr = {},
        configElement;
    
    props.config.map(eachConfigdata => {
        switch (eachConfigdata.fieldType) {
            case 'input' :
                break;
        }

        //Appending the Config data to the Element
        configElement = (
            <Fragment>
                <div className="form-group row">
                    <h4>Hello Form Builder !!!</h4>
                </div>
            </Fragment>
        );
    });

    return (
        <Fragment>
            <h4>Dynamic Form Builder !!!</h4>
            {configElement}
        </Fragment>
    )
}

export default FormBuild;