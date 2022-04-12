import { response, Router } from "express";

import { CreateSpecificationsController } from "../modules/cars/useCases/createSpecifications/CreateSpecificationsController";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return CreateSpecificationsController.handle(request, response);
});

// specificationsRoutes.get("/", (request, response) => {
//     const specification = specificationRepository.list();

//     return response.json(specification);
// });

export { specificationsRoutes };
