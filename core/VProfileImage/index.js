// @flow

import React from 'react'
import {View, Image} from 'react-native'
import {IconEmptyProfileImage, IconVihor} from '../../icons'
import style, {
  sizes,
  badgeIcon,
  badgeIconSizes,
  badgeContainerPositions
} from './style'
import VText from '../VText'
import {colorBadgeBg} from 'vihor_components/themes/default/colors'

// export const ImageSizes = Object
//   .keys(sizes)
//   .reduce((acc = {}, key) => ({...acc, [key]: key}), {})

export const ImageSizes = {
  xxs: 'xxs',
  xs: 'xs',
  ms: 'ms',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'xl'
}

type Props = {
  source?: string | number | Object,
  size: $Keys<typeof sizes> | string,
  withBadge?: boolean,
  badgeColor?: any,
}


const VProfileImage = (
  {source, size = sizes.s, withBadge, badgeColor}: Props
) => {
  const resolvedSize = sizes[size]
  const calculatedSizes = {
    width: resolvedSize,
    height: resolvedSize,
    borderRadius: resolvedSize / 2
  }

  const emptyImageSize = resolvedSize / 2.5

  const image = (typeof source === 'undefined')
    ? (<IconEmptyProfileImage size={emptyImageSize}/>)
    : (<Image source={source} style={calculatedSizes} resizeMode='cover'/>)

  return (
    <View style={[calculatedSizes, style.container]}>
      {image}
      {
        (withBadge === true)
          ? <Badge badgeColor={badgeColor} size={size}/>
          : null
      }
    </View>
  )
}

type BadgeType = {
  badgeColor: any,
  size: string
}

const Badge = ({badgeColor = colorBadgeBg, size}: BadgeType) => (
  <View
    style={[
      style.badgeContainer,
      {backgroundColor: badgeColor},
      badgeContainerPositions[size]
    ]}>
    <IconVihor {...badgeIcon} size={badgeIconSizes[size]}/>
  </View>
)


export default {
  Image: VProfileImage,
  ImageSizes
}
