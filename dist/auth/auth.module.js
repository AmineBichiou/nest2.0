"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const jwt_1 = require("@nestjs/jwt");
const auth_controller_1 = require("./auth.controller");
const constants_1 = require("./constants");
const passport_1 = require("@nestjs/passport");
const entreprise_module_1 = require("../entreprise/entreprise.module");
const etudiant_module_1 = require("../etudiant/etudiant.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            entreprise_module_1.EntrepriseModule,
            etudiant_module_1.EtudiantModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }),
            entreprise_module_1.EntrepriseModule,
            etudiant_module_1.EtudiantModule,
        ],
        providers: [auth_service_1.AuthService],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map