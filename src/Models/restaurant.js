const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const restaurant = Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type:String, required: true },
    telefone:{type:String, required: true, validate: [/^[0-9]{10,11}$/, "Formato inválido"]},
    endereco: {coordinates: [], numero:String, },
    intagram: String,
    facebook: String,
    twitter: String,
    dataCadastro: {type:Date, default:Date.now},
})