import {scanner} from "../index";
import { IToken } from "../models/Token";

describe('Test scanner read UNTERMINATED STRING ', () => {
    it('Return error token', () => {
        const text = '\"\String n terminada'
        let erro = 'Erro léxico - Caractere inválido na linguagem '.concat(text)
        const expectedTokenError: IToken = {lexema: 'NULO', tipo: 'NULO', classe: 'ERROR'}
        let response = scanner(text)
        expect(response.token).toEqual(expectedTokenError)
    })
})

describe('Test scanner read ILLEGAL_CHARACTER', () => {
    it('Return error for a symbol that doesnt is in grammar', () => {
        const text = '@'
        let erro = 'Erro léxico - Caractere inválido na linguagem '.concat(text)
        const expectedTokenError: IToken = {lexema: '@', tipo: 'NULO', classe: 'ERROR'}
        let {token} = scanner(text)
        expect(token).toEqual(expectedTokenError)
    })
    it('Return error when a number is followed by other character', () => {
        const text = '123er'
        let erro = 'Erro léxico - Caractere inválido na linguagem '.concat('123e')
        const expectedTokenError: IToken = {lexema: '123e', tipo: 'nulo', classe: 'ERROR'}
        let {token} = scanner(text)
        let retorno = {token, erro}
        expect(token).toEqual(retorno)
    })
})



