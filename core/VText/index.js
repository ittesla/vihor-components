// @flow

import React from 'react'
import {Text} from 'react-native'
import textStyle from './style'

export type TextProps = {
  style?: any,
  children: any
}

const VTextInput = ({style, children, ...rest}: TextProps) => (
  <Text style={[textStyle.text, style]} {...rest}>{children}</Text>
)

export default VTextInput
