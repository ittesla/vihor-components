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
    right: -verticalScale(12),
    bottom: -verticalScale(12),
    width: verticalScale(55),
    height: verticalScale(55),
    borderRadius: verticalScale(28),
  },
  ms: {
    right: -verticalScale(10),
    bottom: -verticalScale(10),
    width: verticalScale(57),
    height: verticalScale(57),
    borderRadius: verticalScale(30),
  },
  s: {
    right: -verticalScale(8),
    bottom: -verticalScale(8),
    width: verticalScale(65),
    height: verticalScale(65),
    borderRadius: verticalScale(33),
  },
  m: {
    right: -verticalScale(6),
    bottom: -verticalScale(6),
    width: verticalScale(70),
    height: verticalScale(70),
    borderRadius: verticalScale(35),
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
  xs: verticalScale(26),
  ms: verticalScale(28),
  s: verticalScale(34),
  m: verticalScale(36)
}

export const sizes = {
  xxs: verticalScale(90),
  xs: verticalScale(104),
  ms: verticalScale(117),
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
