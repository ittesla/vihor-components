// @flow

import React from 'react'
import VText from '../VText'
import {TouchableOpacity} from 'react-native'
import {HIT_SLOP} from '../../viewHelper'

type Props = {
  children: string,
  style?: any,
  textStyle?: any,
  onPress?: Function
}

const VLink = ({children, style, textStyle, onPress}: Props) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <VText style={textStyle}>{children}</VText>
  </TouchableOpacity>
)

export default VLink
