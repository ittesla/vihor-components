// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconClaimed extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'claimed'
  }
}

export default IconClaimed
