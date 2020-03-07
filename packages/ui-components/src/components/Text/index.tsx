import React, { FC } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { color, typography } from 'styled-system'

import { ITextTypeProps, textStyleByTextType, TextType } from './constants'
import colors from '../../theme/colors'

interface ITextDiv extends ITextTypeProps {
  color: string
}
const Component: StyledComponent<'div', {}, ITextDiv> = styled.div`
  ${typography}
  ${color}
`

type TagType = 'div' | 'p' | 'span'
interface ITextProps {
  tag?: TagType
  textType: TextType
  text: string
  color?: string
}
const Text: FC<ITextProps> = props => {
  const { color = colors.black, tag = 'div', text, textType } = props
  const styles: ITextTypeProps = textStyleByTextType.get(textType)!

  return (
    <Component as={tag} {...styles} color={color}>
      {text}
    </Component>
  )
}

export default Text
