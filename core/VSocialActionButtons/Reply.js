// @flow

import React from 'react'
import styles, {actionIconColor, actionIconSize} from './style'
import {IconReply, IconReplyInverse} from '../../icons'
import {HIT_SLOP} from '../../viewHelper'
import VText from '../VText'
import {TouchableOpacity} from 'react-native'

type Props = {
  active: boolean,
  count: number,
  onSeeReplies?: Function,
  onSeeRepliesLabel?: Function
}

const Reply = ({active, count, onSeeReplies, onSeeRepliesLabel}: Props) => {
  const Icon = (active === true) ? IconReplyInverse : IconReply
  return (
    <React.Fragment>
      <TouchableOpacity
        hitSlop={HIT_SLOP}
        onPress={onSeeReplies}
        disabled={(typeof onSeeReplies !== 'function')}
      >
        <Icon
          size={actionIconSize}
          color={
            (active === true) ? actionIconColor.selected : actionIconColor.empty
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onSeeRepliesLabel}
        disabled={(typeof onSeeRepliesLabel !== 'function')}
      >
        <VText style={styles.actionItemText}>
          {count} {(count === 1) ? 'Reply' : 'Replies'}
        </VText>
      </TouchableOpacity>
    </React.Fragment>
  )
}

export default Reply