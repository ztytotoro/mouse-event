import { isNumber } from './main';

test('5 is number', () => {
    expect(isNumber(5)).toBe(true);
});

test('"5" is not number', () => {
    expect(isNumber('5')).toBe(false);
});

test('NaN is not number', () => {
    expect(isNumber(NaN)).toBe(false);
});
