import { expect } from 'chai';
import main from '../src/index';

describe('App Component', () => {
  let obj;

  beforeEach(() => {
    obj = {};
  });

  it('should exist', () => {
    expect(obj).to.exist;
  });

  it('should be a function', () => {
    expect(main).be.a('function');
  });
});
