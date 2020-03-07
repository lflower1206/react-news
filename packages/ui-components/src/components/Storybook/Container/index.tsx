import React, { FC } from 'react'
import { styled } from '@storybook/theming'
import { ThemeProvider } from 'styled-components'

import theme from '../../../theme'

const ContainerDiv = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Microsoft JhengHei, Helvetica Neue, Helvetica, Arial, sans-serif;

  padding: 16px 24px;
`

const Container: FC = props => {
  return (
    <ThemeProvider theme={theme}>
      <ContainerDiv>{props.children}</ContainerDiv>
    </ThemeProvider>
  )
}

export default Container
