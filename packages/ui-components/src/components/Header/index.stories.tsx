import React, { useCallback } from 'react'
import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'

import { Td, TextMeta, Th } from '../Storybook'
import Header from './'
import { headerStyleByHeaderType, HeaderType } from './constants'

/*
 * For resolving following error
 *
 * console.error node_modules/@emotion/cache/dist/cache.cjs.dev.js:272
 * The pseudo class ":first-child" is potentially unsafe when doing server-side rendering. Try changing it to ":first-of-type".
 * */
const cache = createCache()
cache.compat = true

export const header = () => {
  const renderHeaderTypeInfo = useCallback((type: HeaderType) => {
    const headerStyle = headerStyleByHeaderType.get(type)!

    return (
      <TextMeta>
        Font size: {headerStyle.fontSize}; Font weight: {headerStyle.fontWeight}
        ; Line-height: {headerStyle.lineHeight}
      </TextMeta>
    )
  }, [])

  return (
    <CacheProvider value={cache}>
      <table>
        <thead>
          <tr>
            <Th>
              <TextMeta>Header</TextMeta>
            </Th>
            <Th>
              <TextMeta>@Mobile</TextMeta>
            </Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>
              <TextMeta>H1</TextMeta>
            </Td>
            <Td>
              <Header type={HeaderType.H1_MD} text="Header H1-MD-Normal" />
              {renderHeaderTypeInfo(HeaderType.H1_MD)}
            </Td>
          </tr>
          <tr>
            <Td rowSpan={2}>
              <TextMeta>H2</TextMeta>
            </Td>
            <Td>
              <Header type={HeaderType.H2_MD} text="Header H2-MD-Normal" />
              {renderHeaderTypeInfo(HeaderType.H2_MD)}
            </Td>
          </tr>
          <tr>
            <Td>
              <Header type={HeaderType.H2_SM} text="Header H2-SM-Normal" />
              {renderHeaderTypeInfo(HeaderType.H2_SM)}
            </Td>
          </tr>
          <tr>
            <Td rowSpan={3}>
              <TextMeta>H3</TextMeta>
            </Td>
            <Td>
              <Header type={HeaderType.H3_LG} text="Header H3-LG-Normal" />
              {renderHeaderTypeInfo(HeaderType.H3_LG)}
            </Td>
          </tr>
          <tr>
            <Td>
              <Header type={HeaderType.H3_MD} text="Header H3-MD-Normal" />
              {renderHeaderTypeInfo(HeaderType.H3_MD)}
            </Td>
          </tr>
          <tr>
            <Td>
              <Header type={HeaderType.H3_SM} text="Header H3-SM-Normal" />
              {renderHeaderTypeInfo(HeaderType.H3_SM)}
            </Td>
          </tr>
          <tr>
            <Td>
              <TextMeta>H4</TextMeta>
            </Td>
            <Td>
              <Header type={HeaderType.H4_MD} text="Header H4-MD-Normal" />
              {renderHeaderTypeInfo(HeaderType.H4_MD)}
            </Td>
          </tr>
        </tbody>
      </table>
    </CacheProvider>
  )
}

export default { title: 'Typography/Header' }
