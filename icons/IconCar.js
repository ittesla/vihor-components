// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconCar extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'road-cars'
  }
}

export default IconCar
