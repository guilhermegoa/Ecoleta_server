import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);
routes.post("/points", pointsController.create);

//index(listagem), show/store, create, update, delete/destroy

export default routes;

//Service Pattern
//RepositoryPattern (Data Mapper)
