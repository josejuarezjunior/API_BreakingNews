import mongoose from "mongoose";

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
  },
  password: {
    type: String,
    required: true,
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

// Atribuindo a uma variavel uma model com o Schema criado anteriormente
const User = mongoose.model('User', UserSchema);

export default User;