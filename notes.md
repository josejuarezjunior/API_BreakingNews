# Projeto stack MERN

## Iniciar o projeto:
    npm init

## Instalar o express:
    npm i express

## Instalar o nodemon:
    npm i nodemon

No arquivo package.json, colocar um novo script:
    "dev": "nodemon index"

## Banco de dados
Na pasta ./src/database, criar o arquivo "db.js".

## Instalar o mongoose (Biblioteca para conexão com o mongodb):
    npm i mongoose


## Instalar a biblioteca bcryptjs, para criptografia de senha:
    npm i bcrypt

## Instalar a biblioteca dotenv, para usar variáveis de ambiente
    npm i dotenv

Depois disso é necessário importar o dotenv no arquivo index.js, e executar o método config:
    import dotenv from 'dotenv';
    dotenv.config();

## Instalar a biblioteca jsonwebtoken (JWT), para criar uma chave web token, de maneira a guardar a sessão do usuário após o login

    npm i jsonwebtoken