import { inject } from 'tsyringe';
import { injectable } from 'tsyringe';
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/categories/ICategoriesRepository";

@injectable()
class ListCategoryUseCase {
    constructor(
        @inject("CategoriesRespository")
        private categoriesRepository: ICategoriesRepository) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoryUseCase };
