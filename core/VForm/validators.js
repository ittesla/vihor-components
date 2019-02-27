const validators = {
  required: {
    test: ({required}) => (required === true),
    validate: ({value}) => (typeof value !== 'undefined' && value !== '' ),
    defaultErrorMessage: 'required',
    errorMessageProp: 'requiredError'
  },
  email: {
    test: ({keyboardType}) => (keyboardType === 'email-address'),
    validate: ({value}) => (
      value.length === 0 ||
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ),
    defaultErrorMessage: 'email invalid',
    errorMessageProp: 'emailError'
  },
  number: {
    test: ({isNumber}) => isNumber === true,
    validate: ({value}) => (/^\d*$/.test(value)),
    defaultErrorMessage: 'number',
    errorMessageProp: 'numberError'
  },
  textLength: {
    test: ({minLength, maxLength}) => (
      typeof minLength !== 'undefined' ||
      typeof maxLength !== 'undefined'
    ),
    validate: ({value, minLength, maxLength}) => (
      typeof minLength !== 'undefined' &&
      typeof maxLength !== 'undefined'
    )
      ? (
        value.length >= minLength &&
        value.length <= maxLength
      )
      : (typeof minLength !== 'undefined')
        ? (value.length >= minLength)
        : value.length <= maxLength,
    defaultErrorMessage: ({minLength, maxLength}) => (
      typeof minLength !== 'undefined' &&
      typeof maxLength !== 'undefined'
    )
      ? 'not supported'
      : (typeof minLength !== 'undefined')
        ? `min length is ${minLength}`
        : `max length is ${maxLength}`,
    errorMessageProp: 'lengthError',
  },
  confirmPassword: {
    test: ({confirmPasswordRef}) => (typeof confirmPasswordRef !== 'undefined'),
    validate: ({value, confirmPasswordRef}) => (
      value === confirmPasswordRef.props.value
    ),
    defaultErrorMessage: 'password should match',
    errorMessageProp: 'requiredPasswordMatch'
  },
  pattern: {
    test: ({pattern}) => (
      typeof pattern !== 'undefined' &&
      pattern instanceof RegExp
    ),
    validate: ({value, pattern}) => (pattern.test(value) === true),
    defaultErrorMessage: 'pattern doesnt match',
    errorMessageProp: 'patternMatch'
  },
  asyncValidation: {
    test: ({asyncValidation}) => (typeof asyncValidation === 'function'),
    validate: async ({value, asyncValidation}) => (
      await asyncValidation(value) === true
    ),
    defaultErrorMessage: 'Async validation failed',
    errorMessageProp: 'asyncValidationError'
  }
}


export const inputValidators = [
  validators.required,
  validators.email,
  validators.number,
  validators.textLength,
  validators.confirmPassword,
  validators.pattern,
  validators.asyncValidation
]

export default validators