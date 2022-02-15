import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";
import { CategoriesRepository } from "../../repositories/categories/implementations/CategoriesRepository";

const categoryRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
);

export { createCategoryController };
