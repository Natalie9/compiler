import {readTextFile, scanner} from "../index";
import {IToken} from "../models/Token";
import {MGOL} from "../utils/sourceCode";

const pathName = '/__tests__/teste.txt'

describe('Test scanner read some source code', () => {
    let readPosition = 0
    let response

    const expectedTokenLiteral: IToken = {lexema: 'literal', tipo: 'literal', classe: 'literal'}
    const expectedTokenInteiro: IToken = {lexema: 'inteiro', tipo: 'inteiro', classe: 'inteiro'}
    const expectedTokenReal: IToken = {lexema: 'real', tipo: 'real', classe: 'real'}
    const expectedTokenEscreva: IToken = {lexema: 'escreva', tipo: 'escreva', classe: 'escreva'}
    const expectedTokenLeia: IToken = {lexema: 'leia', tipo: 'leia', classe: 'leia'}
    const expectedTokenSe: IToken = {lexema: 'se', tipo: 'se', classe: 'se'}
    const expectedTokenEntao: IToken = {lexema: 'entao', tipo: 'entao', classe: 'entao'}
    const expectedTokenFimSe: IToken = {lexema: 'fimse', tipo: 'fimse', classe: 'fimse'}
    const expectedTokenRepita: IToken = {lexema: 'repita', tipo: 'repita', classe: 'repita'}

    const expectedTokenPT_V: IToken = {lexema: ';', tipo: 'NULO', classe: 'PT_V'}
    const expectedTokenAB_P: IToken = {lexema: '(', tipo: 'NULO', classe: 'AB_P'}
    const expectedTokenFC_P: IToken = {lexema: ')', tipo: 'NULO', classe: 'FC_P'}
    const expectedTokenRCB: IToken = {lexema: '<-', tipo: 'NULO', classe: 'RCB'}
    const expectedTokenOPMplus: IToken = {lexema: '+', tipo: 'NULO', classe: 'OPM'}

    const expectedTokenA: IToken = {lexema: 'A', tipo: 'NULO', classe: 'ID'}
    const expectedTokenB: IToken = {lexema: 'B', tipo: 'NULO', classe: 'ID'}
    const expectedTokenC: IToken = {lexema: 'C', tipo: 'NULO', classe: 'ID'}
    const expectedTokenD: IToken = {lexema: 'D', tipo: 'NULO', classe: 'ID'}

    const scan = scanner(pathName)
    // linha 1
    it('Should read source code and return first token', async () => {
        const expectedTokenInicio: IToken = {lexema: 'inicio', tipo: 'inicio', classe: 'inicio'}
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenInicio)
    })
    // linha 2
    it('Should read source code and return varinicio token', async () => {
        const expectedTokenVarInicio: IToken = {lexema: 'varinicio', tipo: 'varinicio', classe: 'varinicio'}
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenVarInicio)
    })
    // linha 3
    it('Should read source code and return literal token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenLiteral)
    })
    it('Should read source code and return A token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenA)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 4
    it('Should read source code and return inteiro token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenInteiro)
    })
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 5
    it('Should read source code and return inteiro token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenInteiro)
    })
    it('Should read source code and return D token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenD)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 6
    it('Should read source code and return real token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenReal)
    })
    it('Should read source code and return C token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenC)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 7
    it('Should read source code and return varfim token', async () => {
        const expectedTokenVarfim: IToken = {lexema: 'varfim', tipo: 'varfim', classe: 'varfim'}
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenVarfim)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 8: escreva "Digite B:";
    it('Should read source code and return escreva token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenEscreva)
    })
    it('Should read source code and return string token', async () => {
        const expectedTokenLit: IToken = {lexema: '\"Digite B:\"', tipo: 'literal', classe: 'LIT'}
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenLit)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 9: leia B;
    it('Should read source code and return leia token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenLeia)
    })
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 10: escreva "Digite A:";
    it('Should read source code and return escreva token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenEscreva)
    })
    it('Should read source code and return string token', async () => {
        const expectedTokenLit: IToken = {lexema: '\"Digite A:\"', tipo: 'literal', classe: 'LIT'}
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenLit)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 11: leia A;
    it('Should read source code and return leia token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenLeia)
    })
    it('Should read source code and return A token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenA)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 12: se(B>2)
    it('Should read source code and return se token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenSe)
    })
    it('Should read source code and return ( token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenAB_P)
    })
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return > token', async () => {
        const expectedTokenOPR: IToken = {lexema: '>', tipo: 'NULO', classe: 'OPR'}
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenOPR)
    })
    it('Should read source code and return 2 token', async () => {
        const expectedToken: IToken = {lexema: '2', tipo: 'inteiro', classe: 'NUM'}
        response = await scan.next()
        expect(response.value).toEqual(expectedToken)
    })
    it('Should read source code and return ) token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenFC_P)
    })
    // linha 13: entao
    it('Should read source code and return entao token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenEntao)
    })
    // linha 14: se(B<=2)
    it('Should read source code and return se token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenSe)
    })
    it('Should read source code and return ( token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenAB_P)
    })
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return <= token', async () => {
        const expectedTokenOPR: IToken = {lexema: '<=', tipo: 'NULO', classe: 'OPR'}
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenOPR)
    })
    it('Should read source code and return 4 token', async () => {
        const expectedToken: IToken = {lexema: '4', tipo: 'inteiro', classe: 'NUM'}
        response = await scan.next()
        expect(response.value).toEqual(expectedToken)
    })
    it('Should read source code and return ) token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenFC_P)
    })
    // linha 15: entao
    it('Should read source code and return entao token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenEntao)
    })
    // linha 16: escreva "B esta entre 2 e 4";
    it('Should read source code and return escreva token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenEscreva)
    })
    it('Should read source code and return string token', async () => {
        const expectedTokenLit: IToken = {lexema: '\"B esta entre 2 e 4\"', tipo: 'literal', classe: 'LIT'}
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenLit)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 17: fimse
    it('Should read source code and return fimse token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenFimSe)
    })
    // linha 18: fimse
    it('Should read source code and return fimse token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenFimSe)
    })

    // linha 19: B <- B+1;
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return <- token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenRCB)
    })
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return + token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenOPMplus)
    })
    it('Should read source code and return 1 token', async () => {
        const expectedToken: IToken = {lexema: '1', tipo: 'inteiro', classe: 'NUM'}
        response = await scan.next()
        expect(response.value).toEqual(expectedToken)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 20: B <- B+2;
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return <- token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenRCB)
    })
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return + token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenOPMplus)
    })
    it('Should read source code and return 2 token', async () => {
        const expectedToken: IToken = {lexema: '2', tipo: 'inteiro', classe: 'NUM'}
        response = await scan.next()
        expect(response.value).toEqual(expectedToken)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 21: B <- B+3;
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return <- token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenRCB)
    })
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return + token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenOPMplus)
    })
    it('Should read source code and return 3 token', async () => {
        const expectedToken: IToken = {lexema: '3', tipo: 'inteiro', classe: 'NUM'}
        response = await scan.next()
        expect(response.value).toEqual(expectedToken)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 22: D<-B;
    it('Should read source code and return D token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenD)
    })
    it('Should read source code and return <- token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenRCB)
    })
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 23: C<-5.0;
    it('Should read source code and return C token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenC)
    })
    it('Should read source code and return <- token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenRCB)
    })
    it('Should read source code and return 5.0 token', async () => {
        const expectedToken: IToken = {lexema: '5.0', tipo: 'real', classe: 'NUM'}
        response = await scan.next()
        expect(response.value).toEqual(expectedToken)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 24: repita (B<5)
    it('Should read source code and return repita token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenRepita)
    })
    it('Should read source code and return ( token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenAB_P)
    })
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return < token', async () => {
        const expectedTokenOPR: IToken = {lexema: '<', tipo: 'NULO', classe: 'OPR'}
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenOPR)
    })
    it('Should read source code and return 5 token', async () => {
        const expectedToken: IToken = {lexema: '5', tipo: 'inteiro', classe: 'NUM'}
        response = await scan.next()
        expect(response.value).toEqual(expectedToken)
    })
    it('Should read source code and return ) token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenFC_P)
    })
    // linha 21: C<-B+2;
    it('Should read source code and return C token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenC)
    })
    it('Should read source code and return <- token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenRCB)
    })
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return + token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenOPMplus)
    })
    it('Should read source code and return 2 token', async () => {
        const expectedToken: IToken = {lexema: '2', tipo: 'inteiro', classe: 'NUM'}
        response = await scan.next()
        expect(response.value).toEqual(expectedToken)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 22: escreva C;
    it('Should read source code and return escreva token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenEscreva)
    })
    it('Should read source code and return C token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenC)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 23: B<-B+1;
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return <- token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenRCB)
    })
    it('Should read source code and return B token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenB)
    })
    it('Should read source code and return + token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenOPMplus)
    })
    it('Should read source code and return 1 token', async () => {
        const expectedToken: IToken = {lexema: '1', tipo: 'inteiro', classe: 'NUM'}
        response = await scan.next()
        expect(response.value).toEqual(expectedToken)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 24: fimrepita
    it('Should read source code and return fimrepita token', async () => {
        const expectedToken: IToken = {lexema: 'fimrepita', tipo: 'fimrepita', classe: 'fimrepita'}
        response = await scan.next()
        expect(response.value).toEqual(expectedToken)
    })
    // linha 25: escreva "\nB=\n";
    it('Should read source code and return escreva token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenEscreva)
    })
    it('Should read source code and return string token', async () => {
        //@todo verificar \n
        const expectedTokenLit: IToken = {lexema: "\"B=\"", tipo: 'literal', classe: 'LIT'}
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenLit)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 26: escreva D;
    it('Should read source code and return escreva token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenEscreva)
    })
    it('Should read source code and return D token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenD)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 27: escreva "\n";
    it('Should read source code and return escreva token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenEscreva)
    })
    it('Should read source code and return string token', async () => {
        //@todo verificar \n
        const expectedTokenLit: IToken = {lexema: '"\"\\n"', tipo: 'literal', classe: 'LIT'}
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenLit)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 28: escreva C;
    it('Should read source code and return escreva token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenEscreva)
    })
    it('Should read source code and return C token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenC)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 29: escreva "\n";
    it('Should read source code and return escreva token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenEscreva)
    })
    it('Should read source code and return string token', async () => {
        //@todo verificar "\n"
        const expectedTokenLit: IToken = {lexema: '\""', tipo: 'literal', classe: 'LIT'}
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenLit)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 30: escreva A;
    it('Should read source code and return escreva token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenEscreva)
    })
    it('Should read source code and return A token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenA)
    })
    it('Should read source code and return PT_V token', async () => {
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenPT_V)
    })
    // linha 31: fim
    it('Should read source code and return fim token', async () => {
        const expectedTokenFim: IToken = {lexema: 'fim', tipo: 'fim', classe: 'fim'}
        response = await scan.next()
        expect(response.value).toEqual(expectedTokenFim)
    })
})

describe('Test read file with sourceCode', () => {
    it('Read a file', async () => {
        const scan = scanner(pathName)
        let done = false
        while (!done) {
            let response = await scan.next()
            console.log(response.value)
            done = response.done
        }

    })

})
