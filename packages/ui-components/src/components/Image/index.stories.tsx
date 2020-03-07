import React from 'react'
import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'

import Image from './'
import { Td, TextMeta, Th } from '../Storybook'

/*
 * For resolving following error
 *
 * console.error node_modules/@emotion/cache/dist/cache.cjs.dev.js:272
 * The pseudo class ":first-child" is potentially unsafe when doing server-side rendering. Try changing it to ":first-of-type".
 * */
const cache = createCache()
cache.compat = true

const imgSrc =
  'http://d.line-cdn.net/lf/picimg/content/20170620/722LINE_sallybigface_sally_wallpaper.png'

export const image = () => {
  return (
    <CacheProvider value={cache}>
      <table>
        <thead>
          <tr>
            <Th>
              <TextMeta>Ratio</TextMeta>
            </Th>
            <Th width={300}>
              <TextMeta>Image</TextMeta>
            </Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>
              <TextMeta>16:9</TextMeta>
            </Td>
            <Td>
              <Image src={imgSrc} />
            </Td>
          </tr>
        </tbody>
      </table>
    </CacheProvider>
  )
}

export default { title: 'Image' }
