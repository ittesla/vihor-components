// @flow
import React from 'react'
import {TouchableOpacity} from 'react-native'
import style from './style'
import {
  colorSecondaryTxt,
  colorSectionHeaderTitle
} from '../../themes/default/colors'
import * as icons from '../../icons'
import VText from '../VText'

export type Props = {
  size: number,
  icon: string,
  isSelected: boolean,
  itemWidth: string,
  title: string,
  onPress?: () => void
}

const VCategoryItem = (
  {size, icon, isSelected, itemWidth: width, title, onPress}: Props
) => {
  const Icon = icons[icon]
  const color = (isSelected === true)
    ? colorSecondaryTxt
    : colorSectionHeaderTitle

  const itemStyles = [style.categoryItem, {width}]
  const itemTextStyles = [style.itemText]

  if (isSelected === true) {
    itemStyles.push(style.categoryItemSelected)
    itemTextStyles.push(style.itemTextSelected)
  }

  return (
    <TouchableOpacity onPress={onPress} style={itemStyles}>
      <Icon size={size} color={color}/>
      <VText style={itemTextStyles}>{title}</VText>
    </TouchableOpacity>
  )
}

export default VCategoryItem
