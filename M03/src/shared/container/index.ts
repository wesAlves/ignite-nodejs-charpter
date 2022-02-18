import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/categories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/categories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/specifications/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/specifications/ISpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);
