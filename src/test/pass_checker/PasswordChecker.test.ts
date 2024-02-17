import { PasswordChecker, PasswordErrors } from "../../app/pass_checker/PasswordChecker"

describe('Password Checker test suite', () => {
    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    })

    it('Password with less than 8 characters is invalid', () => {
        const actual = sut.checkPassword('1234567');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT);
    })
    it('Password with more than 8 characters is valid', () => {
        const actual = sut.checkPassword('123456789');
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
    })
    
    it('Password with no upper case is invalid', () => {
        const actual = sut.checkPassword('acbd');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
    })
    it('Password with upper case is valid', () => {
        const actual = sut.checkPassword('ACBDe');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);

    })

    it('Password with no lower case is invalid', () => {
        const actual = sut.checkPassword('ACBD');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
    })
    it('Password with lower case is valid', () => {
        const actual = sut.checkPassword('12ACBDc');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
    })

    it('Complex password is valid', () => {
        const actual = sut.checkPassword('12AsdCBDc23');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).toHaveLength(0);
    })

    it('Admin password without a number should be invalid', () => {
        const actual = sut.checkAdminPassword('qweAsdCBDc');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
    })
    it('Admin password with a number should be valid', () => {
        const actual = sut.checkAdminPassword('12AsdCBDc23');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
    })
})