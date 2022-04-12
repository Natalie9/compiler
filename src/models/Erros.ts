export interface IError{
    type: typeErros,
    position?: object,
    message: string
}

export enum typeErros {
    semantic= 'Semântico',
    lex = 'Léxico',
    sintatic = 'Sintático'
}
