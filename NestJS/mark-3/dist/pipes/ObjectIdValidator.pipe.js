"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectIdValidator = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let ObjectIdValidator = class ObjectIdValidator {
    transform(value, metadata) {
        console.log(`the object id value is ---> ${value}`);
        console.log(`metadata is ===> ${JSON.stringify(metadata)}`);
        console.log(`VALIDATION STARTS...`);
        if (!mongoose_1.Types.ObjectId.isValid(value)) {
            throw new common_1.HttpException("Pass valid mongodb objectId", common_1.HttpStatus.BAD_REQUEST);
        }
        console.log(`VALIDATION ENDS...`);
        return value;
    }
};
ObjectIdValidator = __decorate([
    (0, common_1.Injectable)()
], ObjectIdValidator);
exports.ObjectIdValidator = ObjectIdValidator;
//# sourceMappingURL=ObjectIdValidator.pipe.js.map