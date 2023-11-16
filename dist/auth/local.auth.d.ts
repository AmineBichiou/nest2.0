import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    private readonly jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    validateUser(token: any): Promise<any>;
}
export {};
