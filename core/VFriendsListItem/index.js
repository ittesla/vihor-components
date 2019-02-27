// @flow

import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import VProfileImage from '../VProfileImage'
import VText from '../VText'
import style, {iconPlusSize, plusColor, plusColorSelected} from './style'
import {IconPlus} from '../../icons'
import {HIT_SLOP} from '../../viewHelper'
import VCheckbox from '../VCheckbox'

type Props = {
  image?: any,
  name?: string,
  description?: string,
  isSelected: bool,
  onPlusPress?: Function,
  withBadge?: boolean,
  badgeColor?: any,
  location?: string,
  categories?: string
}

const VFriendsListItem = (
  {
    image,
    name,
    description,
    isSelected = false,
    onPlusPress,
    withBadge,
    badgeColor,
    location,
    categories
  }: Props
) => {
  const addButtonStyle = [style.addButton]

  if (isSelected === true) {
    addButtonStyle.push(style.selected)
  }

  console.log(categories)

  return (
    <View style={style.container}>
      <VProfileImage.Image
        source={image}
        size={VProfileImage.ImageSizes.s}
        withBadge={withBadge}
        badgeColor={badgeColor}
      />
      <View style={style.textWrapper}>
        <VText style={style.text} numberOfLines={1}>{name}</VText>
        {
          description && (
            <VText style={style.text} numberOfLines={1}>{description}</VText>
          )
        }
        {
          (categories)
            ? (
              <VText style={style.categoriesText} numberOfLines={1}>
                {categories}
              </VText>
            )
            : null
        }
        {
          location && (
            <VText style={style.locationText} numberOfLines={1}>
              {location}
            </VText>
          )
        }
      </View>
      <View>
        <VCheckbox
          value={isSelected}
          onChange={onPlusPress}
        />
      </View>
    </View>
  )
}

export default VFriendsListItem