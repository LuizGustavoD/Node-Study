## Aula 6 - Gerenciamento de Pacotes e Dependências 

### NPM (Node Packages Manager)

O Npm é a ferramenta utilizada para gerenciar pacotes e dependências em um projeto NodeJS. Se assemelha a questão do maven/gradle para o Java.

### Pacote 

Um conjunto de Features/Código que conseguimos utilizar em diversos lugares, por exemplo um pacote de gerenciamento de banco de dados. Todo projeto que utiliza um banco de dados ao invés de retrabalalho você utiliza um pacote.

Ao atualizar o pacote, todos os lugares que utilizam dessa funcionalidade vai ser atualizado de maneira sincrona, sem dependência de retrabalho.

Pacote não fica em maquina local, ele fica em um repositório que é utilizado por X projetos que precisam dessa funcionalidade.


### Dependência 

Quando um projeto começa a consumir um pacote, o mesmo se torna uma dependência para esse projeto em questão. Conseguimos realizar o controle dessa dependêncai, por exemplo definindo a versão do pacote que vai ser utilizada.

Existem diferentes tipos de dependências. 

DEV DEPENDENCY: Utilizado para o desenvolvimento, não faz diferença para o produto final. Você pode não levar para a entrega.

DEPENDENCY: Faz diferença e é preciso levar para a entrega do Software.

### NPM JS 

Repositório de pacotes prontos para projetos JS, possível contratar um serviço privado para a criação de pacotes/dependência em caso de necessidade. 

Possui também uma série de códigos prontos para X funcionalidades de forma pública, que é por sua vez possíve reaproveitar na hora de realziar a codificação.

O NPM que faz a busca do pacote e inseri ele no seu projeto, simililar ao pip para o pyrhon.


### Como Instalar um Pacote Node JS


```bash
  # Assim com a palavra install
  npm install nome_pacote

  # Assim com o apelido (install = i)
  npm i nome_pacote
```

Dessa maneira é criado dentrdo do package.json e um package-lock.json a sua dependência com versão e informações do pacote.

Em node_modules está o pacote de fato que foi importado, tudo que é instalado vai para esse diretório

Quando você entra em um projeto com package-lock.json e um package.json para instalar as dependências localmente de forma simples, semelelhante a um "pip install -r requirements.txt"

package.json -> Dependências e configurações do SEU PROJETO
package-lock.sjon -> Sub Dependêncais (Árvore de dependências)

```bash
  npm install 
  
  npm i
```


### Dev Dependency

Como inserir uma dependência de desenvolvimento, ou seja não vai para a versão de entrega do produto e ficará presente apenas no ambiente de desenvolvimento.

```bash
  npm install log-symbols -D

  npm i log-symbols -D

```


### Desinstalar um pacote

```bash
  npm unistall nome_pacote
```

### Para dar um inspect nos seus pacotes instalados

```bash
  npm fund
```

### Atualizando um Pacote

```bash
  npm update chalk
```