## Aula 3 - Modularização de Projetos Node

Foi explorado 2 formas de realizar o import e export de elementos entre módulos e arquivos de um projeto Node JS.


### CommonJS

Uma forma mais antiga de realizar o import e export, com sintaxe mais simples.

```js
const elem = required('módulo')

module.export = {
  "key" : "Value"
}
```

### ESM
Forma mais atual e utilizado no desenvolvimento moderno, com sintaxe unificada e mais completa.

```js
import {elem} from './modules.js'

export const elem {
  "key":"value"
}
```