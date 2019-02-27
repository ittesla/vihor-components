// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconCopy extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'copy'
  }
}

export default IconCopy
