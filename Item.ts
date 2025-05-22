export class Item{
  Nombre_Item:string;
  Tipo:string;
  Valor:number;

  constructor(Nombre_Item:string, Tipo:string, Valor:number){
    this.Nombre_Item = Nombre_Item;
    this.Tipo = Tipo;
    this.Valor = Valor;
  }

  Usar():string{
    return `${this.Nombre_Item} ha sido usado exitosamente`;    
  }

  mostrar_info():string{
    return `Item: ${this.Nombre_Item}, Tipo: ${this.Tipo}, Precio: ${this.Valor}`;
  }
}