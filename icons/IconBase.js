// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconBase extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'sky-base'
  }
}

export default IconBase
