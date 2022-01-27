export function whatType(value: any){
    return typeof value
}
export function returnType(value:any){
    return isNumber(value) ? 'number' : 'string'
}
export function isNumber(value: any){
    return !!Number(value)
}

