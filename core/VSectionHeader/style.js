import {StyleSheet} from 'react-native'
import { scale } from '../../viewHelper'
import { colorSectionHeaderTitle } from '../../themes/default/colors'

const titleContainer = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

const line = {
  flex: 1
}

const title = {
  textAlign: 'center',
  paddingHorizontal: scale(10),
  fontSize: scale(42),
  color: colorSectionHeaderTitle
}

export default StyleSheet.create({
  titleContainer,
  line,
  title
})