// @flow
import React from 'react'
import {View} from 'react-native'

import styles from './style'
import PostHeader from './PostHeader'
// import FeedContent from '../feedContent'
import PostFooter from './PostFooter'
import type {Post as PostType} from './types'

type Props = {
  post: PostType,
  onAvatarPress?: Function,
  onPostBackgoundPress?: Function,
  onPostLike?: Function,
  onPostLikeLabelPress?: Function,
  onPostComment?: Function,
  onPostCommentLabelPress?: Function,
  onPostShare?: Function,
  onPostShareLabelPress?: Function,
  onMoreOptions?: Function,
  onOwnerPress?: Function,
  showOwner?: boolean,
  style: any,
  children: any
}

const Post = (
  {
    post,
    onAvatarPress,
    onPostBackgoundPress,
    onPostLike,
    onPostLikeLabelPress,
    onPostComment,
    onPostCommentLabelPress,
    onPostShare,
    onPostShareLabelPress,
    onMoreOptions,
    onOwnerPress,
    showOwner,
    style,
    children
  }: Props
) => (
  <View style={[styles.postContainer, style]}>
    <PostHeader
      post={post}
      onAvatarPress={onAvatarPress}
      onOwnerPress={onOwnerPress}
      showOwner={showOwner}
    />
    {children}
    <PostFooter
      post={post}
      onPostLike={onPostLike}
      onPostLikeLabelPress={onPostLikeLabelPress}
      onPostComment={onPostComment}
      onPostCommentLabelPress={onPostCommentLabelPress}
      onPostShare={onPostShare}
      onPostShareLabelPress={onPostShareLabelPress}
      onMoreOptions={onMoreOptions}
    />
  </View>
)

export default Post
