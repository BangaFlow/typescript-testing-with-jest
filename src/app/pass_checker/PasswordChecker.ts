// it1: A password is invalid if:
// - length is less than 8 characters
// - has no upper case letter
// - has no lower case letter


// it 2: return the reason of invalidity

// it 3: 
// refcator code to use seprate method for each check
// Check whether the password is Admin password and should contain a number

export enum PasswordErrors {
    SHORT = "Password is too short",
    NO_UPPER_CASE = "Upper case letter is required",
    NO_LOWER_CASE = "Lower case letter is required",
    NO_NUMBER = "A number is required",
}

export interface CheckResult {
    valid: boolean,
     reasons: PasswordErrors[]
}

export class PasswordChecker {
    public checkPassword(password: string): CheckResult {
        const reasons: PasswordErrors[] = [];

        this.checkForLength(password, reasons);
        this.checkForUpperCase(password, reasons);
        this.checkForLowerCase(password, reasons);

        return {
            valid: reasons.length > 0 ? false : true,
            reasons
        }
    }

    public checkAdminPassword(password: string): CheckResult {
        const basicCheck = this.checkPassword(password);

        this.checkForNumber(password, basicCheck.reasons);

        return {
            valid: basicCheck.reasons.length > 0 ? false : true,
            reasons: basicCheck.reasons
        }
    }

    private checkForNumber(password: string, reasons: PasswordErrors[]) {
        const hasNumber = /\d/;
        if(!hasNumber.test(password)) {
            reasons.push(PasswordErrors.NO_NUMBER)
        }
    }


    private checkForLength(password: string, reasons: PasswordErrors[]) {
        if(password.length < 8) {
            reasons.push(PasswordErrors.SHORT);
        }
    }

    private checkForUpperCase(password: string, reasons: PasswordErrors[]) {
        if(password === password.toLowerCase()) {
            reasons.push(PasswordErrors.NO_UPPER_CASE)
        }
    }

    private checkForLowerCase(password: string, reasons: PasswordErrors[]) {
        if(password === password.toUpperCase()) {
            reasons.push(PasswordErrors.NO_LOWER_CASE)
        }
    }
}
