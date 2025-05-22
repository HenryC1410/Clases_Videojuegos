import { Item } from "./Item";

export class Tienda{
    Inventario: Item[] = [];
    Moneda: number = 100;
    Moneda_Disponible: number;
    Nombre:string;

    constructor(Nombre:string){
        this.Nombre = Nombre;
        
    }

    Mostrar_Producto(): string{
       let resultado = "";
       for(let item of this.Inventario){
        resultado += item.mostrar_info() + "\n";
       }
       return resultado;
    }

    comprar_item(item: Item): boolean {
        if (this.Moneda_Disponible >= item.Valor) {
            this.Inventario.push(item);
            this.Moneda_Disponible -= item.Valor;
            return true;
        }
        return false;
    }

    vender_item(item: Item): boolean {
        let encontrado = false;
        for (let i = 0; i < this.Inventario.length; i++) {
            if (this.Inventario[i] === item) {
                this.Inventario.splice(i, 1);
                this.Moneda_Disponible += item.Valor;
                encontrado = true;
                break;
            }
        }
        return encontrado;
    }

    actualizar_inventario(nuevoItem: Item): void {
        this.Inventario.push(nuevoItem);
    }

}