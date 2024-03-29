export const PT_V = ";"
export const QUOTES = ['"', "'", '"']
export const UNDERLINE = "_"
export const LESS = "<"
export const MORE = ">"
export const DOT = "."
export const PLUS = "+"
export const MINUS = "-"
export const ASTERISK = "*"
export const SLASH = "/"
export const EXPONENTIAL = ["E", "e"]
export const OPM = [PLUS, MINUS, ASTERISK, SLASH]
export const EQUAL = "="
export const EOF = "EOF"
export const AB_P = "("
export const FC_P = ")"
export const DIGIT = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
export const LETTER = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
]
export const CARACTERES = ["{", "}", LESS, MORE, EQUAL, ...OPM, DOT, ",", PT_V, ":", "!", "?", "\\", AB_P, FC_P, "[", "]", UNDERLINE, ...QUOTES]
export const ALPHABET = [...DIGIT, ...LETTER, ...CARACTERES, EXPONENTIAL]
export const newLine = '\n'
export const blank = [" ", "   ", newLine, "        ", " ", "   ", "\r"]

//@todo colocar letras maiusculas no alfabeto

export let symbolTable = {
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
    'real': {classe: 'real', lexema: 'real', tipo: 'real'}
}


