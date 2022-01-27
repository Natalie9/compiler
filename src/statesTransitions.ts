const lineNumber = {
    initNumber: {'number': 'q1'},
    'q1': {
        'number': 'q1',
        '.': 'q2',
        'e': 'q3',
        'E': 'q3'
    },
    'q2': {
        'number': 'q2',
        'e': 'q3',
        'E': 'q3'
    },
    'q3': {
        'number': 'q5',
        '+': 'q4',
        '-': 'q4'
    },
    'q4': {'number': 'q5'},
    'q5': {'number': 'q5'},

}

export const states: any = {
    'q0': {...lineNumber['initNumber']},
    ...lineNumber,
    'initial': 'q0',
    'final': {
        'q1': {classe: 'NUM', tipo: 'inteiro'},
        'q3': {classe: 'NUM', tipo: 'real'},
        'q2': {classe: 'NUM', tipo: 'real'},
        'q5': {classe: 'NUM', tipo: 'real'},
        'qErro': {classe: 'ERROR', lexema: 'NULO', 'tipo': 'NULO'}
    },

}
