// @flow
import React, {Component} from 'react'
import {
  View,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import {IconFacebook, IconGoogle} from '../../icons'
import {HIT_SLOP} from '../../viewHelper'
import style, {
  iconSize,
  defaultTouchableColor,
  emptyTouchableColor
} from './style'

export const SocialButtonTypes = {
  FACEBOOK: 'FACEBOOK',
  GOOGLE: 'GOOGLE'
}

export const SocialButtonFeedbackType = {
  OPACITY: 'OPACITY',
  HIGHLIGHT: 'HIGHLIGHT'
}

export type SocialButtonProps = {
  type: $Keys<typeof SocialButtonTypes>,
  onPress?: (event: Event) => void,
  style?: any,
  buttonType?: $Keys<typeof SocialButtonFeedbackType>,
  touchableColor?: string
}

type State = {
  highlight: boolean
}

const icons = {
  [SocialButtonTypes.FACEBOOK]: IconFacebook,
  [SocialButtonTypes.GOOGLE]: IconGoogle
}

class VSocialButton extends Component<SocialButtonProps, State> {
  state = {
    highlight: false
  }
  static defaultProps = {
    buttonType: SocialButtonFeedbackType.OPACITY,
    touchableColor: defaultTouchableColor
  }

  renderHighlight = (IconComponent: any) => {
    const iconsProps = {
      size: iconSize,
      color: undefined
    }

    if (this.state.highlight === true) {
      iconsProps.color = emptyTouchableColor
    }
    return (
      <TouchableHighlight
        onShowUnderlay={() => this.setState({highlight: true})}
        onHideUnderlay={() => this.setState({highlight: false})}
        underlayColor={this.props.touchableColor}
        hitSlop={HIT_SLOP}
        onPress={this.props.onPress}
      >
        <IconComponent {...iconsProps}/>
      </TouchableHighlight>
    )
  }

  renderOpacity = (IconComponent: any) => (
    <TouchableOpacity hitSlop={HIT_SLOP} onPress={this.props.onPress}>
      <IconComponent size={iconSize}/>
    </TouchableOpacity>
  )


  render() {
    const IconComponent = icons[this.props.type]
    const buttonStyle = [style.button, this.props.style]

    if (this.state.highlight === true) {
      buttonStyle.push({backgroundColor: this.props.touchableColor})
    }

    return (
      <View style={buttonStyle}>
        {
          (this.props.buttonType === SocialButtonFeedbackType.OPACITY)
            ? this.renderOpacity(IconComponent)
            : this.renderHighlight(IconComponent)
        }
      </View>
    )
  }
}

export default VSocialButton
