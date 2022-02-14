import { response, Router } from "express";

import { createSpecificationsController } from "../modules/cars/useCases/createSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationsController.handle(request, response);
});

// specificationsRoutes.get("/", (request, response) => {
//     const specification = specificationRepository.list();

//     return response.json(specification);
// });

export { specificationsRoutes };
