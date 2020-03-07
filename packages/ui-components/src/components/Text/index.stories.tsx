import React, { useCallback } from 'react'
import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'

import Text from './'
import { TextType, textStyleByTextType } from './constants'
import { TextMeta, Th, Td } from '../Storybook'

/*
 * For resolving following error
 *
 * console.error node_modules/@emotion/cache/dist/cache.cjs.dev.js:272
 * The pseudo class ":first-child" is potentially unsafe when doing server-side rendering. Try changing it to ":first-of-type".
 * */
const cache = createCache()
cache.compat = true

export const text = () => {
  const renderTextTypeInfo = useCallback((type: TextType) => {
    const textStyle = textStyleByTextType.get(type)!

    return (
      <TextMeta>
        Font size: {textStyle.fontSize}; Font weight: {textStyle.fontWeight};
        Line-height: {textStyle.lineHeight}
      </TextMeta>
    )
  }, [])

  return (
    <CacheProvider value={cache}>
      <table>
        <thead>
          <tr>
            <Th>
              <TextMeta>Text</TextMeta>
            </Th>
            <Th>
              <TextMeta>@Mobile</TextMeta>
            </Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>
              <TextMeta>A</TextMeta>
            </Td>
            <Td>
              <Text textType={TextType.A_NORMAL} text="Text A-Normal" />
              {renderTextTypeInfo(TextType.A_NORMAL)}
            </Td>
          </tr>
          <tr>
            <Td>
              <TextMeta>B</TextMeta>
            </Td>
            <Td>
              <Text textType={TextType.B_NORMAL} text="Text B-Normal" />
              {renderTextTypeInfo(TextType.B_NORMAL)}
            </Td>
          </tr>
          <tr>
            <Td rowSpan={2}>
              <TextMeta>C</TextMeta>
            </Td>
            <Td>
              <Text textType={TextType.C_NORMAL} text="Text C-Normal" />
              {renderTextTypeInfo(TextType.C_NORMAL)}
            </Td>
          </tr>
          <tr>
            <Td>
              <Text textType={TextType.C_WIDE} text="Text C-Wide" />
              {renderTextTypeInfo(TextType.C_WIDE)}
            </Td>
          </tr>
          <tr>
            <Td>
              <TextMeta>D</TextMeta>
            </Td>
            <Td>
              <Text textType={TextType.D_NORMAL} text="Text D-Normal" />
              {renderTextTypeInfo(TextType.D_NORMAL)}
            </Td>
          </tr>
          <tr>
            <Td>
              <TextMeta>E</TextMeta>
            </Td>
            <Td>
              <Text textType={TextType.E_NORMAL} text="Text E-Normal" />
              {renderTextTypeInfo(TextType.E_NORMAL)}
            </Td>
          </tr>
          <tr>
            <Td rowSpan={2}>
              <TextMeta>F</TextMeta>
            </Td>
            <Td>
              <Text textType={TextType.F_NORMAL} text="Text F-Normal" />
              {renderTextTypeInfo(TextType.F_NORMAL)}
            </Td>
          </tr>
          <tr>
            <Td>
              <Text textType={TextType.F_NARROW} text="Text F-Narrow" />
              {renderTextTypeInfo(TextType.F_NARROW)}
            </Td>
          </tr>
        </tbody>
      </table>
    </CacheProvider>
  )
}

export default { title: 'Typography/Text' }
