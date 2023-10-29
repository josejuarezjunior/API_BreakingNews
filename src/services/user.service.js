const User = require("../models/User");

// o "create" de "User" é o método do mongoose que cria um novo item
// seguindo o modelo da model
const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
  );

module.exports = {
  createService,
  findAllService,
  findByIdService,
  updateService
};