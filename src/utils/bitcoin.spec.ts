import { generateMnemonic, toHex } from './bitcoin';

describe('bitcoin utils', () => {
  describe('generateMnemonic', () => {
    it('should return a string type', () => {
      expect(typeof generateMnemonic()).toBe('string');
    });
  });

  describe('toHex', () => {
    it('should not throw on empty string', () => {
      expect(toHex()).toEqual('');
    });
  });
});
