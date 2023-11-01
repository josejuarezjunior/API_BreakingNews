import User from '../models/User.js';

// "+password" é para trazer o password na consulta, já que o select dele na model é false
const loginService = (email) => User.findOne({email: email}).select("+password");

export { loginService };