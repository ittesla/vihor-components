// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconDrone extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'sky-drone'
  }
}

export default IconDrone
