export class Enemigo{
    Tipo_Enemigo: string;
    Salud_Enemigo: number;
    Daño_Enemigo: number;
    Nivel:number;

    constructor(Tipo_Enemigo:string, Salud_Enemigo:number,
        Daño_Enemigo:number, Nivel:number){

            this.Tipo_Enemigo = Tipo_Enemigo;
            this.Salud_Enemigo = Salud_Enemigo;
            this.Daño_Enemigo = Daño_Enemigo;
            this.Nivel = Nivel;
    }

    Atacar(): number{
        return this.Daño_Enemigo;
    }

    recibir_Daño(Daño_Enemigo: number){

        this.Salud_Enemigo -= Daño_Enemigo;
        if(this.Salud_Enemigo < 0){ 
            this.Salud_Enemigo = 0;
        }
    }

    Derrotado(): boolean{
        return this.Salud_Enemigo <=0;
    }


}