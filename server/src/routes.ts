import express from "express";
import ClassesControllers from "./controllers/ClassesController";
import ConnectionsControllers from "./controllers/ConectionsControllers";

const routes = express.Router();
const classesControllers = new ClassesControllers();

const connectionsController = new ConnectionsControllers();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.post("/connections", connectionsController.create);
routes.get("/connections", connectionsController.index);

export default routes;
