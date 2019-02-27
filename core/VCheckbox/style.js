import {StyleSheet} from 'react-native'
import {verticalScale} from 'vihor_components/viewHelper';
import {colorSectionHeaderTitle} from 'vihor_components/themes/default/colors';

export const iconSize = verticalScale(40)

const container = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const checkContainer ={
  width: verticalScale(60),
  height: verticalScale(60),
  borderWidth: 2,
  borderRadius: verticalScale(20),
  alignItems: 'center',
  justifyContent: 'center'
}

const text = {
  fontSize: verticalScale(50),
  color: colorSectionHeaderTitle
}

export default StyleSheet.create({
  container,
  checkContainer,
  text
})