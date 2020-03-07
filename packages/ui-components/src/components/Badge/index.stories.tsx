import React from 'react'
import styled from 'styled-components'

import { TextMeta } from '../Storybook'
import Badge from './'
import { BadgeType } from './constants'

const Li = styled.li`
  padding-bottom: 16px;
`

export const badge = () => {
  return (
    <ul>
      <Li>
        <Badge type={BadgeType.Dimmed} text="Dimmed Badge" />
        <TextMeta>Rectangle Dimmed</TextMeta>
      </Li>
      <Li>
        <Badge type={BadgeType.Solid} text="Solid Badge" />
        <TextMeta>Rectangle Solid</TextMeta>
      </Li>
    </ul>
  )
}

export default { title: 'Icon/badge' }
