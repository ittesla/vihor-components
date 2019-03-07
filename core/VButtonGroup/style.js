import {StyleSheet} from 'react-native'
import {
  black,
  colorCategoryText, colorPrimaryBg,
  white
} from 'vihor_components/themes/default/colors'
import {verticalScale, scale} from 'vihor_components/viewHelper'

const container = {
  flexDirection: 'row',
  justifyContent: 'space-between'
}

const item = {
  backgroundColor: white,
  borderRadius: verticalScale(7),
  shadowColor: black,
  shadowOffset: {
    width: 0,
    height: 8
  },
  shadowOpacity: 0.16,
  elevation: verticalScale(9),
  shadowRadius: verticalScale(9),
  alignItems: 'center',
  paddingVertical: verticalScale(30),
  paddingHorizontal: scale(20)
}

const itemActive = {
  backgroundColor: colorPrimaryBg
}

const itemText = {
  fontSize: verticalScale(33),
  color: colorCategoryText
}

const itemTextActive = {
  color: white
}

export default StyleSheet.create({
  container,
  item,
  itemText,
  itemActive,
  itemTextActive
})
