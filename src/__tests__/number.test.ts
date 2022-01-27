import {scanner} from "../index";

test('recognize number', () => {
    expect(scanner('2')).toBe(true)
    expect(scanner('2342342')).toBe(true)
    expect(scanner('2.3')).toBe(true)
    expect(scanner('3e+3')).toBe(true)
    expect(scanner('3e3')).toBe(true)
    expect(scanner('3sdfs')).toBe(false)
    expect(scanner('abab')).toBe(false)
})
