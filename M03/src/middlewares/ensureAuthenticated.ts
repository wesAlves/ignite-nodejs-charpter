import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken';
import { UserRespository } from '../modules/accounts/repositories/implementations/UserRepositories';

interface IPayload {
    sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error('Token is missing');
    }

    const [, token] = authHeader.split(' ');

    try {
        const { sub: user_id } = verify(token, 'senha') as IPayload;

        const usersRepository = new UserRespository()

        const user = await usersRepository.findById(user_id)

        if(!user){
            throw new Error("User does not exists!")
        }
    }
    catch {
        throw new Error('invalid token');
    }


}