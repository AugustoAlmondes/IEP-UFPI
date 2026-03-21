import { CanActivate, ExecutionContext, Injectable, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<Request & { user?: any }>();
        const user = request.user;

        if (!user) {
            throw new UnauthorizedException('User payload not found. Make sure to use AuthGuard before AdminGuard.');
        }

        if (user.role !== 'ADMIN') {
            throw new ForbiddenException('Acesso restrito a administradores.');
        }

        return true;
    }
}
