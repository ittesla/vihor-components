import {StyleSheet} from 'react-native'
import {
  colorPrimaryBg,
  colorPrimaryTxt,
  colorSecondaryTxt,
  black,
  colorBadgeBg,
  white
} from '../../themes/default/colors'
import { verticalScale, scale, SCREEN_WIDTH } from '../../viewHelper'
import {sourceSansPro} from '../../themes/default/fonts'

const inputContainer = {
  width: '100%',
  paddingBottom: scale(49)
}

const textInput = {
  paddingVertical: verticalScale(20),
  textAlign: 'center',
  color: colorPrimaryTxt,
  fontSize: scale(47),
  lineHeight: scale(56),
  fontFamily: sourceSansPro.light
}

const searchInput = {
  ...textInput,
  textAlign: 'left',
  flex: 1,
  fontSize: scale(60),
  lineHeight: scale(70)
}

const searchIcon = {
  paddingRight: scale(50)
}

const shadowInputWrapper = {
  borderRadius: scale(77)
}

const searchInputWrapper = {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: colorSecondaryTxt,
  paddingVertical: scale(25),
  paddingHorizontal: scale(60)
}

const withPasswordShow = {
  // width: SCREEN_WIDTH - scale(40)
}

const errorMessagesContainer = {
  backgroundColor: colorPrimaryBg,
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  width: '100%'
}

const hintContainer = {
  ...errorMessagesContainer,
  backgroundColor: colorBadgeBg
}
 
const errorMessageText = {
  color: colorSecondaryTxt,
  fontSize: scale(24),
  lineHeight: scale(29),
  paddingVertical: verticalScale(10),
}

const hintText = {
  ...errorMessageText,
  color: white
}

const emptyInput = {
  fontFamily: sourceSansPro.light
}

const showPasswordButton = {
  position: 'absolute',
  right: scale(20),
  top: verticalScale(20)
}

const searchWithShadow = {
  borderRadius: scale(77),
  shadowColor: black,
  shadowOffset: {
    width: 0,
    height: verticalScale(10),
  },
  shadowOpacity: 0.16,
  shadowRadius: verticalScale(25),

  elevation: verticalScale(10),
  marginVertical: scale(30)
}

const searchWithShadowText = {
  fontSize: scale(47)
}

export const searchIconSize = scale(60)

export default StyleSheet.create({
  inputContainer,
  textInput,
  errorMessagesContainer,
  errorMessageText,
  withPasswordShow,
  showPasswordButton,
  emptyInput,
  searchInput,
  searchInputWrapper,
  searchIcon,
  searchWithShadow,
  searchWithShadowText,
  shadowInputWrapper,
  hintContainer,
  hintText
})

export const selectedIconColor = colorPrimaryBg
