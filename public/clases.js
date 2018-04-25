class Usuario{
    constructor(pcedula, pcontrasena, pcorreo, pfecha, pnombreCompleto, ptelefono, padmin){
        this.cedula = pcedula;
        this.contrasena = pcontrasena;
        this.correo = pcorreo;
        this.fecha = pfecha;
        this.nombreCompleto = pnombreCompleto;
        this.telefono = ptelefono;
        this.admin = padmin;
    }
    getId(){
        return this.correo
    }
}

class Hotel{
    constructor(pcanton, platitud, plongitud, pcorreoAtencion, pcorreoReservaciones, pdireccion, pdistrito, pfoto, pnombre, pprovincia, ptelefonoAtencion, ptelefonoReservaciones, pcodigo){
        this.canton = pcanton;
        this.latitud = platitud;
        this.longitud = plongitud;
        this.correoAtencion = pcorreoAtencion;
        this.correoReservaciones = pcorreoReservaciones;
        this.direccion = pdireccion;
        this.distrito = pdistrito;
        this.foto = pfoto;
        this.nombre = pnombre;
        this.provincia = pprovincia;
        this.telefonoAtencion = ptelefonoAtencion;
        this.telefonoReservaciones = ptelefonoReservaciones;
        this.codigo = pcodigo;
        this.calificaciones = [];
    }
    getId(){
        return this.codigo
    }
    setCalificacion(pIdCalificaion){
        this.calificaciones.push(pIdCalificaion);
    }
}

class Calificacion{
    constructor(pcodigo, pcodigoHotel, pcomida, patencion, phabitaciones, pinfraestructura, plimpieza, pgeneral){
        this.codigo = pcodigo;
        this.codigoHotel = pcodigoHotel;
        this.comida = pcomida;
        this.atencion = patencion;
        this.habitaciones = phabitaciones;
        this.infraestructura = pinfraestructura;
        this.limpieza = plimpieza;
        this.general = pgeneral;
    }

    getId(){
        return this.codigo;
    }
    getIdHotel(){
        return this.codigoHotel;
    }
}