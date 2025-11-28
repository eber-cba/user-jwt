import pool from "../config/db.js";
import format from "pg-format";
import bcrypt from "bcryptjs";
// Obtener la fecha actual
export const getDate = async () => {
  const result = await pool.query("SELECT NOW()");
  return result.rows[0];
};

// Agregar un nuevo usuario
export const createUser = async ({ email, password }) => {
  const hashedPassword = bcrypt.hashSync(password)
  const SQLquery = {
    text: 'INSERT INTO users ( email, password) VALUES ($1, $2)',
    values: [ email, hashedPassword]
  }

  const response = await pool.query(SQLquery)
  return response.rows[0]
}

// Consultar todos los usuarios
export const getUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

// Consultar un usuario
export const getUser = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0];
};

// Actualizar un usuario
export const updateUser = async (nombre, email, id) => {
  const consulta = "UPDATE users SET nombre = $1, email = $2 WHERE id = $3 ";
  const values = [nombre, email, id];
  const result = await pool.query(consulta, values);
  return result.rows[0];
};

// Eliminar un usuario
export const deleteUser = async (id) => {
  const consulta = "DELETE FROM users WHERE id = $1";
  const values = [id];
  const result = await pool.query(consulta, values);
  return result.rows[0];
};
// consulta con limit
export const getUsersLimit = async (limit) => {
  const consulta = "SELECT * FROM users LIMIT $1";
  const result = await pool.query(consulta, [limit]);
  return result.rows;
};
// consulta con limit y order_by

export const getUsersLimitOrderBy = async ({
  limit = 10,
  order_by = "id_ASC",
}) => {
  const [nombre] = order_by.split("_"); // un destructuring de un array para obtener el nombre de la columna
  const formattedQuery = format(
    "SELECT * FROM users order by %s LIMIT %s",
    nombre,
    limit
  );
  const { rows: users } = await pool.query(formattedQuery);
  return users;
};

/*
/login
el usuario se deberia logear con su email y password
el usuario va enviar informacion entonces su ruta va ser post
debemos validar si existe ese usuario
comparacion de contraseña con bcrypt 

/tecnicamente

1: buscamos un usuario por email con su query en models



 */