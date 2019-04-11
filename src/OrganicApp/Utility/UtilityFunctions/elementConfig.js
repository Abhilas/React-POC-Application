import React from 'react';
import * as i18n from '../UtilityComponents/i18n';

export const RegisterConfig = [
    {
        "fieldName": i18n.RegisterElementData.firstName,
        "fieldType": "input",
        "fieldEleType": "text",
        "fieldId": "tb_firstName",
        "fieldPlaceHolder": `${i18n.RegisterElementData.PlaceHolder} ${i18n.RegisterElementData.firstName}`,
        "fieldRequired": true
    }
]
