
import { Injectable } from "@angular/core";
import { InternModel } from "../Models/Intern.Model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class InternRegisterService{
    constructor(private httpClient:HttpClient){

    }
    createIntern(intern:InternModel){
        return this.httpClient.post("http://localhost:5058/api/User/Register",intern);
    }
}