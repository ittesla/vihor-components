import {StyleSheet} from 'react-native'
import {verticalScale, scale} from '../../viewHelper'
import {
  white,
  colorCategoryText,
  colorPrimaryBg,
  colorProfileImageBorder,
  colorBadgeBg,
  colorSectionHeaderTitle, black
} from '../../themes/default/colors'
import {sourceSansPro} from 'vihor_components/themes/default/fonts'

const postContainer = {
  backgroundColor: white
}

const headerContainer = {
  flexDirection: 'row',
  paddingHorizontal: scale(30),
  paddingVertical: scale(25),
  alignItems: 'center',
  backgroundColor: white
}

const headerUserDetails = {
  paddingLeft: scale(15),
  flex: 1
}

const headerText = {
  color: colorCategoryText
}

const headerTextName = {
  fontSize: scale(46)
}

const headerTextCategories = {
  fontSize: scale(30),
  opacity: 0.85
}

const headerTextTime = {
  fontSize: scale(30),
  opacity: 0.70
}

const headerCategoriesContainer = {
  flexDirection: 'row',
  alignItems: 'center'
}

const headerDots = {
  color: colorCategoryText,
  paddingHorizontal: scale(5)
}

const headerTextSubcategories = {
  color: colorPrimaryBg
}

const footerContainer = {
  ...headerContainer
}

const actionItemBorder = {
  width: 1,
  height: scale(84),
  opacity: 0.29,
  backgroundColor: colorProfileImageBorder
}

const footerPriceText = {
  fontSize: scale(34),
  color: colorSectionHeaderTitle,
  paddingHorizontal: scale(30)
}

const actionItem = {
  paddingHorizontal: scale(70),
  flexDirection: 'row',
  alignItems: 'center'
}

const actionEndItem = {
  ...actionItem,
  flex: 1,
  paddingHorizontal: 0,
  justifyContent: 'flex-end'
}

const footerDetails = {
  flexDirection: 'row',
  height: verticalScale(100),
  alignItems: 'center',
  paddingHorizontal: scale(35),
  backgroundColor: white,
  justifyContent: 'space-between',
  shadowColor: black,
  shadowOffset: {
    width: 0,
    height: 0
  },
  shadowOpacity: 0.16,
  shadowRadius: verticalScale(16),
  elevation: verticalScale(5)
}

const footerSubDetails = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around'
}

const footerNumberAndText = {
  flexDirection: 'row',
  alignItems: 'center'
}

const link = {
  color: colorBadgeBg,
  fontFamily: sourceSansPro.bold
}

export const priceIconSize = scale(30)

export const priceIconColor = {
  down: colorPrimaryBg,
  up: colorBadgeBg
}

const footerStatusRunning = {
  width: verticalScale(34),
  height: verticalScale(34),
  borderRadius: verticalScale(17),
  backgroundColor: colorBadgeBg
}

export const iconChevron = {
  size: verticalScale(30)
}

export default StyleSheet.create({
  postContainer,
  headerContainer,
  headerUserDetails,
  headerText,
  headerTextName,
  headerTextCategories,
  headerCategoriesContainer,
  headerTextTime,
  headerDots,
  headerTextSubcategories,
  footerContainer,
  actionItemBorder,
  footerPriceText,
  actionItem,
  actionEndItem,
  footerDetails,
  footerSubDetails,
  footerNumberAndText,
  link,
  footerStatusRunning
})
