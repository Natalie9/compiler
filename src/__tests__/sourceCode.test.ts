import {readTextFile, scanner} from "../index";
import {IToken} from "../models/Token";
import {MGOL} from "../utils/sourceCode";


// describe('Test scanner read some source code', () => {
//     let readPosition = 0
//     let response
//
//     const expectedTokenLiteral: IToken = {lexema: 'literal', tipo: 'literal', classe: 'literal'}
//     const expectedTokenInteiro: IToken = {lexema: 'inteiro', tipo: 'inteiro', classe: 'inteiro'}
//     const expectedTokenReal: IToken = {lexema: 'real', tipo: 'real', classe: 'real'}
//     const expectedTokenEscreva: IToken = {lexema: 'escreva', tipo: 'escreva', classe: 'escreva'}
//     const expectedTokenLeia: IToken = {lexema: 'leia', tipo: 'leia', classe: 'leia'}
//     const expectedTokenSe: IToken = {lexema: 'se', tipo: 'se', classe: 'se'}
//     const expectedTokenEntao: IToken = {lexema: 'entao', tipo: 'entao', classe: 'entao'}
//     const expectedTokenFimSe: IToken = {lexema: 'fimse', tipo: 'fimse', classe: 'fimse'}
//     const expectedTokenRepita: IToken = {lexema: 'repita', tipo: 'repita', classe: 'repita'}
//
//     const expectedTokenPT_V: IToken = {lexema: ';', tipo: 'NULO', classe: 'PT_V'}
//     const expectedTokenAB_P: IToken = {lexema: '(', tipo: 'NULO', classe: 'AB_P'}
//     const expectedTokenFC_P: IToken = {lexema: ')', tipo: 'NULO', classe: 'FC_P'}
//     const expectedTokenRCB: IToken = {lexema: '<-', tipo: 'NULO', classe: 'RCB'}
//     const expectedTokenOPMplus: IToken = {lexema: '+', tipo: 'NULO', classe: 'OPM'}
//
//     const expectedTokenA: IToken = {lexema: 'A', tipo: 'NULO', classe: 'ID'}
//     const expectedTokenB: IToken = {lexema: 'B', tipo: 'NULO', classe: 'ID'}
//     const expectedTokenC: IToken = {lexema: 'C', tipo: 'NULO', classe: 'ID'}
//     const expectedTokenD: IToken = {lexema: 'D', tipo: 'NULO', classe: 'ID'}
//
//     // linha 1
//     it('Should read source code and return first token', () => {
//         const expectedTokenInicio: IToken = {lexema: 'inicio', tipo: 'inicio', classe: 'inicio'}
//         response = scanner(MGOL, readPosition)
//         expect(response.token).toEqual(expectedTokenInicio)
//     })
//     // linha 2
//     it('Should read source code and return varinicio token', () => {
//         const expectedTokenVarInicio: IToken = {lexema: 'varinicio', tipo: 'varinicio', classe: 'varinicio'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenVarInicio)
//     })
//     // linha 3
//     it('Should read source code and return literal token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenLiteral)
//     })
//     it('Should read source code and return A token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenA)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 4
//     it('Should read source code and return inteiro token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenInteiro)
//     })
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 5
//     it('Should read source code and return inteiro token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenInteiro)
//     })
//     it('Should read source code and return D token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenD)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 6
//     it('Should read source code and return real token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenReal)
//     })
//     it('Should read source code and return C token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenC)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 7
//     it('Should read source code and return varfim token', () => {
//         const expectedTokenVarfim: IToken = {lexema: 'varfim', tipo: 'varfim', classe: 'varfim'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenVarfim)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 8: escreva "Digite B:";
//     it('Should read source code and return escreva token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenEscreva)
//     })
//     it('Should read source code and return string token', () => {
//         const expectedTokenLit: IToken = {lexema: '\"Digite B:\"', tipo: 'literal', classe: 'LIT'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenLit)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 9: leia B;
//     it('Should read source code and return leia token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenLeia)
//     })
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 10: escreva "Digite A:";
//     it('Should read source code and return escreva token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenEscreva)
//     })
//     it('Should read source code and return string token', () => {
//         const expectedTokenLit: IToken = {lexema: '\"Digite A:\"', tipo: 'literal', classe: 'LIT'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenLit)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 11: leia A;
//     it('Should read source code and return leia token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenLeia)
//     })
//     it('Should read source code and return A token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenA)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 12: se(B>2)
//     it('Should read source code and return se token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenSe)
//     })
//     it('Should read source code and return ( token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenAB_P)
//     })
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return > token', () => {
//         const expectedTokenOPR: IToken = {lexema: '>', tipo: 'NULO', classe: 'OPR'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenOPR)
//     })
//     it('Should read source code and return 2 token', () => {
//         const expectedToken: IToken = {lexema: '2', tipo: 'inteiro', classe: 'NUM'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedToken)
//     })
//     it('Should read source code and return ) token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenFC_P)
//     })
//     // linha 13: entao
//     it('Should read source code and return entao token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenEntao)
//     })
//     // linha 14: se(B<=2)
//     it('Should read source code and return se token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenSe)
//     })
//     it('Should read source code and return ( token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenAB_P)
//     })
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return <= token', () => {
//         const expectedTokenOPR: IToken = {lexema: '<=', tipo: 'NULO', classe: 'OPR'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenOPR)
//     })
//     it('Should read source code and return 4 token', () => {
//         const expectedToken: IToken = {lexema: '4', tipo: 'inteiro', classe: 'NUM'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedToken)
//     })
//     it('Should read source code and return ) token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenFC_P)
//     })
//     // linha 15: entao
//     it('Should read source code and return entao token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenEntao)
//     })
//     // linha 16: escreva "B esta entre 2 e 4";
//     it('Should read source code and return escreva token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenEscreva)
//     })
//     it('Should read source code and return string token', () => {
//         const expectedTokenLit: IToken = {lexema: '\"B esta entre 2 e 4\"', tipo: 'literal', classe: 'LIT'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenLit)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 17: fimse
//     it('Should read source code and return fimse token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenFimSe)
//     })
//     // linha 18: fimse
//     it('Should read source code and return fimse token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenFimSe)
//     })
//
//     // linha 19: B <- B+1;
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return <- token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenRCB)
//     })
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return + token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenOPMplus)
//     })
//     it('Should read source code and return 1 token', () => {
//         const expectedToken: IToken = {lexema: '1', tipo: 'inteiro', classe: 'NUM'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedToken)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 20: B <- B+2;
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return <- token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenRCB)
//     })
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return + token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenOPMplus)
//     })
//     it('Should read source code and return 2 token', () => {
//         const expectedToken: IToken = {lexema: '2', tipo: 'inteiro', classe: 'NUM'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedToken)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 21: B <- B+3;
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return <- token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenRCB)
//     })
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return + token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenOPMplus)
//     })
//     it('Should read source code and return 3 token', () => {
//         const expectedToken: IToken = {lexema: '3', tipo: 'inteiro', classe: 'NUM'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedToken)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 22: D<-B;
//     it('Should read source code and return D token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenD)
//     })
//     it('Should read source code and return <- token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenRCB)
//     })
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 23: C<-5.0;
//     it('Should read source code and return C token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenC)
//     })
//     it('Should read source code and return <- token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenRCB)
//     })
//     it('Should read source code and return 5.0 token', () => {
//         const expectedToken: IToken = {lexema: '5.0', tipo: 'real', classe: 'NUM'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedToken)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 24: repita (B<5)
//     it('Should read source code and return repita token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenRepita)
//     })
//     it('Should read source code and return ( token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenAB_P)
//     })
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return < token', () => {
//         const expectedTokenOPR: IToken = {lexema: '<', tipo: 'NULO', classe: 'OPR'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenOPR)
//     })
//     it('Should read source code and return 5 token', () => {
//         const expectedToken: IToken = {lexema: '5', tipo: 'inteiro', classe: 'NUM'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedToken)
//     })
//     it('Should read source code and return ) token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenFC_P)
//     })
//     // linha 21: C<-B+2;
//     it('Should read source code and return C token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenC)
//     })
//     it('Should read source code and return <- token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenRCB)
//     })
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return + token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenOPMplus)
//     })
//     it('Should read source code and return 2 token', () => {
//         const expectedToken: IToken = {lexema: '2', tipo: 'inteiro', classe: 'NUM'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedToken)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 22: escreva C;
//     it('Should read source code and return escreva token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenEscreva)
//     })
//     it('Should read source code and return C token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenC)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 23: B<-B+1;
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return <- token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenRCB)
//     })
//     it('Should read source code and return B token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenB)
//     })
//     it('Should read source code and return + token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenOPMplus)
//     })
//     it('Should read source code and return 1 token', () => {
//         const expectedToken: IToken = {lexema: '1', tipo: 'inteiro', classe: 'NUM'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedToken)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 24: fimrepita
//     it('Should read source code and return fimrepita token', () => {
//         const expectedToken: IToken = {lexema: 'fimrepita', tipo: 'fimrepita', classe: 'fimrepita'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedToken)
//     })
//     // linha 25: escreva "\nB=\n";
//     it('Should read source code and return escreva token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenEscreva)
//     })
//     it('Should read source code and return string token', () => {
//         //@todo verificar \n
//         const expectedTokenLit: IToken = {lexema: "\"B=\"", tipo: 'literal', classe: 'LIT'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenLit)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 26: escreva D;
//     it('Should read source code and return escreva token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenEscreva)
//     })
//     it('Should read source code and return D token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenD)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 27: escreva "\n";
//     it('Should read source code and return escreva token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenEscreva)
//     })
//     it('Should read source code and return string token', () => {
//         //@todo verificar \n
//         const expectedTokenLit: IToken = {lexema: '"\"\"', tipo: 'literal', classe: 'LIT'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenLit)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 28: escreva C;
//     it('Should read source code and return escreva token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenEscreva)
//     })
//     it('Should read source code and return C token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenC)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 29: escreva "\n";
//     it('Should read source code and return escreva token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenEscreva)
//     })
//     it('Should read source code and return string token', () => {
//         //@todo verificar "\n"
//         const expectedTokenLit: IToken = {lexema: '\""', tipo: 'literal', classe: 'LIT'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenLit)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 30: escreva A;
//     it('Should read source code and return escreva token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenEscreva)
//     })
//     it('Should read source code and return A token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenA)
//     })
//     it('Should read source code and return PT_V token', () => {
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenPT_V)
//     })
//     // linha 31: fim
//     it('Should read source code and return fim token', () => {
//         const expectedTokenFim: IToken = {lexema: 'fim', tipo: 'fim', classe: 'fim'}
//         response = scanner(MGOL, response.position)
//         expect(response.token).toEqual(expectedTokenFim)
//     })
// })
const pathName = '/__tests__/teste.txt'
describe('Test read file with sourceCode', () => {
    it('Read a file', async () => {
        const scan = scanner(pathName)
        console.log(await scan.next())
        console.log(await scan.next())
        console.log(await scan.next())
        console.log(await scan.next())
        console.log(await scan.next())
        console.log(await scan.next())


        // const expectedTokenNat: IToken = {lexema: 'natalie', classe: 'ID', tipo: 'NULO'}
        //
        // let response = await scanner(pathName)
        // expect(response.token).toEqual(expectedTokenNat)
        //
        //
        // const expectedTokenNum: IToken = {lexema: '234', classe: 'NUM', tipo: 'inteiro'}
        //
        // response = await scanner(pathName, response.position)
        // expect(response.token).toEqual(expectedTokenNum)
        //
        // response = await scanner(pathName, response.position)
        // console.log(response)
        //
        // response = await scanner(pathName, response.position)
        // console.log(response)
        //
        // response = await scanner(pathName, response.position)
        // console.log(response)


    })

})
