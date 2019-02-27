import {StyleSheet} from 'react-native'
import {scale} from '../../viewHelper'
import {
  colorBadgeBg,
  colorSectionHeaderTitle
} from '../../themes/default/colors'

const actionItemText = {
  paddingLeft: scale(25),
  fontSize: scale(34),
  color: colorSectionHeaderTitle
}

export default StyleSheet.create({
  actionItemText
})

export const actionIconSize = scale(50)
export const actionIconColor = {
  empty: colorSectionHeaderTitle,
  selected: colorBadgeBg
}
