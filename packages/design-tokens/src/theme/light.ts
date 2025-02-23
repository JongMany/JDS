import { hexToRgba } from "../utils";
import { palette } from "../variables";

export const lightTheme = {
  static: {
    white: palette.common[100],
    black: palette.common[0],
  },
  primary: {
    normal: palette.blue[50],
    strong: palette.blue[45],
    heavy: palette.blue[40],
  },
  label: {
    normal: palette.coolNeutral[10],
    strong: palette.common[0],
    neutral: `${hexToRgba(palette.coolNeutral[22], palette.opacity[88])}`,
    alternative: `${hexToRgba(palette.coolNeutral[25], palette.opacity[61])}`,
    assistive: `${hexToRgba(palette.coolNeutral[25], palette.opacity[28])}`,
    disable: `${hexToRgba(palette.coolNeutral[25], palette.opacity[16])}`,
  },
  background: {
    normal: {
      normal: palette.common[100],
      alternative: palette.coolNeutral[99],
    },
    elevated: {
      normal: palette.common[100],
      alternative: palette.coolNeutral[99],
    },
  },
  interaction: {
    inactive: palette.coolNeutral[70],
    disable: palette.coolNeutral[98],
  },
  line: {
    normal: {
      normal: `${hexToRgba(palette.coolNeutral[50], palette.opacity[22])}`,
      neutral: `${hexToRgba(palette.coolNeutral[50], palette.opacity[16])}`,
      alternative: `${hexToRgba(palette.coolNeutral[50], palette.opacity[8])}`,
    },
    solid: {
      normal: palette.coolNeutral[96],
      neutral: palette.coolNeutral[97],
      alternative: palette.coolNeutral[98],
    },
  },
  status: {
    positive: palette.green[50],
    cautionary: palette.orange[50],
    negative: palette.red[50],
  },
  accent: {
    lime: palette.lime[50],
    cyan: palette.cyan[50],
    lightBlue: palette.lightBlue[50],
    violet: palette.violet[50],
    purple: palette.purple[50],
    pink: palette.pink[50],
  },
  inverse: {
    primary: palette.blue[60],
    background: palette.coolNeutral[15],
    label: palette.coolNeutral[99],
  },
};
