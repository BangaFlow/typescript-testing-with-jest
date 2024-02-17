import { DoublesStringUtils, calculateComplexity, toUpperCaseWithCb } from "../../app/doubles/DoublesUtils"

xdescribe('DoubleUtils test suite', () => {

    // ! Stubs: incomplete objects shouldn't be used in assertions

    it('Calculates complexity', () => {
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'someInfo1',
                field2: 'someInfo2'
            }
        }

        const actual = calculateComplexity(someInfo as any);
        expect(actual).toBe(10)
    })

    // ! Fakes: simple implementation of another functionality or service

    it('toUpperCase - calls cb for invalid argument', () => {
        const actual = toUpperCaseWithCb('', () => {});
        expect(actual).toBeUndefined();
    })
    it('toUpperCase - calls cb for valid argument', () => {
        const actual = toUpperCaseWithCb('abc', () => {});
        expect(actual).toBe('ABC');
    })

    // ! Mocks without jest: preprogrammed fake with tracking capabilities

    describe('Tracking callbacks', () => {
        let cbArgs = [];
        let timesCalled = 0;
        const callBackMock = (arg: string) => {
            cbArgs.push(arg);
            timesCalled++;
        };

        afterEach(() => {
            // clear the tracking fields before each test to reset state
            cbArgs = [];
            timesCalled = 0;
        })

        it('calls callback for invalid argument - track calls', () => {
            const actual = toUpperCaseWithCb('', callBackMock);
            expect(actual).toBeUndefined();
            expect(cbArgs).toContain('Invalid Argument!');
            expect(timesCalled).toBe(1);

        })
        it('calls callback for valid argument - track calls', () => {
            const actual = toUpperCaseWithCb('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(cbArgs).toContain('called function with abc');
            expect(timesCalled).toBe(1);

        })
    })
    // ! Mocks with jest: 

    describe('Tracking callbacks with Jest mocks', () => {

        const callBackMock = jest.fn();

        afterEach(() => {
            callBackMock.mockClear();
        })

        it('calls callback for invalid argument - track calls', () => {
            const actual = toUpperCaseWithCb('', callBackMock);
            expect(actual).toBeUndefined();
            expect(callBackMock).toHaveBeenCalledWith('Invalid Argument!');
            expect(callBackMock).toHaveBeenCalledTimes(1);

        })
        it('calls callback for valid argument - track calls', () => {
            const actual = toUpperCaseWithCb('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(callBackMock).toHaveBeenCalledWith('called function with abc');
            expect(callBackMock).toHaveBeenCalledTimes(1);

        })
    })

        // ! Spies with jest: 

        xdescribe('DoublesStringUtils with Jest mocks', () => {

            let sut: DoublesStringUtils;
    
            sut = new DoublesStringUtils();
            beforeEach(() => {
            })
    
            it('Use a spy to track calls', () => {
                const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
                sut.toUpperCase('asd');
                expect(toUpperCaseSpy).toHaveBeenCalledWith('asd');
            })

            it('Use a spy to track calls to other modules', () => {
                const consoleLogSpy  = jest.spyOn(console, 'log');
                sut.logString('asd');
                expect(consoleLogSpy).toHaveBeenCalledWith('asd');
            })

            // ? Bad implementation - only for emergancy cases!!
            it('Use a spy to replace the implementation of a method', () => {
                jest.spyOn(sut as any, 'callExternalService').mockImplementation(() => {
                    console.log('Calling mocked implementation')
                });
                (sut as any).callExternalService();
            })
        })
})