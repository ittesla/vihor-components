import {StyleSheet} from 'react-native'
import {scale, verticalScale} from '../../viewHelper'
import {
  black,
  colorPrimaryBg,
  colorSecondaryTxt,
  white
} from '../../themes/default/colors'

const button = {
  height: scale(146),
  width: scale(146),
  shadowColor: black,
  shadowOffset: {
    width: 0,
    height: verticalScale(10)
  },
  shadowOpacity: 0.15,
  shadowRadius: verticalScale(25),

  elevation: verticalScale(10),
  backgroundColor: colorSecondaryTxt,
  borderRadius: scale(73),
  alignItems: 'center',
  justifyContent: 'center'
}

export default StyleSheet.create({
  button
})

export const iconSize = scale(83)
export const defaultTouchableColor = colorPrimaryBg
export const emptyTouchableColor = white