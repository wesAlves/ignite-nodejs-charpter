import { Repository } from 'typeorm';
import { ICreateUserDTO } from '../../../../dtos/ICreateUserDTO'
import { User } from '../../User';
import {IUserRepository} from '../IUserRepository'

class UserRespository implements IUserRepository {
    private repository: Repository<User>

    async create({name, username, driver_license, email, password}: ICreateUserDTO): Promise<void> {

        const user = this.repository.create({
            name, username, driver_license, email, password
        })

        await this.repository.save(user)
    }
}

export {UserRespository}