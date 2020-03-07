import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { image as ImageStories } from './index.stories'
import { Container } from '../Storybook'

describe('Image', () => {
  it('should render Image stories', () => {
    const { asFragment } = render(
      <Container>
        <ImageStories />
      </Container>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
