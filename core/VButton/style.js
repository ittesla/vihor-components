import {StyleSheet} from 'react-native'
import {
  colorPrimaryBg,
  colorSecondaryTxt,
  black,
  colorPrimaryTxt,
  colorSectionHeaderTitle
} from '../../themes/default/colors'
import {verticalScale, scale} from '../../viewHelper'

const button = {
  backgroundColor: colorPrimaryBg,
  paddingVertical: verticalScale(40),
  minWidth: scale(430),
  borderRadius: verticalScale(75),
  shadowColor: black,
  shadowOffset: {
    width: 0,
    height: verticalScale(10)
  },
  shadowOpacity: 0.16,
  shadowRadius: verticalScale(25),

  elevation: verticalScale(10),
  alignItems: 'center',
  justifyContent: 'center'
}

const buttonText = {
  color: colorSecondaryTxt,
  fontSize: scale(47),
  paddingHorizontal: scale(55)
}

const buttonDisabled = {
  backgroundColor: colorSecondaryTxt
}

const buttonTextDisabled = {
  color: colorPrimaryTxt,
  opacity: 0.7
}

const buttonContent = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

export const defaultIconSize = scale(65)
export const defaultIconColor = colorSectionHeaderTitle

export default StyleSheet.create({
  button,
  buttonText,
  buttonDisabled,
  buttonTextDisabled,
  buttonContent
})
