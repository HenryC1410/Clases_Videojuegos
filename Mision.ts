import { Item } from "./Item";

export class Mision{
    Titulo:string;
    Descripcion_Mision: string;
    Objectivo_Mision: string;
    Recompesa: Item;
    Estado_Mision: string = "Pendiente";

    constructor(Titulo:string, Descripcion_Mision: string, 
        Objectivo_Mision:string, Recompesa:Item){

            this.Titulo = Titulo;
            this.Descripcion_Mision = Descripcion_Mision;
            this.Objectivo_Mision = Objectivo_Mision;
            
    }

    Info():string{
        return `Misión: ${this.Titulo}. Estado de la Misión: ${this.Estado_Mision}. Objectivo: ${this.Objectivo_Mision}`;
    }

    Marcar_Estado():void{
        this.Estado_Mision = "Completado";
    }

    Recompensa_Mision():Item|null{
        if(this.Estado_Mision === "Completado"){
            return this.Recompesa;
        }
        return null;
    }
}