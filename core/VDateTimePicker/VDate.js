//@flow

import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native';
import {
  colorActive,
  colorBadgeBg,
  colorBorderTextInput,
  colorPlaceholderText,
  colorPrimaryBg
} from '../../themes/default/colors';
import VHorizontalLine from '../VHorizontalLine';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles, {iconCalendar} from './style';
import VText from '../VText'
import {IconCalendarEmpty} from '../../icons'
import moment from 'moment'
import IconWatch from 'vihor_components/icons/IconWatch';

type Props = {
  value: Date,
  errorMessage?: string,
  valid?: boolean,
  hint?: string,
  placeholder?: string,
  style?: any,
  disabled?: boolean,
  minimumDate?: Date,
  onChange?: Function
}

type State = {
  isDateTimePickerVisible: boolean,
  date: Date,
}

class VDate extends Component <Props, State> {
  static defaultProps = {
    valid: true
  }

  constructor(props: Props) {
    super(props);

    console.log('props', props)

    this.state = {
      isDateTimePickerVisible: false,
      date: (typeof props.value === 'undefined') ? new Date() : props.value
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (+nextProps.value !== +this.props.value) {
      this.setState({date: nextProps.value})
    }
  }

  togglePicker = () => {
    this.setState((state) => ({
      isDateTimePickerVisible: !state.isDateTimePickerVisible
    }))
  }

  handleDatePicked = (date: Date) => {
    if (typeof this.props.onChange ==='function') {
      this.props.onChange(date)
      this.setState({isDateTimePickerVisible: false})
    } else {
      this.setState({isDateTimePickerVisible: false, date})
    }
  }

  hideDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: false})
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
      this.props.valid === true
    ) {
      return (
        <View style={styles.hintContainer}>
          <VText style={styles.hintText}>{this.props.hint}</VText>
        </View>
      )
    }

    return null
  }

  render() {
    const {
      placeholder,
      value,
      style: customStyle,
      disabled,
      minimumDate
    } = this.props
    let borderColor = colorBorderTextInput

    if (this.props.valid === false) {
      borderColor = colorPrimaryBg
    } else {
      borderColor = colorBadgeBg
    }

    return (
      <View style={customStyle}>
        <TouchableOpacity
          onPress={this.togglePicker}
          style={styles.container}
          disabled={disabled}
        >
          <VText style={styles.text}>
            {moment(this.state.date).format('DD/MM/YYYY')}
          </VText>
          <IconCalendarEmpty  {...iconCalendar}/>
        </TouchableOpacity>
        <VHorizontalLine color={borderColor}/>
        {this.renderErrorMessage()}
        {this.renderHint()}
        <DateTimePicker
          mode='date'
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          minimumDate={minimumDate}
        />
      </View>
    )
  }
}

export default VDate