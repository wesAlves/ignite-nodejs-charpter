import { ISpecificationRepository } from "../repositories/specifications/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationRepository.findByName(
            name
        );

        if (specificationAlreadyExists) {
            throw new Error("Specification Already Exists!!!");
        }

        const specification = this.specificationRepository.create({
            description,
            name,
        });
    }
}

export { CreateSpecificationService };
