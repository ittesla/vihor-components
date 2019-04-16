// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconContextMenu extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'more'
  }
}

export default IconContextMenu
