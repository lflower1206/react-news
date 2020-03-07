import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { text as TextStories } from './index.stories'
import { Container } from '../Storybook'

describe('Text', () => {
  it('should render Tex5 stories', () => {
    const { asFragment } = render(
      <Container>
        <TextStories />
      </Container>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
