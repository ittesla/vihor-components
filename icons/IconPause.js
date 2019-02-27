// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconPause extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'pause'
  }
}

export default IconPause
