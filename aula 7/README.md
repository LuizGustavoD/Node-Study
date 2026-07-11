## Aula 7 - NPM Scripts

### É possível criar uma série de Scripts de automação

Podemos criar Scripts para serem executados após alguma ação, como por exemplo pós build, pré build e dessa maneria automatizar algumas operações antes repetitivas.

Uma maneira mais simples de executar uma ação sem precisar executar um Script com comandos Node.


### Script Field

Dentro de Package.json vai ter o campo onde fica os npm Scritps.
Para rodar um NPM Script que está no field, basta executar.

```bash
  npm run teste # teste é o nome do script que está no script field
```

Outra maneira de executar um Script sem utilizar o Terminal é utilizar recursos de IDE, como o VScode que disponibiliza uma forma de executar o script de forma visual.

Para criar um Script basta criar um outro dentro do objeto json no field Scripts.

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "hello_world": "echo \"Hello World\"",
    "init_server": "echo \"Iniciando Servidor...\" && node src/main.js"
  },
```

### Scripts mais comuns 

```json
  "scripts": {
    "prebuild":"npm i",
    "start:dev":"node src/index.js",
    "start:watch":"node --watch src/index.js"
  },
```

### Lista de NPM Scripts

Os scripts do npm se dividem entre **scripts padrão (nativos do ecossistema)** e **scripts customizados (definidos pelo usuário ou por frameworks)**. 

Para visualizar todos os scripts configurados no seu projeto atual diretamente no terminal, execute:
```bash
npm run
```

#### Scripts Nativos e de Ciclo de Vida (Lifecycle)
Estes nomes são reconhecidos automaticamente pelo npm e disparados em eventos específicos do gerenciador de pacotes.

* **`start`**: Inicia o aplicativo. Pode ser executado diretamente com `npm start`.
* **`test`**: Executa a suíte de testes do projeto. Pode ser executado com `npm test` ou `npm t`.
* **`stop`**: Interrompe a execução do aplicativo (se configurado).
* **`restart`**: Reinicia o aplicativo (executa sequencialmente os scripts `stop`, `restart` e `start`).
* **`prepare`**: Executa antes do pacote ser compactado e publicado, ou localmente após um `npm install` sem argumentos.
* **`prepublishOnly`**: Roda exclusivamente antes de executar o comando `npm publish`.

---

#### Hooks de Prefixo (`pre` e `post`)
Qualquer script do npm aceita os prefixos `pre` (executa imediatamente antes) e `post` (executa imediatamente depois). 

* **`preinstall`**: Roda antes do processo de instalação dos pacotes começar.
* **`postinstall`**: Roda automaticamente logo após a finalização do `npm install`.
* **`prebuild`**: Executa tarefas de limpeza ou validação antes da compilação.
* **`postbuild`**: Executa otimizações ou limpezas após a compilação finalizar.

---

#### Convenções Customizadas Comuns
Estes nomes não possuem comportamento nativo no npm, mas são padrões de mercado amplamente adotados pela comunidade e por frameworks (como React, Vue, Angular e Vite). Eles precisam ser chamados usando o prefixo `run` (ex: `npm run dev`).

* **`dev`**: Inicia o servidor de desenvolvimento local com recarregamento rápido (Hot Module Replacement).
* **`build`**: Compila e minifica o código-fonte gerando os arquivos prontos para produção.
* **`lint`**: Executa ferramentas de análise estática de código (como o ESLint) para encontrar erros estruturais.
* **`lint:fix`**: Executa o linter e corrige automaticamente erros básicos de formatação.
* **`format`**: Roda formatadores de código (como o Prettier) para alinhar o estilo visual do projeto.
* **`format:check`**: Apenas valida se os arquivos estão devidamente formatados sem alterá-los.
* **`typecheck`**: Valida a tipagem estática em projetos TypeScript sem gerar arquivos de saída.
* **`preview`**: Sobe um servidor web local para testar o resultado gerado na pasta de build de produção.
* **`deploy`**: Envia os arquivos compilados para o servidor de hospedagem ou ambiente de nuvem.