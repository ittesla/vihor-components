import {StyleSheet} from 'react-native'
import {
  white,
  colorSectionHeaderTitle,
  black
} from '../../themes/default/colors'
import {scale, verticalScale} from '../../viewHelper'

const header = {
  flexDirection: 'row',
  backgroundColor: white,
  paddingLeft: scale(50),
  paddingVertical: scale(40),
  alignItems: 'center',
  shadowColor: black,
  shadowOffset: {
    width: 0,
    height: verticalScale(10)
  },
  shadowOpacity: 0.16,
  shadowRadius: verticalScale(25),
  elevation: verticalScale(10)
}

const title = {
  color: colorSectionHeaderTitle,
  paddingLeft: scale(30),
  fontSize: scale(52)
}

export const iconSize = scale(43)
export const iconColor = colorSectionHeaderTitle

export default StyleSheet.create({
  header,
  title
})
