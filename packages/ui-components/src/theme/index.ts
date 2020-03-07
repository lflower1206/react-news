import colors from './colors'
import fontSizes from './fontSizes'
import radius from './radius'
import space from './space'

const theme = {
  space,
  fontSizes,
  fontWeights: {
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightNormal: 400,
  },
  lineHeights: {
    lineHeight14: '14px',
    lineHeight18: '18px',
    lineHeight22: '22px',
    lineHeight24: '24px',
    lineHeight26: '26px',
    lineHeight28: '28px',
    lineHeight34: '34px',
    lineHeight46: '46px',
    lineHeight56: '56px',
  },
  colors,
  radii: radius,
}

export default theme
