import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { CategoriesRepository } from "../../repositories/categories/implementations/CategoriesRepository";

const importCategoriedRepository = CategoriesRepository.getInstance();
const imoprtCategoryUseCase = new ImportCategoryUseCase(
    importCategoriedRepository
);
const importCategoryController = new ImportCategoryController(
    imoprtCategoryUseCase
);

export { importCategoryController };
