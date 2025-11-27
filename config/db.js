import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "0529",
  database: "postgres",
  allowExitOnIdle: true,
});

export default pool;
