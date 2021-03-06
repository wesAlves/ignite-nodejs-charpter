import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUserRepository{
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email): Promise<User>;
}

export {IUserRepository}