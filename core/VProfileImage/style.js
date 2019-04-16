import {StyleSheet} from 'react-native'
import {
  colorProfileImageBorder,
  colorBadgeBg,
  colorSecondaryTxt,
  white
} from '../../themes/default/colors'
import {verticalScale, scale} from '../../viewHelper'

const container = {
  borderWidth: 1,
  borderColor: colorProfileImageBorder,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white'
}

const badgeContainer = {
  position: 'absolute',
  borderWidth: verticalScale(5),
  borderColor: white,
  justifyContent: 'center',
  alignItems: 'center'
}

export const badgeContainerPositions = {
  xs: {
    right: -verticalScale(10),
    bottom: -verticalScale(10),
    width: verticalScale(45),
    height: verticalScale(45),
    borderRadius: verticalScale(23),
  },
  s: {
    right: -verticalScale(10),
    bottom: -verticalScale(10),
    width: verticalScale(55),
    height: verticalScale(55),
    borderRadius: verticalScale(27),
  },
  m: {
    right: -verticalScale(5),
    bottom: -verticalScale(5),
    width: verticalScale(55),
    height: verticalScale(55),
    borderRadius: verticalScale(27),
  }
}

const badgeText = {
  fontSize: scale(18),
  color: colorSecondaryTxt
}

export const badgeIcon = {
  color: white,
}

export const badgeIconSizes = {
  xs: verticalScale(27),
  s: verticalScale(35),
  m: verticalScale(35)
}

export const sizes = {
  xxs: verticalScale(90),
  xs: verticalScale(104),
  s: verticalScale(145),
  m: verticalScale(165),
  l: verticalScale(202),
  xl: verticalScale(342)
}

export default StyleSheet.create({
  container,
  badgeContainer,
  badgeText
})
