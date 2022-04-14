import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../repositories/IUserRepository";
import {compare} from 'bcrypt'
import {sign} from 'jsonwebtoken'

interface IRequest {
    email: string;
    password: string;
}

interface IReturn{
    user: {
        name: string;
        email: string;
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IReturn> {
        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new Error('Email or password incorrect!');
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error('Error');
        }

        const token = sign({}, 'senha', {
            subject: user.id,
            expiresIn: '1d'
        })

        return {
            user,
            token
        }

    }

}

export {AuthenticateUserUseCase}

