// @flow

import React from 'react'
import {
  View
} from 'react-native'
import { colorSectionHeader } from '../../themes/default/colors'

type Props = {
  color?: string,
  height?: number,
  style?: any
}

const VHorizontalLine = ({ color = colorSectionHeader, height = 1, style}: Props) => (
  <View style={[{ backgroundColor: color, height }, style]}/>
)

export default VHorizontalLine