const states = require("./statesTransitions");

let TOKEN = {'word': {classe: '', lexema: '', tipo: ''}}
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

function scanner(word) {
    const lastState = readChain(word, states['initial'])
    const isFinalState = checkFinalState(lastState, states['final'])
    printAnswer(word, isFinalState)
    return isFinalState
}

function checkFinalState(state, finalState) {
    return state in finalState
}

function printAnswer(word, isFinalState) {
    isFinalState ? console.log('reconhece', word) : console.log('Não reconhece', word)
}

function readChain(chain, initialState) {
    try {
        let state = initialState
        chain.split('').map((letter) => {
            state = readValueReturnNewState(letter, state)
        })
        return state
    } catch (e) {
        console.error(e)
    }


}

function readValueReturnNewState(value, state) {
    //teste
    let nextState = states[state][value]
    if (!nextState) throw 'Parameter is not a number!'; //TODO: improve throw error
    return nextState
}

module.exports = scanner
