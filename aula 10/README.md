## Aula 10 - Configurar e utilizar TypeScript em projetos NodeJS

### Iniciando um Projeto NodeJS

```bash
  # Fast Init com configurações default de projeto.
  npm init -y

  # Init personalizado de campos de configuração.
  npm init
```

### Adicionando o TS

```bash
  # -D pois é uma dependência de desenvolvimento, uma vez que no final do projeto tudo vira JavaScript de qualquer forma.
  npm install -D typescript
```

### Rodando o .ts

```json
  "scripts": {
    "dist": "npx tsc src/index.ts",
    "start:dev":"npm run dist && node src/index.js"
  },
```

O Node roda JS, o TS serve apenas para o desenvolvedor facilitando o cilco de vida de desenvolvimento, então por esse motivo devemos realizar uma tradução de TS -> JS.

Para executar um .ts utilizamos o npx file.ts para conseguirmos realziar essa execução de um arquivo TypeScript.

NPX -> NPM EXECT
TSC -> Translate de TS para JS

Após a tradução conseguimos de fato executar o JS utilizando nosso Node JS.


### Facilitando o processo de Transpilação

Para não ter de ficar traduzindo, compilando e executando arquivos TS de forma repetitiva, ainda gerando arquivos duplicados. Podemos definir um arquivo de configuração para automatizar e normalizar o processo.

Lembrando que o TS só importa para o Dev, por isso podemos configurar o seu comportamento para facilitar.

#### TSCONFIG

```bash
  npx tsc --init
```

Aqui podemos definir as instruções de compilação de TS para JS de forma automatizada.

```json
{
  "compilerOptions": {
    "target": "ES6", // Qual padrão JS vamos compilar para
    "module": "CommonJS", // Qual sistema de módulos
    "outDir": "./dist", // Onde vai ficar os arquivos transpilados
    "strict": true, // Ativar verificações estritas
    "esModuleInterop": true, // Deixar compátivel o module além do common JS
  }
}
```

Dessa menira no package.json podemos deixar apenas com o comando dist, uma vez que temos tudo declarado e configurado no arquivo de configuração do TS.

```json
  "scripts": {
    "dist": "npx tsc",
    "start:dev": "npm run dist && node ./dist/index.js
  },
```
Assim apenas utilizando o npm run dist, geramos um build no diretório de distribuição com os arquivos finais traduzidos para JS.

Mas ainda sim toda vez que realizarmos qualquer mudança será necessário uma recompilação do projeto, utilizando essas configurações definidas.

#### TSX (Typescript Executable)

Existe um pacote que "transforma" nosso node JS em um node Ts que por sua vez consegue realizar a execução de arquivos TypeScript de forma direta, sem a necessidade da Transpilaçao (Tradução e Compilação).

```bash
  # Instalando esse depenência em ambiente de desenvolvimento apenas
  npm install -D tsx
```

Assim conseguimos que nosso Node execute arquivos TypeScript, agora atualizando o package.json

```json
  "scripts": {
    "dist": "npx tsc",
    "start:dist": "npm run dist && node ./dist/index.js",
    "start:dev": "tsx src/index.ts",
    "start:dev:watch" : "tsx --watch src/index.ts"  
    },
```

### Outros pacotes que fazem essa tradução

#### NPM Trends

Um site que conseguimos comparar um pacotes um com o outro que fazem a mesma coisa, conseguimos observar qual está sendo mais utilizado.


### Extra

#### O que colocar no seu tsconfig.json 

```json
{
  "compilerOptions": {

    "target": "ESNext",                          // Versão do JS de destino (ex: ES5, ES6/ES2015, ES2022, ESNext)
    "lib": ["DOM", "DOM.Iterable", "ESNext"],   // Bibliotecas de tipos embutidas a incluir no escopo global
    "jsx": "react-jsx",                          // Controla como o JSX é emitido (ex: 'preserve', 'react', 'react-jsx')
    "experimentalDecorators": true,              // Habilita suporte experimental a decorators antigos (estilo Angular/NestJS)
    "emitDecoratorMetadata": true,               // Emite metadados de tipo para decorators (necessário para NestJS/TypeORM)

    "strict": true,                              // Ativa todas as checagens estritas listadas abaixo de uma só vez
    "noImplicitAny": true,                       // Bloqueia expressões e declarações que assumem 'any' implicitamente
    "strictNullChecks": true,                    // Garante que 'null' e 'undefined' sejam tratados como tipos separados
    "strictFunctionTypes": true,                 // Checa de forma estrita a contravariância de parâmetros de funções
    "strictBindCallApply": true,                 // Garante que os métodos .bind, .call e .apply usem os tipos corretos
    "strictPropertyInitialization": true,        // Exige que propriedades de classes sejam inicializadas no construtor
    "noImplicitThis": true,                      // Emite erro se o 'this' for inferido implicitamente como 'any'
    "useUnknownInCatchVariables": true,          // Altera o tipo padrão do erro no bloco 'catch' de 'any' para 'unknown'

    "module": "NodeNext",                        // Especifica o sistema de módulos (ex: 'CommonJS', 'ESNext', 'NodeNext')
    "moduleResolution": "NodeNext",              // Como os módulos são resolvidos (ex: 'Node', 'Bundler', 'NodeNext')
    "baseUrl": "./",                             // Diretório base para resolver importações absolutas não-relativas
    "paths": {                                   // Cria apelidos (aliases) para facilitar caminhos de importação
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"]
    },
    "rootDirs": [],                              // Trata múltiplos diretórios de origem como uma única pasta virtual
    "typeRoots": ["./node_modules/@types", "./src/types"], // Lista de pastas onde o TS procurará definições de tipos (*.d.ts)
    "types": ["node", "jest"],                   // Pacotes de tipos específicos a incluir globalmente sem precisar importar
    "allowSyntheticDefaultImports": true,        // Permite 'import x from "y"' mesmo se 'y' não exportar um 'default'
    "esModuleInterop": true,                     // Cria helpers para compatibilidade total entre ES Modules e CommonJS

    "outDir": "./dist",                          // Pasta de destino para os arquivos JavaScript gerados
    "rootDir": "./src",                          // Especifica o diretório raiz de entrada para controlar a estrutura do 'outDir'
    "noEmit": false,                             // Se 'true', desativa a geração de arquivos JS (útil ao usar Vite, Babel, esbuild)
    "removeComments": true,                      // Remove comentários do código final compilado
    "sourceMap": true,                           // Gera arquivos .js.map para debugar o código TypeScript original no navegador/IDE
    "declaration": true,                         // Cria arquivos de definição de tipos correspondentes (.d.ts)
    "declarationMap": true,                      // Cria sourcemaps para os arquivos .d.ts gerados
    "emitDeclarationOnly": false,                // Emite apenas arquivos .d.ts de definição de tipo, sem gerar código JavaScript
    "newLine": "lf",                             // Força um estilo de quebra de linha específico nos arquivos gerados (CRLF ou LF)
    "importHelpers": true,                       // Importa funções auxiliares de emulação (como __extends) do pacote 'tslib'
    "downlevelIteration": true,                  // Força iteração robusta para estruturas antigas em targets anteriores a ES6

    "noUnusedLocals": true,                      // Gera erro se existirem variáveis locais declaradas que nunca foram lidas
    "noUnusedParameters": true,                  // Gera erro se funções contiverem parâmetros não utilizados
    "noFallthroughCasesInSwitch": true,          // Impede queda acidental de blocos 'case' no 'switch' sem a palavra 'break'
    "noImplicitReturns": true,                   // Garante que todas as ramificações de uma função retornem explicitamente um valor
    "noUncheckedIndexedAccess": true,            // Adiciona 'undefined' em acessos via índice em arrays ou objetos dinâmicos
    "noPropertyAccessFromIndexSignature": true,  // Exige notação de colchetes obj["prop"] para propriedades não declaradas explicitamente
    "allowUnreachableCode": false,               // Emite avisos se houver código inacessível (ex: após um return)
    "allowUnusedLabels": false,                  // Bloqueia o uso de labels de loop que nunca são referenciadas

    "incremental": true,                         // Salva cache de compilação em arquivo .tsbuildinfo para builds subsequentes rápidos
    "tsBuildInfoFile": "./.tsbuildinfo",         // Caminho customizado para o arquivo de cache incremental do compilador
    "composite": true,                           // Garante que o projeto possa ser referenciado por outros projetos TypeScript

    "allowJs": true,                             // Permite que arquivos JavaScript (.js e .jsx) sejam aceitos e copilados
    "checkJs": false,                            // Habilita checagem e avisos de erros de tipo dentro de arquivos JavaScript

    "resolveJsonModule": true,                   // Permite importar diretamente arquivos com extensão .json como objetos tipados
    "isolatedModules": true,                     // Garante que cada arquivo possa ser transpilado com segurança de forma independente
    "forceConsistentCasingInFileNames": true,    // Garante que nomes de arquivos sigam estritamente o mesmo case de maiúsculas/minúsculas
    "skipLibCheck": true                         // Pula a checagem de tipos dentro de arquivos de definição das dependências (node_modules)
  },
  
  // Permite herdar configurações base de outro arquivo tsconfig ou pacotes npm compartilhados
  "extends": "@tsconfig/node22/tsconfig.json",

  // Lista estrita e explícita dos arquivos que serão os únicos compilados pelo TypeScript
  "files": [
    "src/index.ts",
    "src/global.d.ts"
  ],

  // Padrões de glob para pastas e arquivos que devem ser incluídos na compilação do projeto
  "include": [
    "src/**/*",
    "tests/**/*"
  ],

  // Padrões de arquivos e pastas que devem ser totalmente ignorados pelo compilador
  "exclude": [
    "node_modules",
    "dist",
    "**/*.spec.ts"
  ],

  // Aponta para outros subprojetos/subpastas em arquiteturas de Monorepo (Project References)
  "references": [
    { "path": "./packages/core" },
    { "path": "./packages/ui" }
  ]
}
```

#### Setup rápido para trabalhar com TS em projetos Node JS

```bash
  # Iniciar projeto Node JS
  npm init -y

  # Dependências de desenvolvimento para utilização/execução de TS
  npm i typescript tsx tsup -D

  # Criação do arquivo de tradução para build do TS -> JS
  npx tsc --config
```

Agora os NPM Scripts padrões para projetos

```json
    "scripts": {
    "dist": "npx tsc",
    "start:dist": "npm run dist && node ./dist/index.js",
    "start:dev":"tsx /src/index.ts",
    "start:watch":"tsx --watch /src/index.ts",
  },
```

#### One Command Start

```bash
  npm init -y typescript -D
```