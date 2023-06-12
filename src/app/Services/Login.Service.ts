import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoggedInUserModel } from "../Models/LoggedInUser.Model";

@Injectable()
export class LoginService{
    constructor(private httpclient:HttpClient) {
        
    }
    createLogin(login:LoggedInUserModel){
            return this.httpclient.post("http://localhost:5058/api/User/login",login);
    }
}