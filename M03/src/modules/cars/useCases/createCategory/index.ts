import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";
import { CategoriesRepository } from "../../repositories/categories/implementations/CategoriesRepository";

export default (): CreateCategoryController => {
    const categoryRepository = new CategoriesRepository();

    const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

    const createCategoryController = new CreateCategoryController(
        createCategoryUseCase
    );
    return createCategoryController;
};
