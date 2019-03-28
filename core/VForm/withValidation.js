// @flow
import React, {Component} from 'react'

type State = {
  valid: boolean,
  errorMessage: string,
  validating: boolean
}

const withValidation = (validators: Array<any>) => (WrappedComponent: any) => {
  class WithValidation extends Component<any, State> {
    state = {
      valid: true,
      errorMessage: '',
      validating: false
    }

    async validate() {
      this.setState({validating: true})

      return Promise.all(validators.map((validator) => {
        if (validator.test(this.props) === false) {
          return Promise.resolve(true)
        }

        if (!(validator instanceof Promise)) {
          return Promise.resolve(validator.validate(this.props))
        }

        return validator
          .validate(this.props)
          .then((result) => Promise.resolve(result))
          .catch(() => Promise.reject(false))

      })).then((result = []) => {
        this.setState({validating: false})

        const firstFailingIndex = result.findIndex((valid) => (valid === false))

        if (firstFailingIndex > -1) {
          const failingValidator = validators[firstFailingIndex]
          let errorMessage = failingValidator.defaultErrorMessage

          if (
            typeof this.props[failingValidator.errorMessageProp] === 'string'
          ) {
            errorMessage = this.props[failingValidator.errorMessageProp]
          }

          this.setState({
            valid: false,
            errorMessage
          })

          return false
        }

        this.setState({valid: true, errorMessage: ''})

        return true
      })
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          valid={this.state.valid}
          errorMessage={this.state.errorMessage}
          validating={this.state.validating}
        />
      )
    }
  }

  return WithValidation
}

export default withValidation
