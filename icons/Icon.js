// @flow
import React, {Component} from 'react'
import {createIconSetFromFontello} from 'react-native-vector-icons'
import {colorSecondaryBg} from '../themes/default/colors'
import {scale} from '../viewHelper'
import {View} from 'react-native'
import fontelloConfig from './config'

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

export type IconProps = {
  color: any,
  size: number,
  style?: any
}

class Icon extends Component<IconProps> {
  name: string
  size: number

  constructor(props: IconProps) {
    super(props)
  }

  static defaultProps = {
    color: colorSecondaryBg,
    size: scale(50)
  }

  render() {
    return (
      <FontelloIcon
        size={this.size || this.props.size}
        color={this.props.color}
        name={this.name}
        style={this.props.style}
      />
    )
  }
}

export default Icon
