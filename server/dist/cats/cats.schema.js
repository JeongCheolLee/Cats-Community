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
exports.CatSchema = exports.Cat = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const options = {
    timestamps: true,
};
let Cat = class Cat extends mongoose_2.Document {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'id@domain.com',
        description: 'email',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Cat.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'darkblue',
        description: 'catName',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Cat.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'abcd1234',
        description: 'password',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Cat.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'dwda/dawf/awdwfq.img',
        description: 'imgUrl',
        required: true,
    }),
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Cat.prototype, "imgUrl", void 0);
Cat = __decorate([
    (0, mongoose_1.Schema)(options)
], Cat);
exports.Cat = Cat;
exports.CatSchema = mongoose_1.SchemaFactory.createForClass(Cat);
exports.CatSchema.virtual('readOnlyData').get(function () {
    return {
        id: this.id,
        email: this.email,
        name: this.name,
    };
});
//# sourceMappingURL=cats.schema.js.map