//@TODO vou TRATAR A ENTRADA INVÁLIDA SOMENTE PEGANDO O UNDEFINED?

import {newLine} from "./Alphabet";

export const states: any = {
    'Q0': {
        'DIGIT': 'Q1',
        'QUOTES': 'Q6',
        "LETTER": 'Q9',
        'PLUS': 'Q18',
        'MINUS': 'Q18',
        'SLASH': 'Q18',
        'ASTERISK': 'Q18',
        "EOF": "Q10",
        'LESS': 'Q11',
        'MORE': 'Q12',
        'EQUAL': 'Q15',
        'AB_P': 'Q19',
        'FC_P': 'Q20',
        "PT_V": 'Q21',
        'ERRO': 'Q22',
        'BLANK': 'Q0',
    },
    'Q1': {
        'DIGIT': 'Q1',
        'DOT': 'Q2',
        'EXPONENTIAL': 'Q7'
    },
    'Q7': {
      'DIGIT': 'Q23'
    },
    'Q2': {
        'DIGIT': 'Q2',
        'EXPONENTIAL': 'Q3'
    },
    'Q3': {
        'DIGIT': 'Q5',
        'PLUS': 'Q4',
        'MINUS': 'Q4'
    },
    'Q4': {'DIGIT': 'Q5'},
    'Q5': {'DIGIT': 'Q5'},
    'Q6': {
        'DIGIT': 'Q6',
        'LETTER': 'Q6',
        'UNDERLINE': 'Q6',
        'LESS': 'Q6',
        'MORE': 'Q6',
        'DOT': 'Q6',
        'PLUS': 'Q6',
        'MINUS': 'Q6',
        'EXPONENTIAL': 'Q6',
        'SLASH': 'Q6',
        'ASTERISK': 'Q6',
        'EOF': 'Q6',
        'EQUAL': 'Q6',
        'AB_P': 'Q6',
        'FC_P': 'Q6',
        'PT_V': 'Q6',
        'ALPHABET': 'Q6',
        'BLANK': 'Q6',
        'CARACTERES': 'Q6',
        'newLine': 'Q22',
        'QUOTES': 'Q8'
    },
    "Q8": {},
    'Q9': {
        'LETTER': 'Q9',
        'DIGIT': 'Q9',
        'UNDERLINE': 'Q9'
    },
    'Q10': {},
    'Q11': {
        'EQUAL': 'Q14',
        'MORE': 'Q16',
        'MINUS': 'Q17'
    },
    'Q12': {
        'EQUAL': 'Q13'
    },
    'Q13': {},
    'Q14': {},
    'Q15': {},
    'Q16': {},
    'Q17': {},
    'Q18': {},
    'Q19': {},
    'Q20': {},
    'Q21': {},
    'Q22': {},
    'Q23': {},

    'INITIAL': 'Q0',
    'FINAL': {
        'Q1': {classe: 'NUM', tipo: 'inteiro'},
        'Q23': {classe: 'NUM', tipo: 'inteiro'},
        'Q2': {classe: 'NUM', tipo: 'real'},
        'Q5': {classe: 'NUM', tipo: 'real'},
        'Q8': {classe: 'LIT', tipo: 'literal'},
        'Q9': {classe: 'ID', tipo: 'NULO'},
        'Q10': {classe: 'EOF', tipo: 'NULO', lexema: 'EOF'},
        'Q11': {classe: 'OPR', tipo: 'NULO'},
        'Q12': {classe: 'OPR', tipo: 'NULO'},
        'Q13': {classe: 'OPR', tipo: 'NULO'},
        'Q14': {classe: 'OPR', tipo: 'NULO'},
        'Q15': {classe: 'OPR', tipo: 'NULO'},
        'Q16': {classe: 'OPR', tipo: 'NULO'},
        'Q17': {classe: 'RCB', tipo: 'NULO'},
        'Q18': {classe: 'OPM', tipo: 'NULO'},
        'Q19': {classe: 'AB_P', tipo: 'NULO'},
        'Q20': {classe: 'FC_P', tipo: 'NULO'},
        'Q21': {classe: 'PT_V', tipo: 'NULO'},
        'Q22': {classe: 'ERROR', tipo: 'NULO', lexema: 'NULO'}
    },

}
