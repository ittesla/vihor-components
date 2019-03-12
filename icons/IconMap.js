// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconMap extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'map'
  }
}

export default IconMap
