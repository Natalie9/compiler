import {scanner} from "../index";
import { IToken } from "../models/Token";

describe('Test scanner read UNTERMINATED STRING ', () => {
    it('Return error token', () => {
        const text = '\"\String não terminada'
        const expectedTokenError: IToken = {lexema: '\"\String não terminada', tipo: 'nulo', classe: 'Erro'}
        let {token} = scanner(text)
        expect(token).toEqual(expectedTokenError)
    })
})

describe('Test scanner read ILLEGAL_CHARACTER', () => {
    it('Return error for a symbol that doesnt is in grammar', () => {
        const text = '@'
        let erro = "Erro léxico - Caractere inválido na linguagem"
        const expectedTokenError: IToken = {lexema: '#', tipo: 'nulo', classe: 'Erro'}
        let {token} = scanner(text)
        expect(token).toEqual(expectedTokenError)
    })
    it('Return error when a number is followed by other character', () => {
        const text = '123er'
        let erro = "Erro léxico - Caractere inesperado"
        const expectedTokenError: IToken = {lexema: 'e', tipo: 'nulo', classe: 'Erro'}
        let {token} = scanner(text)
        expect(token).toEqual(expectedTokenError)
    })
})


    
