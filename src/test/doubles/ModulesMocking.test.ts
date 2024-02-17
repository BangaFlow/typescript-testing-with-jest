import { toLowerCase, toUpperCase, tolowerCaseWithRandomId } from "../../app/doubles/DoublesUtils";

jest.mock('../../app/doubles/DoublesUtils',
() => ({
    ...jest.requireActual('../../app/doubles/DoublesUtils'),
    toUpperCase: () => "FDK"
}));

jest.mock('uuid', () => ({
    v4: () => '123'
}))

// ! Mokcing jest Modules examples

describe.only('Test suite for mocking modules', () => {
    it('should return lower case of a given string', () => {
        const actual = toLowerCase('ABC');
        expect(actual).toBe('abc');
    })
    it('should return uppercase case of a given string', () => {
        const actual = toUpperCase('abc');
        expect(actual).toBe('FDK');
    })
    it('should return uppercase case of a given string', () => {
        const actual = tolowerCaseWithRandomId('FDK');
        expect(actual).toBe('fdk123');
    })
})