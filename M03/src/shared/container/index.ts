import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/categories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/categories/implementations/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);
