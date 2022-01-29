//@TODO vou TRATAR A ENTRADA INVÁLIDA SOMENTE PEGANDO O UNDEFINED?

export const states: any = {
    'Q0': {
        'DIGIT': 'Q1',
        'QUOTES': 'Q6',
        "LETTER": 'Q9',
        'OPM': 'Q18',
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
        'EXPONENTIAL': 'Q3'
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
        'DIGIT': 'Q7',
        'LETTER': 'Q7',
        'UNDERLINE': 'Q7',
        'LESS': 'Q7',
        'MORE': 'Q7',
        'DOT': 'Q7',
        'PLUS': 'Q7',
        'MINUS': 'Q7',
        'EXPONENTIAL': 'Q7',
        'OPM': 'Q7',
        'EOF': 'Q7',
        'EQUAL': 'Q7',
        'AB_P': 'Q7',
        'FC_P': 'Q7',
        'PT_V': 'Q7',
        'ALPHABET': 'Q7',
        'BLANK': 'Q7',
    },
    "Q7": {
        'DIGIT': 'Q7',
        'LETTER': 'Q7',
        'UNDERLINE': 'Q7',
        'LESS': 'Q7',
        'MORE': 'Q7',
        'DOT': 'Q7',
        'PLUS': 'Q7',
        'MINUS': 'Q7',
        'EXPONENTIAL': 'Q7',
        'OPM': 'Q7',
        'EOF': 'Q7',
        'EQUAL': 'Q7',
        'AB_P': 'Q7',
        'FC_P': 'Q7',
        'PT_V': 'Q7',
        'ALPHABET': 'Q7',
        'BLANK': 'Q7',
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

    'INITIAL': 'Q0',
    'FINAL': {
        'Q1': {classe: 'NUM', tipo: 'inteiro'},
        'Q2': {classe: 'NUM', tipo: 'real'},
        'Q5': {classe: 'NUM', tipo: 'real'},
        'Q8': {classe: 'LIT', tipo: 'literal'},
        'Q9': {classe: 'ID', tipo: 'NULO'},
        'Q10': {classe: 'EOF', tipo: 'NULO'},
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
