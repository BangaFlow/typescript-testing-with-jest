import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe("StringUtils class tests", () => {
    let sut: StringUtils;

    beforeEach(() => {
      // setup step
      sut = new StringUtils();
      console.log("setup step");
    });
    afterEach(() => {
      // clearing mocks -teardown step
    });

    it.todo("should reject string longer than 8 chars")

    it("should return uppercase format of a given string", () => {;
      // act: second step
      const actual: string = sut.toUpperCase("abc");

      // assert: third step
      expect(actual).toBe("ABC");
    });

    it("should throw error for invalid arg - function", () => {;
      function expectError() {
        sut.toUpperCase('');
      }
      expect(expectError).toThrow("Invalid argument");
    });

    it("should throw error for invalid arg - arrow func", () => {;
      expect(() => {
        sut.toUpperCase('');
      }).toThrow("Invalid argument");
    });
    
    it("should throw error for invalid arg - try catch block", (done) => {;
      try {
        sut.toUpperCase('');
        done('toUpperCase should throw an Error')
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid argument')
        done();
      }
    });
  });
});

describe("toUpperCase: example for paramterized tests", () => {
  it.each([
    {
      input: "Abc",
      expected: "ABC",
    },
    {
      input: "AbC",
      expected: "ABC",
    },
    {
      input: "Hello buddy!",
      expected: "HELLO BUDDY!",
    },
  ])(
    "should return uppercase of $input => $expected",
    ({ input, expected }) => {
      // arrange: first step
      const sut: (str: string) => string = toUpperCase;

      // act: second step
      const actual: string = sut(input);

      // assert: third step
      expect(actual).toBe(expected);
    }
  );
});

describe.skip("getStringInfo for arg Pocky should", () => {
  it("return right length", () => {
    const sut = getStringInfo;
    const actual = sut("Pocky");

    expect(actual.length).toBe(5);
    expect(actual.characters).toHaveLength(5);
  });

  it("return right lowercase", () => {
    const sut = getStringInfo;
    const actual = sut("Pocky");

    expect(actual.lowerCase).toBe("pocky");
  });

  it("return right uppercase", () => {
    const sut = getStringInfo;
    const actual = sut("Pocky");

    expect(actual.upperCase).toBe("POCKY");
  });

  it("return right characters", () => {
    const sut = getStringInfo;
    const actual = sut("Pocky");

    expect(actual.characters).toEqual(["P", "o", "c", "k", "y"]);
    expect(actual.characters).toContain<string>("k");
    expect(actual.characters).toEqual(
      expect.arrayContaining(["o", "P", "k", "c", "y"])
    );
  });

  it("return defined extrainfo", () => {
    const sut = getStringInfo;
    const actual = sut("Pocky");

    expect(actual.extraInfo).toBeDefined();
  });

  it("return right extrainfo", () => {
    const sut = getStringInfo;
    const actual = sut("Pocky");

    expect(actual.extraInfo).toEqual({});
  });
});
