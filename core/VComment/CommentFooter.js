// @flow

import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import styles from './style'
import {Like, Reply} from '../VSocialActionButtons'
import VText from '../VText'
import {HIT_SLOP} from '../../viewHelper'
import type {Comment} from './types'

type Props = {
  comment: Comment,
  onCommentLike?: Function,
  onCommentShare?: Function,
  hasContinueReading?: boolean,
  onContinueReadingComment?: Function,
  onSeeReplies?: Function,
  onSeeRepliesLabel?: Function,
  isReply?: boolean,
  onCommentLikeLabelPress?: Function
}

const CommentFooter = (
  {
    comment,
    onCommentLike,
    onCommentShare,
    hasContinueReading,
    onContinueReadingComment,
    onSeeReplies,
    onSeeRepliesLabel,
    onPostLikeLabelPress,
    isReply,
    onCommentLikeLabelPress
  }: Props
) => (
  <View style={
    [
      styles.commentFooter,
      (isReply === true) ? styles.commentFooterInReply : {}
    ]
  }>
    <View
      style={styles.actionItem}
    >
      <Like
        withLabel={true}
        active={comment.isLiked}
        count={comment.likesCount}
        onPostLikeLabelPress={onCommentLikeLabelPress}
        onPostLike={onCommentLike}
        disabled={(typeof onSeeReplies !== 'function')}
      />
    </View>

    {
      (isReply !== true)
        ? (
          <View
            style={styles.actionItem}
          >
            <Reply
              active={comment.isReplied}
              count={comment.repliesCount}
              onSeeReplies={onSeeReplies}
              onSeeRepliesLabel={onSeeRepliesLabel}
            />
          </View>
        )
        : null
    }

    {(hasContinueReading)
      ? (
        <View style={styles.continueReadingWrapper}>
          <TouchableOpacity
            hitSlop={HIT_SLOP}
            onPress={onContinueReadingComment}
          >
            <VText style={styles.continueReadingText}>
              Continue reading...
            </VText>
          </TouchableOpacity>
        </View>
      )
      : null
    }
  </View>
)

export default CommentFooter
