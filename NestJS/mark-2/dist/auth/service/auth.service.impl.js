"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceImpl = void 0;
const common_1 = require("@nestjs/common");
let AuthServiceImpl = class AuthServiceImpl {
    login() {
        return "I am logged in";
    }
    signup() {
        return "I am signed up";
    }
};
AuthServiceImpl = __decorate([
    (0, common_1.Injectable)({})
], AuthServiceImpl);
exports.AuthServiceImpl = AuthServiceImpl;
//# sourceMappingURL=auth.service.impl.js.map