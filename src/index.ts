import {states} from './utils/statesTransitions'
import {
    AB_P, ALPHABET, ASTERISK, blank,
    DIGIT,
    DOT,
    EOF,
    EQUAL,
    EXPONENTIAL, FC_P,
    LESS,
    LETTER,
    MINUS,
    MORE,
    OPM,
    PLUS, PT_V,
    QUOTES, SLASH, symbolTable,
    UNDERLINE
} from "./utils/Alphabet";

import * as fs from 'fs/promises'
import * as path from 'path'

//@todo tratar comentários
//@todo tratar erros

function readSourceCode(text, {line, column}) {

    const textLines = text.split('\n')
    if (line >= textLines.length - 1) {
        return {classe: 'EOF', tipo: 'NULO', lexema: 'eof', state: 'Q10', newPosition: [line, column]}
    }
    let lexema = ''
    let state = states['INITIAL']
    for (line; line < textLines.length - 1; line++) {
        let lineOfText = textLines[line] || ' '
        const charactersOfLine = lineOfText.split('')
        if (column >= charactersOfLine.length) {
            column = 0
            continue
        }
        for (column; column < charactersOfLine.length; column++) {
            let character = charactersOfLine[column]

            //recebe o proximo estado e qual o tipo que aquela entrada tem
            let nextState = readValueReturnNewState(character, state)
            //se não tiver proximo estado chegou ao fim do automato
            if (!nextState) {
                break
            }
            //se tiver proximo estado, passa a ser o estado atual
            state = nextState
            //se o estado atual for 0 é pq n andou, ent a entrada não forma lexema
            if (state != 'Q0')
                lexema += character
        }
        return {lexema, state, newPosition: [line, column]}
    }

}

//@todo tratar fim de arquivo
export async function scanner(pathName: string, position: number[] = [0, 0]) {
    const text = await readTextFile(path.join(__dirname, pathName))
    let [line, column] = position
    let {lexema, state, newPosition} = readSourceCode(text, {line, column})
    console.log({lexema, state, newPosition})
    const token = formatToken({lexema, state, position: newPosition})
    return {token, position: newPosition}

}


//@todo como saber linha e coluna que o erro aconteceu?
function checkFinalState(state: any) {
    return state in states['FINAL'] ? true : false
}

function checkTableSymbol(token) {
    if (!(token.lexema in symbolTable))
        symbolTable[token.lexema] = token
    return symbolTable[token.lexema]
}

function formatToken({lexema, state, position}) {
    const isFinalState = checkFinalState(state)
    if (isFinalState) {
        let token = {...states['FINAL'][state], lexema}
        if (token.classe == 'ID') {
            token = checkTableSymbol(token)
        }
        if (token.classe == 'ERROR') {
            notifyError(position)
            token = {...states['FINAL'][state]}
        }
        return token
    }
}

export async function readTextFile(pathName) {
    return (await fs.readFile(pathName)).toString();
}

function notifyError(position) {
    let [line, column] = position
    console.log(`Erro léxico - Caractere inesperado na linha ${line + 1}, coluna ${column}`)
}

function validateErrorType({lexema, state}) {
    // Validação do tipo do erro quando é erro léxico
    const errorState = ['Q22']
    if (errorState.includes(state)) {
        let token = {...states['FINAL'][state], lexema}
        let erro = 'Erro léxico - Caractere inválido na linguagem '.concat(lexema)
        return {token, erro}
    }
    let token = {...states['FINAL'][state], lexema}
    let erro = 'Erro léxico - Caractere inválido na linguagem '.concat(lexema)
    return {token, erro}
}

function turnValueInSomeGeneralType(value: any) {
    switch (true) {
        case DIGIT.includes(value):
            return 'DIGIT'
        case LETTER.includes(value):
            return 'LETTER'
        case QUOTES.includes(value):
            return 'QUOTES'
        case UNDERLINE.includes(value):
            return 'UNDERLINE'
        case LESS.includes(value):
            return 'LESS'
        case MORE.includes(value):
            return 'MORE'
        case DOT.includes(value):
            return 'DOT'
        case PLUS.includes(value):
            return 'PLUS'
        case MINUS.includes(value):
            return 'MINUS'
        case SLASH.includes(value):
            return 'SLASH'
        case ASTERISK.includes(value):
            return 'ASTERISK'
        case EOF.includes(value):
            return 'EOF'
        case EQUAL.includes(value):
            return 'EQUAL'
        case AB_P.includes(value):
            return 'AB_P'
        case FC_P.includes(value):
            return 'FC_P'
        case PT_V.includes(value):
            return 'PT_V'
        //@todo a ideia de alphabet pra englobar qualquer entrada e reduzir o automato nao deu certo pois sempre entra em um anterior
        case ALPHABET.includes(value):
            return 'ALPHABET'
        case blank.includes(value):
            return 'BLANK'
        default:
            return 'ERRO'

    }

}

function checkIfLetterIsExponencial({input, state, value}) {
    // Nos casos em que o número é exponencial precisamos de uma validação para que o e|E não entre no caso letter
    const numberStates = ['Q1', 'Q3']
    if (numberStates.includes(state) && EXPONENTIAL.includes(value)) {
        return 'EXPONENTIAL'
    }
    return input
}

function readValueReturnNewState(value: string, state: string) {
    let input = turnValueInSomeGeneralType(value)
    input = checkIfLetterIsExponencial({input, state, value})
    let nextState = states[state][input]
    return nextState
}

