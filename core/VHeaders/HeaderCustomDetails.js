// @flow

import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import IconCross from '../../icons/IconCross'
import VText from '../VText'
import style, {iconSize, iconColor} from './style'
import {HIT_SLOP} from '../../viewHelper'
import HeaderBase from './HeaderBase'

type Props = {
  goBack: Function,
  renderHeaderContent: Function
}

const HeaderDetails = ({goBack, renderHeaderContent}: Props) => (
  <HeaderBase>
    <TouchableOpacity onPress={goBack} hitSlop={HIT_SLOP}>
      <IconCross size={iconSize} color={iconColor}/>
    </TouchableOpacity>
    {renderHeaderContent()}
  </HeaderBase>
)

export default HeaderDetails
