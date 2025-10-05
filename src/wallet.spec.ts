import { describe, it, expect } from 'vitest';
import { Wallet } from './wallet';

describe('wallet should', () => {
  it('return 0 when no stock exists', () => {
      const wallet = new Wallet();
      expect(wallet.getTotalValue()).toBe(0);
  });
});