## Installing / Getting started

O projeto utiliza o excelente CLI do facebook **create-react-app**, para criar uma estrutura básica e já configurada de um projeto em react. Create react app utiliza o webpack como bundler e task runner da aplicação. Inicialmente as configurações do webpack vêm ocultas ao usuário, porém a mesma foi extraída como forma de personalização.

```shell
git clone git@github.com:wellyal/crud-redux.git
cd crud-redux
npm install
npm start
```

Você vai clonar o projeto, assim que entrar na pasta vai rodar o comando de instalação do node package manager e em seguida subir um servidor com a aplicação rodando em modo **watch**.

## Developing

### Built With

[React](https://facebook.github.io/react/) - Para a renderização de compomentes de view reutilizáveis.

[Redux](http://redux.js.org/) - Armazenamento de um estado global imutável pertinente a diversos componentes ultilizados dentro do projeto.

[Redux Saga](https://redux-saga.js.org/) - Para tratar requisições assíncronas de uma forma mais limpa e funcional.

[Axios](https://github.com/mzabriskie/axios) - API de requisições HTTP para client e server, baseada em Promises.
List main libraries, frameworks used including versions (React, Angular etc...)

### Prerequisites

Para rodar o projeto você deve ter a versão atual LTS do node 6.11.1 (na data que esse documento foi escrito)

### Building

Build padrão do **create-react-app**

```shell
npm run build
```

## Archtecture Design

Para ajudar na estrutura do projeto utilizei a excelente proposta de Brad Frost para criar um design atomico. [O que é design atômico?](http://bradfrost.com/blog/post/atomic-web-design/)

Dentro da pasta "src/" temos a seguinte estrutura:

OBS: Tudo que está dentro de src pode ser referenciado como caminho absoluto. Webpack está resolvendo caminhos em "node_modules e src".

```
src/
  componentes/
  reducers/
  sagas/
  services/
  utils/
```

**componentes** Componentes utilizados no projeto seguindo padrão de componentização atomico.

**reducers:** Basicamente todas as configurações do redux são feitas aqui, assim como os seus respectivos reducers. Vale ressaltar que utilizo a proposta do projeto open source [Ducks Modular Redux](https://github.com/erikras/ducks-modular-redux) que basicamente propõe uma composição de arquivos mais enxuta jogando as actions e actions creators para dentro dos reducers.

**sagas:** Configuração e modulos do redux-saga que é basicamente o middleware do redux. As funções saga tem por objetivo tratar assincronissídades e se comunicam direto com os services. Cada função saga será disparada toda vez que sua respectva action for chamada.

**services:** Geralmente são disparados pelo saga e geralmente retornam uma promise, que será tratada pelo redux-saga.

**utils:** Funções puras utilitárias
