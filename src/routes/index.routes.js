import { Router } from 'express';
import userController from '../controllers/user.controller';
import timeController from '../controllers/time.controller';
import grafoController from '../controllers/grafo.controller';

const router = new Router();

router.get("/", (req, res) => {
	res.send("OK");
});

router.get("/api/users", userController.getUsers);
router.get("/api/user/:id", userController.getUser);
router.post("/api/user", userController.saveUser);
router.put("/api/user/:id", userController.updateUser);
router.delete("/api/user/:id", userController.deleteUser);

router.get("/api/time/:id", timeController.getTime);
router.put("/api/time/:id", timeController.updateTime);

router.post("/api/graph", grafoController.saveGrafo);
router.get("/api/graphs/:id", grafoController.getGrafos);
router.put("/api/graph/:id", grafoController.updateGrafo);
router.delete("/api/graph/:id", grafoController.deleteGrafo);

export default router;