import { TiendaLibros } from "./TiendaLibros";
import { Libro } from "./Libro";
import { Transaccion } from "./Transaccion";

const trans1: Transaccion = {tipoTransaccion: "si", fechaRealizacion: new Date(), cantidadEjemplares: 2};
let transArray: Transaccion[] = [];
transArray.push(trans1);


const libro1: Libro = {
    isbn: "434",
    titulo: "hola",
    imagen: "imagen",
    precioCompra: 1000,
    precioVenta: 2000,
    cantidadActual: 3,
    listaTransacciones: transArray,

    agregarTransaccion: function(transaccion: Transaccion): void {
        this.listaTransacciones.push(transaccion);
    }
};

const catalogoLibrosVacio: Libro[] = [];
const listaTransaccionesVacia: Transaccion[] = [];


const tienda = new TiendaLibros(catalogoLibrosVacio, listaTransaccionesVacia);


tienda.abastecerLibro(libro1);

console.log(tienda);
console.log("------------------------------------------------------------");
//-----------------------------------------------------------------

tienda.venderLibro(libro1);
console.log(tienda);