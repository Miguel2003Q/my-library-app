import { Transaccion } from "./Transaccion";

export class Libro {
        isbn: string;
        titulo: string;
        imagen: string;
        precioCompra: number;
        precioVenta: number;
        cantidadActual: number;
        listaTransacciones: Transaccion[];
    
        constructor(isbn: string, titulo: string, imagen: string, precioCompra: number, precioVenta: number, cantidadActual: number, listaTransacciones: Transaccion[]) {
            this.isbn = isbn;
            this.titulo = titulo;
            this.imagen = imagen;
            this.precioCompra = precioCompra;
            this.precioVenta = precioVenta;
            this.cantidadActual = cantidadActual;
            this.listaTransacciones = listaTransacciones;
        }
    
        agregarTransaccion(transaccion: Transaccion): void {
            this.listaTransacciones.push(transaccion);
        }
    }