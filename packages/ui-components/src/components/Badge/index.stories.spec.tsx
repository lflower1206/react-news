import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { badge as BadgeStories } from './index.stories'
import { Container } from '../Storybook'

describe('Badge', () => {
  it('should render Badge stories', () => {
    const { asFragment } = render(
      <Container>
        <BadgeStories />
      </Container>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
