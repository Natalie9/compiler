import {scanner} from "./index";
import {ACTION_TABLE, GOTO_TABLE, RULES, ERRORS, semanticRules} from "./utils/tables";
const tree = {}
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


async function main() {
    const args = process.argv;
    const scan = scanner(args[2])
    const initialState = '0'
    let stack = [initialState]
    let stackSemantic = []
    let done
    let response = await scan.next()

    // (1) Seja a o primeiro símbolo de w$;
    let token = response.value
    done = response.done

    // (2) while { /*Repita indefinidamente*/
    while (!done) {
        const topOfStack = stack[stack.length - 1]
        // (3) seja s o estado no topo da pilha;
        const s = topOfStack
        let a = token.classe.toLowerCase()
        const resultTable = ACTION_TABLE[s][a]
        let action = resultTable.toString().slice(0, 1)
        let t = resultTable.slice(1, action.length + 2)
        if (action == 'S') {
            // (5) empilha t na pilha;
            stack.push(t)
            // semnatico: empilha token com seus atributos
            stackSemantic.push(token)
            // (6) seja a o próximo símbolo da entrada; volta pro while
            response = await scan.next()
            done = response.done
            token = response.value
        } else if (action == 'R') {
            reduce(t, stack)
            handleSemantic({t, token, stackSemantic})
        } else if (action == 'A') {
            console.log('ACEITO')
            done = true
        } else if (action == "E") {
            printError(action, s)
            response = await scan.next()
            done = response.done
            token = response.value
        }

    }
}
function handleSemantic({t, token, stackSemantic}){
    semanticRules[t]?.semantic({t, token, stackSemantic})
}
function printError(action, s) {
    let productions = ERRORS[action + s]
    console.log(`Erro sintático - espera-se uma das produções a seguir: ` + productions)
}

function reduce(t, stack) {
    // A->beta
    const rule = RULES[t].split('->')
    let A = rule[0]
    let beta = rule[1].split(' ')
    // (8) desempilha | β | símbolos da pilha (a quantidade de símbolos de beta);
    beta.forEach(() => {
        stack.pop()
    })

    // (11) imprima a produção A-> β ;
    console.log(t, rule.join('->'))

    // (9) faça o estado t agora ser o topo da pilha;
    t = stack[stack.length - 1]
    // (10) empilhe GOTO[t,A] na pilha;
    const goto = GOTO_TABLE[t][A]
    stack.push(goto)

}

main()


//no reduce, fazer as regras semanticas
//produzir o arquivo PROGRAMA.C
//No programa, colocar libs necessárias pra escução de um código em C
// mapear regras sintaticas e semanticas
//          colocar as que fizemos
