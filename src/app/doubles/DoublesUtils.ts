import { v4 } from "uuid";

export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

type LoggerServiceCallBack = (arg: string) => void

export const calculateComplexity = (stringInfo: stringInfo) => {
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCase(arg: string) {
    return arg.toUpperCase();
}
export function toLowerCase(arg: string) {
    return arg.toLowerCase();
}
export function tolowerCaseWithRandomId(arg: string) {
    return arg.toLowerCase() + v4();
}


export const toUpperCaseWithCb = (arg: string, cb: LoggerServiceCallBack) => {
    if(!arg) {
        cb('Invalid Argument!');
        return;
    }
    cb(`called function with ${arg}`)
    return arg.toUpperCase();
}

export class DoublesStringUtils {
    public toUpperCase(arg: string) {
        return arg.toUpperCase();
    }
    public logString(arg: string) {
        console.log(arg);
    }
    private callExternalService() {
        console.log('Calling external service!')
    }

}