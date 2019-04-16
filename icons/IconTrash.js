// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconTrash extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'trash'
  }
}

export default IconTrash
