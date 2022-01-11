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
const stateMachine = {
    'q1': {'a': 'q2', 'b': 'q1'},
    'q2': {'a': 'q2', 'b': 'q3'},
    'q3': {'a': 'q3', 'b': 'q3'},
    'q4': {'a': 'q4', 'b': 'q4'},
    'initial': 'q1',

    'final': 'q3'
}

function scanner() {
    let word1 = 'baabab'
    let word2 = 'bbbba'
    printAnswer(readChain(word1, stateMachine['initial']), stateMachine['final'])
    printAnswer(readChain(word2, stateMachine['initial']), stateMachine['final'])
}

scanner()

function printAnswer(state, finalState){
    if (state === finalState) console.log('reconhece')
    else console.log('erro')
}

function readChain(chain, initialState) {
    let state = initialState
    chain.split('').map((letter) => {
        state = readValueReturnNewState(letter, state)
    })
    return state
}

function readValueReturnNewState(value, state) {
    let nextState = stateMachine[state][value]
    return nextState
}
