import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
class CreateUserUseCase{

constructor(
    @inject('UserRespository')
    private userRepository: IUserRepository
){}

    async execute({name,driver_license, email,password,username}:ICreateUserDTO): Promise<void>{

        await this.userRepository.create({
            name,driver_license, email,password,username
        })
        
    }
}

export{ CreateUserUseCase}