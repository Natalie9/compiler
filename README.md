Para rodar os testes do projeto rode: 

`yarn`

para instalar as dependências 

`yarn dev`

para executar o código

## Notas Gerais e comentários

### Objetivo: analisar um código fonte identificando possíveis erros e gerar um código objeto. 

Dificuldades: analisar um código fonte, identificar o máximo de erros possíveis, e então gerar um código objeto, sem erros, o mais otimizado possível e de forma rápida pq o programador não quer esperar muito na compilação. 

O projeto de um compilador é muitas vezes ilustrado como um dragão. Um bicho difícil de lidar. Com muitas cabeças e desafios enormes. Eu não poderia concordar mais. 

Realizar a análise de um código fonte não é trivial. O compilador não precisa identificar se a lógica daquele código funciona (diferentemente da gente ao analisar o PR do coleguinha), mas precisa validar se aquele código foi escrito de acordo com as regras da linguagem utilizada. 

E avaliar essas regras não é simplesmente um checklist. Existem muitas etapas e ferramentas. 

 A começar no Analisador Léxico que avalia cada caractere afim de identificar que padrão aqueles caracteres representam, se são uma palavra reservada, uma declaração de variável, um número ou um fechamento de linha (o esquecido ponto e vírgula ;). 

Esses padrões formam tokens que possuem um significado naquele contexto. Os tokens são como pecinhas, cada uma com suas características e lugar reservado no quebra-cabeça final.

E o que dita o lugar de cada peça é a Gramática daquela linguagem. Daí entra o Analisador Sintático que valida se as expressão obedecem a gramática. 
Como por exemplo se após o início de uma estrutura de repetição o programador 

abriu chaves { 

escreveu os comandos;

e fechou chaves }. 

Por fim no Analisador Semântico avalia se as coisas fazem sentido, se não está acontecendo a atribuição de um texto numa variável numérica, ou mesmo se aquela variável foi declarada. 

Entre todas essas análises, caso haja a identificação de um erro o compilador deve sinalizar da forma mais clara possível qual o erro encontrado e o local, além de tentar reestabelecer a leitura e continuar analisando o restante do código sem a interferência do erro (assim vem uma mensagem de erro maior apontando o máximo possível de erros e não temos a decepção de consertar um, compilar novamente e encontrar mais 20 😢). 

E no final de toda essa trajetória o compilador deve construir um código objeto em uma linguagem mais baixo nível, da forma mais otimizada possível e sem demorar muito pois programador não gosta de esperar. 

A área de compiladores aplica estudos de diversas outras áreas como a Matemática, as Linguagens, as Estruturas de Dados entre outras. Grafos, pilhas, Autômatos finitos e Gramáticas são só algumas ferramentas utilizadas na construção de um compilador.

São muitas etapas crucias para o desenvolvimento de um compilador eficiente. E cada etapa requer atenção e muito estudo pois pode definir o sucesso ou não daquele compilador. 

Na disciplina de Compiladores ministrada pela professora Déborah desse semestre eu e a Isabella Beatriz construímos nosso primeiro compilador, que não é dos mais eficientes mas nos trouxe vários insights até mesmo para analisar os compiladores e linguagens que escolhemos trabalhar no dia a dia. 

### Grandes fases: front-end e back-end 

No front-end são realizadas as análises do códigos, divididas em 3 etapas 

## Análise Léxica 

Onde a estrutura do que está escrito é avaliado. É a única parte que entra em contato direto com o código

Percorre caractere por caracter do código fonte buscando identificar padrões que formem tokens. 

Token é um objeto contendo informações do que foi identificado. Possuí um conjunto de atributos como classe, lexema e tipo. 

**Classe** é a classificação daquele token (veremos melhor ao falar da gramática na análise semântica) 

**Lexema** é realmente os caracteres escritos que formaram uma "palavra”

**Tipo** é um tipo dentro daquela classe, exemplo a classe número que pode ter tipo inteiro ou real. 

Por exemplo 

```jsx
inteiro numCasa = 12;
escreva("a casa número"); 
escreva(a);
```

Irá percorrer cada caracter e identificar que "inteiro" é um literal, mas pertence as palavras reservadas da linguagem. 

"numCasa" é um literal. 

"=" é um simbolo de atribuição. 

12 são 2 digitos que constituem um número do tipo inteiro. 

; é um simbolo de encerramento de linha 

"escreva" é um literal, mas do conjunto de palavras reservadas. 

Essa identificação ocorre por meio de um automato finito, que a cada caractere que le transita entre estados, e ao entrar em um estado final reconhece aquele padrão e retorna a calsse do token correspondente. 

Assim, o analisador léxico percorre todo o código e identifica os tokens presentes. 

com esses tokens o Analisador Sintático começa o trabalho 

O analisador Sintático recebe cada token por vez e analisa segundo a gramática. 

Gramática é um conjunto e regras que forma uma linguagem. 

Exemplo 

```jsx
A→ escreva AB_P LITERAL FC_P PT_V 
```

estabelece a regra **A** que estrutura o comando 

`escreva("hello word");`

assim ao receber os tokens 

`escreva AB_P LITERAL FC_P PT_V` 

sequencialmente o analisador léxico identifica que corresponde corretamente a regra A e é um comando aceito. 

caso tenhamos esquecido de fechar o parenteses ele acusaria que a estrutura está incorreta.

Essa análise pode ser apoiada por meio de automatos e tabelas que criam estados para se transitar e reconhecer se a estrutura é aceita ou há algum erro. 

Dessa forma já conseguimos analisar se os termos estão escritos de forma correta e se as estruturas obedecem as regras da linguagem. 

Mas ainda possuem análises necessárias e mais implícitas, é aí que o Analisador Semântico entra. 

Analisar a Semântica é mais "pesssoal" de cada linguagem. 

É o momento para se analisar por exemplo se as atribuições a uma variável corresponde ao tipo dela (caso seja uma linguagem fortemente tipada). Ou mesmo se aquela variável foi declarada daquele escopo. 

Não conseguimos definir regras comuns a todas as linguagens para realizar a análise semântica, mas possuímos artifícios para realizar essa análise. 

Lá encima falei sobre a Gramática, um conjunto de regras que estabelece uma linguagem. 

Podemos utilizar dessa gramática e criar a Gramática anotada. 

Associamos a cada regra um conjunto de validações a serem feitas. Podemos também incluir novos atributos aos tokens para agregar mais informações neles
Assim ao realizar as ações de verificação da gramática já realizamos essas validações semânticas e garantimos por exemplo que um literal não vai ser atribuído a uma variável do tipo inteiro. 

Durante todas essas análises construímos uma árvore sintática em memória, e com essa árvore realizamos a escrita do novo código, o código objeto, o resultado final de um compilador.
