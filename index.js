//carregar o módulo express 
const express = require('express')

//carregar o módulo mongoose
const mongoose = require('mongoose')

//conectar com o banco de dados revisao
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:revisao@fiaptecnico.0ptot.mongodb.net/test')
}

//conectar com a collection infos
const modelo = new mongoose.Schema({
    nome:String,
    turma: String,
    disciplina: String
})
const infos = mongoose.model('infos', modelo)

//executar o módulo express
const app = express()

//definir o local padrão para os arquivos ejs
app.set('views', './')

//renderizar o arquivo index.ejs na requisição / (root)
app.get('/', (req,res)=>{
    //conectar com o revisao
    conexao()
    //buscar todos os dados de infos
    const resultado = infos.find()
    res.render('index.ejs', {resultado })
})

//ligar o servidor na porta 3050
app.listen(3050, ()=>{
    console.log('Servidor local em http://localhost:3050/')
})

//node index
//gravou a versao do script anterior, n é automático
//p cada operacao script precisa interromper o server e rodar dnv 