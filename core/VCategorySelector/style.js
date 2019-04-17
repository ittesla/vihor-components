import {StyleSheet} from 'react-native'
import {verticalScale, scale} from '../../viewHelper'
import {
  black,
  colorCategoryBackground,
  colorPrimaryBg,
  colorSecondaryTxt,
  colorSectionHeaderTitle
} from '../../themes/default/colors'

const categoryItem = {
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: 1,
  margin: '1%',
  shadowColor: black,
  backgroundColor: colorCategoryBackground,
  shadowOffset: {
    width: 0,
    height: verticalScale(9),
  },
  shadowOpacity: 0.16,
  shadowRadius: verticalScale(8),
  elevation: verticalScale(4),
  borderRadius: scale(10)
}

const categoryItemSelected = {
  backgroundColor: colorPrimaryBg
}

const categoryContainer = {
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap'
}

const itemText = {
  color: colorSectionHeaderTitle,
  fontSize: scale(31),
  marginTop: verticalScale(15),
  textAlign: 'center'
}

const itemTextSelected = {
  color: colorSecondaryTxt
}


export default StyleSheet.create({
  categoryItem,
  categoryContainer,
  categoryItemSelected,
  itemText,
  itemTextSelected
})