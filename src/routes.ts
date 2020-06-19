import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

//index(listagem), show/store, create, update, delete/destroy

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.post("/points", pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

export default routes;

//Service Pattern
//RepositoryPattern (Data Mapper)
