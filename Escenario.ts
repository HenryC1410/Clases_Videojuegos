import { Enemigo } from "./Enemigo";
import { Item } from "./Item";

export class Escenario{
    Nombre_Escenario:string;
    Descripcion:string;
    Enemigo:Enemigo;
    Item:Item;

    constructor(Nombre_Escenario:string, Descripcion:string){

            this.Nombre_Escenario = Nombre_Escenario;
            this.Descripcion = Descripcion;
    }


    Explorar():string{
        return `Explorando el ${this.Nombre_Escenario}: ${this.Descripcion}`;
    }

    Generar_Enemigo(): Enemigo{
        return new Enemigo("Slime", 30, 5, 1);
    }

    Encontrar_Item(): Item{
        return new Item("Pocima de Energia", "Recarga", 50 );
    }
}