import theme from '../../theme'

export enum BadgeType {
  Dimmed,
  Solid,
}

export interface IBadgeTypeProps {
  borderRadius?: number
  borderTopLeftRadius?: number
  borderBottomRightRadius?: number
}

const { radius4 } = theme.radii

export const badgeStyleByBadgeType = new Map<BadgeType, IBadgeTypeProps>([
  [
    BadgeType.Dimmed,
    {
      borderTopLeftRadius: radius4,
      borderBottomRightRadius: radius4,
    },
  ],
  [
    BadgeType.Solid,
    {
      borderRadius: radius4,
    },
  ],
])
