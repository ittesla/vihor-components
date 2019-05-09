import {StyleSheet} from 'react-native'
import {verticalScale, scale} from '../../viewHelper'
import {
  white,
  black,
  colorPrimaryTxt,
  colorSectionHeaderTitle
} from '../../themes/default/colors'

const container = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'visible'
}

const itemsContainer = {
  maxHeight: verticalScale(400),
  backgroundColor: white
}

const itemsWrapper = {
  flex: 1,
  paddingVertical: scale(20),
  maxHeight: verticalScale(400),
  width: '100%',
  shadowColor: black,
  shadowOffset: {
    width: 0,
    height: verticalScale(10)
  },
  shadowOpacity: 0.16,
  shadowRadius: verticalScale(25),
  elevation: verticalScale(10),
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