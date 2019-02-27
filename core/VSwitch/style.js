import {StyleSheet} from 'react-native'
import {scale, verticalScale} from 'vihor_components/viewHelper'
import {colorSectionHeaderTitle} from 'vihor_components/themes/default/colors'

const container = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

const switchContainer = {
  paddingHorizontal: scale(55)
}

const circle = {
  width: verticalScale(48),
  height: verticalScale(48),
  margin: scale(10)
}

const text = {
  fontSize: verticalScale(52),
  color: colorSectionHeaderTitle,
}

const textLeft = {
  ...text,
  textAlign: 'right'
}

const textRight = {
  ...text,
  textAlign: 'left'
}

export default StyleSheet.create({
  container,
  switchContainer,
  circle,
  textLeft,
  textRight
})