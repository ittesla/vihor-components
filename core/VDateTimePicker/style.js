import {StyleSheet} from 'react-native'
import {scale, verticalScale} from 'vihor_components/viewHelper';
import {
  colorBadgeBg,
  colorPrimaryBg, colorSecondaryTxt,
  colorSectionHeaderTitle, white
} from '../../themes/default/colors'
import {sourceSansPro} from 'vihor_components/themes/default/fonts';

const container = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: verticalScale(30)
}

const text = {
  fontSize: verticalScale(50),
  color: colorSectionHeaderTitle,
  fontFamily: sourceSansPro.semiBold,
  flex: 1,
  textAlign: 'center'
}

const errorMessagesContainer = {
  backgroundColor: colorPrimaryBg,
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  width: '100%'
}

const errorMessageText = {
  color: colorSecondaryTxt,
  fontSize: scale(24),
  lineHeight: scale(29),
  paddingVertical: verticalScale(10),
}

const hintContainer = {
  ...errorMessagesContainer,
  backgroundColor: colorBadgeBg
}

const hintText = {
  ...errorMessageText,
  color: white
}

export const iconCalendar = {
  color: colorSectionHeaderTitle,
  size: verticalScale(50)
}

export const iconWatch = {
  color: colorSectionHeaderTitle,
  size: verticalScale(50)
}

export default StyleSheet.create({
  container,
  text,
  errorMessagesContainer,
  errorMessageText,
  hintContainer,
  hintText
})
