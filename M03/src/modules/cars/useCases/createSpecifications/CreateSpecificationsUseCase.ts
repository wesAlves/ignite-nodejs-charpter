import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "../../repositories/specifications/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationsUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationsAlreadyExists = await this.specificationsRepository.findByName(
            name
        );

        if (specificationsAlreadyExists) {
            throw new Error("Spefication Already Exists!!!");
        }

        const specifications = this.specificationsRepository.create({
            name,
            description,
        });

        return specifications;
    }
}

export { CreateSpecificationsUseCase };
