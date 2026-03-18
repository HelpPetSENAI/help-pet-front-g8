# help-pet-front

## Como começar a contribuir
> Preencha as tópicos vazios desse readme de acordo com a função do seu grupo e faça alterações na seção estrutura de pastas conforme sejam feitas alterações.

## Pré-requisitos
É necessário ter:
  - Node - para rodar o projeto e utilizar as ferramentas do react.
  - npm - para instalar recursos e depêndencias do projeto.
  - git - para o versionamento do código.
  - Uma IDE de sua preferência.

## Como rodar o projeto
1. Clone este repositório.
2. Abra o terminal dentro da pasta.
3. instale as depêndencias do projeto com o comando `` npm i ``.
4. Inicie o projeto com o comando `` npm run dev `` para rodar localmente.

## Estrutura das pastas
```
├── .github/
│   ├── CODEOWNERS
│   ├── ISSUE_TEMPLATE.md
│   └── PULL_REQUEST_TEMPLATE.md
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── .gitkeep
│   │   └── images/
│   │       └── brick-wall.png
│   ├── components/
│   │   ├── Button
│   │   │   ├── Button.jsx
│   │   │   └── ButtonS.jsx
│   │   └── Fragment.jsx
│   ├── pages/
│   │   ├── CommingSoonPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── ExamplePage.jsx
│   ├── styles/
│   │   └── GlobalStyle.jsx
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Convenção de nomenclatura
> Padrão de nomeação que deve ser seguido em todas as etapas de desenvolvimento.

### Linguagem
- Inglês

### Arquivos e pastas
- kebab-case.
- Com exceção dos arquivos na pasta .github que devem ser todos em maiúsculo todas as pastas e arquivos devem permanecer neste padrão.
- Exemplo:

  ```
    ├── .github/
    │   ├── CODEOWNERS 
    │   └── PULL_REQUEST_TEMPLATE.md 
    └──── src/ 
           ├──assets
           └──pages
                └── page-one.html 
  ```

### Variáveis e funções
- camelCase.
- Nomes de variáveis e funções no front e back end devem seguir este padrão.
- Exemplo:

  ```jsx
  <!-- JavaScript -->
    let accessIcon = document.getElementsByClassName("accessibility-icon")[0]
    let accessOpen = document.getElementsByClassName("accessibility-open")[0]

    function closeMenu() {
    accessOpen.style.display = "";
    accessIcon.style.display = "flex";
    }
  ```

### Componentes react (componentes, estilos e páginas)
- PascalCase.
- Tanto as pastas quanto o arquivo e nome da função do componente deve seguir este padrão para serem diferenciados de funções normais.
- Utilizando as depêndencias react router e styled components páginas e estilos são considerados componentes e por isso devem seguir o mesmo padrão de nomeação.
- Exemplos:

#### Componente
  ```
    └─── src/
        └── components
            └── Button <- Pasta com B maiúsculo
                ├── Button.jsx
                └── ButtonS.js 
  ```

  ```jsx
  <!-- Dentro de Button.jsx -->
    export default function Button() {
      return (
        ...
      )
    }
  ```

#### Estilo
- Mesma nomeação com o prefixo **Style** no final.
```js
// Dentro de ButtonS.js
export const StyledButton = styled.button`
  ...
`
```

#### Página
- Mesma nomeação com o prefixo **Page** no final.
  ```
    └─── src/
        └── pages
            └── ComingSoonPage.jsx
  ```
  ```jsx
  <!-- Dentro de CommingSoonPage.jsx -->
    export default function CommingSoonPage() {
      return (
        ...
      )
    }
  ```

## Requisitos
<!-- Preencha os requisitos funcionais e não funcionais apenas do seu grupo -->
### Funcionais - G1

### Não funcionais -G1
 
### Funcionais - G2

### Não funcionais -G2
 
### Funcionais - G3

### Não funcionais -G3
 
### Funcionais - G4

### Não funcionais -G4
 
### Funcionais - G5

### Não funcionais -G5
 
### Funcionais - G6

### Não funcionais -G6
 
### Funcionais - G7

### Não funcionais -G7
 
### Funcionais - G8

### Não funcionais -G8
 
