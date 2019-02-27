// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconReddit extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'reddit-alien'
  }
}

export default IconReddit
