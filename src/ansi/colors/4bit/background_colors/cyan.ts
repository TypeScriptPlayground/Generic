import backgroundColor from '../background_color.ts';
import { backgroundColorCodes } from '../mod.ts';

/**
 * This function generates a string with cyan background color. If no text is specified, than this function just
 * returns the color code.
 * @param text Optional, only this text gets formatted
 * @returns The formatted string
 */
export default function cyan(text? : string) : string {
  if (!text) {
    return backgroundColor(backgroundColorCodes.CYAN);
  }
  return backgroundColor(backgroundColorCodes.CYAN) + text + backgroundColor(backgroundColorCodes.DEFAULT);
}
