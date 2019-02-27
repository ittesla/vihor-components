// @flow

export type Post = {
  avatarImageUrl: string,
  withBadge: boolean,
  userName: string,
  category: string,
  subcategory: string,
  type: string,
  publishTime: string,
  price?: number,
  status?: string,
  isLiked: boolean,
  likesCount: number,
  commentsCount?: number,
  isCommented: boolean,
  lastLikers?: Array<any>,
  badgeColor?: any,
  showOwner?: boolean,
  ownerName?: string
}

