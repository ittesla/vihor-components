// @flow

import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native'
import styles from './style'
import CommentHeader from './CommentHeader'
import CommentFooter from './CommentFooter'
import VText from '../VText'
import ViewMoreText from '../../helpers/ViewMoreText/index'
import type {Comment as CommentType} from './types'
import type {Option} from '../VSocialActionButtons/Options'

type Props = {
  comment: CommentType,
  onAvatarPress?: Function,
  onSeeReplies?: Function,
  onCommentLike?: Function,
  onCommentShare?: Function,
  onSeeRepliesLabel?: Function,
  onCommentLikeLabelPress?: Function,
  isReply?: boolean,
  commentHeaderOptions?: Array<Option>,
}

type State = {
  hasContinueReading: boolean
}

class Comment extends Component<Props, State> {
  state = {
    hasContinueReading: false
  }

  viewMoreRef: any = null

  onContinueReadingComment = () => {
    if (this.viewMoreRef !== null) {
      this.viewMoreRef.showMore()
      this.setState({
        hasContinueReading: false
      })
    }
  }

  onViewMoreInit = (hasContinueReading: boolean) => {
    this.setState({hasContinueReading})
  }

  render() {
    const {
      comment,
      onAvatarPress,
      onSeeReplies,
      onCommentLike,
      onCommentShare,
      onSeeRepliesLabel,
      onCommentLikeLabelPress,
      commentHeaderOptions
    } = this.props

    const commentStyle = [styles.commentContainer]

    if (comment.isReply === true) {
      commentStyle.push(styles.commentInReply)
    }

    return (
      <View style={commentStyle}>

        <CommentHeader
          comment={comment}
          onAvatarPress={onAvatarPress}
          moreOptions={commentHeaderOptions}
        />
        <View style={
          [
            styles.commentContent,
            (comment.isReply === true) ? styles.commentContentInReply : {}
          ]
        }>
          <ViewMoreText
            ref={(ref) => {
              this.viewMoreRef = ref
            }}
            textStyle={
              [
                styles.commentText,
                (comment.isReply === true) ? styles.commentTextInReply : {}
              ]
            }
            numberOfLines={3}
            disableFooter={true}
            onShowMoreChange={this.onViewMoreInit}
          >
            {comment.text}
          </ViewMoreText>
          <CommentFooter
            isReply={comment.isReply}
            comment={comment}
            onCommentLike={onCommentLike}
            onCommentShare={onCommentShare}
            onSeeReplies={onSeeReplies}
            onSeeRepliesLabel={onSeeRepliesLabel}
            onContinueReadingComment={this.onContinueReadingComment}
            hasContinueReading={this.state.hasContinueReading}
            onCommentLikeLabelPress={onCommentLikeLabelPress}
          />
        </View>
      </View>
    )
  }
}

export default Comment
