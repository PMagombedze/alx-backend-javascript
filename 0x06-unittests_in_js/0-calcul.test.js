const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the sum of rounded numbers', () => {
        assert.strictEqual(calculateNumber(3.7, 4.2), 8);
        assert.strictEqual(calculateNumber(1.5, 2.3), 4);
        assert.strictEqual(calculateNumber(5.9, 7.1), 13);
    });
});
