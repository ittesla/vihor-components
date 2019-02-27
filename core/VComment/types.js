// @flow
export type Comment = {
  id: string | number,
  feedId: string | number,
  userName: string,
  avatarImageUrl: string,
  text: string,
  isSpreaded: boolean,
  publishTime: string,
  likesCount: number,
  isLiked: boolean,
  areRepliesShown: boolean,
  isReplied: boolean,
  repliesCount: number,
  isReply: boolean,
  withBadge?: boolean,
  badgeColor?: any
}

