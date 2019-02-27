// @flow

import React, {Component} from 'react'
import {View, TextInput, TouchableOpacity} from 'react-native'
import {IconSearch, IconFilter} from '../../icons'
import styles, {searchIconSize, selectedIconColor} from './style'

type SearchIconType = {
  color?: string
}

const SearchIcon = ({color}) => (
  <View style={styles.searchIcon}>
    <IconSearch size={searchIconSize} color={color}/>
  </View>
)

const FilterIcon = ({color, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <IconFilter size={searchIconSize} color={color}/>
  </TouchableOpacity>
)

type SearchInputType = {
  placeholder?: string,
  withIcon?: boolean,
  style?: any,
  textStyle?: any,
  inputWrapperStyle?: any,
  hasSelectedFilters?: boolean,
  onFocus?: Function,
  onBlur?: Function,
  withFilter: boolean,
  renderFilter?: Function,
  renderResults?: Function,
  onFilterHide?: Function,
  onFilterShow?: Function
}

type SearchInputState = {
  isFocused: boolean,
  filterVisible: boolean
}

class VSearchInput extends Component<SearchInputType, SearchInputState> {
  silentBlur: boolean = false
  input: any = null
  state = {
    isFocused: false,
    filterVisible: false
  }

  onFocus = (event: any) => {
    this.setState({
      isFocused: true,
      filterVisible: false
    })

    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(event)
    }
  }

  onBlur = (event: any) => {
    this.setState({isFocused: false})

    if (typeof this.props.onBlur === 'function' && this.silentBlur !== true) {
      this.props.onBlur(event)
      this.silentBlur = false
    }
  }

  toggleFilter = () => {
    this.silentBlur = true
    this.input.blur()

    this.setState(
      (state) => ({
        filterVisible: !state.filterVisible
      }),
      () => {
        if (this.state.filterVisible === true) {
          if (typeof this.props.onFilterShow === 'function') {
            this.props.onFilterShow()
          }
        } else {
          if (typeof this.props.onFilterHide === 'function') {
            this.props.onFilterHide()
          }
        }
      })
  }

  render() {
    const {
      placeholder,
      withIcon = false,
      style,
      textStyle,
      withFilter,
      renderFilter,
      renderResults,
      hasSelectedFilters,
      onFilterShow,
      onFilterHide,
      inputWrapperStyle,
      ...rest
    } = this.props

    return (
      <View style={style}>
        <View style={[styles.searchInputWrapper, inputWrapperStyle]}>
          {
            (withIcon === true) ?
              <SearchIcon
                color={
                  (this.state.isFocused === true)
                    ? selectedIconColor
                    : undefined
                }
              />
              : null
          }
          <TextInput
            {...rest}
            ref={(ref) => {
              this.input = ref
            }}
            placeholder={placeholder}
            style={[styles.searchInput, textStyle]}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
          {
            (withFilter === true) ?
              <FilterIcon
                onPress={this.toggleFilter}
                color={
                  (
                    this.state.filterVisible === true ||
                    hasSelectedFilters
                  )
                    ? selectedIconColor
                    : undefined
                }
              />
              : null
          }
        </View>
        {
          (
            withFilter === true &&
            typeof renderFilter === 'function' &&
            this.state.filterVisible === true &&
            this.state.isFocused === false
          )
            ? renderFilter()
            : null
        }
        {
          (
            typeof renderResults === 'function' &&
            this.state.isFocused === true
          )
            ? renderResults()
            : null
        }
      </View>
    )
  }
}

const VSearchWithShadowInput = (
  {placeholder, withIcon = false, style, textStyle, ...rest}: SearchInputType
) => (
  <VSearchInput
    {...rest}
    style={[styles.searchWithShadow, style]}
    inputWrapperStyle={styles.shadowInputWrapper}
    placeholder={placeholder}
    textStyle={[styles.searchWithShadowText, textStyle]}
  />
)


export {VSearchWithShadowInput}
export {VSearchInput}
