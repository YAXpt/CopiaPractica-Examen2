import { userModel } from './users.model.js';

export async function handleGetUsers(req, res) {
    const users = await userModel.find({});
    res.json({ results: users });
}

export async function handleGetUser(req, res) { //obtener usuario por id, a través de mongoose, get
    const id = req.params.id;
    const foundUser = await userModel.findById(id);
    res.json(foundUser);
}

export async function handleLogin(req, res) {
    const { email, name } = req.body;
    const foundUser = await userModel.findOne({ email });
  
    if (!foundUser) {
      return res.status(404).json({ message: "User not found." });
    }
    if (foundUser.name !== name) {
      return res.status(401).json({ message: "Invalid credentials. Name does not match." });
    }
    res.status(200).json(foundUser);
  }

export async function createUser(req, res) { //crear usuario, post 
    const { username, email } = req.body;
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
        return res.status(400).json({ message: "User with this email already exists." });
    }

    const newUser = new userModel({
        username: username,
        email: email,
        buyed: []
    });

    await newUser.save();
    res.json(newUser);
}

export async function updateUserBuyed(req, res) { //actualizar usuario, put
    const id = req.params.id;
    const user = await userModel
        .findById(id);
    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }
    user.buyed.push(req.body.buyed);
    await user.save();
    res.json(user);
}