// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconFilter extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'filter'
  }
}

export default IconFilter
