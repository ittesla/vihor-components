import {StyleSheet} from 'react-native'
import {scale, verticalScale} from '../../viewHelper'
import {
  colorBadgeBg,
  colorSectionHeaderTitle
} from '../../themes/default/colors'

const actionItemText = {
  paddingLeft: scale(25),
  fontSize: scale(34),
  color: colorSectionHeaderTitle
}

const contextMenuItem = {
  ...actionItemText,
  paddingVertical: verticalScale(15)
}

export default StyleSheet.create({
  actionItemText,
  contextMenuItem
})

export const actionIconSize = scale(50)
export const actionIconColor = {
  empty: colorSectionHeaderTitle,
  selected: colorBadgeBg
}
