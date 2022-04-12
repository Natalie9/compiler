export interface IError{
    type: typeErros,
    position?: Array<number>,
    message: string
}

export enum typeErros {
    semantic= 'Semântico',
    lex = 'Léxico',
    sintatic = 'Sintático'
}
