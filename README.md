
<p align="center">
  <a href="#tecnologias">Tecnologias</a> |
  <a href="#projeto">Projeto</a> |
  <a href="#dependencias">Dependencias</a> |
  <a href="#layout">Layout</a> |
  <a href="#licença">Licença</a>
</p>

<p align="center">
  <img alt="Rocket.Q" src=".github/capa.png" width="100%">
</p>

## Projeto

Rocket.Q é uma plataforma de perguntas em salas privadas com senha para entrar, o administrador da respectiva sala pode verificar as perguntas como lidas ou então apagar. O Rocket.Q pode ser usado por streamers ou palestrantes em eventos para liberar salas para o público fazer perguntas.

## Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- NodeJS
- EJS
- Express
- SQLite

## Dependencias

Para poder executar o projeto e necessário ter instalado o npm/node que no linux pode ser instalado com o sequinte comando.

 -Ubuntu

```bash
  curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

```bash
  sudo apt-get install -y nodejs
```

 -Debian (como root)

```bash
  curl -sL https://deb.nodesource.com/setup_lts.x |  bash -
```

```bash
  apt-get install -y nodejs
```

## Como usar?

Baixe este repositório e com seu terminal, entre no diretório

1. Execute o comando para instalar as dependências

```bash
npm install
```

2. Após, execute o comando para instalar o banco de dados

```bash
npm run init-db
```

3. E para iniciar o aplicativo, execute o comando

```bash
npm start 
```

## Layout

Você pode ver o layout do projeto em [neste link](https://www.figma.com/community/file/1009821158959690135).É necessário ter uma conta no [Figma](https://figma.com) para acessá-lo.

## Licença

Este projeto está sob licença do MIT. Veja o arquivo [LICENÇA](.github/LICENSE.md) para mais detalhes.
