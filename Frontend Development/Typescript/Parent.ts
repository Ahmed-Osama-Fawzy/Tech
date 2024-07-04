export class Father {
    FatherName : string
    static ChildernNumber : number = 0
    constructor(s:string){
        this.FatherName = s
    }
    GetType() : string{
        return "Father, Male"
    }
}

export class Mother {
    MotherName : string
    constructor(s:string){
        this.MotherName = s
    }
}