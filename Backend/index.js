const express = require('express');
const cors = require('cors');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('db_classe' , 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

//Definição da tabela de usuário.

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

//Configuração do servidor Express.
const app = express(); //Criação do app express
app.use(cors()); //Habilitar CORS
app.use(express.json()); //Habilitar JSON
const port = 3000; //Definição da porta

//Criando rotas da api

app.get('usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários.'});
    }
});


//Rota para adicionar um novo usuário.
app.post('/usuarios', async (req, res) => {
    try {
        const {nome, email, telefone} = req.body;
        const novoUsuario = await Usuario.create({nome, email, telefone});
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ message: 'Verifique se o email já existe.'});
    }
});

//Inicia o servidor após sincronizar criar tabela no banco de dados.
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
        console.log('Banco de dados sincronizado.');
    });
}).catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
});