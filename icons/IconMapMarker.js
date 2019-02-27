// @flow
import React from 'react'
import Icon from './Icon'
import type {IconProps} from './Icon'

class IconMapMarker extends Icon {
  constructor(props: IconProps) {
    super(props)

    this.name = 'map-marker'
  }
}

export default IconMapMarker
