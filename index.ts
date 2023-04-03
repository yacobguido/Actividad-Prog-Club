import GestorClub from "./GestorClub";
import { Player } from "./Player";

let imprimirSocios = new GestorClub()
imprimirSocios.agregarSocio()
imprimirSocios.agregarSocio()
imprimirSocios.agregarSocio()
imprimirSocios.agregarSocio()
imprimirSocios.agregarSocio()
imprimirSocios.agregarSocio()
imprimirSocios.agregarSocio()
imprimirSocios.agregarSocio()
imprimirSocios.agregarSocio()
imprimirSocios.agregarSocio()
console.log(imprimirSocios.data());
imprimirSocios.buscarPorDeporte(2);
imprimirSocios.buscarPorNombre("Guido")
imprimirSocios.buscarPorApellido('Yacob')
imprimirSocios.buscarPorDNI(43247700);

    

