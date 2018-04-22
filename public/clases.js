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