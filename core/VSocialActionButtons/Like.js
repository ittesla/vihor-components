// @flow

import React from 'react'
import styles, { actionIconColor, actionIconSize } from './style'
import {IconLike, IconLikeInverse} from '../../icons'
import {HIT_SLOP} from '../../viewHelper'
import VText from '../VText'
import {TouchableOpacity} from 'react-native'

type Props = {
  active: boolean,
  onPostLike?: Function,
  count?: Number,
  onPostLikeLabelPress?: Function,
  withLabel: boolean
}

const Like = (
  { active, onPostLike, count, onPostLikeLabelPress, withLabel = false }: Props
) => {
  const Icon = (active === true) ? IconLikeInverse : IconLike

  return (
    <React.Fragment>
      <TouchableOpacity
        hitSlop={HIT_SLOP}
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
      {
        withLabel ?
          <TouchableOpacity
            onPress={onPostLikeLabelPress}
            disabled={(typeof onPostLikeLabelPress !== 'function')}
          >
            <VText style={styles.actionItemText}>
              {count} {(count === 1) ? 'Like' : 'Likes'}
            </VText>
          </TouchableOpacity> :
          null
      }

    </React.Fragment>
  )
}

export default Like