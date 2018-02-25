import main from '../src/index';

describe('Module', () => {
  let obj;

  beforeEach(() => {
    obj = {};
  });

  it('should exist', () => {
    expect(obj).toBeDefined();
  });

  it('should be a function', () => {
    expect(main).toBeInstanceOf(Function);
  });
});
