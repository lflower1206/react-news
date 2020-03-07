import React from 'react'

import { addDecorator } from '@storybook/react'
import { Container } from '../src/components/Storybook'

addDecorator(story => <Container>{story()}</Container>)
