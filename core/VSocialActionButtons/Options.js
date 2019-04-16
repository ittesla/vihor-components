// @flow

import React from 'react'
import styles, {actionIconColor, actionIconSize} from './style'
import {IconContextMenu} from '../../icons'
import VText from '../VText'
import {TouchableOpacity} from 'react-native'
import {
  Menu,
  MenuTrigger,
  MenuOption,
  MenuOptions
} from 'react-native-popup-menu'

export type Option = {
  title: string,
  onSelect: Function,
  disabled?: boolean,
  render?: Function
}

type Props = {
  options?: Array<Option>
}

const Options = ({options}: Props) => {
  if (!Array.isArray(options)) {
    return null
  }

  return (
    <Menu>
      <MenuTrigger>
        <IconContextMenu
          size={actionIconSize}
          color={actionIconColor.empty}
        />
      </MenuTrigger>
      <MenuOptions>
        {
          options.map(({title, render, ...option}) => (
            <MenuOption {...option}>
              {
                (typeof render === 'function')
                  ? render()
                  : (<VText style={styles.contextMenuItem}>{title}</VText>)
              }

            </MenuOption>
          ))
        }
      </MenuOptions>
    </Menu>
  )
}

export default Options