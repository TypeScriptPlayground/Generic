import colors from './colors/mod.ts'
import controls from './controls/mod.ts'
import formats from "./formats/mod.ts";

import type {
    Bit4BackgroundColor,
    Bit4ForegroundColor,
    Bit8Color,
    Bit8GrayscaleColor,
    Bit24Color
} from './colors/mod.ts'
import type { 
    C0Control,
    C1Control, 
    Control
} from "./controls/mod.ts";
import type { 
    Color,
    Font,
    Action,
    Ideogram,
    Script,
    TextDecoration
} from "./formats/mod.ts";

export const ansi = {
    colors,
    controls,
    formats
}

export type {
    Bit4BackgroundColor,
    Bit4ForegroundColor,
    Bit8Color,
    Bit8GrayscaleColor,
    Bit24Color,
    C0Control,
    C1Control,
    Control,
    Color,
    Font,
    Action,
    Ideogram,
    Script,
    TextDecoration
}













console.log(red('Hello World!', 'FOREGROUND'))
console.log(red('Hello World!', 'BACKGROUND'))
console.log(red('Hello World!', 'BOTH'))

console.log(whiteForeground() + redBackground() + 'Hello World!');

red(str)
