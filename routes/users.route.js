import express from "express";
import * as controller from "../controllers/users.controllers.js";
const router = express.Router();

// GET /users/limit-orderby?limit=X&order_by=Y -> controller
router.get("/users/limit-orderby", controller.getUsersLimitOrderBy);

// GET /users/limit?limit=X -> controller
router.get("/users/limit", controller.getUsersLimit);

// GET /users -> controller
router.get("/users",controller.getUsers);

// POST /users -> controller
router.post("/users", controller.createUser);

// PUT /users/:id -> controller
router.put("/users/:id", controller.updateUser);

// DELETE /users/:id -> controller
router.delete("/users/:id", controller.deleteUser);
export default router;
