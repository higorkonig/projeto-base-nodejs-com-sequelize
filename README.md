# Projeto base de Nodejs com sequelize já configurado

### Introdução

Esse é um esqueleto de um projeto NodeJs com o ORM Sequelize. Dependências que já estão instaladas:

1. Nodemon -> Reaload no server automático.
2. Sucrase -> Utilização de **import**, **export** e outras função do **ES6** sem bugs.
3. Express -> Gerenciamento de rotas.
4. cors -> Libera o acesso do backend para endereços externos.

Para utilizar basta seguir os seguintes passos. 

### Clonando o repósitorio

Abrindo o __terminal ou o Git Bash__ na pasta que deseja adicionar o projeto. Execute essa linha de comando: ```git clone https://github.com/higorkonig/projeto-base-nodejs-com-sequelize.git```

### Instalando às depêndencias

Ao fazer o clone do projeto, você precisa instalar as dependência do projeto.

* Abra o __terminal ou o Git Bash (pode usar o terminal do VSCODE também, o que importa é estar na pasta raiz do projeto)__ na pasta do projeto

* Execute o seguinte comando: ```npm install``` ou  ```yarn ```

Após executar o ```npm install``` ou ```yarn``` aguardade que ele irá baixar e instalar todos as depêndencias do projeto.

### Abrindo o projeto no navegador

Após todos os passos anteriores, o projeto já está pronto para ser editado. Porém você não irá conseguir visualizar as altarações, para isso, basta fazer os seguintes passos:

* Abra o __terminal ou o Git Bash (pode usar o terminal do VSCODE também, o que importa é estar na pasta raiz do projeto)__ na pasta do projeto

* Rode o seguinte comando: ```yarn dev``` ou ```npm dev```

O projeto vai rodar por padrão na porta ```:3333```, para visualização é só colocar no seu navegador ```http://localhost:3333/```

# 2 - Arquivos que precisam ser configurados

Bom, os arquivos que vão precisar da sua atenção para configuração, partindo da pasta raiz do projeto são:

* ```src/config/database.js``` : Esse arquivo aguarda as suas informações sobre a conexão com o banco de dados.

* ```src/database/index.js```: Esse arquivo você precisa adicionar os models criados dentro de um array.

**Após tudo isso, só começar a desenvolver ;]**
