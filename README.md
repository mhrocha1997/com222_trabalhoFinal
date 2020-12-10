<h1 align="center">Istim Game Review</h1>
<p align="center"> Projeto como trabalho final para COM222 que tem como objetivo poder criar sua conta, cadastrar jogos e avaliá-los. O usuário escolherá um dos quatro consoles: Switch, Xbox, Playstation ou PC, e será redirecionado para uma página onde mostra os três jogos mais bem avaliados
Ao escolher um jogo, ele verá suas reviews e poderá cadastrar mais reviews, com notas que serão somadas à média do jogo. O usuário também poderá pesquisar um jogo pelo seu nome, desenvolvedor ou gênero.
</p>

## Como Usar

### Pré-requisitos
Antes de começar, você precisará ter instalado o [Node.js](https://nodejs.org/en/) e o [Angular CLI](https://angular.io/cli) em sua máquina.

Então, faça o download deste repositório.

### Configurando o backend
Primeiro, você deverá acessar o terminal na pasta /backend, e executar o seguinte comando para instalar as dependências: 

```bash
 npm install
```

> :warning: **Porta 3000**: o backend irá rodar no localhost:3000. Caso essa porta seja utilizada na sua máquina, altere no arquivo index.js dentro da pasta backend/src, a seguinte linha:

```sh
  app.listen(<Número da porta>);
```



Ao finalizar a instalação das dependências e a configuração do Node.Js, execute o comando abaixo dentro da pasta backend:

```sh
npm start
```

### Executando o Angular

Após a execução, será a vez de rodar o front end. Abra outro terminal, entre na pasta frontend e execute o comando:

```bash
 npm install
```

Instaldaas todas as dependências do Angular, execute o comando: 

```bash
 ng serve --open
```

Quando finalizar a execução, o navegador será aberto no localhost:4200 e a aplicação estará pronta para uso!

> :warning: **Erro de módulos**: Caso o Angular dê algum erro na sua execução, execute novamente o npm install para garantir que todos os módulos estejam instalados. Em seguida, execute o comando anterior.

