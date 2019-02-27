// @flow
import React, {Component} from 'react'

export type FormProps = {
  children: any,
  onChange?: ?Function
}

export type FormState = {
  enableValidateSingle: boolean,
  [string]: [string]
}

class ValidatedForm extends Component<FormProps, FormState> {
  childRefs: any = {}

  constructor(props: FormProps) {
    super(props)

    const values = this.getControlledChildren(this.props)
      .map((item) => ({value: item.props.value, name: item.props.name}))
      .reduce((acc, item, currentIndex) => {
        acc[item.name] = item.value

        return acc
      }, {})

    this.state = {
      ...values,
      enableValidateSingle: false
    }
  }

  componentWillReceiveProsp(nextProps: FormProps) {
    const values = this.getControlledChildren(nextProps)
      .map((item) => ({value: item.props.value, name: item.props.name}))
      .reduce((acc, item, currentIndex) => {
        acc[item.name] = item.value

        return acc
      }, {})

    this.setState({
      ...values
    })
  }

  getControlledChildren: any = (props: FormProps) => {
    const {children} = props
    let controlledChildren = children

    if (Array.isArray(children) !== true) {
      controlledChildren = [children]
    }

    return controlledChildren.filter(
      (item) => (item !== null)
    )
  }

  getCurrentValue = (): Object => {
    const value = {
      ...this.state
    }

    delete value.enableValidateSingle

    return value
  }

  onChildChange = (value: any, name: string, index: number) => {
    this.setState({[name]: value}, () => {
      if (this.state.enableValidateSingle === true) {
        this.childRefs[`component${index}`].validate()
      }

      const value = this.getCurrentValue()

      if (typeof this.props.onChange === 'function') {
        this.props.onChange(value)
      }
    })
  }

  validate = () => {
    this.setState({enableValidateSingle: true})
    return Promise
      .all(Object.keys(this.childRefs).map((key) => {
        if (typeof this.childRefs[key].validate === 'function') {
          return this.childRefs[key].validate()
        }

        return true
      }))
      .then((results) => results
        .filter((value) => (value === false)).length === 0
      )
      .catch(() => false)
  }

  getValue = () => {
    return this.validate().then((result) => {
      if (result === true) {
        return this.getCurrentValue()
      }

      return null
    })
  }

  render() {
    const controlledChildren = this.getControlledChildren(this.props)
      .map((child, index) => {
        const {name} = child.props
        return React.cloneElement(child, {
          key: index,
          onChange: (event: any) => this.onChildChange(event, name, index),
          value: this.state[name],
          ref: (ref) => {
            this.childRefs[`component${index}`] = ref
          }
        })
      })

    return <React.Fragment>{controlledChildren}</React.Fragment>
  }
}

export default ValidatedForm
