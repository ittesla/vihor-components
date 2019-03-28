// @flow

import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import styles from './style'
import VProfileImage from '../VProfileImage'
import VText from '../VText'
import type {Comment} from './types'

type Props = {
  comment: Comment,
  onAvatarPress?: Function
}

const CommentHeader = ({comment, onAvatarPress}: Props) => (
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
      <View>
        <VText>...</VText>
      </View>
    </View>
  </TouchableOpacity>
)

export default CommentHeader
