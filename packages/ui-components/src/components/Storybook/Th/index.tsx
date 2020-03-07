// import { styled } from '@storybook/theming'

import styled, { StyledComponent } from 'styled-components'
import { layout } from 'styled-system'

export interface IThProps {
  width?: number
}
const Th: StyledComponent<'th', {}, IThProps> = styled.th`
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  ${layout}
`

export default Th
