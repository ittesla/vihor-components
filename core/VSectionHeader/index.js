// @flow

import React from 'react'
import VHorizontalLine from '../VHorizontalLine'
import {
  View
} from 'react-native'
import styles from './style'
import VText from '../VText'

type Props = {
  title?: string,
  style?: any,
  textStyle?: any
}

const VSectionHeader = ({title = '', style, textStyle} : Props) => (
  <View style={[styles.titleContainer, style]}>
    <VHorizontalLine style={styles.line}/>
    <VText style={[styles.title, textStyle]}>{title}</VText>
    <VHorizontalLine style={styles.line} />
  </View>
)

export default VSectionHeader
