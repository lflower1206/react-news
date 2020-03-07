import React, { FC } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { color, typography } from 'styled-system'

import {
  headerStyleByHeaderType,
  HeaderType,
  IHeaderTypeProps,
} from './constants'
import colors from '../../theme/colors'

interface IHeaderDiv extends IHeaderTypeProps {
  color: string
}

const H1: StyledComponent<'h1', {}, IHeaderDiv> = styled.h1`
  ${color}
  ${typography}
`

const H2: StyledComponent<'h2', {}, IHeaderDiv> = styled.h2`
  ${color}
  ${typography}
`

const H3: StyledComponent<'h3', {}, IHeaderDiv> = styled.h3`
  ${color}
  ${typography}
`

const H4: StyledComponent<'h4', {}, IHeaderDiv> = styled.h4`
  ${color}
  ${typography}
`

const headerMap = new Map<
  HeaderType,
  StyledComponent<'h1' | 'h2' | 'h3' | 'h4', {}, IHeaderDiv>
>([
  [HeaderType.H1_MD, H1],
  [HeaderType.H2_MD, H2],
  [HeaderType.H2_SM, H2],
  [HeaderType.H3_LG, H3],
  [HeaderType.H3_MD, H3],
  [HeaderType.H3_SM, H3],
  [HeaderType.H4_MD, H4],
])

interface IHeaderProps {
  type: HeaderType
  text: string
  color?: string
}
const Header: FC<IHeaderProps> = props => {
  const { color = colors.black, type, text } = props
  const styles: IHeaderTypeProps = headerStyleByHeaderType.get(type)!
  const Component = headerMap.get(type)!

  return (
    <Component {...styles} color={color}>
      {text}
    </Component>
  )
}

export default Header
