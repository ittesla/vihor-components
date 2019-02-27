// @flow

import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import IconCross from '../../icons/IconCross'
import VText from '../VText'
import styles, {iconSize, iconColor} from './style'
import {HIT_SLOP} from '../../viewHelper'

type Props = {
  children: any,
  style?: Object | number
}

const HeaderBase = ({children, style}: Props) => (
  <View style={[styles.header, style]}>
    {children}
  </View>
)

export default HeaderBase
