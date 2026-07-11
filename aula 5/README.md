## Aula 5 - Arquivos que são apenas Módulos no Node JS


### Criando um .mjs
Arquivo de criação de modulos JS, ou seja não vai ser um arquivo com lógica real de programação e regras de negócio, vai ser um arquivo centralizador de features para importar.

### Exportando N Features

```js
  export {item1, item2, ..., itemN};
```

### Exportando 1 Feature

```js
// Primeira forma 
export c = (args) => {
  //lógica aqui
}

// Segunda forma
const c = (args) => {
  // Lógica aqui
}

export default c;
```

### Importando 1 Feature 
```js
  //Importando apenas um Item
  import {itemImportado} from './file.mjs'
```

### Importando N Features

```js
  // Importando tudo de um arquivo
  import * as name from './file.mjs' 
```


