export class Transaccion {

    tipoTransaccion: string;
    fechaRealizacion: Date;
    cantidadEjemplares: number;

    constructor(tipoTransaccion: string, fechaRealizacion: Date, cantidadEjemplares: number) {
        this.tipoTransaccion = tipoTransaccion;
        this.fechaRealizacion = fechaRealizacion;
        this.cantidadEjemplares = cantidadEjemplares;
    }
}