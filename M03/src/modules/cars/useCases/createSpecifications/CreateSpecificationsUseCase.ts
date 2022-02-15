import { SpecificationsRepository } from "../../repositories/specifications/implementations/SpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationsUseCase {
    constructor(private specificationsRepository: SpecificationsRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationsAlreadyExists = this.specificationsRepository.findByName(
            name
        );

        if (specificationsAlreadyExists) {
            throw new Error("Spefication Already Exists!!!");
        }

        const specifications = this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationsUseCase };
