/*
    # DataTypes = [ any 'default', string, boolean, number, function, object] 
        - if the variable assign for datatype from datatypes, canot declare it with another datatype
    
    # ReturnDataTypes [void 'Default', number, string, Boolean, object ]

    # Genatics
        - Using for Undefined Data Type

    #Enum
        - Using for Fixed Data as Week's Days
    
    #Interface
        - Using for create new fixed template for object
    
    #Export
        - Can Export Mulitpe of Methods
*/

// Variable Using only one Data type
let U1 = "Ali" // Use any as default
let A1 :any = "Any"
let S1 : string = "Ahmed"
let B1 : boolean = true
let I1 : number = 12
let F1 : Function = ()=> console.log("Hi")
let O1 : object = {
    1:'Zain',
}

// Variable Using Mulipte Data Types
let SN1 : string | number;
SN1 = "ahmed";
SN1 = 1232;
// -----------
let SF1 : string | Function;
SF1 = "Zain";
SF1 = ()=> console.log("Hi");

// Return Data Types 
let F2 : Function = () => console.log("Hi")
let F3 : Function = () : void => console.log("Hi")
let F4 : Function = () : string => {return "Hi"}
let F5 : Function = () : number => {return 1200}
let F6 : Function = () : boolean => {return true}

// Genatics
function Gen<T> (arg:T) :T{
     return arg
}
console.log(Gen<number>(12))
console.log(Gen<string>("Text"))
console.log(Gen<boolean>(true))

// Enum
enum Days {"Satuerday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thrsday"}
let Day1 : Days = Days.Satuerday
let Day2 : Days = Days.Sunday
let Day3 : Days = Days.Monday
console.log(Day1)
console.log(Day2)
console.log(Day3)

enum XDays {"Satuerday" = 'Sat', "Sunday" = 'Sun', "Monday" = 'Mon', "Tuesday" = 'Thu', "Wednesday" = 'Wed', "Thrsday" = 'Thr'}
let XDay1 : XDays = XDays.Satuerday
let XDay2 : XDays = XDays.Sunday
let XDay3 : XDays = XDays.Monday
console.log(XDay1)
console.log(XDay2)
console.log(XDay3)

// Interfaces
interface IPerson {
    FirstName:string,
    MiddleName:string,
    LastName:string,
    Age:number,
}
let P1 : IPerson = {
    FirstName:'Zain',
    MiddleName:'Ahmed',
    LastName:'Osama',
    Age:20
}
console.log(P1.FirstName)
console.log(P1.MiddleName)
console.log(P1.LastName)
console.log(P1.Age)

// Interface Export
/*
    file.ts content
    export interface ExInterface {
        importing : boolean
    }
*/

// Interface Import
import { ExInterface } from "./file"
let In1 : ExInterface = {
    importing : true
}

// Multipe Inhiret
interface Emploee extends ExInterface, IPerson {
    Salary : number
}

let E1 : Emploee = {
    FirstName : "Ahmed",
    MiddleName : "Osama",
    LastName : "Fawzy",
    Age : 21,
    importing : false,
    Salary : 20000
}
console.log(E1.Salary)

// Optional Paramters, Mustnot be the first Paramter
function Sum(x:number,y?:number,z?:number){
    return (x || 0) + (y || 0) + (z || 0)
}

console.log(Sum(12,10,13))
console.log(Sum(12,10))
console.log(Sum(12))


import { color } from "./colors"
// Classes
/*
    inhrit
        - Using extends
        - Use all methods of main class exclode static methods

    static
        - data type using for make variable related with the main class updated from any place
    
    override
        - use same function name with diffrent content at main class and child class
    
    implements interfce
        - Using implements
        - if you implements interface, you must use all interface methods in this class
*/
/*
    Class VS Interface
    Print
        - Class, Can be Printed
        - Interface, Canot be Printed
    
    Implement
        - Class, might implement all function
        - Interface, Use for Declareing only
    
*/

class Car {
    // Class Variables
    Color : color;
    MaxSpeed : number;
    Type : string;
    Mark : string;

    
    // Class Methods
    GetMaxSpeed() : number {
        return 200
    }
}

let Car1 : Car = new Car()
console.log(Car1.GetMaxSpeed())

import {Father,Mother} from './Parent'

interface Age {
    Age:number;
    GetAge():number;
}

/*
    Father Class Content 
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
*/
// Class Inhirit
class Children extends Father implements Age{
    Name : string;
    constructor(fn:string,ln:string){
        super(ln)
        this.Name = fn
        Father.ChildernNumber++ // Update father's static class
    }
    
    // Override
    GetType(): string {
        return 'Boy, Male'
    }

    // implements interfce
    Age: number
    GetAge(): number {
        return this.Age ? this.Age : 20
    }
}
let Father1 : Father = new Father("Osama")
console.log(Father1.GetType())

let Child1 : Children = new Children("Ahmed","Osama")
console.log(Child1.Name)
console.log(Child1.FatherName)
console.log(Child1.GetType())
console.log(Father.ChildernNumber)

let Child2 : Children = new Children("Zain","Ahmed")
console.log(Child2.FatherName)
console.log(Child2.Name)
console.log(Father.ChildernNumber)

// Type VS Interface
type TUser = {
    name : string
    age : number
}

interface IUser {
    name : string
    age : number
}

// Inherit Type VS Interface
type XTUser = IUser & {
    nationalty :string 
}

interface XIUser extends IUser {
    nationalty :string 
}
