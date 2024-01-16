import { TypeValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all 4-Bit background color codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
const bit4BackgroundColors = {
    BLACK: '40',
    RED: '41',
    GREEN: '42',
    YELLOW: '43',
    BLUE: '44',
    MAGENTA: '45',
    CYAN: '46',
    WHITE: '47',
    BRIGHT_BLACK: '100',
    BRIGHT_RED: '101',
    BRIGHT_GREEN: '102',
    BRIGHT_YELLOW: '103',
    BRIGHT_BLUE: '104',
    BRIGHT_MAGENTA: '105',
    BRIGHT_CYAN: '106',
    BRIGHT_WHITE: '107'
} as const;

export default bit4BackgroundColors;

/**
 * This type gets generated from the values of {@linkcode bit4BackgroundColors}.
 */
export type Bit4BackgroundColor = TypeValuesFromObject<typeof bit4BackgroundColors>;
