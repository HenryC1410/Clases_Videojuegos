import { Item } from "./Item";

export class Personaje{

  Nombre:string;
  Ataque:number;
  Salud:number = 100;
  Inventario: Item [] = [];

  constructor(Nombre:string, Ataque:number) {

    this.Nombre = Nombre;
    this.Ataque = Ataque;
    
  }

  Atacar() : number{
    return this.Ataque;
  }

  Recibir_Daño(Daño:number): void{

    this.Salud -= Daño;
    if(this.Salud<0){
      this.Salud =0;
    }
  }

  Usar_Item(Item):string{
    return Item.Usar();
  }

  Mostrar_Estado():string{
    return `${this.Nombre} - Salud: ${this.Salud}, Inventario: ${this.Inventario.length} items`;
  }

}