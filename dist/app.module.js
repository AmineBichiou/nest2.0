"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const student_module_1 = require("./student/student.module");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./user/user.module");
const etudiant_module_1 = require("./etudiant/etudiant.module");
const entreprise_module_1 = require("./entreprise/entreprise.module");
const offre_stage_module_1 = require("./offre-stage/offre-stage.module");
const auth_module_1 = require("./auth/auth.module");
const cors = require("cors");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(cors({ origin: '*' })).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot("mongodb+srv://aminebichiou2:7Uhs80FIwBAhC690@amine.qukftes.mongodb.net/nextjsapi"),
            student_module_1.StudentModule,
            etudiant_module_1.EtudiantModule,
            entreprise_module_1.EntrepriseModule,
            user_module_1.UserModule,
            offre_stage_module_1.OffreStageModule,
            auth_module_1.AuthModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map