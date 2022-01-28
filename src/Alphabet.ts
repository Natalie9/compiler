
export const PT_V = [";"]
export const QUOTES = ['"',"'"]
export const UNDERLINE = "_"
export const LESS = "<"
export const MORE = ">"
export const DOT = "."
export const PLUS = "+"
export const MINUS = "-"
export const EXPONENTIAL = ["E", "e"]
export const OPM = [PLUS, MINUS, "*", "/"]
export const EQUAL = "="
export const EOF = "EOF"
export const AB_P = "("
export const FC_P = ")"
export const DIGIT = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
export const LETTER = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
export const CARACTERES = ["{", "}", LESS, MORE, EQUAL, ...OPM, DOT, ",", ...PT_V, ":", "!", "?", "\\", AB_P, FC_P, "[", "]", UNDERLINE, ...QUOTES]
export const ALPHABET = [...DIGIT, ...LETTER, ...CARACTERES, EXPONENTIAL]

// //Constante numérica
// const NUM = DIGIT
// //Constante Literal
// //@todo como separar uma constante literal de um id
// const LIT = ['"', '"']
// //Identificador
// const ID = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// //Comtentário
// // @todo nao retornar token
// const com = ["{", "}"]
// //Final de arquivo
// const eof = ["eof"]
// //Operadores relacionais
// const OPR = ['<', '>', '>=', '<=', '=', "<>"]
// //atribuição
// const RCB = ['<-']
// //Operadores aritiméticos
// const OPM = ["+", "-", "*", "/"]
// //Abre parênteses
// const AB_P = ["("]
// //Fecha parênteses
// const FC_P = [")"]
// //Ponto e vírgula
// const PT_V = [";"]
//Erro, qualquer simbolo diferente @todo tratar
//espaços, tab, saltos de linha..
//@todo tratar para ignorar
// const blank = [" ", "   ", "\n"]
// switch (true) {
//     case NUM.includes(value):
//         return 'NUM'
//     case LIT.includes(value):
//         return 'LIT'
//     case ID.includes(value):
//         return 'ID'
//     case com.includes(value):
//         return 'com'
//     case eof.includes(value):
//         return 'eof'
//     case OPR.includes(value):
//         return 'OPR'
//     case RCB.includes(value):
//         return 'RCB'
//     case OPM.includes(value):
//         return 'OPM'
//     case AB_P.includes(value):
//         return 'AB_P'
//     case FC_P.includes(value):
//         return 'FC_P'
//     case PT_V.includes(value):
//         return 'PT_V'
//     case blank.includes(value):
//         return 'black'
//     default:
//         return 'ERRO'
// }
