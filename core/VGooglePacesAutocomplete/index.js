// @flow

import React, {Component} from 'react'
import {View, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import {GoogleAutoComplete} from 'react-native-google-autocomplete'
import VText from '../VText'
import styles, {crossIcon} from './style'
import {withValidation, inputValidators} from '../VForm'
import VTextInput from 'vihor_components/core/VTextInputs/VTextInput'
import {IconCross} from '../../icons'

type Props = {
  apiKey: string,
  debounce?: number,
  queryTypes?: string,
  style?: any,
  placeholder?: string,
  required?: boolean,
  requiredErrorMessage?: string,
  itemsContainerStyle?: any,
  onChange: Function,
  errorMessage?: string,
  valid?: boolean,
  onFocus?: Function,
  value?: Object,
  onBlur?: Function
}

type State = {
  forceHide: bool,
  select: bool
}

class VGooglePlacesAutocomplete extends Component<Props, State> {
  state = {
    forceHide: false,
    select: false
  }

  onSelect = async (
    item: Object,
    handleTextChange: Function,
    fetchDetails: Function
  ) => {
    const result = await fetchDetails(item.place_id)
    this.props.onChange({
      ...item,
      ...result
    })
    handleTextChange(item.description)

    this.setState({forceHide: true, select: true})
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur()
    }
  }

  onBlur = (handleTextChange: Function) => {
    if (this.state.select === false) {
      this.setState({forceHide: true})
      handleTextChange('')
    }
    this.setState({select: false})
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur()
    }
  }

  onFocus = () => {
    this.setState({forceHide: false}, () => {
      if (typeof this.props.onFocus === 'function') {
        this.props.onFocus()
      }
    })
  }

  clearLocation= ()=>{
    this.props.onChange(undefined)
  }

  render() {
    const {
      apiKey,
      debounce,
      queryTypes,
      style,
      placeholder,
      required,
      requiredErrorMessage,
      itemsContainerStyle,
      errorMessage,
      valid,
      value
    } = this.props

    if (
      typeof value !== 'undefined' &&
      typeof value.description !== 'undefined' &&
      value.description.length > 0
    ) {
      return (
        <View>
          <VTextInput value={value.description} disabled/>
          <TouchableOpacity
            style={styles.crossIconContainer}
            onPress={this.clearLocation}
          >
            <IconCross {...crossIcon}/>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <GoogleAutoComplete
        apiKey={apiKey}
        debounce={debounce}
        queryTypes={queryTypes}
      >
        {({inputValue, handleTextChange, locationResults, fetchDetails}) => {
          return (
            <View style={[styles.container, style]}>
              <VTextInput
                requiredError={requiredErrorMessage}
                required={required}
                value={inputValue}
                onChange={handleTextChange}
                placeholder={placeholder}
                onBlur={() => this.onBlur(handleTextChange)}
                onFocus={this.onFocus}
                errorMessage={errorMessage}
                valid={valid}
              />
              {(locationResults.length > 0 && this.state.forceHide === false)
                ? (
                  <View style={styles.itemsWrapper}>
                    <ScrollView
                      keyboardShouldPersistTaps='always'
                      style={[styles.itemsContainer, itemsContainerStyle]}
                    >
                      {locationResults.map((item) => (
                        <TouchableOpacity
                          onPress={() => this.onSelect(item, handleTextChange, fetchDetails)}
                          key={item.id}
                        >
                          <VText style={styles.itemText} numberOfLines={1}>
                            {item.description}
                          </VText>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                )
                : null
              }
            </View>
          )
        }}
      </GoogleAutoComplete>
    )
  }
}

export const ValidatedGooglePlacesAutocomplete = withValidation(
  inputValidators
)(VGooglePlacesAutocomplete)

export default VGooglePlacesAutocomplete
