import theme from '../../theme'

export enum TextType {
  'A_NORMAL',
  'B_NORMAL',
  'C_NORMAL',
  'C_WIDE',
  'D_NORMAL',
  'E_NORMAL',
  'F_NORMAL',
  'F_NARROW',
}

const { fontSizes, fontWeights, lineHeights } = theme

export interface ITextTypeProps {
  fontSize: number
  lineHeight: string
  fontWeight: number
}

export const textStyleByTextType = new Map<TextType, ITextTypeProps>([
  [
    TextType.A_NORMAL,
    {
      fontSize: fontSizes.typography40,
      lineHeight: lineHeights.lineHeight56,
      fontWeight: fontWeights.fontWeightBold,
    },
  ],
  [
    TextType.B_NORMAL,
    {
      fontSize: fontSizes.typography32,
      lineHeight: lineHeights.lineHeight46,
      fontWeight: fontWeights.fontWeightBold,
    },
  ],
  [
    TextType.C_NORMAL,
    {
      fontSize: fontSizes.typography16,
      lineHeight: lineHeights.lineHeight24,
      fontWeight: fontWeights.fontWeightNormal,
    },
  ],
  [
    TextType.C_WIDE,
    {
      fontSize: fontSizes.typography16,
      lineHeight: lineHeights.lineHeight28,
      fontWeight: fontWeights.fontWeightNormal,
    },
  ],
  [
    TextType.D_NORMAL,
    {
      fontSize: fontSizes.typography15,
      lineHeight: lineHeights.lineHeight22,
      fontWeight: fontWeights.fontWeightNormal,
    },
  ],
  [
    TextType.E_NORMAL,
    {
      fontSize: fontSizes.typography13,
      lineHeight: lineHeights.lineHeight18,
      fontWeight: fontWeights.fontWeightNormal,
    },
  ],
  [
    TextType.F_NORMAL,
    {
      fontSize: fontSizes.typography12,
      lineHeight: lineHeights.lineHeight18,
      fontWeight: fontWeights.fontWeightNormal,
    },
  ],
  [
    TextType.F_NARROW,
    {
      fontSize: fontSizes.typography12,
      lineHeight: lineHeights.lineHeight14,
      fontWeight: fontWeights.fontWeightNormal,
    },
  ],
])
