import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// "+password" é para trazer o password na consulta, já que o select dele na model é false
const loginService = (email) => User.findOne({email: email}).select("+password");

// Atributos do método sign (Dado a ser encriptado, código em hash md5, options,
// que nesse caso foi apenas definido o tempo de expiração em segundos: 86400,
// que equivale a 24 horas); 
const generateToken = (id) => jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: 86400})

export { loginService, generateToken };