"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const cats_controller_1 = require("./cats.controller");
const cats_service_1 = require("./cats.service");
const cats_schema_1 = require("./cats.schema");
const cats_repository_1 = require("./cats.repository");
let CatsModule = class CatsModule {
};
CatsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: cats_schema_1.Cat.name, schema: cats_schema_1.CatSchema }])],
        controllers: [cats_controller_1.CatsController],
        providers: [cats_service_1.CatsService, cats_repository_1.CatsRepository],
        exports: [cats_service_1.CatsService],
    })
], CatsModule);
exports.CatsModule = CatsModule;
//# sourceMappingURL=cats.module.js.map