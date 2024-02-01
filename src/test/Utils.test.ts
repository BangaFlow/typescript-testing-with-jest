import { toUpperCase } from "../app/Utils";

describe('Utils test suite', () => {
  it('should return uppercase', () => {
    const rst = toUpperCase('abc');
    expect(rst).toBe('ABC')
  })
});