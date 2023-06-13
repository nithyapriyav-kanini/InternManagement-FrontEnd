import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SolutionModel } from "../Models/Solution.Model";
import { Observable } from "rxjs";
import { UserModel } from "../Models/User.Model";

@Injectable()
export class AdminService{
        constructor(private httpClient:HttpClient) {
            
        }
        RaiseTicket(solution:SolutionModel):Observable<any>{
                var header=new HttpHeaders({
                    'Content-Type':'application/json',
                    'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
                });
                return this.httpClient.post("http://localhost:5274/api/TicketAndSolution/Solution",solution,{headers:header})
            }
        getAllUsers():Observable<any>{
                var header=new HttpHeaders({
                    'Content-Type':'application/json',
                    'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
                });
                return this.httpClient.get("http://localhost:5058/api/User",{headers:header})
            }
        getAllTickets():Observable<any>{
                var header=new HttpHeaders({
                    'Content-Type':'application/json',
                    'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
                });
                return this.httpClient.get("http://localhost:5274/api/TicketAndSolution/All",{headers:header})
            }
        approveIntern(user:UserModel):Observable<any>{
                var header=new HttpHeaders({
                    'Content-Type':'application/json',
                    'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
                });
                return this.httpClient.put("http://localhost:5058/api/User/Status",user,{headers:header});
        }
        getAllLogs():Observable<any>{
                var header=new HttpHeaders({
                    'Content-Type':'application/json',
                    'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
                });
                return this.httpClient.get("http://localhost:5274/api/Log/All",{headers:header})
        }
}
