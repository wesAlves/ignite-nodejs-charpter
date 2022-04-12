import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationsUseCase } from "../createSpecifications/CreateSpecificationsUseCase";

class CreateSpecificationsController {
    static handle: any;
    constructor(
        private createSpecificationsUseCase: CreateSpecificationsUseCase
    ) {}

    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const createSpecificationsUseCase = container.resolve(
            CreateSpecificationsUseCase
        );

        await createSpecificationsUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateSpecificationsController };
