import {states} from './statesTransitions'
import {
    AB_P, ALPHABET, blank,
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
    QUOTES, symbolTable,
    UNDERLINE
} from "./Alphabet";


export function scanner(text: string, position: number = 0) {
    const textAsArray = text.split('').slice(position)
    let lexema = ''
    let state = states['INITIAL']
    for (let caractere of textAsArray) {
        //demarca de uma posição foi lida
        position++
        //rece o proximo estado e qual o tipo que aquela entrada tem
        let {nextState, generalType} = readValueReturnNewState(caractere, state)
        //se não tiver proximo estado chegou ao fim do automato
        if (!nextState) {
            position--;
            break
        }
        //se tiver proximo estado, passa a ser o estado atual
        state = nextState
        //se o estado atual for 0 é pq n andou, ent a entrada não forma lexema, tal qual um erro
        if (state != 'Q0' && generalType != 'ERRO')
            lexema += caractere
    }
    const token = formatToken({lexema, state})
    console.log(token)
    return {token, position}

}

//@todo como saber linha e coluna que o erro aconteceu?

function checkFinalState(state: any) {
    return state in states['FINAL'] ? true : false
}

function checkTableSymbol(token) {
    if (token.classe == 'ID') {
        if (!(token.lexema in symbolTable))
            symbolTable[token.lexema] = token
        return symbolTable[token.lexema]
    }
    return token

}

function formatToken({lexema, state}) {
    const isFinalState = checkFinalState(state)
    if (isFinalState) {
        //se id verificar se ta na tabela de simbolos
        let token = {...states['FINAL'][state], lexema}
        token = checkTableSymbol(token)
        return token
    } else {
        console.log('Lexema não reconhecido', lexema)
        return false
    }

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
        case EXPONENTIAL.includes(value):
            return 'EXPONENTIAL'
        //@mesmo problema do alphabeto, retorna o mais e não OPM
        case OPM.includes(value):
            return 'OPM'
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

function readValueReturnNewState(value: string, state: string) {
    const input = turnValueInSomeGeneralType(value)
    let nextState = states[state][input]
    return {nextState, generalType: input}

}

