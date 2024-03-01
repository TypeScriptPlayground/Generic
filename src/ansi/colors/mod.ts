import bit4BackgroundColors from './4bit/background_colors.ts';
import bit4ForegroundColors from './4bit/foreground_colors.ts';
import bit8Colors from './8bit/colorful_colors.ts';
import bit8GrayscaleColors from './8bit/grayscale_colors.ts';

import { BackgroundColor as Bit4BackgroundColor } from './4bit/background_colors.ts';
import { ForegroundColor as Bit4ForegroundColor } from './4bit/foreground_colors.ts';
import { ColorfulColor as Bit8Color } from './8bit/colorful_colors.ts';
import { GrayscaleColor as Bit8GrayscaleColor } from './8bit/grayscale_colors.ts';
import { Color as Bit24Color } from './24bit/color.ts';

export default {
  bit4BackgroundColors,
  bit4ForegroundColors,
  bit8Colors,
  bit8GrayscaleColors
}

export type {
  Bit4BackgroundColor,
  Bit4ForegroundColor,
  Bit8Color,
  Bit8GrayscaleColor,
  Bit24Color,
}
