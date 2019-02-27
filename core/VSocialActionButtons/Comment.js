// @flow

import React from 'react'
import styles, {actionIconColor, actionIconSize} from './style'
import {IconBubble, IconBubbleInverse} from '../../icons'
import VText from '../VText'
import {TouchableOpacity} from 'react-native'

type Props = {
  active: boolean,
  onPostComment?: Function
}

const Comment = ({active, onPostComment}: Props
) => {
  const Icon = (active === true) ? IconBubbleInverse : IconBubble
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={onPostComment}
        disabled={(typeof onPostComment !== 'function')}
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

export default Comment