const userService = require("../services/user.service");

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email | !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration!" });
  }

  const user = await userService.createService(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error on create user" });
  }

  res.status(201).send({
    message: "User created successfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

const findAll = async (req, res) => {
  const users = await userService.findAllService();

  if (users.length === 0) {
    return res.status(400).send({ message: "There are no registered users." });
  }

  res.send(users);
};

const findById = async (req, res) => {
  //const id = req.params.id;
  //const id = req.id; // Recebendo do Middleware 'validUser'.
  //const user = await userService.findByIdService(id);
  const user = req.user; // Recebendo do Middleware 'validUser'.
  res.send(user);
};

const update = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if(!name && !username && !email && !password && !avatar && !background) {
    res.status(400).send({ message: 'Submit at least one field for update' });
  }

  //const id = req.params.id;
  //const user = await userService.findByIdService(id);
  const { id, user } = req;// Recebendo do Middleware 'validUser'.

  await userService.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  )
  
  res.send({ message: 'User successfully updated' });
};

module.exports = { create, findAll, findById, update };
