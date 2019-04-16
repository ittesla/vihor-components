// @flow

import React from 'react'
import styles, { actionIconColor, actionIconSize } from './style'
import { IconMenu } from '../../icons'
import VText from '../VText'
import { TouchableOpacity } from 'react-native'

type Props = {
    onMoreOptions?: Function
}

const Options = ({ onMoreOptions }: Props) => {
    return (
        <React.Fragment>
            {
                typeof onMoreOptions === 'function' ?
                    <TouchableOpacity
                        onPress={onMoreOptions}
                        disabled={(typeof onMoreOptions !== 'function')}
                    >
                        <IconMenu
                            size={actionIconSize}
                            color={actionIconColor.empty}
                        />
                    </TouchableOpacity> :
                    null
            }
        </React.Fragment>
    )
}

export default Options