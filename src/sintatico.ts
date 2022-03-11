import {scanner} from "./index";
import {ACTION_TABLE, GOTO_TABLE, RULES} from "./utils/tables";

// (1) Seja a o primeiro símbolo de w$;
// (2) while { /*Repita indefinidamente*/
//     (3) seja s o estado no topo da pilha;
// (4) if (ACTION [s,a] = shift t ) {
//     (5) empilha t na pilha;
//     (6) seja a o próximo símbolo da entrada;
// (7) }else if (ACTION [s,a] = reduce A-> β ) {
//     (8) desempilha | β | símbolos da pilha (a quantidade de símbolos de beta);
//     (9) faça o estado t agora ser o topo da pilha;
//     (10) empilhe GOTO[t,A] na pilha;
//     (11) imprima a produção A-> β ;
//     (12) } else if (ACTION [s,a] = accept ) pare; /* a análise terminou*/
// (13) else invocar uma rotina de recuperação do erro;


async function  main(){
    const args = process.argv;
    const scan = scanner(args[2])

    const initialState = '0'
    let stack = [initialState]
    let done = false
    console.log("stack, entrada, s, a, beta, t, A, action")
    while (!done) {
        let response = await scan.next()
        done = true
        let token = response.value
        done = response.done

        const result = checkAction(token, stack)
        if(result){
            console.log(result)
        }
    }
}
export function checkAction(token, stack){
    let beta
    let A
    const topOfStack = stack[stack.length - 1]
    // (3) seja s o estado no topo da pilha;
    const s = topOfStack
    const a = token.classe.toLowerCase()
    const resultTable = ACTION_TABLE[s][a]
    let action = resultTable.toString().slice(0, 1)
    let t = resultTable.slice(1, action.length + 2)
    if(action == 'S'){
        // (5) empilha t na pilha;
        stack.push(t)
        // (6) seja a o próximo símbolo da entrada; volta pro while
        print({stack, entrada: token.lexema, s, a, beta, A , t, action: resultTable })
        return
    }
    else if(action == 'R'){
        // A->beta
        const rule = RULES[t].split('->')
        A = rule[0]
         beta = rule[1].split(' ')

        // (8) desempilha | β | símbolos da pilha (a quantidade de símbolos de beta);
        beta.forEach(()=>{
            stack.pop()
        })
        // (9) faça o estado t agora ser o topo da pilha;
        t = stack[stack.length - 1]
        // (10) empilhe GOTO[t,A] na pilha;
        const goto = GOTO_TABLE[t][A]
        stack.push(goto)
        // (11) imprima a produção A-> β ;
        print({stack, entrada: token.lexema, s, a, beta, t, A, action: resultTable })
        return rule.join('->')
    }
    else if(action == 'ACC'){
        //@todo e se aceitar antes de terminar de ler o código?
        return 'aceito'
    }
    else {
        print({stack, entrada: token.lexema, s, a, beta, A , t, action: resultTable })
        // @todo rotina
        return 'erro'
    }


}
function print({stack, entrada, s, a, beta, t, A, action}){

    console.log(stack, entrada, s, a, beta, t, A, action)
}

main()
