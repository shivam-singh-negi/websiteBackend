// controllers/UserController.js
import User from '../models/UserModel';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, age, profession, username, password } = req.body;
    const user = new User({ name, age, profession, username, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, age, profession } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, age, profession },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getAllUsers, createUser, updateUser };
