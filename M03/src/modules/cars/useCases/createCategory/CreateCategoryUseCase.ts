import { CategoriesRepository } from "../../repositories/categories/implementations/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(
            name
        );

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists!!!");
        }
        const category = this.categoriesRepository.create({
            description,
            name,
        });
    }
}

export { CreateCategoryUseCase };
