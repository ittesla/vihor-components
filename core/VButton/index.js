// @flow

import React, {Component} from 'react'
import {
  View,
  TouchableOpacity
} from 'react-native'
import style, {defaultIconColor, defaultIconSize} from './style'
import VText from '../VText'
import IconType from '../../icons'

export type ButtonProps = {
  disabled?: boolean,
  style?: any,
  title?: string,
  onPress?: ?Function,
  textStyle?: any,
  renderIconLeft?: Function,
  iconLeft?: IconType,
  iconLeftColor?: string,
  iconLeftSize?: number,
  renderIconRight?: Function,
  iconRight?: IconType,
  iconRightColor?: string,
  iconRightSize?: number
}

const IconAlignEnum = {
  Left: 'Left',
  Right: 'Right'
}

type IconAlign = $Keys<typeof IconAlignEnum>

class VButton extends Component<ButtonProps> {
  renderIcon = (align: IconAlign) => {
    const renderFunc = this.props[`renderIcon${align}`]
    const Icon = this.props[`icon${align}`]
    const iconSize = (typeof this.props[`icon${align}Size`] !== 'undefined')
      ? this.props[`icon${align}Size`]
      : defaultIconSize
    const iconColor = (typeof this.props[`icon${align}Color`] !== 'undefined')
      ? this.props[`icon${align}Color`]
      : defaultIconColor

    if (typeof renderFunc === 'function') {
      return renderFunc()
    } else if (typeof Icon !== 'undefined') {
      return <Icon iconSize={iconSize} iconColor={iconColor}/>
    }

    return null
  }


  render() {
    const buttonStyles = [style.button, this.props.style]
    const buttonTextStyles = [style.buttonText, this.props.textStyle]
    const {disabled} = this.props

    if (disabled === true) {
      buttonStyles.push(style.buttonDisabled)
      buttonTextStyles.push(style.buttonTextDisabled)
    }

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        disabled={disabled}
        style={buttonStyles}
      >
        <View style={style.buttonContent}>
          {this.renderIcon(IconAlignEnum.Left)}
          <VText style={buttonTextStyles}>{this.props.title}</VText>
          {this.renderIcon(IconAlignEnum.Right)}
        </View>
      </TouchableOpacity>
    )
  }
}

export default VButton
