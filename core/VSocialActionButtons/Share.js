// @flow

import React from 'react'
import styles, {actionIconColor, actionIconSize} from './style'
import { IconShare} from '../../icons'
import VText from '../VText'
import {TouchableOpacity} from 'react-native'

type Props = {
  active: boolean,
  onPostShare?: Function
}

const Share = ({active, onPostShare}: Props
) => {
  // const Icon = (active === true) ? IconBubbleInverse : IconBubble
  const Icon = (active === true) ? IconShare : IconShare // DO INVERSE AND PROPER ICON
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={onPostShare}
        disabled={(typeof onPostShare !== 'function')}
      >
        <Icon
          size={actionIconSize}
          color={
            (active === true)
              ? actionIconColor.selected
              : actionIconColor.empty
          }
        />
      </TouchableOpacity>
    </React.Fragment>
  )
}

export default Share