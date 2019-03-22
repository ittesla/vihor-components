import {StyleSheet} from 'react-native'
import {verticalScale, scale} from '../../viewHelper'
import {
  white,
  black,
  colorPrimaryTxt,
  colorSectionHeaderTitle
} from '../../themes/default/colors'

const container = {
  position: 'relative',
  overflow: 'visible'
}

const itemsContainer = {
  maxHeight: verticalScale(400),
  backgroundColor: white
}

const itemsWrapper = {
  paddingVertical: scale(20),
  top: scale(120),
  maxHeight: verticalScale(400),
  width: '100%',
  position: 'absolute',
  shadowColor: black,
  shadowOffset: {
    width: 0,
    height: verticalScale(10)
  },
  shadowOpacity: 0.16,
  shadowRadius: verticalScale(25),
  elevation: verticalScale(10),
  zIndex: 999,
  backgroundColor: white,
}

const itemText = {
  color: colorPrimaryTxt,
  paddingVertical: verticalScale(10),
  paddingHorizontal: scale(20),
  fontSize: scale(47),
}

const crossIconContainer = {
  position: 'absolute',
  right: 0,
  justifyContent: 'flex-end',
  height: '100%',
  paddingBottom: verticalScale(90)
}

export const crossIcon = {
  size: scale(47),
  color: colorSectionHeaderTitle
}

export default StyleSheet.create({
  container,
  itemsContainer,
  itemsWrapper,
  itemText,
  crossIconContainer
})