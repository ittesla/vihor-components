// @flow

import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native'
import {
  colorPrimaryBg, colorSectionHeaderTitle,
  white
} from 'vihor_components/themes/default/colors'
import styles, {iconSize} from './style'
import VText from '../VText'
import IconCheck from '../../icons/IconCheck'

type Props = {
  title?: string,
  activeColorBg?: any,
  activeCheck?: any,
  style?: any,
  textStyle?: any,
  value?: boolean,
  onChange?: Function,
  inactiveColorBg?: any
}

type Stete = {
  checked: boolean
}

class VCheckbox extends Component<Props, Stete> {

  constructor(props: Props) {
    super(props);

    this.state = {
      checked: this.props.value || false
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.value !== this.props.value) {
      this.setState({checked: nextProps.value})
    }
  }

  onChange = () => {
    if (typeof this.props.value === 'undefined') {
      this.setState((state) => ({
        checked: !state.checked
      }))
    }

    if (typeof this.props.onChange !== 'undefined') {
      this.props.onChange(!this.state.checked)
    }
  }

  render() {
    const {
      title,
      activeColorBg = colorPrimaryBg,
      inactiveColorBg=colorSectionHeaderTitle,
      activeCheck = white,
      style,
      textStyle
    } = this.props
    const {checked} = this.state

    const backgroundColor = (checked === true)
      ? activeColorBg
      : activeCheck

    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={this.onChange}
      >
        <VText style={[styles.text, textStyle]}>{title}</VText>
        <View
          style={[
            styles.checkContainer,
            {
              backgroundColor,
              borderColor: (checked === true) ? activeColorBg : inactiveColorBg
            }
          ]}
        >
          <IconCheck
            size={iconSize}
            color={(checked === true) ? activeCheck : inactiveColorBg}
          />
        </View>

      </TouchableOpacity>
    )
  }
}

export default VCheckbox