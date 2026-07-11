## Aula 8 - Variaveis de Ambiente em Projetos Node JS

Para não deixarmos variaveis de ambiente hardcoded em nosso código, vamos utilizar esse conceito padrão no desenvolvimento que entra em contato com informações sensiveis. 

### Dotenv file

Basta criar um .env file para assim dividirmos onde vai estar as informações que sensiveis. 

Passando na execução da aplicação onde está o .env e com permissões corretas o servidor consegue enxergar o .env

```json
  "scripts": {
    "start:dev": "node --env-file=.env --watch src/index.js"
  },
```

Dessa maneira basta utilizar no código JS.

```js
  console.log(process.env.VARIAVEL);
```

Dessa forma conseguimos estabelecer esse conexão.