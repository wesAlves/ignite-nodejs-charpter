import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./createUserUserCase";


class CreateUserController{
    async handle(request:Request, response:Response): Promise<Response>{

        const { name,driver_license, email,password,username} = request.body

        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({name,driver_license, email,password,username})

        return response.status(201).send()
    }
}

export{CreateUserController}