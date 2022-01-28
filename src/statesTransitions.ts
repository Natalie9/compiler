//@TODO OVU TRATAR A ENTRADA INVÁLIDA SOMENTE PEGANDO O UNDEFINED? OU LIGO O ESTADO DE ERRO EM TODAS AS SAIDAS

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
        'ERRO': 'Q22'
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
    'Q6': {'ALPHABET': 'Q7'},
    "Q7": {
        'ALPHABET': 'Q7',
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
        'Q8': {classe: 'LIT'},
        'Q9': {classe: 'ID'},
        'Q10': {classe: 'EOF'},
        'Q11': {classe: 'OPR'},
        'Q12': {classe: 'OPR'},
        'Q13': {classe: 'OPR'},
        'Q14': {classe: 'OPR'},
        'Q15': {classe: 'OPR'},
        'Q16': {classe: 'OPR'},
        'Q17': {classe: 'RCB'},
        'Q18': {classe: 'OPM'},
        'Q19': {classe: 'AB_P'},
        'Q20': {classe: 'FC_P'},
        'Q21': {classe: 'PT_V'},
        'Q22': {classe: 'ERROR', lexema: 'NULO', 'tipo': 'NULO'}
    },

}
