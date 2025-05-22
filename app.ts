import { Personaje } from "./Personaje";
import { Escenario } from "./Escenario";
import { Tienda } from "./Tienda";
import { Mision } from "./Mision";
import { Item } from "./Item";

function main(): void {
    const heroe = new Personaje("Aragon", 15);
    const bosque = new Escenario("Bosque Místico", "Un lugar lleno de criaturas y secretos.");
    const tienda = new Tienda("El Bazar del Aventurero");

    console.log(heroe.Mostrar_Estado());
    console.log(bosque.Explorar());

    const enemigo = bosque.Generar_Enemigo();
    console.log(`¡Apareció un enemigo: ${enemigo.Tipo_Enemigo} con ${enemigo.Salud_Enemigo} de salud!`);

    enemigo.recibir_Daño(heroe.Atacar());
    console.log(`El héroe atacó al enemigo. Salud restante del enemigo: ${enemigo.Salud_Enemigo}`);

    const itemEncontrado = bosque.Encontrar_Item();
    console.log(`Item encontrado: ${itemEncontrado.mostrar_info()}`);

    heroe.Inventario.push(itemEncontrado);
    console.log(heroe.Usar_Item(itemEncontrado));

    const mision = new Mision("Salvar el bosque", "Derrotar a los enemigos del bosque.", "Derrotar a los Slime del Bosque",itemEncontrado);
    console.log(mision.Info());

    mision.Marcar_Estado();
    const recompensa = mision.Recompensa_Mision();
    if (recompensa) heroe.Inventario.push(recompensa);

    console.log("Inventario del héroe tras la misión:");
    heroe.Inventario.forEach(i => console.log(i.mostrar_info()));
}

main();