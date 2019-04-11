import { RegisterElementData } from './i18n';

export const RegistrationValidityRules = {
    firstName: {
        required: {
            is: true,
            message: RegisterElementData.errors.validationErrors.emptyFirstName 
        },
        minLength: {
            is: 6,
            message: RegisterElementData.errors.validationErrors.minFirstNameLength
        }
    }
}