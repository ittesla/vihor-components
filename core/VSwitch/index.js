// @flow
import React, {Component} from 'react'
import SwitchPro from 'react-native-switch-pro'
import {View, TouchableOpacity} from 'react-native'
import VText from '../VText'
import styles, {switchSizes} from './style'
import {
  colorPrimaryBg,
  colorSwitchBackground
} from 'vihor_components/themes/default/colors';

const colors = {
  backgroundActive: colorSwitchBackground,
  backgroundInactive: colorSwitchBackground,
  circleColorActive: colorPrimaryBg,
  circleColorInactive: colorPrimaryBg

}

type Props = {
  leftLabel?: string,
  rightLabel?: string,
  value?: boolean,
  onChange?: Function,
  style?: any,
  textStyleRight?: any,
  textStyleLeft?: any
}

type State = {
  value: boolean
}

class VSwitch extends Component<Props, State> {
  state = {
    value: false
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      })
    }
  }

  validate = () => {
  }

  setValue = (value: boolean) => {
    this.setState({value}, () => {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(value)
      }
    })
  }

  getValue = () => {
    return this.state.value
  }


  render() {
    const {
      leftLabel,
      rightLabel,
      style,
      textStyleLeft,
      textStyleRight
    } = this.props

    return (
      <View style={[styles.container, style]}>
        <TouchableOpacity onPress={() => this.setValue(false)}>
          <VText style={[styles.textLeft, textStyleLeft]} numberOfLines={1}>
            {leftLabel}
          </VText>
        </TouchableOpacity>
        <View style={styles.switchContainer}>
          <SwitchPro
            value={this.state.value}
            onSyncPress={this.setValue}
            circleStyle={styles.circle}
            {...colors}
          />
        </View>
        <TouchableOpacity onPress={() => this.setValue(true)}>
          <VText style={[styles.textRight, textStyleRight]} numberOfLines={1}>
            {rightLabel}
          </VText>
        </TouchableOpacity>
      </View>
    )
  }
}

export default VSwitch