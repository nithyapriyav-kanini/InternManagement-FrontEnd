import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoggedInUserModel } from "../Models/LoggedInUser.Model";
import { LogModel } from "../Models/Log.Model";
import { Observable } from "rxjs";

@Injectable()
export class LoginService{
    constructor(private httpclient:HttpClient) {
        
    }
    createLogin(login:LoggedInUserModel):Observable<any>{
            return this.httpclient.post("http://localhost:5058/api/User/login",login);
    }
    LogInTime(log:LogModel){
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
        return this.httpclient.post("http://localhost:5274/api/Log/InTime",log,{headers:header})
    }
    LogOutTime(log:LogModel){
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
        return this.httpclient.post("http://localhost:5274/api/Log/OutTime",log,{headers:header})
    }
    ChangePassword(pass:LoggedInUserModel){
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
        return this.httpclient.put("http://localhost:5058/api/User/Password",pass,{headers:header})
    }
}