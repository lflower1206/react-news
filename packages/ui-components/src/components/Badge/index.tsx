import React, { FC } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { border, color } from 'styled-system'

import { badgeStyleByBadgeType, BadgeType, IBadgeTypeProps } from './constants'
import Colors from '../../theme/colors'

interface IBadgeDiv extends IBadgeTypeProps {
  backgroundColor: string
  color: string
}
const Div: StyledComponent<'div', {}, IBadgeDiv> = styled.div`
  ${border}
  ${color}
  
  display: inline-flex;
  padding: ${({ theme }) =>
    `${theme.space.spacing5XS}px ${theme.space.spacing3XS}px`};
  font-size: ${({ theme }) => theme.fontSizes.typography12}px;
`

interface IBadgeProps {
  type: BadgeType
  color?: string
  backgroundColor?: string
  text?: string
}
const Badge: FC<IBadgeProps> = props => {
  const {
    backgroundColor = Colors.black,
    color = Colors.white,
    type,
    text,
  } = props
  const styles = badgeStyleByBadgeType.get(type)!

  return (
    <Div {...styles} backgroundColor={backgroundColor} color={color}>
      {text}
    </Div>
  )
}

export default Badge
