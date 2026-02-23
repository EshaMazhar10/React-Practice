import { it, expect, describe  } from 'vitest';
import { Formatmoney } from './money';

describe('Formatmoney', () => {
    it('formats 1999 cents as $19.99', () => {
    expect(Formatmoney(1999)).toBe('$19.99');

});


it('display 2 decimals', () => {
    expect(Formatmoney(1090)).toBe('$10.90'); 
    expect(Formatmoney(100)).toBe('$1.00');
});

});

