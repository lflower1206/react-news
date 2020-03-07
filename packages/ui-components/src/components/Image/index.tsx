import React, { FC } from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
`

const Img = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => `${theme.radii.radius4}px`};
`

interface IImageProps {
  src: string
}
const Image: FC<IImageProps> = props => {
  const { src } = props
  return (
    <ImageWrapper>
      <Img src={src} />
    </ImageWrapper>
  )
}

export default Image
