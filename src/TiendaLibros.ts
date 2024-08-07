import { Libro } from "./Libro";
import { Transaccion } from "./Transaccion";

export class TiendaLibros {

    catalogoLibros: Array<Libro>;
    listaTransacciones: Transaccion[];
    dinero: number = 1000000;

    constructor(catalogoLibros: Libro[], listaTranacciones: Transaccion[]) {
        this.catalogoLibros = catalogoLibros;
        this.listaTransacciones = listaTranacciones;
    }

    abastecerLibro(libro: Libro): void {
        this.catalogoLibros.push(libro)
        const transaccion = new Transaccion("abastecimiento",new Date(),1)
        this.listaTransacciones.push(transaccion)
        libro.agregarTransaccion(transaccion)
    }

    venderLibro(libro: Libro): Libro[] {
        let librosVendidos: Libro[] = [];
        if(this.catalogoLibros.length>=1){
            var i: number;
            for(i=0; i<this.catalogoLibros.length; i++) {
                if(this.catalogoLibros[i] === libro){
                    librosVendidos.push(this.catalogoLibros[i]);
                    this.dinero += this.catalogoLibros[i].precioVenta;
                    this.catalogoLibros.splice(i, 1);   
                }
            }
        }
        return librosVendidos;
    }

}

