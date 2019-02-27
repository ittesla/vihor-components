// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconPriceDown extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'arrow-down'
  }
}

export default IconPriceDown
