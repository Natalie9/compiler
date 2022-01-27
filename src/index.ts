import {states} from './statesTransitions'
import {isNumber} from "./utils/validations";
import {IToken} from "./models/Token";

let TOKEN = {'word': {classe: '', lexema: '', tipo: ''} as IToken}
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
    if(isFinalState) {
        console.log(states['final'][lastState])
        return true
    } else {
        console.log('Lexema não reconhecido', word)
        return false
    }

}


function readText(text: string, initialState: any) {
    const textAsArray = text.split('')
    let lexema = ''
    let state = initialState
    for (let caractere of textAsArray) {
        //reconhece que a palavra acabou com espaço, @todo avaliar se isso pode e  quais outros indicadores de fim da palavra
        if (caractere == ' ') break
        lexema += caractere
        state = readValueReturnNewState(caractere, state)
        if(state== 'qErro') break
    }
    return {lastState: state, lexema}


}

function turnValueInSomeGeneralType(value: any) {
    //todo: colocar mais tipos genéricos, exemplo letra

    if (isNumber(value))
        return 'number'
    else if (value == ' ')
        return 'blank'
    else return value

}

function readValueReturnNewState(value: any, state: any) {
    const input = turnValueInSomeGeneralType(value)
    console.log(input)
    let nextState = states[state][input]
    if (!nextState) {
        console.log('Entrada inválida', input)
        return 'qErro'
    }
    return nextState
}
