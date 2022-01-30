import {scanner} from "../index";
import { IToken } from "../models/Token";

describe('Test scanner read some source code', () => {
    it('Return first token as integer', () => {
        const text = '123sfd'
        const expectedTokenNumber: IToken = {lexema: '123', tipo: 'inteiro', classe: 'NUM'}
        let {token} = scanner(text)
        expect(token).toEqual(expectedTokenNumber)
    }),
    it('Recognize exponential number with signal', () => {
        const text = '3e+3'
        const expectedTokenNumber: IToken = {lexema: text, tipo: 'real', classe: 'NUM'}
        let {token} = scanner(text)
        expect(token).toEqual(expectedTokenNumber)
    }),
    it('Recognize exponential number', () => {
        const text = '3e3'
        const expectedTokenNumber: IToken = {lexema: text, tipo: 'real', classe: 'NUM'}
        let {token} = scanner(text)
        expect(token).toEqual(expectedTokenNumber)
    }),
    it('Recognize real number', () => {
        const text = '3.3'
        const expectedTokenNumber: IToken = {lexema: text, tipo: 'real', classe: 'NUM'}
        let {token} = scanner(text)
        expect(token).toEqual(expectedTokenNumber)
    })
})


   