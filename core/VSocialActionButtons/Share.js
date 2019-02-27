// @flow

import React from 'react'
import styles, {actionIconColor, actionIconSize} from './style'
import {IconSharePost} from '../../icons'

type Props = {
  count: number
}

const Comment = ({count}: Props) => (
  <React.Fragment>
    <IconSharePost size={actionIconSize} color={actionIconColor.empty}/>
  </React.Fragment>
)

export default Comment