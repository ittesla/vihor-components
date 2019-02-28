import {StyleSheet} from 'react-native'
import {verticalScale, scale} from 'vihor_components/viewHelper';
import {
  colorPrimaryBg,
  colorSectionHeaderTitle,
  colorSwitchBackground
} from 'vihor_components/themes/default/colors';

const container = {
  paddingBottom: scale(49),
  paddingTop: verticalScale(20)
}

const containerRow = {
  ...container,
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap'
}

const containerColumn = {
  ...container,
  flexDirection: 'row',
  justifyContent: 'center'
}

const radioButtonItem = {
  ...containerRow,
  width: scale(300),
  justifyContent: 'center'
}

const radioButton = {
  width: verticalScale(70),
  height: verticalScale(70),
  borderRadius: verticalScale(35),
  backgroundColor: colorSwitchBackground,
  justifyContent: 'center',
  alignItems: 'center'
}

const radioButtonSelected = {
  width: verticalScale(50),
  height: verticalScale(50),
  borderRadius: verticalScale(25),
  backgroundColor: colorPrimaryBg
}

const text = {
  fontSize: verticalScale(52),
  color: colorSectionHeaderTitle,
  paddingLeft: scale(20)
}

export default StyleSheet.create({
  containerRow,
  containerColumn,
  radioButtonItem,
  radioButton,
  radioButtonSelected,
  text
})