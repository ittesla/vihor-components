import {StyleSheet} from 'react-native'
import {
  colorSectionHeaderTitle,
  colorProfileImageBorder,
  colorPrimaryBg,
  colorSecondaryTxt,
  colorCategoryText
} from '../../themes/default/colors'
import {scale} from '../../viewHelper'
import {sourceSansPro} from 'vihor_components/themes/default/fonts';

const container = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: scale(50),
  paddingHorizontal: scale(40)
}

const text = {
  fontSize: scale(47),
  color: colorSectionHeaderTitle
}

const locationText = {
  fontSize: scale(30),
  color: colorCategoryText
}
const categoriesText = {
  fontSize: scale(30),
  color: colorPrimaryBg,
  fontFamily: sourceSansPro.bold
}

const textWrapper = {
  paddingHorizontal: scale(50),
  flex: 1
}

const addButton = {
  borderRadius: scale(33),
  borderColor: colorProfileImageBorder,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: scale(20)
}

const selected = {
  borderColor: colorPrimaryBg,
  backgroundColor: colorPrimaryBg
}

export const plusColor = colorProfileImageBorder
export const plusColorSelected = colorSecondaryTxt

export const iconPlusSize = scale(66)

export default StyleSheet.create({
  container,
  text,
  locationText,
  textWrapper,
  addButton,
  selected,
  categoriesText
})