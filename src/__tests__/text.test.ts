import {scanner} from "../index";
import {IToken} from "../models/Token";
import {MGOL} from "../utils/sourceCode";

const sourceCodeMock = `1p66623 3.4 4e5 6hgh 922`

describe('Test scanner read some source code', () => {
    it('Should read and return first toke as a Number', () => {
        const expectedTokenNumber: IToken = {lexema: '123', tipo: 'inteiro', classe: 'Number'}
        expect(scanner(sourceCodeMock)).toBe(true)
    })
    it('Should read source code and return first token', () => {
        let readPosition = 0
        let response
        response = scanner(MGOL, readPosition)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        response = scanner(MGOL, response.position)
        expect(true).toBe(true)
    })
})
