import { getRepository, Repository } from "typeorm";
import { Specification } from "../../../entities/Specification";

import {
    ISpecificationRepository,
    ICreateSpecificationDTO,
} from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    private constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        description,
        name,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description,
        });

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({
            name,
        });

        return specification;
    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find();

        return specifications;
    }
}

export { SpecificationsRepository };
