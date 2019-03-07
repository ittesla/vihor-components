import React, {Component} from 'react'
import {
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import styles from './style'
import {
  colorPlaceholderText,
  colorActive,
  colorBorderTextInput,
  colorPrimaryBg, colorBadgeBg

} from '../../themes/default/colors'
import VHorizontalLine from '../VHorizontalLine'
import VText from '../VText'
import {IconEye, IconEyeCrossed, IconCross} from '../../icons'
import {HIT_SLOP} from '../../viewHelper'
import omit from 'lodash/omit'

type PropTypes = {
  value: string,
  errorMessage?: string,
  placeholder?: string,
  withHiddenInput?: boolean,
  onChange?: (any) => void,
  valid?: boolean,
  forwardedRef?: any,
  onBlur?: Function,
  onFocus?: Function,
  hint?: string,
  disabled?: boolean,
  style?: any,
  withReset?: boolean,
  onReset?: Function,
  currency?: string
}

type StateProps = {
  focused: boolean,
  secureTextEntry: boolean
}

type ViewProps = {
  style: any,
  pointerEvents: string
}

class VTextInput extends Component<PropTypes, StateProps> {
  static defaultProps = {
    valid: true
  }

  state = {
    focused: false,
    secureTextEntry: (this.props.withHiddenInput === true)
  }

  onChange = (value: any) => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value)
    }
  }

  onFocus = () => {
    this.setState({focused: true})

    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus()
    }
  }

  onBlur = () => {
    this.setState({focused: false})

    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur()
    }
  }

  toggleSecurity = () => {
    this.setState((state) => ({
      secureTextEntry: !state.secureTextEntry
    }))
  }

  renderErrorMessage() {
    if (this.props.valid === true) {
      return null
    }

    return (
      <View style={styles.errorMessagesContainer}>
        <VText style={styles.errorMessageText}>{this.props.errorMessage}</VText>
      </View>
    )
  }


  renderHint() {
    if (
      typeof this.props.hint !== 'undefined' &&
      this.props.valid === true &&
      this.state.focused === true
    ) {
      return (
        <View style={styles.hintContainer}>
          <VText style={styles.hintText}>{this.props.hint}</VText>
        </View>
      )
    }

    return null
  }

  renderShowPassword() {
    if (this.props.withHiddenInput !== true) {
      return null
    }

    return (
      <TouchableOpacity
        hitSlop={HIT_SLOP}
        style={styles.showPasswordButton}
        onPress={this.toggleSecurity}
      >
        {
          (this.state.secureTextEntry === true)
            ? <IconEye/>
            : <IconEyeCrossed/>
        }
      </TouchableOpacity>
    )
  }

  renderReset() {
    if (this.props.withReset !== true) {
      return null
    }

    return (
      <TouchableOpacity
        hitSlop={HIT_SLOP}
        style={styles.showPasswordButton}
        onPress={this.props.onResetPress}
      >
        <IconCross/>
      </TouchableOpacity>
    )
  }

  renderCurrencyText () {
    if (typeof this.props.currency === 'undefined') {
      return null
    }

    return (
      <TouchableOpacity
        hitSlop={HIT_SLOP}
        style={styles.showPasswordButton}
        onPress={this.props.onResetPress}
      >
        <VText style={styles.textInput}>{this.props.currency}</VText>
      </TouchableOpacity>
    )
  }

  render() {
    const {
      placeholder,
      value,
      style: customStyle,
      disabled,
      ...rest
    } = this.props
    let borderColor = colorBorderTextInput
    const textInputStyles = [customStyle, styles.textInput]

    if (this.state.focused === true) {
      borderColor = colorActive
    }

    if (this.props.valid === false) {
      borderColor = colorPrimaryBg
    }

    if (this.props.withHiddenInput === true) {
      textInputStyles.push(styles.withPasswordShow)
    }

    if (typeof value === 'undefined' || value === null || value.length === 0) {
      textInputStyles.push(styles.emptyInput)
    } else {
      if (this.props.valid === true) {
        borderColor = colorBadgeBg
      }
    }

    const textInputProps = omit(
      rest,
      ['errorMessages', 'valid', 'withHiddenInput']
    )

    const props = {
      style: styles.inputContainer
    }

    if (disabled === true) {
      props.pointerEvents = 'none'
    }

    return (
      <TouchableOpacity
        {...props}
        onPress={this.props.onPress}
        disabled={(typeof this.props.onPress !== 'function')}
      >
        <TextInput
          {...textInputProps}
          ref={this.props.forwardedRef}
          placeholder={placeholder}
          style={textInputStyles}
          value={value}
          underlineColorAndroid='transparent'
          placeholderTextColor={colorPlaceholderText}
          selectionColor={colorActive}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          secureTextEntry={this.state.secureTextEntry}
          onChangeText={this.onChange}
        />
        <VHorizontalLine color={borderColor}/>
        {this.renderShowPassword()}
        {this.renderReset()}
        {this.renderCurrencyText()}
        {this.renderErrorMessage()}
        {this.renderHint()}
      </TouchableOpacity>
    )
  }
}

export default VTextInput
