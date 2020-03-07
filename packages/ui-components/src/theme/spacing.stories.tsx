import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { space } from 'styled-system'

import theme from './'

type TypeTheme = typeof theme
interface ISquareProps {
  p: string
}
const Square: StyledComponent<'div', TypeTheme, ISquareProps> = styled.div`
  display: inline-block;
  background-color: rgba(50, 105, 255, 0.1);
  ${space}
`

const SpacingList = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-end;
`
const SpacingListItem = styled.li`
  text-align: center;
  & + & {
    margin-left: 32px;
  }
`

export const spacing = () => {
  return (
    <SpacingList>
      <SpacingListItem>
        <Square p="spacing5XS" />
        <p>2</p>
      </SpacingListItem>
      <SpacingListItem>
        <Square p="spacing4XS" />
        <p>4</p>
      </SpacingListItem>
      <SpacingListItem>
        <Square p="spacing3XS" />
        <p>6</p>
      </SpacingListItem>
      <SpacingListItem>
        <Square p="spacing2XS" />
        <p>8</p>
      </SpacingListItem>
      <SpacingListItem>
        <Square p="spacingXS" />
        <p>12</p>
      </SpacingListItem>
      <SpacingListItem>
        <Square p="spacingSM" />
        <p>16</p>
      </SpacingListItem>
      <SpacingListItem>
        <Square p="spacingMD" />
        <p>18</p>
      </SpacingListItem>
      <SpacingListItem>
        <Square p="spacingLG" />
        <p>24</p>
      </SpacingListItem>
      <SpacingListItem>
        <Square p="spacingXL" />
        <p>32</p>
      </SpacingListItem>
      <SpacingListItem>
        <Square p="spacing2XL" />
        <p>36</p>
      </SpacingListItem>
      <SpacingListItem>
        <Square p="spacing3XL" />
        <p>48</p>
      </SpacingListItem>
      <SpacingListItem>
        <Square p="spacing4XL" />
        <p>64</p>
      </SpacingListItem>
      <SpacingListItem>
        <Square p="spacing5XL" />
        <p>96</p>
      </SpacingListItem>
    </SpacingList>
  )
}

export default { title: 'Spacing' }
