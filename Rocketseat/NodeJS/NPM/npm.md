# NPM Node Package Manager

_ Glossary : Dependencies, Packages, Modules

- [] Verificar se temos npm instalado `npm - v`
- [] Criar nosss rpoprio pacote
- [] O que é arquivo package.json
- [] Utilizar modulos de terceiros
- [] O que é diretorio node_modules
- [] O que é arquivo package-lock.json
- [] Criar Scripts para rodar com npm

## No terminal 
### Criar nosso pacote - package.json
  npm init - vai respondendo as questões do node ou npm init -y (sim para todos instalações) - package.json

### O que é arquivo package.json
  Arquivo em formato de objeto onde constra todas as configurações do projeto.

### Utilizar modulos de terceiros
  Digite npm install + nome do modulo que quer usar. veja exemplos
   npm install cfonts ou npm i cfonts
   npm install styled-components ou npm i styled-components

  npm install cfonts -D  (-D usadas apenas para desenvolvimento) - em package.json aparece como "devDependencies"
  npm i cfonts inquirer opn styled-components (instalando varios modulos simultaneamente)
  npm update - atualiza todas as dependencias dentro do package.json

### O que é diretorio node_modules
  São modulos e dependencias usados em projetos, muitos modulos dependem de outros modulos.
  ao instalar um modulo este pode ter outras dependencias que são instaladas juntamente para poder funcionar adequadamente. 
  "dependencies" - modulos dependentes uns de outros
  "devDependencies" - modulos usados apenas para desenvolvimento.
git.ignore - igonora os modulos e suas dependencias quando subir para git. 

### O que é arquivo package-lock.json
  Serve para fazer uma mapeamento de todas as depedencias do projeto e seus modulos.
  Este arquivo não é para mexer, nunca deletar do projeto.

### Criar Scripts para rodar com npm
  Cria-se dentro do package.json 
  scripts padroes usamos somente exemplo npm start 
  scripts criados devemos usar exemplo npm run dev (usando run)

# Instalando Dependências Globais
  -[] Instalar pacote de maneira global
  -[] Desisntalar pacotes
  -[] Mudar versão pacotes

### Instalar pacote de maneira global
- npm i axios -g 

### Desisntalar pacotes
  - npm uninstall axios -g

### Mudar versão pacotes
 - npm i moment 
 - npm i moment@1.5.1 (vesrão antiga)
 - npm outdated (mostra quais os pacotes e versões disponiveis)
 - npm upgrade
 -npm i moment@latest ( ultima versão)

### Remover pacotes
  Remove por completo o pacote desejado 
  - npm uninstall moment