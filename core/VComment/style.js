import {StyleSheet} from 'react-native'
import {
  white,
  colorCategoryText,
  colorPrimaryBg,
  colorSectionHeaderTitle
} from '../../themes/default/colors'
import {scale, verticalScale} from '../../viewHelper'

const commentContainer = {
  backgroundColor: white,
  padding: scale(30)
}

const commentHeaderContainer = {
  flexDirection: 'row',
  marginBottom: scale(40)
}

const commentDetailsContainer = {
  flex: 1,
  paddingHorizontal: scale(30)
}

const commentHeaderUserName = {
  fontSize: scale(46),
  color: colorCategoryText
}

const commentHeaderPublishTime = {
  fontSize: scale(30),
  color: colorCategoryText,
  opacity: 0.7
}

const commentFooter = {
  flexDirection: 'row',
  paddingLeft: scale(80),
  paddingTop: scale(30)
}

const commentFooterInReply = {
  paddingLeft: 0
}

const actionItem = {
  paddingHorizontal: scale(30),
  flexDirection: 'row',
  alignItems: 'center'
}

const continueReadingWrapper = {
  flex: 1,
  alignItems: 'flex-end'
}

const commentText = {
  fontSize: scale(46),
  color: colorSectionHeaderTitle,
  paddingLeft: scale(100),
  textAlign: 'justify'
}

const continueReadingText = {
  color: colorPrimaryBg,
  fontSize: scale(40)
}

const commentInReply = {
  borderLeftWidth: scale(6),
  borderColor: colorPrimaryBg,
  paddingLeft: scale(145)
}

const commentContent = {
  paddingLeft: scale(30)
}

const commentContentInReply = {
  paddingLeft: 0,
  marginLeft: scale(-20)
}

const commentTextInReply = {
  paddingLeft: scale(30)
}

export default StyleSheet.create({
  commentContainer,
  commentHeaderContainer,
  commentDetailsContainer,
  commentHeaderUserName,
  commentHeaderPublishTime,
  actionItem,
  commentFooter,
  continueReadingWrapper,
  commentText,
  continueReadingText,
  commentInReply,
  commentContent,
  commentTextInReply,
  commentFooterInReply,
  commentContentInReply
})
