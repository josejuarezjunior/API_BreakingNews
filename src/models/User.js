import mongoose from "mongoose";
import bcrypt from 'bcrypt';

// Definindo um novo Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
});

// Antes de salvar, executa uma função... Aqui não pode ser arrow function. É uma particularidade do 'pre'.
UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Atribuindo a uma variavel uma model com o Schema criado anteriormente
const User = mongoose.model('User', UserSchema);

export default User;