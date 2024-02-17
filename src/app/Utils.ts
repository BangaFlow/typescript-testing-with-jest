

export class StringUtils {
  public toUpperCase(arg: string) {
    if(!arg) {
      throw new Error("Invalid argument")
    }
    return toUpperCase(arg);
  }
}

export function toUpperCase(str: string) {
  return str.toUpperCase();
}

export type stringInfo = {
  lowerCase: string,
  upperCase: string,
  characters: string[],
  length: number,
  extraInfo: Object | undefined
}

/* istanbul ignore next */
export const getStringInfo = (str: string): stringInfo => {
  return {
    lowerCase: str.toLowerCase(),
    upperCase: str.toUpperCase(),
    characters: str.split(''),
    length: str.length,
    extraInfo: {}
  }
}