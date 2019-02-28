//@flow

import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import style from './style'
import VText from '../VText'

export type RadioButtonType = {
  label: string,
  isSelected: boolean,
  onPress: Function,
  value: string
}

const VRadioButton = ({label, value, isSelected, onPress}: RadioButtonType) => (
  <TouchableOpacity
    style={style.radioButtonItem}
    onPress={() => onPress(value)}
  >
    <View style={style.radioButton}>
      {isSelected && <View style={style.radioButtonSelected}/>}
    </View>
    <VText style={style.text}>{label}</VText>
  </TouchableOpacity>
)

export default VRadioButton
