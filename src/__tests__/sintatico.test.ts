import {checkAction} from "../sintatico";

describe('Testes analisador sintático', ()=>{
    it('Test Reduce', ()=>{
        const token ={classe: 'leia'}
        const state = '18' //R3
        const stack = [ 2, 0, state]

        const rule = checkAction(token, stack)
        expect(rule).toEqual('V->varincio LV')

    })
})
