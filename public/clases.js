class Usuario{
    constructor(pcedula, pcontrasena, pcorreo, pfecha, pnombreCompleto, ptelefono){
        this.cedula = pcedula;
        this.contrasena = pcontrasena;
        this.correo = pcorreo;
        this.fecha = pfecha;
        this.nombreCompleto = pnombreCompleto;
        this.telefono = ptelefono;
    }
    getId(){
        return this.correo
    }
}