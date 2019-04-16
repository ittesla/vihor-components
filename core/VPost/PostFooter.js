// @flow

import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import styles, {
  priceIconColor,
  priceIconSize,
  actionIconSize,
  actionIconColor
} from './style'
import type {Post} from './types'
import VText from '../VText'
import {
  IconPriceDown,
  IconPriceUp,
  IconLike,
  IconLikeInverse,
  IconBubble,
  IconSharePost
} from '../../icons'
import {Like, Comment, Share, Options} from '../VSocialActionButtons'
import VLink from '../VLink'
import type {Option} from '../VSocialActionButtons/Options'

type Props = {
  post: Post,
  onPostLike?: Function,
  onPostLikeLabelPress?: Function,
  onPostComment?: Function,
  onPostCommentLabelPress?: Function,
  onPostShare?: Function,
  onPostShareLabelPress?: Function,
  moreOptions?: Array<Option>
}

type PriceProps = { price: number, status: string }

const Price = ({price, status = 'finished'}: PriceProps) => {
  const iconProps = (status === 'active')
    ? (<View style={styles.footerStatusRunning}/>)
    : null

  return (
    <React.Fragment>
      {iconProps}
      <VText style={styles.footerPriceText}>
        {`${price.toFixed(2)} exp`}
      </VText>
      <View style={[styles.actionItemBorder]}/>
    </React.Fragment>
  )
}

const renderLikesLabel = (post) => {
  const last = (
    typeof post.lastLikers !== 'undefined' &&
    post.lastLikers.length > 0
  )
    ? post.lastLikers[0]
    : null
  let lastName = ''

  if (last !== null) {
    lastName = `${last.userFirstName} ${last.userLastName}`

    if (post.likesCount > 1) {
      lastName += ' and'
    } else if (post.likesCount === 1) {
      lastName += ' liked'
    }
  }

  const likesCount = (post.likesCount > 1)
    ? (post.likesCount - 1)
    : post.likesCount

  return (
    <View style={styles.footerNumberAndText}>
      <VText>{lastName}</VText>

      {(post.likesCount !== 1)
        ? (
          <View style={styles.footerNumberAndText}>
            <VText style={styles.link}>{` ${likesCount} `}</VText>
            <VText> {(post.likesCount === 1 ? 'like' : 'likes')} </VText>
          </View>
        )
        : null
      }
    </View>
  )
}

const PostFooter = (
  {
    post,
    moreOptions,
    onPostLike,
    onPostComment,
    onPostShare,
    onPostShareLabelPress,
    onPostLikeLabelPress,
    onPostCommentLabelPress
  }: Props
) => (
  <React.Fragment>
    <View style={styles.footerDetails}>
      <TouchableOpacity onPress={onPostLikeLabelPress} style={{flex: 1}}>
        {renderLikesLabel(post)}
      </TouchableOpacity>
      <View style={styles.footerSubDetails}>
        <TouchableOpacity
          onPress={onPostCommentLabelPress}
          style={styles.footerNumberAndText}
        >
          <VText style={styles.link}>
            {` ${
              (typeof post.commentsCount !== 'undefined')
                ? post.commentsCount
                : ''
              } `}
          </VText>
          <VText>Comments</VText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPostShareLabelPress}
          style={styles.footerNumberAndText}
        >
          <VText style={styles.link}>
            {` ${
              (typeof post.sharesCount !== 'undefined')
                ? `${post.sharesCount}`
                : ''
              } `}
          </VText>
          <VText>Shares</VText>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.footerContainer}>
      <Price
        price={post.price || 0}
        status={post.status || ''}
      />
      <View style={styles.actionItem}>
        <Like
          active={post.isLiked}
          onPostLike={onPostLike}
        />
      </View>

      <View style={styles.actionItem}>
        <Comment
          active={post.isCommented}
          onPostComment={onPostComment}
        />
      </View>

      <View style={styles.actionItem}>
        <Share
          active={post.isShared}
          onPostShare={onPostShare}
        />
      </View>

      <View style={styles.actionEndItem}>
        <Options options={moreOptions}/>
      </View> 
    </View>
  </React.Fragment>
)

export default PostFooter