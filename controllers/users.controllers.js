import * as model from "../models/users.model.js";

export const getUsersLimitOrderBy = async (req, res) => {
  try {
    const { limit, order_by } = req.query;
    const users = await model.getUsersLimitOrderBy({ limit, order_by });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsersLimit = async (req, res) => {
  try {
    const { limit } = req.query;
    const users = await model.getUsersLimit(limit);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await model.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await model.createUser({ email, password });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email } = req.body;
    const user = await model.updateUser(nombre, email, id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await model.deleteUser(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
