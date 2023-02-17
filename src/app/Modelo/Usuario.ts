import { Emprendimiento } from "./Emprendimiento";

export class Usuario{
    id:number;
    nombre:string;
    email:string;
    esAdmin: boolean = false;
    password:string;
    emprendimiento:Emprendimiento;
    constructor(){}

}