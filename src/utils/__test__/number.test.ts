import { parserStringNumber } from '../number';

describe('number', () => {
    it('parserStringNumber 正负0测试', () => {
        /* 正负0测试 */
        expect(parserStringNumber('0%')).toEqual({
            isNumber: true,
            isPositive: true,
            number: 0,
            abs: 0,
            unit: '%',
        });
        expect(parserStringNumber('-0%')).toEqual({
            isNumber: true,
            isPositive: true,
            number: -0,
            abs: 0,
            unit: '%',
        });
    });
    it('parserStringNumber 正数小数测试', () => {
        expect(parserStringNumber('-1.1%')).toEqual({
            isNumber: true,
            isPositive: false,
            number: -1.1,
            abs: 1.1,
            unit: '%',
        });

        expect(parserStringNumber('-0.12')).toEqual({
            isNumber: true,
            isPositive: false,
            number: -0.12,
            abs: 0.12,
            unit: '',
        });
    });
});
