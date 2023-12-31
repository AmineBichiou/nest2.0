/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Entreprise } from './entreprise.model';
import { User } from 'src/user/user.model';
export declare class EntrepriseService {
    private readonly entrepriseModel;
    constructor(entrepriseModel: Model<Entreprise>);
    insertEntreprise(user: User, localisation: string, secteur: string): Promise<import("mongoose").Document<unknown, {}, Entreprise> & Entreprise & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getEntreprises(): Promise<{
        id: any;
        user: {
            id: string;
            nom: string;
            email: string;
            password: string;
        };
        localisation: string;
        secteur: string;
    }[]>;
    getSingleEntreprise(Id: string): Promise<{
        id: string;
        localisation: string;
        secteur: string;
    }>;
    findOne(username: string): Promise<Entreprise | undefined>;
    updateEntreprise(Id: string, localisation: string, secteur: string): Promise<void>;
    findEntreprise(Id: string): Promise<Entreprise>;
    deleteEntreprise(Id: string): Promise<void>;
}
