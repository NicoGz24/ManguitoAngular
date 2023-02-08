import { Emprendimiento } from "./Emprendimiento";

export class Usuario{
    id:number;
    nombre:String;
    email:String;
    esAdmin: boolean = false;
    password:String;
    emprendimiento:Emprendimiento;
    constructor(){}

}