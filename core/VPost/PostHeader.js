// @flow

import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles, { iconChevron } from './style'
import VProfileImage from '../VProfileImage'
import VText from '../VText'
import type { Post } from './types'
import IconChevronRight from '../../icons/IconChevronRight'

type Props = {
  post: Post,
  onAvatarPress?: Function,
  showOwner?: boolean,
  onOwnerPress?: Function
}


const PostHeader = (
  { post, onAvatarPress, onOwnerPress, showOwner }: Props
) => {
  return (

    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onAvatarPress}>
        <VProfileImage.Image
          source={
            (typeof post.avatarImageUrl === 'string')
              ? { uri: post.avatarImageUrl }
              : post.avatarImageUrl
          }
          size={VProfileImage.ImageSizes.ms}
          withBadge={post.withBadge}
          badgeColor={post.badgeColor}
        />
      </TouchableOpacity>
      <View style={styles.headerUserDetails}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={onAvatarPress}>
            <VText
              numberOfLines={1}
              style={[styles.headerText, styles.headerTextName]}
            >
              {`${post.userName} `}
            </VText>
          </TouchableOpacity>
          {
            (showOwner === true && post.showOwner === true)
              ? (
                <TouchableOpacity onPress={onOwnerPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <IconChevronRight {...iconChevron} />
                  <VText
                    numberOfLines={1}
                    style={[styles.headerText, styles.headerTextName]}
                  >
                    {
                      (
                        typeof post.ownerName !== 'undefined' &&
                        post.ownerName !== ''
                      )
                        ? ` ${post.ownerName}`
                        : ''
                    }
                  </VText>
                </TouchableOpacity>
              )
              : null
          }
        </View>
        <View style={styles.headerCategoriesContainer}>
          {
            post.category ?
              <React.Fragment>
                <VText
                  numberOfLines={1}
                  style={[styles.headerText, styles.headerTextCategories]}
                >
                  {post.displayCategory || post.category}
                </VText>
                <VText style={styles.headerDots}>&#183;</VText>
              </React.Fragment> :
              null
          }
          {
            post.subcategory ?
              <React.Fragment>
                <VText
                  style={[
                    styles.headerText,
                    styles.headerTextCategories,
                    styles.headerTextSubcategories
                  ]}
                >
                  {post.displaySubcategory || post.subcategory}
                </VText>
                <VText style={styles.headerDots}>&#183;</VText>
              </React.Fragment> :
              null
          }
          <VText style={[styles.headerText, styles.headerTextCategories]}>
            {post.displayType || post.type}
          </VText>
        </View>
      </View>
      <View>
        <VText style={[styles.headerText, styles.headerTextTime]}>
          {post.publishTime}
        </VText>
      </View>
    </View>
  )
}


export default PostHeader