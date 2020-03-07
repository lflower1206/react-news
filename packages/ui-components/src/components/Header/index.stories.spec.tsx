import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { header as HeaderStories } from './index.stories'
import { Container } from '../Storybook'

describe('Header', () => {
  it('should render Header stories', () => {
    const { asFragment } = render(
      <Container>
        <HeaderStories />
      </Container>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
