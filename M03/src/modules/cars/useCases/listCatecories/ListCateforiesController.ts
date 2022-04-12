import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoriesController {

   async handle(request: Request, response: Response) {
        const listCategoriesUseCase = container.resolve(ListCategoryUseCase)
        
        listCategoriesUseCase.execute();

        return response.json(listCategoriesUseCase);
    }
}

export { ListCategoriesController };
