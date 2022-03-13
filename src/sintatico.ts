import {scanner} from "./index";
import {ACTION_TABLE, GOTO_TABLE, RULES, ERRORS} from "./utils/tables";

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
    let done
    let beta
    let A
    let response = await scan.next()
    let token = response.value
    let position
    done = response.done
    console.log("stack, entrada, s, a, beta, t, A, action")
    while (!done) {
        const topOfStack = stack[stack.length - 1]
        // (3) seja s o estado no topo da pilha;
        const s = topOfStack
        let a = token.classe.toLowerCase()
        console.log({s, a})
        const resultTable = ACTION_TABLE[s][a]
        let action = resultTable.toString().slice(0, 1)
        let t = resultTable.slice(1, action.length + 2)
        if(action == 'S'){
            // (5) empilha t na pilha;
            stack.push(t)
            // (6) seja a o próximo símbolo da entrada; volta pro while
            response = await scan.next()
            token = response.value
        }
        else if(action == 'R'){
            reduce(t,A,beta,stack)
        }
        else if(action == 'ACC'){
            //@todo e se aceitar antes de terminar de ler o código?
            console.log( 'aceito')
            done = true
        }
        else if(action == "E"){
            printError(action, s)
            //@todo: recuperar a leitura e mostrar posicao erro
        }

    }
}

function print({stack, entrada, s, a, beta, t, A, action}){
    console.log(stack, entrada, s, a, beta, t, A, action)
}

function printError(action, s){
    let productions = ERRORS[action+s]
    console.log(`Erro sintático - espera-se uma das produções a seguir: `+ productions)
}

function reduce(t,A,beta,stack){
    // A->beta
    const rule = RULES[t].split('->')
    console.log(t, RULES[t])
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
}

main()
