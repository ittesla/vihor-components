// @flow

import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import styles from './style'
import VProfileImage from '../VProfileImage'
import VText from '../VText'
import type {Comment} from './types'
import { Options } from '../VSocialActionButtons'
import type { Option } from '../VSocialActionButtons/Options'

type Props = {
  comment: Comment,
  onAvatarPress?: Function,
  moreOptions?: Array<Option>
}

const CommentHeader = ({comment, onAvatarPress, moreOptions}: Props) => (
  <TouchableOpacity
    onPress={onAvatarPress}
    disabled={(typeof onAvatarPress !== 'function')}
  >
    <View style={styles.commentHeaderContainer}>
      <VProfileImage.Image
        source={
          (typeof comment.avatarImageUrl === 'string')
            ? {uri: comment.avatarImageUrl}
            : comment.avatarImageUrl
        }
        size={VProfileImage.ImageSizes.xs}
        withBadge={comment.withBadge}
        badgeColor={comment.badgeColor}
      />
      <View style={styles.commentDetailsContainer}>
        <VText numberOfLines={1} style={styles.commentHeaderUserName}>
          {comment.userName}
        </VText>
        <VText style={styles.commentHeaderPublishTime}>
          {comment.publishTime}
        </VText>
      </View>
      <View style={styles.actionEndItem}>
        <Options options={moreOptions} />
      </View>
    </View>
  </TouchableOpacity>
)

export default CommentHeader
