import { JwtService } from '@nestjs/jwt';
import { EtudiantService } from 'src/etudiant/etudiant.service';
import { EntrepriseService } from 'src/entreprise/entreprise.service';
import { Entreprise } from 'src/entreprise/entreprise.model';
import { Etudiant } from 'src/etudiant/etudiant.model';
export declare class AuthService {
    private etudiantService;
    private entrepriseService;
    private jwtService;
    constructor(etudiantService: EtudiantService, entrepriseService: EntrepriseService, jwtService: JwtService);
    signIn(username: any, pass: any): Promise<{
        access_token: string;
    }>;
    validateUser(id: string): Promise<Etudiant | Entreprise | null>;
    validateUserByCredentials(email: string, password: string): Promise<Etudiant | Entreprise | null>;
}
