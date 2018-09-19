import React from 'react';
import validate from '../validate';

describe('Test on validate', () => {
    it('without Values', () => {
        const values = {
        };
        validate(values);
        expect(validate).toMatchSnapshot();
    });
    it('with values', () => {
        const values = {
            firstName: 'testtesttesttesttest',
            email: 'test@test.com'
        };
        validate(values);
        expect(validate).toMatchSnapshot();
    });
    it('with wrong values', () => {
        const values = {
            firstName: 'test',
            email: 'test'
        };
        validate(values);
        expect(validate).toMatchSnapshot();
    });
});