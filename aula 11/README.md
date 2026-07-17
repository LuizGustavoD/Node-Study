## Aula 11 - Debugging com Node JS

### O que é Debuggar

Debugg é um termo utilizado, para o processo de identificar os problemas e bugs que impedem sua aplicação de funcionar corretamente. 

<b>DEPURAÇÃO</b> = Debugg

### Execução Linha-Linha

Podemos definir um brak-point para executar até um momento epecífico para análise desse momento, como valores de váriaveis e afins. Aumentando a observabilidade no ambiente de desenvolvimento.

No Package.json podemos selecionar a opção de rodar o script de start do projeto em modo de debugg para que seja parado a execuução para análise onde possui algum break-point.

Conseguimos análisar tudo que está acontecendo na nossa aplicação, como valores de variavel, retorno de funções. Podemos, além de tudo isso andar de trecho a trecho na nossa aplicação, fazendo uma análise da execução sequencial recém elaborada.

Posso executar o debugg mode pelo terminal em modo de debugg, realizando a análise das minhas várivaeis e funções.

<b>CALL STACK</b> - Pilha de chamadas, quem chamou quem.

<b>VALORES DE VÁRIAVEL</b> - valor das váriaveis 

<b>LOAD SCRIPTS</b> - Scripts carregados

<b>BREAKPOINTS</b> - BreakPoints da sua aplicação.

Com essas opções no Menu de Debugg é possível exercer um controle sobre o que, onde, quando e com quem as operações/passos estão sendo executados.

F11 - Execução linha a linha (STEP INTO)

STEP OVER - Próximo Brak 


### Launch.json

Para customizar nosso run e debugg, podemos criar um launch.json para NodeJS.

Vai ser criado dentro do diretório ./vscode o launch.json que são as configurações do VSCode para a IDE conversar com sua aplicação.

Selecionar o NODEJS: Atach to a process.

Debugg vai se anexar a um processo que estiver rodando.

Vai ser anexado o launch.json ao npm script de start:dev, automatizando o debugg mode e facilitando a sustentação da aplicação.