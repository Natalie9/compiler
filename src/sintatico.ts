import {scanner} from "./index";

// (1) Seja a o primeiro símbolo de w$;
// (2) while { /*Repita indefinidamente*/
//     (3) seja s o estado no topo da pilha;
// (4) if (ACTION [s,a] = shift t ) {
//     (5) empilha t na pilha;
//     (6) seja a o próximo símbolo da entrada;
//     (7) }else if (ACTION [s,a] = reduce A-> β ) {
//     (8) desempilha | β | símbolos da pilha (a quantidade de símbolos de beta);
//     (9) faça o estado t agora ser o topo da pilha;
//     (10) empilhe GOTO[t,A] na pilha;
//     (11) imprima a produção A-> β ;
//     (12) } else if (ACTION [s,a] = accept ) pare; /* a análise terminou*/
// (13) else invocar uma rotina de recuperação do erro;


async function  main(){
    const args = process.argv;
    let stack = ['0']
    const scan = scanner(args[2])
    let done = false
    while (!done) {
        let response = await scan.next()
        done = true
        const topOfStack = stack[0]
        let token = response.value
        let action = ACTION_TABLE[topOfStack][token.classe]

           let option = action.toString().slice(0, 1)
           let state = action.slice(1, action.length)
           if(option == 'S'){
               stack.push(state)
               response = await scan.next()
               token = response.value
           }
           //@todo trabalhar melhor nas regras, aqui precia do lado direito da regra tbm
           else if(option == 'R'){
               // (8) desempilha | β | símbolos da pilha (a quantidade de símbolos de beta);
               //@todo quanto é beta?
               stack.pop()
               stack.push(state)
               // const goto = GOTO_TABLE[state][]

           }



    }
}
// main()
