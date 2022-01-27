const scanner = require("./index");

testRecognizeNumber('recognize number', () => {
    expected(scanner('2')).toBe(true);
    expected(scanner('2342342')).toBe(true, '2342342');
    expected(scanner('2.3')).toBe(true);
    expected(scanner('3e+3')).toBe(true);
    expected(scanner('3e3')).toBe(true);
    expected(scanner('3sdfs')).toBe(false);
    expected(scanner('abab')).toBe(false, 'abab')
})
