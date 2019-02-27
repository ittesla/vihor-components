// @flow

import React from 'react'
import styles, {actionIconColor, actionIconSize} from './style'
import {IconLike, IconLikeInverse} from '../../icons'
import VText from '../VText'
import {TouchableOpacity} from 'react-native'

type Props = {
  active: boolean,
  onPostLike?: Function
}

const Like = ({active, onPostLike}: Props) => {
  const Icon = (active === true) ? IconLikeInverse : IconLike

  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={onPostLike}
        disabled={(typeof onPostLike !== 'function')}
      >
        <Icon
          size={actionIconSize}
          color={
            (active === true) ? actionIconColor.selected : actionIconColor.empty
          }
        />
      </TouchableOpacity>
    </React.Fragment>
  )
}

export default Like