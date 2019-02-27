// @flow
import React from 'react'
import {ImageBackground} from 'react-native'
import {containerBg} from '../../themes/default/images'
import styles from './style'

type Props = {
  children: Array<any> | Object,
  style?: any
}

const Container = ({children, style}: Props) => (
  <ImageBackground style={[styles.container, style]} source={containerBg}>
    {children}
  </ImageBackground>
)

export default Container