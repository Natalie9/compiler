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
    MORE, newLine,
    OPM,
    PLUS, PT_V,
    QUOTES, SLASH, symbolTable,
    UNDERLINE
} from "./utils/Alphabet";

import * as fs from 'fs/promises'
import * as path from 'path'
import {IToken} from "./models/Token";


export async function* scanner(pathName: string) {
    const text = await readTextFile(path.join(__dirname, pathName))

    const textLines = text.split('\n')
    let lexema = ''
    let state = states['INITIAL']
    let isComment = false
    for (let line = 0; line < textLines.length; line++) {
        let lineOfText = textLines[line]

        const charactersOfLine = lineOfText.split('')

        for (let column = 0; column < charactersOfLine.length; column++) {
            let character: string = charactersOfLine[column]

            //para reconhecer mas n retornar o comentario
            if (character == '{' || isComment) {
                isComment = true
                if (character == '}') isComment = false
                continue
            }

            //recebe o proximo estado e qual o tipo que aquela entrada tem
            let nextState = readValueReturnNewState(character, state)
            //se não tiver proximo estado chegou ao fim do automato
            if (!nextState) {
                let position = [line, column]
                const response = formatToken({lexema, state, position})
                yield response
                column--
                state = 'Q0'
                lexema = ''
            } else {
                //se tiver proximo estado, passa a ser o estado atual
                state = nextState
            }
            //se o estado atual for 0 é pq n andou, ent a entrada não forma lexema
            if (state != 'Q0')
                lexema += character
        }

    }
    let position = [0, 0]
    const stateEOF = 'Q10'
    const tokenEOF = {...states['FINAL'][stateEOF]}
    yield formatToken({...tokenEOF, state: stateEOF, position})

}


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
            notifyError(position, lexema)
            token = {...states['FINAL'][state]}
        }
        return token
    } else {
        console.log(`Erro léxico - Palavra não reconhecida`)
        return {classe: 'ERROR', tipo: 'NULO', lexema: 'NULO'}
    }
}

export async function readTextFile(pathName) {
    return (await fs.readFile(pathName)).toString();
}

function notifyError(position, lexema) {
    let [line, column] = position
    console.log(`Erro léxico - Caractere inesperado na linha ${line + 1}, coluna ${column} > ${lexema}`)
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
        //a ideia de alphabet pra englobar qualquer entrada e reduzir o automato nao deu certo pois sempre entra em um anterior
        case ALPHABET.includes(value):
            return 'ALPHABET'
        case newLine.includes(value):
            return 'newLine'
        case blank.includes(value):
            return 'BLANK'
        default:
            return 'ERRO'

    }

}

function checkIfLetterIsExponencial({input, state, value}) {
    // Nos casos em que o número é exponencial precisamos de uma validação para que o e|E não entre no caso letter
    const numberStates = ['Q1', 'Q2', 'Q3']
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



