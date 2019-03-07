//@flow

import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native'
import VText from '../VText'
import style from './style'
import StyleSheetPropType from 'react-native/Libraries/StyleSheet/StyleSheetPropType'

type Props = {
  labels: Array<string>,
  active?: number,
  onChange?: Function,
  ativeButtonStyle?: StyleSheetPropType,
  inativeButtonStyle?: StyleSheetPropType,
  ativeTextStyle?: StyleSheetPropType,
  inativeTextStyle?: StyleSheetPropType,
  style?: StyleSheetPropType
}

type State = {
  active: number
}

class VButtonGroup extends Component<Props, State> {
  state = {
    active: -1
  }

  componentDidMount(): void {
    const {active} = this.props

    if (!isNaN(this.props.active)) {
      this.setState({active})
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.active !== this.props.active) {
      this.setState({active: nextProps.active})
    }
  }

  onChange = (item: string, index: number) => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(item, index)
    } else {
      this.setState({active: index})
    }
  }

  render() {
    const {
      style: propStyle,
      ativeButtonStyle,
      inativeButtonStyle,
      ativeTextStyle,
      inativeTextStyle
    } = this.props
    const {length} = this.props.labels
    const customStyle = {
      width: `${Math.floor(100 / length) - 1}%`
    }

    const buttonActiveStyle = {...style.itemActive, ...ativeButtonStyle}
    const buttonTextActiveStyle = {...style.itemTextActive, ...ativeTextStyle}

    return (
      <View style={[style.container, propStyle]}>
        {
          this.props.labels.map((label, index) => (
            <TouchableOpacity
              key={`buttonGroup_${index}`}
              onPress={this.onChange.bind(this, label, index)}
              style={[
                style.item,
                customStyle,
                (inativeButtonStyle || {}),
                (index === this.state.active)
                  ? buttonActiveStyle
                  : {}
              ]}
            >
              <VText
                numberOfLines={1}
                style={[
                  style.itemText,
                  inativeTextStyle,
                  (index === this.state.active)
                    ? buttonTextActiveStyle
                    : {}
                ]}
              >
                {label}
              </VText>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}

export default VButtonGroup
