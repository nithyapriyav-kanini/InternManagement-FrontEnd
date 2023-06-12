export class TicketModel{
    constructor(public id:number=0,
        public internId:number=0,
        public title:string="",
        public description:string="",
        public issuedate:Date=new Date(0)){
        
        }       
}
