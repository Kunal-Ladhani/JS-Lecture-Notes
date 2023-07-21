import { Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable({})
export class AuthServiceImpl implements AuthService {

    login(): string {
        return "I am logged in";
    }

    signup(): string {
        return "I am signed up";
    }

}