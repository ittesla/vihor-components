// @flow

import React, {Component} from 'react'
import {
  View
} from 'react-native'
import {scale} from '../../viewHelper'
import style from './style'
import VCategoryItem from './VCategoryItem'

type ItemType = {
  icon: string,
  title: string,
  value: string,
  size: number
}

export type Props = {
  itemPerRow: number,
  items: Array<ItemType>,
  selected: Array<string>,
  onChange?: (Array<string>) => void,
  multiple: boolean
}

const singleItemWidth = 500

class VCategoryContainer extends Component<Props> {
  static defaultProps = {
    multiple: true
  }

  itemWidth: number = 0

  componentWillMount() {
    this.itemWidth = Math.floor(singleItemWidth / this.props.itemPerRow)
  }

  getValueIndex = (value: string) => this.props.selected.findIndex(
    (selected) => (selected === value)
  )

  isSelected = (value: string) => this.getValueIndex(value) > -1

  onItemPress = (value: string) => {
    const index = this.getValueIndex(value)
    const selected = [...this.props.selected]

    if (this.props.multiple === false) {
      selected[0] = value
    } else {

      if (index > -1) {
        selected.splice(index, 1)
      } else {
        selected.push(value)
      }
    }

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(selected)
    }
  }

  calculateItemWidth = () => `${Math.floor((100 / this.props.itemPerRow) - 2)}%`

  render() {
    return (
      <View style={style.categoryContainer}>
        {
          this.props.items.map(({icon, title, value, size}, index) => (
            <VCategoryItem
              itemWidth={this.calculateItemWidth()}
              size={scale(size)}
              title={title}
              isSelected={this.isSelected(value)}
              icon={icon}
              key={index}
              onPress={this.onItemPress.bind(this, value)}
            />
          ))
        }
      </View>
    )

  }
}

export default VCategoryContainer