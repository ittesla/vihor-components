// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconPlane extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'sky-plane'
  }
}

export default IconPlane
