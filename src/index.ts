import {states} from './statesTransitions'
import {isNumber} from "./utils/validations";
import {IToken} from "./models/Token";
import {
    AB_P, ALPHABET,
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
    QUOTES,
    UNDERLINE
} from "./Alphabet";

let symbolTable = {
    'inicio': {classe: 'inicio', lexema: 'inicio', tipo: 'inicio'},
    'varinicio': {classe: 'varinicio', lexema: 'varinicio', tipo: 'varinicio'},
    'varfim': {classe: 'varfim', lexema: 'varfim', tipo: 'varfim'},
    'escreva': {classe: 'escreva', lexema: 'escreva', tipo: 'escreva'},
    'leia': {classe: 'leia', lexema: 'leia', tipo: 'leia'},
    'se': {classe: 'se', lexema: 'se', tipo: 'se'},
    'entao': {classe: 'entao', lexema: 'entao', tipo: 'entao'},
    'fimse': {classe: 'fimse', lexema: 'fimse', tipo: 'fimse'},
    'repita': {classe: 'repita', lexema: 'repita', tipo: 'repita'},
    'fimrepita': {classe: 'fimrepita', lexema: 'fimrepita', tipo: 'fimrepita'},
    'fim': {classe: 'fim', lexema: 'fim', tipo: 'fim'},
    'inteiro': {classe: 'inteiro', lexema: 'inteiro', tipo: 'inteiro'},
    'literal': {classe: 'literal', lexema: 'literal', tipo: 'literal'},
    'real': {classe: 'real', lexema: 'real', tipo: 'real'},
}

export function scanner(text: string) {
    //vai ler um arquivo, a cada caractere faz as transições, ao encontrar um token, retorna ele e volta pro zero.
    //duvidas quanto a quando parar de ler, se ao retornar o primeiro token já para até ser chamado novamente...
    //no video fala que ainda n vai declarar se é inteiro, real... mas no descritivo do trabalho pede isso no retorno do scanner

    let {lexema, lastState} = readText(text, states['initial'])

    return printAnswer(lexema, lastState)

}

function checkFinalState(state: any, finalState: any) {
    return state in finalState
}

function printAnswer(word: string, lastState: string) {
    const isFinalState = checkFinalState(lastState, states['final'])
    if (isFinalState) {
        console.log(states['final'][lastState])
        return true
    } else {
        console.log('Lexema não reconhecido', word)
        return false
    }

}


function readText(text: string, initialState: string) {
    const textAsArray = text.split('')
    let lexema = ''
    let state = initialState
    for (let caractere of textAsArray) {
        //reconhece que a palavra acabou com espaço, @todo avaliar se isso pode e  quais outros indicadores de fim da palavra
        if (caractere == ' ') break
        lexema += caractere
        state = readValueReturnNewState(caractere, state)
        if (state == 'qErro') break
    }
    return {lastState: state, lexema}

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
        case ALPHABET.includes(value):
            return 'ALPHABET'
        default:
            return 'ERRO'

    }

}

function readValueReturnNewState(value: string, state: string) {
    const input = turnValueInSomeGeneralType(value)
    console.log(input)
    let nextState = states[state][input]
    if (!nextState) {
        console.log('Entrada inválida', input)
        return 'qErro'
    }
    return nextState
}
