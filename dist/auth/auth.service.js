"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const etudiant_service_1 = require("../etudiant/etudiant.service");
const entreprise_service_1 = require("../entreprise/entreprise.service");
let AuthService = class AuthService {
    constructor(etudiantService, entrepriseService, jwtService) {
        this.etudiantService = etudiantService;
        this.entrepriseService = entrepriseService;
        this.jwtService = jwtService;
    }
    async signIn(username, pass) {
        const etudiant = await this.etudiantService.findOne(username);
        const entreprise = await this.entrepriseService.findOne(username);
        const user = etudiant || entreprise;
        if (user) {
            if (user.user.password !== pass) {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
        }
        const payload = { username: user.user.email, sub: user.user.id };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    async validateUser(id) {
        const etudiant = await this.etudiantService.findOne(id);
        if (etudiant) {
            return etudiant;
        }
        const entreprise = await this.entrepriseService.findOne(id);
        if (entreprise) {
            return entreprise;
        }
        return null;
    }
    async validateUserByCredentials(email, password) {
        const etudiant = await this.etudiantService.findOne(email);
        const entreprise = await this.entrepriseService.findOne(email);
        if (etudiant && etudiant.user.password === password) {
            return etudiant;
        }
        if (entreprise && entreprise.user.password === password) {
            return entreprise;
        }
        return null;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [etudiant_service_1.EtudiantService,
        entreprise_service_1.EntrepriseService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map