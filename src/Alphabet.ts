
const PT_V = [";"]
const QUOTES = ['"',"'"]
const UNDERLINE = "_"
const LESS = "<"
const MORE = ">"
const DOT = "."
const PLUS = "+"
const MINUS = "-"
const EXPONENTIAL = ["E", "e"]
const OPM = [PLUS, MINUS, "*", "/"]
const EQUAL = "="
export const DIGIT = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
export const LETTER = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
export const caracteres = ["{", "}", LESS, MORE, EQUAL, ...OPM, DOT, ",", ...PT_V, ":", "!", "?", "\\", "(", ")", "[", "]", UNDERLINE, ...QUOTES]
export const ALPHABET = [...DIGIT, LETTER, caracteres, EXPONENTIAL]

