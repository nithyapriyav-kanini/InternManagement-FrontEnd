import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TicketModel } from "../Models/Ticket.Model";
import { Observable } from "rxjs";

@Injectable()
export class InternService{
        constructor(private httpClient:HttpClient) {
            
        }
        GetTicket(ticket:TicketModel):Observable<any>{
                var header=new HttpHeaders({
                    'Content-Type':'application/json',
                    'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
                });
                return this.httpClient.post<any>("http://localhost:5274/api/TicketAndSolution/GetOne",ticket,{headers:header})
            }
        RaiseTicket(ticket:TicketModel):Observable<any>{
                var header=new HttpHeaders({
                    'Content-Type':'application/json',
                    'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
                });
                return this.httpClient.post("http://localhost:5274/api/TicketAndSolution/Ticket",ticket,{headers:header})
            }
}