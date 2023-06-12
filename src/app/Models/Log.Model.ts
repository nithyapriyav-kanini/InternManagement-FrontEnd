export class LogModel{
    constructor(public id:number=0,
        public userId:number=0,
        public logInTime:Date=new Date(0),
        public logOutTime:Date=new Date(0)) {
        
    }
}
