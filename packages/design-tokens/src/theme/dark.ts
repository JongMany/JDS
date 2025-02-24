import { hexToRgba } from "../utils";
import { palette } from "../variables";

export const darkTheme = {
  static: {
    white: palette.common[100],
    black: palette.common[0],
  },
  primary: {
    normal: palette.blue[60],
    strong: palette.blue[55],
    heavy: palette.blue[50],
  },
  label: {
    normal: palette.coolNeutral[99],
    strong: palette.common[100],
    neutral: `${hexToRgba(palette.coolNeutral[90], palette.opacity[88])}`,
    alternative: `${hexToRgba(palette.coolNeutral[80], palette.opacity[61])}`,
    assistive: `${hexToRgba(palette.coolNeutral[80], palette.opacity[28])}`,
    disable: `${hexToRgba(palette.coolNeutral[70], palette.opacity[16])}`,
  },
  background: {
    normal: {
      normal: palette.coolNeutral[15],
      alternative: palette.coolNeutral[5],
    },
    elevated: {
      normal: palette.coolNeutral[17],
      alternative: palette.coolNeutral[7],
    },
  },
  interaction: {
    inactive: palette.coolNeutral[40],
    disable: palette.coolNeutral[22],
  },
  line: {
    normal: {
      normal: `${hexToRgba(palette.coolNeutral[50], palette.opacity[32])}`,
      neutral: `${hexToRgba(palette.coolNeutral[50], palette.opacity[28])}`,
      alternative: `${hexToRgba(palette.coolNeutral[50], palette.opacity[22])}`,
    },
    solid: {
      normal: palette.coolNeutral[25],
      neutral: palette.coolNeutral[23],
      alternative: palette.coolNeutral[22],
    },
  },
  status: {
    positive: palette.green[60],
    cautionary: palette.orange[60],
    negative: palette.red[60],
  },
  accent: {
    lime: palette.lime[60],
    cyan: palette.cyan[60],
    lightBlue: palette.lightBlue[60],
    violet: palette.violet[60],
    purple: palette.purple[60],
    pink: palette.pink[60],
  },
  inverse: {
    primary: palette.blue[50],
    background: palette.common[100],
    label: palette.coolNeutral[10],
  },
};
