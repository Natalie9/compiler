import {scanner} from "../index";

describe('Test scanner read some source code', () => {
    it('return first token as number', () => {
        expect(scanner('2')).toStrictEqual({"position": 1, "token": {"classe": "NUM", "lexema": "2", "tipo": "inteiro"}})
       
    }),
    it('recognize decimal number', () => {
        let response
        response = scanner('3e+3')
    })
})

//it('', () => {
  //  expect(scanner('2342342')).toStrictEqual({"position": 1, "token": {"classe": "NUM", "lexema": "2", "tipo": "inteiro"}})
//}),           
// expect(scanner('2.3')).toBe(true)
        // expect(scanner('3e+3')).toBe(true)
        // expect(scanner('3e3')).toBe(true)
        // expect(scanner('3sdfs')).toBe(false)
        // expect(scanner('abab')).toBe(false))e+e+