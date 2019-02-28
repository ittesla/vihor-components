//@flow

import React, {Component} from 'react'
import style from './style'
import {View} from 'react-native'
import VText from '../VText'
import VRadioButton from './VRadioButton'

type RadioButtonType = {
  label: string,
  value: string
}

type Props = {
  data: Array<RadioButtonType>,
  value?: string,
  onChange?: Function,
  direction?: 'row' | 'column',
  style: any,
  name?: string
}

type State = {
  value: string
}

class VRadioButtons extends Component<Props, State> {
  state = {
    value: ''
  }

  componentDidMount() {
    if (typeof this.props.value !== 'undefined') {
      this.setState({value: this.props.value})
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.value !== this.props.value) {
      this.setState({value: nextProps.value})
    }
  }

  onChange = (value: string) => {
    if (typeof this.props.onChange === 'function') {
      return this.props.onChange(value)
    }

    this.setState({value})
  }

  getValue = () => {
    return this.state.value
  }

  render() {
    const directionStyle = (this.props.direction === 'column')
      ? style.containerColumn
      : style.containerRow
    return (
      <View
        style={[directionStyle, this.props.style]}
      >
        {
          this.props.data.map((item, index) => (
            <VRadioButton
              key={`VRadioButton_${this.props.name || ''}_${item.value}_${index}`}
              {...item}
              isSelected={(item.value === this.state.value)}
              onPress={this.onChange}
            />
          ))
        }
      </View>
    )
  }
}

export default VRadioButtons
