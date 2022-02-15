import { SpecificationsRepository } from "../../repositories/specifications/implementations/SpecificationRepository";
import { CreateSpecificationsController } from "./CreateSpecificationsController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

const createSpecificationsRepository = SpecificationsRepository.getInstance();

const createSpecificationsUseCase = new CreateSpecificationsUseCase(
    createSpecificationsRepository
);

const createSpecificationsController = new CreateSpecificationsController(
    createSpecificationsUseCase
);

export { createSpecificationsController };
