import { Router } from 'express';
import userController from '../controllers/user.controller';

const router = new Router();

router.get("/", (req, res) => {
	res.send("OK");
});

router.get("/api/users", userController.getUsers);
router.get("/api/user/:id", userController.getUser);
router.post("/api/user", userController.saveUser);
router.put("/api/user/:id", userController.updateUser);
router.delete("/api/user/:id", userController.deleteUser);

export default router;