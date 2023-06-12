import { TicketModel } from "./Ticket.Model"

export class SolutionModel{
    constructor(public id:number=0,
        public ticketId:number=0,
        public adminId:number=0,
        public solutions:string="",
        public issueDate:Date=new Date(0),
        public ticket:TicketModel=new TicketModel()) {
        
    }
}
