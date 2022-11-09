import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UnauthorizedException } from "@nestjs/common";
var jwt = require('jsonwebtoken');

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("hellow")
        const tokenFromHeader = req.headers.authorisationtoken;
        try {
            // Verify the token from request header
            jwt.verify(tokenFromHeader, process.env.MY_KEY);
            next();
        }
        catch (err) {
            throw new UnauthorizedException("Unauthorized");
        }
    }
}
