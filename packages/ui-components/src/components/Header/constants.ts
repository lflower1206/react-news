import theme from '../../theme'

export enum HeaderType {
  'H1_MD',
  'H2_MD',
  'H2_SM',
  'H3_LG',
  'H3_MD',
  'H3_SM',
  'H4_MD',
}

const { fontSizes, fontWeights, lineHeights } = theme

export interface IHeaderTypeProps {
  fontSize: number
  lineHeight: string
  fontWeight: number
  color?: string
}

export const headerStyleByHeaderType = new Map<HeaderType, IHeaderTypeProps>([
  [
    HeaderType.H1_MD,
    {
      fontSize: fontSizes.typography26,
      lineHeight: lineHeights.lineHeight34,
      fontWeight: fontWeights.fontWeightBold,
    },
  ],
  [
    HeaderType.H2_MD,
    {
      fontSize: fontSizes.typography21,
      lineHeight: lineHeights.lineHeight28,
      fontWeight: fontWeights.fontWeightBold,
    },
  ],
  [
    HeaderType.H2_SM,
    {
      fontSize: fontSizes.typography18,
      lineHeight: lineHeights.lineHeight26,
      fontWeight: fontWeights.fontWeightBold,
    },
  ],
  [
    HeaderType.H3_LG,
    {
      fontSize: fontSizes.typography18,
      lineHeight: lineHeights.lineHeight26,
      fontWeight: fontWeights.fontWeightBold,
    },
  ],
  [
    HeaderType.H3_MD,
    {
      fontSize: fontSizes.typography16,
      lineHeight: lineHeights.lineHeight24,
      fontWeight: fontWeights.fontWeightBold,
    },
  ],
  [
    HeaderType.H3_SM,
    {
      fontSize: fontSizes.typography15,
      lineHeight: lineHeights.lineHeight22,
      fontWeight: fontWeights.fontWeightMedium,
    },
  ],
  [
    HeaderType.H4_MD,
    {
      fontSize: fontSizes.typography13,
      lineHeight: lineHeights.lineHeight18,
      fontWeight: fontWeights.fontWeightMedium,
    },
  ],
])
