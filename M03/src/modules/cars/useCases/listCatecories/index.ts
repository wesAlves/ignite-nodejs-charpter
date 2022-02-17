import { ListCategoriesController } from "./ListCateforiesController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { CategoriesRepository } from "../../repositories/categories/implementations/CategoriesRepository";

const categoriesRepository = null;
const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
);

export { listCategoriesController };
