import { response, Router } from "express";

import { CreateSpecificationsController } from "../modules/cars/useCases/createSpecifications/CreateSpecificationsController";

const specificationsRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

specificationsRoutes.post("/",  createSpecificationsController.handle);


export { specificationsRoutes };
