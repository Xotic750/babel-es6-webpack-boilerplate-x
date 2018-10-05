import main from '../src/index';

describe('module', () => {
  it('should exist', () => {
    expect.hasAssertions();
    const obj = {};
    expect(obj).toBeDefined();
  });

  it('should be a function', () => {
    expect.hasAssertions();
    expect(main).toBeInstanceOf(Function);
  });
});
