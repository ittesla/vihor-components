// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconPriceUp extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'arrow-up'
  }
}

export default IconPriceUp
