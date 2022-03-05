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
    console.log({token})
    console.log({stack})
    const topOfStack = stack[stack.length - 1]
    // (3) seja s o estado no topo da pilha;
    const s = topOfStack
    const a = token.classe.toLowerCase()
    console.log({s, a})
    const resultTable = ACTION_TABLE[s][a]
    console.log({resultTable})
    let action = resultTable.toString().slice(0, 1)
    let t = resultTable.slice(1, action.length + 2)
    console.log({action, t})
    if(action == 'S'){
        // (5) empilha t na pilha;
        stack.push(t)
        // (6) seja a o próximo símbolo da entrada; volta pro while
        return
    }
    else if(action == 'R'){
        // A->beta
        const rule = RULES[t].split('->')
        console.log({rule})
        const A = rule[0]
        const beta = rule[1].split(' ')

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
        return rule.join('->')
    }
    else if(action == 'ACC'){
        //@todo e se aceitar antes de terminar de ler o código?
        return 'aceito'
    }
    else {
        // @todo rotina
        return 'erro'
    }


}

main()
